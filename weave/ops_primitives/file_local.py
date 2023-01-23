import os
import typing

from ..api import op
from .. import weave_types as types
from .. import file_local


@op(name="LocalFile-directUrl")
def direct_url(file: file_local.LocalFile) -> str:
    local_path = os.path.abspath(file.get_local_path())
    return "/__weave/file/%s" % local_path


@op(name="LocalFile-direct_url_as_of")
def direct_url_as_of(file: file_local.LocalFile, asOf: int) -> str:
    local_path = os.path.abspath(file.get_local_path())
    return "/__weave/file/%s" % local_path


@op(name="localpathReturnType")
def local_path_refine_type(path: str) -> types.Type:
    return file_local.get_path_type(path)


@op(
    name="localpath",
    pure=False,
    refine_output_type=local_path_refine_type,
)
def local_path(
    path: str,
) -> typing.Optional[typing.Union[file_local.LocalDir, file_local.LocalFile]]:
    return file_local.get_path_info(path)
