import sqlparse

from weave.trace_server import trace_server_interface as tsi
from weave.trace_server.calls_query_builder import CallsQuery, HardCodedFilter
from weave.trace_server.interface import query as tsi_query
from weave.trace_server.orm import ParamBuilder


def test_query_baseline() -> None:
    cq = CallsQuery(project_id="project")
    cq.add_field("id")
    assert_sql(
        cq,
        """
        SELECT calls_merged.id AS id
        FROM calls_merged
        WHERE calls_merged.project_id = {pb_0:String}
        GROUP BY (calls_merged.project_id, calls_merged.id)
        HAVING (
            ((
                any(calls_merged.deleted_at) IS NULL
            ))
            AND
            ((
               NOT ((
                  any(calls_merged.started_at) IS NULL
               ))
            ))
        )
        """,
        {"pb_0": "project"},
    )


def test_query_light_column() -> None:
    cq = CallsQuery(project_id="project")
    cq.add_field("id")
    cq.add_field("started_at")
    assert_sql(
        cq,
        """
        SELECT
            calls_merged.id AS id,
            any(calls_merged.started_at) AS started_at
        FROM calls_merged
        WHERE calls_merged.project_id = {pb_0:String}
        GROUP BY (calls_merged.project_id, calls_merged.id)
        HAVING (
            ((
                any(calls_merged.deleted_at) IS NULL
            ))
            AND
            ((
               NOT ((
                  any(calls_merged.started_at) IS NULL
               ))
            ))
        )
        """,
        {"pb_0": "project"},
    )


def test_query_heavy_column() -> None:
    cq = CallsQuery(project_id="project")
    cq.add_field("id")
    cq.add_field("inputs")
    assert_sql(
        cq,
        """
        SELECT
            calls_merged.id AS id,
            any(calls_merged.inputs_dump) AS inputs_dump
        FROM calls_merged
        WHERE calls_merged.project_id = {pb_0:String}
        GROUP BY (calls_merged.project_id, calls_merged.id)
        HAVING (
            ((
                any(calls_merged.deleted_at) IS NULL
            ))
            AND
            ((
               NOT ((
                  any(calls_merged.started_at) IS NULL
               ))
            ))
        )
        """,
        {"pb_0": "project"},
    )


def test_query_heavy_column_simple_filter() -> None:
    cq = CallsQuery(project_id="project")
    cq.add_field("id")
    cq.add_field("inputs")
    cq.set_hardcoded_filter(
        HardCodedFilter(
            filter=tsi.CallsFilter(
                op_names=["a", "b"],
            )
        )
    )
    assert_sql(
        cq,
        """
        WITH filtered_calls AS (
            SELECT
                calls_merged.id AS id
            FROM calls_merged
            WHERE calls_merged.project_id = {pb_1:String}
            GROUP BY (calls_merged.project_id, calls_merged.id)
            HAVING (
                ((any(calls_merged.deleted_at) IS NULL))
                AND ((NOT ((any(calls_merged.started_at) IS NULL))))
            AND
                (any(calls_merged.op_name) IN {pb_0:Array(String)}))
        )
        SELECT
            calls_merged.id AS id,
            any(calls_merged.inputs_dump) AS inputs_dump
        FROM calls_merged
        WHERE
            calls_merged.project_id = {pb_1:String}
        AND
            (calls_merged.id IN filtered_calls)
        GROUP BY (calls_merged.project_id, calls_merged.id)
        """,
        {"pb_0": ["a", "b"], "pb_1": "project"},
    )


