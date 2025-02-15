"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6420],{87106:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var r=s(85893),i=s(11151);const t={},c=void 0,d={id:"reference/typescript-sdk/weave/functions/op",title:"op",description:"weave \u2022 Docs",source:"@site/docs/reference/typescript-sdk/weave/functions/op.md",sourceDirName:"reference/typescript-sdk/weave/functions",slug:"/reference/typescript-sdk/weave/functions/op",permalink:"/reference/typescript-sdk/weave/functions/op",draft:!1,unlisted:!1,editUrl:"https://github.com/wandb/weave/blob/master/docs/docs/reference/typescript-sdk/weave/functions/op.md",tags:[],version:"current",lastUpdatedAt:1739575706e3,frontMatter:{},sidebar:"typescriptSdkSidebar",previous:{title:"login",permalink:"/reference/typescript-sdk/weave/functions/login"},next:{title:"requireCurrentCallStackEntry",permalink:"/reference/typescript-sdk/weave/functions/requireCurrentCallStackEntry"}},o={},a=[{value:"op(fn, options)",id:"opfn-options",level:2},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"Defined in",id:"defined-in",level:3},{value:"op(thisArg, fn, options)",id:"opthisarg-fn-options",level:2},{value:"Type Parameters",id:"type-parameters-1",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Defined in",id:"defined-in-1",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/reference/typescript-sdk/weave/",children:(0,r.jsx)(n.strong,{children:"weave"})})," \u2022 ",(0,r.jsx)(n.strong,{children:"Docs"})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/reference/typescript-sdk/weave/",children:"weave"})," / op"]}),"\n",(0,r.jsx)(n.h1,{id:"function-op",children:"Function: op()"}),"\n",(0,r.jsx)(n.h2,{id:"opfn-options",children:"op(fn, options)"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"op"}),"<",(0,r.jsx)(n.code,{children:"T"}),">(",(0,r.jsx)(n.code,{children:"fn"}),", ",(0,r.jsx)(n.code,{children:"options"}),"?): ",(0,r.jsx)(n.a,{href:"/reference/typescript-sdk/weave/type-aliases/Op",children:(0,r.jsx)(n.code,{children:"Op"})}),"<(...",(0,r.jsx)(n.code,{children:"args"}),") => ",(0,r.jsx)(n.code,{children:"Promise"}),"<",(0,r.jsx)(n.code,{children:"Awaited"}),"<",(0,r.jsx)(n.code,{children:"ReturnType"}),"<",(0,r.jsx)(n.code,{children:"T"}),">>>>"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"A wrapper to weave op-ify a function or method that works on sync and async functions."}),"\n",(0,r.jsx)(n.p,{children:"Wrapped functions:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Take the same inputs and return the same outputs as the original function."}),"\n",(0,r.jsx)(n.li,{children:"Will automatically track calls in the Weave UI."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If you don't call ",(0,r.jsx)(n.code,{children:"weave.init"})," then the function will behave as if it were not wrapped."]}),"\n",(0,r.jsx)(n.h3,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"T"})," ",(0,r.jsx)(n.em,{children:"extends"})," (...",(0,r.jsx)(n.code,{children:"args"}),") => ",(0,r.jsx)(n.code,{children:"any"})]}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"fn"}),": ",(0,r.jsx)(n.code,{children:"T"})]}),"\n",(0,r.jsx)(n.p,{children:"The function to wrap"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"options?"}),": ",(0,r.jsx)(n.code,{children:"OpOptions"}),"<",(0,r.jsx)(n.code,{children:"T"}),">"]}),"\n",(0,r.jsx)(n.p,{children:"Optional configs like call and param naming"}),"\n",(0,r.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/reference/typescript-sdk/weave/type-aliases/Op",children:(0,r.jsx)(n.code,{children:"Op"})}),"<(...",(0,r.jsx)(n.code,{children:"args"}),") => ",(0,r.jsx)(n.code,{children:"Promise"}),"<",(0,r.jsx)(n.code,{children:"Awaited"}),"<",(0,r.jsx)(n.code,{children:"ReturnType"}),"<",(0,r.jsx)(n.code,{children:"T"}),">>>>"]}),"\n",(0,r.jsx)(n.p,{children:"The wrapped function"}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// Basic usage\nimport OpenAI from 'openai';\nimport * as weave from 'weave';\n\nconst client = await weave.init({ project: 'my-project' });\nconst oaiClient = weave.wrapOpenAI(new OpenAI());\n\nconst extract = weave.op(async function extract() {\n  return await oaiClient.chat.completions.create({\n    model: 'gpt-4-turbo',\n    messages: [{ role: 'user', content: 'Create a user as JSON' }],\n  });\n});\n\nawait extract();\n\n// You can also wrap methods by passing the object as the first argument.\n// This will bind the method to the object and wrap it with op.\nclass MyModel {\n  private oaiClient: OpenAI;\n\n  constructor() {\n    this.oaiClient = weave.wrapOpenAI(new OpenAI());\n    this.invoke = weave.op(this, this.invoke);\n  }\n\n  async invoke() {\n    return await this.oaiClient.chat.completions.create({\n      model: 'gpt-4-turbo',\n      messages: [{ role: 'user', content: 'Create a user as JSON' }],\n    });\n  }\n}\n\nconst model = new MyModel();\nconst res = await model.invoke();\n"})}),"\n",(0,r.jsx)(n.h3,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/wandb/weave/blob/e2313369cb35bc1b6f97c70539926dd951ead21e/sdks/node/src/op.ts#L58",children:"op.ts:58"})}),"\n",(0,r.jsx)(n.h2,{id:"opthisarg-fn-options",children:"op(thisArg, fn, options)"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"op"}),"<",(0,r.jsx)(n.code,{children:"T"}),">(",(0,r.jsx)(n.code,{children:"thisArg"}),", ",(0,r.jsx)(n.code,{children:"fn"}),", ",(0,r.jsx)(n.code,{children:"options"}),"?): ",(0,r.jsx)(n.a,{href:"/reference/typescript-sdk/weave/type-aliases/Op",children:(0,r.jsx)(n.code,{children:"Op"})}),"<(...",(0,r.jsx)(n.code,{children:"args"}),") => ",(0,r.jsx)(n.code,{children:"Promise"}),"<",(0,r.jsx)(n.code,{children:"Awaited"}),"<",(0,r.jsx)(n.code,{children:"ReturnType"}),"<",(0,r.jsx)(n.code,{children:"T"}),">>>>"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"type-parameters-1",children:"Type Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"T"})," ",(0,r.jsx)(n.em,{children:"extends"})," (...",(0,r.jsx)(n.code,{children:"args"}),") => ",(0,r.jsx)(n.code,{children:"any"})]}),"\n",(0,r.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"thisArg"}),": ",(0,r.jsx)(n.code,{children:"any"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"fn"}),": ",(0,r.jsx)(n.code,{children:"T"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"options?"}),": ",(0,r.jsx)(n.code,{children:"OpOptions"}),"<",(0,r.jsx)(n.code,{children:"T"}),">"]}),"\n",(0,r.jsx)(n.h3,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/reference/typescript-sdk/weave/type-aliases/Op",children:(0,r.jsx)(n.code,{children:"Op"})}),"<(...",(0,r.jsx)(n.code,{children:"args"}),") => ",(0,r.jsx)(n.code,{children:"Promise"}),"<",(0,r.jsx)(n.code,{children:"Awaited"}),"<",(0,r.jsx)(n.code,{children:"ReturnType"}),"<",(0,r.jsx)(n.code,{children:"T"}),">>>>"]}),"\n",(0,r.jsx)(n.h3,{id:"defined-in-1",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/wandb/weave/blob/e2313369cb35bc1b6f97c70539926dd951ead21e/sdks/node/src/op.ts#L62",children:"op.ts:62"})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>c});var r=s(67294);const i={},t=r.createContext(i);function c(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);