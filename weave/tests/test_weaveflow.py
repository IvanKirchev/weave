import pytest
import weave
import typing
import numpy as np

from .. import ref_base


@pytest.mark.skip("failing in ci")
def test_digestrefs(client):
    ds = weave.WeaveList(
        [
            {
                "id": "0",
                "val": 100,
            },
            {
                "id": "0",
                "val": 101,
            },
        ]
    )

    ds0_ref = weave.publish(ds, "digestrefs")

    ds0 = weave.ref(str(ds0_ref)).get()

    @weave.op()
    def add5_to_row(row: typing.Any) -> int:
        return row["val"] + 5

    ds0_row0 = ds0[0]

    ds0_row0_ref = ref_base.get_ref(ds0_row0)
    assert ds0_row0_ref != None

    x = add5_to_row(ds0_row0)

    calls = ds0_row0_ref.input_to()
    assert len(calls) == 1

    ds = ds + [{"id": 2, "val": -10}]
    ds1_ref = weave.publish(ds, "digestrefs")

    ds1 = weave.ref(str(ds1_ref)).get()
    ds1_row0 = ds1[0]
    ds1_row0_ref = ref_base.get_ref(ds1_row0)

    assert ds1_row0_ref is not None

    assert ds0_row0_ref.digest == ds1_row0_ref.digest

    assert len(ds1_row0_ref.input_to()) == 0
    assert len(ds1_row0_ref.value_input_to()) == 1


@pytest.mark.skip()
def test_output_of(client):
    @weave.op()
    def add_5(v: int) -> int:
        return v + 5

    result = add_5(10)

    run = weave.output_of(result)
    assert run is not None
    assert "add_5" in run.op_name
    assert run.inputs["v"] == 10

    result2 = add_5(result)
    run = weave.output_of(result2)
    assert run is not None
    assert "add_5" in run.op_name

    # v_input is a ref here and we have to deref it
    # TODO: this is not consistent. Shouldn't it already be
    # dereffed recursively when we get it from weave.output_of() ?
    v_input = run.inputs["v"].get()
    assert v_input == 15

    run = weave.output_of(v_input)
    assert run is not None
    assert "add_5" in run.op_name
    assert run.inputs["v"] == 10


def test_weaveflow_op_wandb(client):
    @weave.op()
    def custom_adder(a: int, b: int) -> int:
        return a + b

    res = custom_adder(1, 2)
    assert res == 3


def test_weaveflow_op_wandb_return_list(client):
    @weave.op()
    def custom_adder(a: int, b: int) -> list[int]:
        return [a + b]

    res = custom_adder(1, 2)
    assert res == [3]


def test_weaveflow_object_wandb_with_opmethod(client):
    class ATestObj(weave.Object):
        a: int

        @weave.op()
        def a_test_add(self, b: int) -> int:
            return self.a + b

    x = ATestObj(a=1)
    res = x.a_test_add(2)
    assert res == 3


def test_weaveflow_nested_op(client):
    @weave.op()
    def adder(a: int, b: int) -> int:
        return a + b

    @weave.op()
    def double_adder(a: int, b: int) -> int:
        return adder(a, a) + adder(b, b)

    res = double_adder(1, 2)
    assert res == 6


def test_async_ops(client):
    @weave.op()
    async def async_op_add1(v: int) -> int:
        return v + 1

    @weave.op()
    async def async_op_add5(v: int) -> int:
        for i in range(5):
            v = await async_op_add1(v)
        return v

    called = async_op_add5(10)
    import asyncio

    result = asyncio.run(called)
    assert result == 15

    assert len(list(async_op_add5.calls())) == 1
    assert len(list(async_op_add1.calls())) == 5


def test_weaveflow_publish_numpy(client):
    v = {"a": np.array([[1, 2, 3], [4, 5, 6]])}
    ref = weave.publish(v, "dict-with-numpy")


def test_weaveflow_unknown_type_op_param_undeclared(eager_mode):
    class SomeUnknownObject:
        x: int

        def __init__(self, x: int):
            self.x = x

    @weave.op()
    def op_with_unknown_param(v) -> int:
        return v.x + 2

    assert op_with_unknown_param(SomeUnknownObject(x=10)) == 12


def test_weaveflow_unknown_type_op_param_declared(eager_mode):
    class SomeUnknownObject:
        x: int

        def __init__(self, x: int):
            self.x = x

    @weave.op()
    def op_with_unknown_param(v: SomeUnknownObject) -> int:
        return v.x + 2

    assert op_with_unknown_param(SomeUnknownObject(x=10)) == 12


def test_weaveflow_unknown_type_op_param_closure(eager_mode):
    class SomeUnknownObject:
        x: int

        def __init__(self, x: int):
            self.x = x

    v = SomeUnknownObject(x=10)

    @weave.op()
    def op_with_unknown_param() -> int:
        return v.x + 2

    assert op_with_unknown_param() == 12


@pytest.mark.skip("artifact file download doesn't work here?")
def test_saveloop_idempotent_with_refs(user_by_api_key_in_env):
    with weave.wandb_client("weaveflow_example-idempotent_with_refs"):

        @weave.type()
        class A:
            b: int

            @weave.op()
            def call(self, v):
                return self.b + v

        @weave.type()
        class C:
            a: A
            c: int

            @weave.op()
            def call(self, v):
                return self.a.call(v) * self.c

        a = A(5)
        c = C(a, 10)
        assert c.call(40) == 450

        c2_0_ref = weave.ref("C:latest")
        c2_0 = c2_0_ref.get()
        assert c2_0.call(50) == 550

        c2_1_ref = weave.ref("C:latest")
        c2_1 = c2_1_ref.get()
        assert c2_1.call(60) == 650
        assert c2_0_ref.version == c2_1_ref.version

        c2_2_ref = weave.ref("C:latest")
        c2_2 = c2_2_ref.get()
        assert c2_2.call(60) == 650
        assert c2_1_ref.version == c2_2_ref.version


def test_subobj_ref_passing(client):
    dataset = client.save(
        weave.Dataset(rows=[{"x": 1, "y": 3}, {"x": 2, "y": 16}]), "my-dataset"
    )

    @weave.op()
    def get_item(row):
        return {"in": row["x"], "out": row["x"]}

    res = get_item(dataset.rows[0])
    assert res == {"in": 1, "out": 1}


def test_op_method_name(client):
    class MyModel(weave.Model):
        a: int

        @weave.op()
        def predict(self, x: int) -> int:
            return x + 1

    model = MyModel(a=1)

    assert model.predict.name == "MyModel.predict"
    assert MyModel.predict.name == "MyModel.predict"
