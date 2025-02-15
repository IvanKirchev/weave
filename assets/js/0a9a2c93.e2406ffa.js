"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1762],{30450:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>o,frontMatter:()=>d,metadata:()=>n,toc:()=>i});var t=s(85893),c=s(11151);const d={sidebar_label:"remote_http_trace_server"},a="weave.trace_server_bindings.remote_http_trace_server",n={id:"reference/python-sdk/weave/trace_server_bindings/weave.trace_server_bindings.remote_http_trace_server",title:"weave.trace_server_bindings.remote_http_trace_server",description:"---",source:"@site/docs/reference/python-sdk/weave/trace_server_bindings/weave.trace_server_bindings.remote_http_trace_server.md",sourceDirName:"reference/python-sdk/weave/trace_server_bindings",slug:"/reference/python-sdk/weave/trace_server_bindings/weave.trace_server_bindings.remote_http_trace_server",permalink:"/reference/python-sdk/weave/trace_server_bindings/weave.trace_server_bindings.remote_http_trace_server",draft:!1,unlisted:!1,editUrl:"https://github.com/wandb/weave/blob/master/docs/docs/reference/python-sdk/weave/trace_server_bindings/weave.trace_server_bindings.remote_http_trace_server.md",tags:[],version:"current",lastUpdatedAt:1739575706e3,frontMatter:{sidebar_label:"remote_http_trace_server"},sidebar:"pythonSdkSidebar",previous:{title:"trace_server_interface",permalink:"/reference/python-sdk/weave/trace_server/weave.trace_server.trace_server_interface"}},l={},i=[{value:"Classes",id:"classes",level:2},{value:"<kbd>class</kbd> <code>RemoteHTTPTraceServer</code>",id:"class-remotehttptraceserver",level:2},{value:"<kbd>method</kbd> <code>__init__</code>",id:"method-__init__",level:3},{value:"<kbd>method</kbd> <code>actions_execute_batch</code>",id:"method-actions_execute_batch",level:3},{value:"<kbd>method</kbd> <code>call_end</code>",id:"method-call_end",level:3},{value:"<kbd>method</kbd> <code>call_read</code>",id:"method-call_read",level:3},{value:"<kbd>method</kbd> <code>call_start</code>",id:"method-call_start",level:3},{value:"<kbd>method</kbd> <code>call_update</code>",id:"method-call_update",level:3},{value:"<kbd>method</kbd> <code>calls_delete</code>",id:"method-calls_delete",level:3},{value:"<kbd>method</kbd> <code>calls_query</code>",id:"method-calls_query",level:3},{value:"<kbd>method</kbd> <code>calls_query_stats</code>",id:"method-calls_query_stats",level:3},{value:"<kbd>method</kbd> <code>calls_query_stream</code>",id:"method-calls_query_stream",level:3},{value:"<kbd>method</kbd> <code>completions_create</code>",id:"method-completions_create",level:3},{value:"<kbd>method</kbd> <code>cost_create</code>",id:"method-cost_create",level:3},{value:"<kbd>method</kbd> <code>cost_purge</code>",id:"method-cost_purge",level:3},{value:"<kbd>method</kbd> <code>cost_query</code>",id:"method-cost_query",level:3},{value:"<kbd>method</kbd> <code>ensure_project_exists</code>",id:"method-ensure_project_exists",level:3},{value:"<kbd>method</kbd> <code>feedback_create</code>",id:"method-feedback_create",level:3},{value:"<kbd>method</kbd> <code>feedback_purge</code>",id:"method-feedback_purge",level:3},{value:"<kbd>method</kbd> <code>feedback_query</code>",id:"method-feedback_query",level:3},{value:"<kbd>method</kbd> <code>feedback_replace</code>",id:"method-feedback_replace",level:3},{value:"<kbd>method</kbd> <code>file_content_read</code>",id:"method-file_content_read",level:3},{value:"<kbd>method</kbd> <code>file_create</code>",id:"method-file_create",level:3},{value:"<kbd>classmethod</kbd> <code>from_env</code>",id:"classmethod-from_env",level:3},{value:"<kbd>method</kbd> <code>obj_create</code>",id:"method-obj_create",level:3},{value:"<kbd>method</kbd> <code>obj_read</code>",id:"method-obj_read",level:3},{value:"<kbd>method</kbd> <code>objs_query</code>",id:"method-objs_query",level:3},{value:"<kbd>method</kbd> <code>op_create</code>",id:"method-op_create",level:3},{value:"<kbd>method</kbd> <code>op_read</code>",id:"method-op_read",level:3},{value:"<kbd>method</kbd> <code>ops_query</code>",id:"method-ops_query",level:3},{value:"<kbd>method</kbd> <code>refs_read_batch</code>",id:"method-refs_read_batch",level:3},{value:"<kbd>method</kbd> <code>server_info</code>",id:"method-server_info",level:3},{value:"<kbd>method</kbd> <code>set_auth</code>",id:"method-set_auth",level:3},{value:"<kbd>method</kbd> <code>table_create</code>",id:"method-table_create",level:3},{value:"<kbd>method</kbd> <code>table_query</code>",id:"method-table_query",level:3},{value:"<kbd>method</kbd> <code>table_query_stats</code>",id:"method-table_query_stats",level:3},{value:"<kbd>method</kbd> <code>table_query_stream</code>",id:"method-table_query_stream",level:3},{value:"<kbd>method</kbd> <code>table_update</code>",id:"method-table_update",level:3},{value:"<kbd>class</kbd> <code>ServerInfoRes</code>",id:"class-serverinfores",level:2},{value:"<kbd>class</kbd> <code>StartBatchItem</code>",id:"class-startbatchitem",level:2},{value:"<kbd>class</kbd> <code>EndBatchItem</code>",id:"class-endbatchitem",level:2},{value:"<kbd>class</kbd> <code>Batch</code>",id:"class-batch",level:2}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"weavetrace_server_bindingsremote_http_trace_server",children:"weave.trace_server_bindings.remote_http_trace_server"}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h1,{id:"api-overview",children:"API Overview"}),"\n",(0,t.jsx)(r.h2,{id:"classes",children:"Classes"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#class-remotehttptraceserver",children:(0,t.jsx)(r.code,{children:"remote_http_trace_server.RemoteHTTPTraceServer"})})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#class-serverinfores",children:(0,t.jsx)(r.code,{children:"remote_http_trace_server.ServerInfoRes"})})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#class-startbatchitem",children:(0,t.jsx)(r.code,{children:"remote_http_trace_server.StartBatchItem"})})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#class-endbatchitem",children:(0,t.jsx)(r.code,{children:"remote_http_trace_server.EndBatchItem"})})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#class-batch",children:(0,t.jsx)(r.code,{children:"remote_http_trace_server.Batch"})})}),"\n"]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L85",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h2,{id:"class-remotehttptraceserver",children:[(0,t.jsx)("kbd",{children:"class"})," ",(0,t.jsx)(r.code,{children:"RemoteHTTPTraceServer"})]}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L89",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-__init__",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"__init__"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"__init__(\n    trace_server_url: str,\n    should_batch: bool = False,\n    remote_request_bytes_limit: int = 32505856\n)\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L530",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-actions_execute_batch",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"actions_execute_batch"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"actions_execute_batch(\n    req: Union[ActionsExecuteBatchReq, dict[str, Any]]\n) \u2192 ActionsExecuteBatchRes\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L274",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-call_end",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"call_end"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"call_end(req: Union[CallEndReq, dict[str, Any]]) \u2192 CallEndRes\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L285",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-call_read",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"call_read"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"call_read(req: Union[CallReadReq, dict[str, Any]]) \u2192 CallReadRes\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L253",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-call_start",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"call_start"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"call_start(req: Union[CallStartReq, dict[str, Any]]) \u2192 CallStartRes\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L316",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-call_update",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"call_update"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"call_update(req: Union[CallUpdateReq, dict[str, Any]]) \u2192 CallUpdateRes\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L309",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-calls_delete",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"calls_delete"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"calls_delete(req: Union[CallsDeleteReq, dict[str, Any]]) \u2192 CallsDeleteRes\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L290",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-calls_query",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"calls_query"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"calls_query(req: Union[CallsQueryReq, dict[str, Any]]) \u2192 CallsQueryRes\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L302",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-calls_query_stats",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"calls_query_stats"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"calls_query_stats(\n    req: Union[CallsQueryStatsReq, dict[str, Any]]\n) \u2192 CallsQueryStatsRes\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L297",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-calls_query_stream",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"calls_query_stream"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"calls_query_stream(req: CallsQueryReq) \u2192 Iterator[CallSchema]\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L562",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-completions_create",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"completions_create"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"completions_create(req: CompletionsCreateReq) \u2192 CompletionsCreateRes\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L548",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-cost_create",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"cost_create"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"cost_create(req: Union[CostCreateReq, dict[str, Any]]) \u2192 CostCreateRes\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L555",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-cost_purge",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"cost_purge"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"cost_purge(req: Union[CostPurgeReq, dict[str, Any]]) \u2192 CostPurgeRes\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L541",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-cost_query",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"cost_query"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"cost_query(req: Union[CostQueryReq, dict[str, Any]]) \u2192 CostQueryRes\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L104",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-ensure_project_exists",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"ensure_project_exists"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"ensure_project_exists(entity: str, project: str) \u2192 EnsureProjectExistsRes\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L502",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-feedback_create",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"feedback_create"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"feedback_create(\n    req: Union[FeedbackCreateReq, dict[str, Any]]\n) \u2192 FeedbackCreateRes\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L516",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-feedback_purge",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"feedback_purge"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"feedback_purge(req: Union[FeedbackPurgeReq, dict[str, Any]]) \u2192 FeedbackPurgeRes\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L509",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-feedback_query",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"feedback_query"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"feedback_query(req: Union[FeedbackQueryReq, dict[str, Any]]) \u2192 FeedbackQueryRes\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L523",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-feedback_replace",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"feedback_replace"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"feedback_replace(\n    req: Union[FeedbackReplaceReq, dict[str, Any]]\n) \u2192 FeedbackReplaceRes\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/docs/weave/trace_server_bindings/remote_http_trace_server/file_content_read#L479",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-file_content_read",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"file_content_read"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"file_content_read(req: FileContentReadReq) \u2192 FileContentReadRes\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/docs/weave/trace_server_bindings/remote_http_trace_server/file_create#L459",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-file_create",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"file_create"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"file_create(req: FileCreateReq) \u2192 FileCreateRes\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L113",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"classmethod-from_env",children:[(0,t.jsx)("kbd",{children:"classmethod"})," ",(0,t.jsx)(r.code,{children:"from_env"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"from_env(should_batch: bool = False) \u2192 RemoteHTTPTraceServer\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L338",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-obj_create",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"obj_create"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"obj_create(req: Union[ObjCreateReq, dict[str, Any]]) \u2192 ObjCreateRes\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L345",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-obj_read",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"obj_read"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"obj_read(req: Union[ObjReadReq, dict[str, Any]]) \u2192 ObjReadRes\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L348",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-objs_query",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"objs_query"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"objs_query(req: Union[ObjQueryReq, dict[str, Any]]) \u2192 ObjQueryRes\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L325",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-op_create",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"op_create"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"op_create(req: Union[OpCreateReq, dict[str, Any]]) \u2192 OpCreateRes\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L330",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-op_read",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"op_read"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"op_read(req: Union[OpReadReq, dict[str, Any]]) \u2192 OpReadRes\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L333",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-ops_query",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"ops_query"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"ops_query(req: Union[OpQueryReq, dict[str, Any]]) \u2192 OpQueryRes\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L452",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-refs_read_batch",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"refs_read_batch"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"refs_read_batch(req: Union[RefsReadBatchReq, dict[str, Any]]) \u2192 RefsReadBatchRes\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/docs/weave/trace_server_bindings/remote_http_trace_server/server_info#L237",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-server_info",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"server_info"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"server_info() \u2192 ServerInfoRes\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L119",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-set_auth",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"set_auth"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"set_auth(auth: tuple[str, str]) \u2192 None\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L355",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-table_create",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"table_create"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"table_create(req: Union[TableCreateReq, dict[str, Any]]) \u2192 TableCreateRes\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Similar to ",(0,t.jsx)(r.code,{children:"calls/batch_upsert"}),", we can dynamically adjust the payload size due to the property that table creation can be decomposed into a series of updates. This is useful when the table creation size is too big to be sent in a single request. We can create an empty table first, then update the table with the rows."]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L431",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-table_query",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"table_query"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"table_query(req: Union[TableQueryReq, dict[str, Any]]) \u2192 TableQueryRes\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L445",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-table_query_stats",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"table_query_stats"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"table_query_stats(\n    req: Union[TableQueryStatsReq, dict[str, Any]]\n) \u2192 TableQueryStatsRes\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L438",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-table_query_stream",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"table_query_stream"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"table_query_stream(req: TableQueryReq) \u2192 Iterator[TableRowSchema]\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L396",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h3,{id:"method-table_update",children:[(0,t.jsx)("kbd",{children:"method"})," ",(0,t.jsx)(r.code,{children:"table_update"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"table_update(req: TableUpdateReq) \u2192 TableUpdateRes\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Similar to ",(0,t.jsx)(r.code,{children:"calls/batch_upsert"}),", we can dynamically adjust the payload size due to the property that table updates can be decomposed into a series of updates."]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L33",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h2,{id:"class-serverinfores",children:[(0,t.jsx)("kbd",{children:"class"})," ",(0,t.jsx)(r.code,{children:"ServerInfoRes"})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Pydantic Fields:"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"min_required_weave_python_version"}),": ",(0,t.jsx)(r.code,{children:"<class 'str'>"})]}),"\n"]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L19",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h2,{id:"class-startbatchitem",children:[(0,t.jsx)("kbd",{children:"class"})," ",(0,t.jsx)(r.code,{children:"StartBatchItem"})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Pydantic Fields:"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"mode"}),": ",(0,t.jsx)(r.code,{children:"<class 'str'>"})]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"req"}),": ",(0,t.jsx)(r.code,{children:"<class 'weave.trace_server.trace_server_interface.CallStartReq'>"})]}),"\n"]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L24",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h2,{id:"class-endbatchitem",children:[(0,t.jsx)("kbd",{children:"class"})," ",(0,t.jsx)(r.code,{children:"EndBatchItem"})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Pydantic Fields:"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"mode"}),": ",(0,t.jsx)(r.code,{children:"<class 'str'>"})]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"req"}),": ",(0,t.jsx)(r.code,{children:"<class 'weave.trace_server.trace_server_interface.CallEndReq'>"})]}),"\n"]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/weave/trace_server_bindings/remote_http_trace_server.py#L29",children:(0,t.jsx)("img",{align:"right",src:"https://img.shields.io/badge/-source-cccccc?style=flat-square"})}),"\n",(0,t.jsxs)(r.h2,{id:"class-batch",children:[(0,t.jsx)("kbd",{children:"class"})," ",(0,t.jsx)(r.code,{children:"Batch"})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Pydantic Fields:"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"batch"}),": ",(0,t.jsx)(r.code,{children:"list[typing.Union[StartBatchItem, EndBatchItem]]"})]}),"\n"]})]})}function o(e={}){const{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,r,s)=>{s.d(r,{Z:()=>n,a:()=>a});var t=s(67294);const c={},d=t.createContext(c);function a(e){const r=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function n(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),t.createElement(d.Provider,{value:r},e.children)}}}]);