def test_query_heavy_column_simple_filter_with_order() -> None:
    cq = CallsQuery(project_id="project")
    cq.add_field("id")
    cq.add_field("inputs")
    cq.add_order("started_at", "desc")
    cq.set_hardcoded_filter(
        HardCodedFilter(
            filter=tsi.CallsFilter(
                op_names=["a", "b"],
            )
        )
    )
    assert_sql(
        cq,
        """
        WITH filtered_calls AS (
            SELECT
                calls_merged.id AS id
            FROM calls_merged
            WHERE calls_merged.project_id = {pb_1:String}
            GROUP BY (calls_merged.project_id, calls_merged.id)
            HAVING (
                ((any(calls_merged.deleted_at) IS NULL))
                AND ((NOT ((any(calls_merged.started_at) IS NULL))))
            AND
                (any(calls_merged.op_name) IN {pb_0:Array(String)}))
        )
        SELECT
            calls_merged.id AS id,
            any(calls_merged.inputs_dump) AS inputs_dump
        FROM calls_merged
        WHERE
            calls_merged.project_id = {pb_1:String}
        AND
            (calls_merged.id IN filtered_calls)
        GROUP BY (calls_merged.project_id, calls_merged.id)
        ORDER BY any(calls_merged.started_at) DESC
        """,
        {"pb_0": ["a", "b"], "pb_1": "project"},
    )


def test_query_heavy_column_simple_filter_with_order_and_limit() -> None:
    cq = CallsQuery(project_id="project")
    cq.add_field("id")
    cq.add_field("inputs")
    cq.add_order("started_at", "desc")
    cq.set_limit(10)
    cq.set_hardcoded_filter(
        HardCodedFilter(
            filter=tsi.CallsFilter(
                op_names=["a", "b"],
            )
        )
    )
    assert_sql(
        cq,
        """
        WITH filtered_calls AS (
            SELECT
                calls_merged.id AS id
            FROM calls_merged
            WHERE calls_merged.project_id = {pb_1:String}
            GROUP BY (calls_merged.project_id, calls_merged.id)
            HAVING (
                ((any(calls_merged.deleted_at) IS NULL))
            AND
                ((NOT ((any(calls_merged.started_at) IS NULL))))
            AND
                (any(calls_merged.op_name) IN {pb_0:Array(String)})
            )
            ORDER BY any(calls_merged.started_at) DESC
            LIMIT 10
        )
        SELECT
            calls_merged.id AS id,
            any(calls_merged.inputs_dump) AS inputs_dump
        FROM calls_merged
        WHERE
            calls_merged.project_id = {pb_1:String}
        AND
            (calls_merged.id IN filtered_calls)
        GROUP BY (calls_merged.project_id, calls_merged.id)
        ORDER BY any(calls_merged.started_at) DESC
        """,
        {"pb_0": ["a", "b"], "pb_1": "project"},
    )


def test_query_heavy_column_simple_filter_with_order_and_limit_and_mixed_query_conditions() -> (
    None
):
    cq = CallsQuery(project_id="project")
    cq.add_field("id")
    cq.add_field("inputs")
    cq.add_order("started_at", "desc")
    cq.set_limit(10)
    cq.set_hardcoded_filter(
        HardCodedFilter(
            filter=tsi.CallsFilter(
                op_names=["a", "b"],
            )
        )
    )
    cq.add_condition(
        tsi_query.AndOperation.model_validate(
            {
                "$and": [
                    {
                        "$eq": [
                            {"$getField": "inputs.param.val"},
                            {"$literal": "hello"},
                        ]
                    },  # <-- heavy condition
                    {
                        "$eq": [{"$getField": "wb_user_id"}, {"$literal": "my_user_id"}]
                    },  # <-- light condition
                ]
            }
        )
    )
    assert_sql(
        cq,
        """
        WITH filtered_calls AS (
            SELECT
                calls_merged.id AS id
            FROM calls_merged
            WHERE calls_merged.project_id = {pb_2:String}
            GROUP BY (calls_merged.project_id, calls_merged.id)
            HAVING (
                ((any(calls_merged.wb_user_id) = {pb_0:String}))
            AND
                ((any(calls_merged.deleted_at) IS NULL))
            AND
                ((NOT ((any(calls_merged.started_at) IS NULL))))
            AND
                (any(calls_merged.op_name) IN {pb_1:Array(String)})
            )
        )
        SELECT
            calls_merged.id AS id,
            any(calls_merged.inputs_dump) AS inputs_dump
        FROM calls_merged
        WHERE
            calls_merged.project_id = {pb_2:String}
        AND
            (calls_merged.id IN filtered_calls)
        GROUP BY (calls_merged.project_id, calls_merged.id)
        HAVING (
            JSON_VALUE(any(calls_merged.inputs_dump), {pb_3:String}) = {pb_4:String}
        )
        ORDER BY any(calls_merged.started_at) DESC
        LIMIT 10
        """,
        {
            "pb_0": "my_user_id",
            "pb_1": ["a", "b"],
            "pb_2": "project",
            "pb_3": '$."param"."val"',
            "pb_4": "hello",
        },
    )


def assert_sql(cq: CallsQuery, exp_query, exp_params):
    pb = ParamBuilder("pb")
    query = cq.as_sql(pb)
    params = pb.get_params()

    assert exp_params == params

    exp_formatted = sqlparse.format(exp_query, reindent=True)
    found_formatted = sqlparse.format(query, reindent=True)

    assert exp_formatted == found_formatted


def test_query_light_column_with_costs() -> None:
    cq = CallsQuery(
        project_id="UHJvamVjdEludGVybmFsSWQ6Mzk1NDg2Mjc=", include_costs=True
    )
    cq.add_field("id")
    cq.add_field("started_at")
    cq.set_hardcoded_filter(
        HardCodedFilter(
            filter=tsi.CallsFilter(
                op_names=["a", "b"],
            )
        )
    )
    assert_sql(
        cq,
        """
        WITH
            filtered_calls AS (
                SELECT calls_merged.id AS id
                FROM calls_merged
                WHERE calls_merged.project_id = {pb_1:String}
                GROUP BY (calls_merged.project_id, calls_merged.id)
                HAVING (((any(calls_merged.deleted_at) IS NULL))
                AND ((NOT ((any(calls_merged.started_at) IS NULL))))
                AND (any(calls_merged.op_name) IN {pb_0:Array(String)}))),
            all_calls AS (
                SELECT
                    calls_merged.id AS id,
                    any(calls_merged.started_at) AS started_at
                FROM calls_merged
                WHERE calls_merged.project_id = {pb_1:String}
                    AND (calls_merged.id IN filtered_calls)
                GROUP BY (calls_merged.project_id, calls_merged.id)),
            -- From the all_calls we get the usage data for LLMs
            llm_usage AS (
                SELECT
                    *,
                    ifNull(JSONExtractRaw(summary_dump, 'usage'), '{}') AS usage_raw,
                    arrayJoin(
                        if(usage_raw != '',
                        JSONExtractKeysAndValuesRaw(usage_raw),
                        [('weave_dummy_llm_id', '{"requests": 0, "prompt_tokens": 0, "completion_tokens": 0, "total_tokens": 0}')])
                    ) AS kv,
                    kv.1 AS llm_id,
                    JSONExtractInt(kv.2, 'requests') AS requests,
                    if(JSONHas(kv.2, 'prompt_tokens'), JSONExtractInt(kv.2, 'prompt_tokens'), JSONExtractInt(kv.2, 'input_tokens')) AS prompt_tokens,
                    if(JSONHas(kv.2, 'completion_tokens'), JSONExtractInt(kv.2, 'completion_tokens'), JSONExtractInt(kv.2, 'output_tokens')) AS completion_tokens,
                    JSONExtractInt(kv.2, 'total_tokens') AS total_tokens
                FROM all_calls),
            -- based on the llm_ids in the usage data we get all the prices and rank them according to specificity and effective date
            ranked_prices AS (
                SELECT
                    *,
                    llm_token_prices.id,
                    llm_token_prices.pricing_level,
                    llm_token_prices.pricing_level_id,
                    llm_token_prices.provider_id,
                    llm_token_prices.llm_id,
                    llm_token_prices.effective_date,
                    llm_token_prices.prompt_token_cost,
                    llm_token_prices.completion_token_cost,
                    llm_token_prices.prompt_token_cost_unit,
                    llm_token_prices.completion_token_cost_unit,
                    llm_token_prices.created_by,
                    llm_token_prices.created_at,
                    ROW_NUMBER() OVER (
                        PARTITION BY llm_usage.id, llm_usage.llm_id
                        ORDER BY
                            CASE
                                -- Order by effective_date
                                WHEN llm_usage.started_at >= llm_token_prices.effective_date THEN 1
                                ELSE 2
                            END,
                            CASE
                                -- Order by pricing level then by effective_date
                                -- WHEN llm_token_prices.pricing_level = 'org' AND llm_token_prices.pricing_level_id = ORG_PARAM THEN 1
                                WHEN llm_token_prices.pricing_level = 'project' AND llm_token_prices.pricing_level_id = 'UHJvamVjdEludGVybmFsSWQ6Mzk1NDg2Mjc=' THEN 2
                                WHEN llm_token_prices.pricing_level = 'default' AND llm_token_prices.pricing_level_id = 'default' THEN 3
                                ELSE 4
                            END,
                            llm_token_prices.effective_date DESC
                    ) AS rank
                FROM llm_usage
                LEFT JOIN llm_token_prices ON (llm_usage.llm_id = llm_token_prices.llm_id)
                WHERE ((llm_token_prices.pricing_level_id = {pb_2:String})
                    OR (llm_token_prices.pricing_level_id = {pb_3:String})
                    OR (llm_token_prices.pricing_level_id = {pb_4:String})))
            -- Final Select, which just selects the correct fields, and adds a costs object
            SELECT
                id,
                started_at,
                if( any(llm_id) = 'weave_dummy_llm_id',
                any(summary_dump),
                concat(
                    left(any(summary_dump), length(any(summary_dump)) - 1),
                    ',"weave":{',
                        '"costs":',
                        concat(
                            '{',
                            arrayStringConcat(
                                groupUniqArray(
                                    concat(
                                        '"', toString(llm_id), '":{',
                                        '"prompt_tokens":', toString(prompt_tokens), ',',
                                        '"completion_tokens":', toString(completion_tokens), ',',
                                        '"requests":', toString(requests), ',',
                                        '"total_tokens":', toString(total_tokens), ',',
                                        '"prompt_token_cost":', toString(prompt_token_cost), ',',
                                        '"completion_token_cost":', toString(completion_token_cost), ',',
                                        '"prompt_tokens_total_cost":', toString(prompt_tokens * prompt_token_cost), ',',
                                        '"completion_tokens_total_cost":', toString(completion_tokens * completion_token_cost), ',',
                                        '"prompt_token_cost_unit":"', toString(prompt_token_cost_unit),  '",',
                                        '"completion_token_cost_unit":"', toString(completion_token_cost_unit),  '",',
                                        '"effective_date":"', toString(effective_date),  '",',
                                        '"provider_id":"', toString(provider_id),  '",',
                                        '"pricing_level":"', toString(pricing_level),  '",',
                                        '"pricing_level_id":"', toString(pricing_level_id),  '",',
                                        '"created_by":"', toString(created_by),  '",',
                                        '"created_at":"', toString(created_at),
                                    '"}'
                                    )
                                ), ','
                            ),
                            '} }'
                        ),
                    '}' )
                ) AS summary_dump
            FROM ranked_prices
            WHERE (rank = {pb_5:UInt64})
            GROUP BY id, started_at
        """,
        {
            "pb_0": ["a", "b"],
            "pb_1": "UHJvamVjdEludGVybmFsSWQ6Mzk1NDg2Mjc=",
            "pb_2": "UHJvamVjdEludGVybmFsSWQ6Mzk1NDg2Mjc=",
            "pb_3": "default",
            "pb_4": "",
            "pb_5": 1,
        },
    )


def test_query_with_simple_feedback_sort() -> None:
    cq = CallsQuery(project_id="project")
    cq.add_field("id")
    cq.add_order("feedback.[wandb.runnable.my_op].payload.output.expected", "desc")
    assert_sql(
        cq,
        """
        SELECT
            calls_merged.id AS id
        FROM
            calls_merged
        LEFT JOIN feedback ON
            (feedback.weave_ref = concat('weave-trace-internal:///',
            {pb_4:String},
            '/call/',
            calls_merged.id))
        WHERE
            calls_merged.project_id = {pb_4:String}
            AND calls_merged.project_id = {pb_4:String}
        GROUP BY
            (calls_merged.project_id,
            calls_merged.id)
        HAVING
            (((any(calls_merged.deleted_at) IS NULL))
                AND ((NOT ((any(calls_merged.started_at) IS NULL)))))
        ORDER BY
            (NOT (JSONType(anyIf(feedback.payload_dump,
            feedback.feedback_type = {pb_0:String}),
            {pb_1:String},
            {pb_2:String}) = 'Null'
                OR JSONType(anyIf(feedback.payload_dump,
                feedback.feedback_type = {pb_0:String}),
                {pb_1:String},
                {pb_2:String}) IS NULL)) desc,
            toFloat64OrNull(JSON_VALUE(anyIf(feedback.payload_dump,
            feedback.feedback_type = {pb_0:String}),
            {pb_3:String})) DESC,
            toString(JSON_VALUE(anyIf(feedback.payload_dump,
            feedback.feedback_type = {pb_0:String}),
            {pb_3:String})) DESC
        """,
        {
            "pb_0": "wandb.runnable.my_op",
            "pb_1": "output",
            "pb_2": "expected",
            "pb_3": '$."output"."expected"',
            "pb_4": "project",
        },
    )


def test_query_with_simple_feedback_sort_with_op_name() -> None:
    cq = CallsQuery(project_id="project")
    cq.add_field("id")
    cq.set_hardcoded_filter(
        HardCodedFilter(
            filter={"op_names": ["weave-trace-internal:///project/op/my_op:1234567890"]}
        )
    )
    cq.add_order("feedback.[wandb.runnable.my_op].payload.output.expected", "desc")
    assert_sql(
        cq,
        """
        WITH filtered_calls AS
        (
        SELECT
            calls_merged.id AS id
        FROM
            calls_merged
        WHERE
            calls_merged.project_id = {pb_1:String}
        GROUP BY
            (calls_merged.project_id,
            calls_merged.id)
        HAVING
            (((any(calls_merged.deleted_at) IS NULL))
                AND ((NOT ((any(calls_merged.started_at) IS NULL))))
                    AND (any(calls_merged.op_name) IN {pb_0:Array(String)})))
        SELECT
            calls_merged.id AS id
        FROM
            calls_merged
        LEFT JOIN feedback ON
            (feedback.weave_ref = concat('weave-trace-internal:///',
            {pb_1:String},
            '/call/',
            calls_merged.id))
        WHERE
            calls_merged.project_id = {pb_1:String}
            AND calls_merged.project_id = {pb_1:String}
            AND (calls_merged.id IN filtered_calls)
        GROUP BY
            (calls_merged.project_id,
            calls_merged.id)
        ORDER BY
            (NOT (JSONType(anyIf(feedback.payload_dump,
            feedback.feedback_type = {pb_2:String}),
            {pb_3:String},
            {pb_4:String}) = 'Null'
                OR JSONType(anyIf(feedback.payload_dump,
                feedback.feedback_type = {pb_2:String}),
                {pb_3:String},
                {pb_4:String}) IS NULL)) desc,
            toFloat64OrNull(JSON_VALUE(anyIf(feedback.payload_dump,
            feedback.feedback_type = {pb_2:String}),
            {pb_5:String})) DESC,
            toString(JSON_VALUE(anyIf(feedback.payload_dump,
            feedback.feedback_type = {pb_2:String}),
            {pb_5:String})) DESC
        """,
        {
            "pb_0": ["weave-trace-internal:///project/op/my_op:1234567890"],
            "pb_1": "project",
            "pb_2": "wandb.runnable.my_op",
            "pb_3": "output",
            "pb_4": "expected",
            "pb_5": '$."output"."expected"',
        },
    )


def test_query_with_simple_feedback_filter() -> None:
    cq = CallsQuery(project_id="project")
    cq.add_field("id")
    cq.add_condition(
        tsi_query.GtOperation.model_validate(
            {
                "$gt": [
                    {
                        "$getField": "feedback.[wandb.runnable.my_op].payload.output.expected"
                    },
                    {
                        "$getField": "feedback.[wandb.runnable.my_op].payload.output.found"
                    },
                ]
            }
        )
    )
    assert_sql(
        cq,
        """
        SELECT
            calls_merged.id AS id
        FROM
            calls_merged
        LEFT JOIN feedback ON
            (feedback.weave_ref = concat('weave-trace-internal:///',
            {pb_3:String},
            '/call/',
            calls_merged.id))
        WHERE
            calls_merged.project_id = {pb_3:String}
            AND calls_merged.project_id = {pb_3:String}
        GROUP BY
            (calls_merged.project_id,
            calls_merged.id)
        HAVING
            (((JSON_VALUE(anyIf(feedback.payload_dump,
            feedback.feedback_type = {pb_0:String}),
            {pb_1:String}) > JSON_VALUE(anyIf(feedback.payload_dump,
            feedback.feedback_type = {pb_0:String}),
            {pb_2:String})))
                AND ((any(calls_merged.deleted_at) IS NULL))
                    AND ((NOT ((any(calls_merged.started_at) IS NULL)))))
        """,
        {
            "pb_0": "wandb.runnable.my_op",
            "pb_1": '$."output"."expected"',
            "pb_2": '$."output"."found"',
            "pb_3": "project",
        },
    )


def test_query_with_simple_feedback_sort_and_filter() -> None:
    cq = CallsQuery(project_id="project")
    cq.add_field("id")
    cq.add_condition(
        tsi_query.EqOperation.model_validate(
            {
                "$eq": [
                    {
                        "$getField": "feedback.[wandb.runnable.my_op].payload.output.expected"
                    },
                    {"$literal": "a"},
                ]
            }
        )
    )
    cq.add_order("feedback.[wandb.runnable.my_op].payload.output.score", "desc")
    assert_sql(
        cq,
        """
        SELECT
            calls_merged.id AS id
        FROM
            calls_merged
        LEFT JOIN feedback ON
            (feedback.weave_ref = concat('weave-trace-internal:///',
            {pb_6:String},
            '/call/',
            calls_merged.id))
        WHERE
            calls_merged.project_id = {pb_6:String}
            AND calls_merged.project_id = {pb_6:String}
        GROUP BY
            (calls_merged.project_id,
            calls_merged.id)
        HAVING
            (((JSON_VALUE(anyIf(feedback.payload_dump,
            feedback.feedback_type = {pb_0:String}),
            {pb_1:String}) = {pb_2:String}))
                AND ((any(calls_merged.deleted_at) IS NULL))
                    AND ((NOT ((any(calls_merged.started_at) IS NULL)))))
        ORDER BY
            (NOT (JSONType(anyIf(feedback.payload_dump,
            feedback.feedback_type = {pb_0:String}),
            {pb_3:String},
            {pb_4:String}) = 'Null'
                OR JSONType(anyIf(feedback.payload_dump,
                feedback.feedback_type = {pb_0:String}),
                {pb_3:String},
                {pb_4:String}) IS NULL)) desc,
            toFloat64OrNull(JSON_VALUE(anyIf(feedback.payload_dump,
            feedback.feedback_type = {pb_0:String}),
            {pb_5:String})) DESC,
            toString(JSON_VALUE(anyIf(feedback.payload_dump,
            feedback.feedback_type = {pb_0:String}),
            {pb_5:String})) DESC
        """,
        {
            "pb_0": "wandb.runnable.my_op",
            "pb_1": '$."output"."expected"',
            "pb_2": "a",
            "pb_3": "output",
            "pb_4": "score",
            "pb_5": '$."output"."score"',
            "pb_6": "project",
        },
    )


def test_calls_query_multiple_select_columns() -> None:
    cq = CallsQuery(project_id="project")
    cq.add_field("id")
    cq.add_field("inputs")
    cq.add_field("inputs")
    cq.add_field("inputs")
    cq.add_field("output")
    cq.add_field("output")
    cq.add_field("output")
    cq.add_field("output")
    cq.add_field("output")
    cq.add_field("output")
    cq.add_field("output")
    assert_sql(
        cq,
        """
        SELECT
            calls_merged.id AS id,
            any(calls_merged.inputs_dump) AS inputs_dump,
            any(calls_merged.output_dump) AS output_dump
        FROM calls_merged
        WHERE calls_merged.project_id = {pb_0:String}
        GROUP BY (calls_merged.project_id, calls_merged.id)
        HAVING (
            ((
                any(calls_merged.deleted_at) IS NULL
            ))
            AND
            ((
               NOT ((
                  any(calls_merged.started_at) IS NULL
               ))
            ))
        )
        """,
        {"pb_0": "project"},
    )
