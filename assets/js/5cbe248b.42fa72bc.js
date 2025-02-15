"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3147],{83221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=n(85893),o=n(11151);const r={},i="Serve",a={id:"guides/tools/serve",title:"Serve",description:"Given a Weave ref to any Weave Model you can run:",source:"@site/docs/guides/tools/serve.md",sourceDirName:"guides/tools",slug:"/guides/tools/serve",permalink:"/guides/tools/serve",draft:!1,unlisted:!1,editUrl:"https://github.com/wandb/weave/blob/master/docs/docs/guides/tools/serve.md",tags:[],version:"current",lastUpdatedAt:1739575706e3,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Tools & Utilities",permalink:"/guides/tools/"},next:{title:"Deploy",permalink:"/guides/tools/deploy"}},l={},d=[{value:"Install FastAPI",id:"install-fastapi",level:2},{value:"Serve Model",id:"serve-model",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"serve",children:"Serve"}),"\n",(0,s.jsx)(t.p,{children:"Given a Weave ref to any Weave Model you can run:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"weave serve <ref>\n"})}),"\n",(0,s.jsxs)(t.p,{children:["to run a FastAPI server for that model. Visit ",(0,s.jsx)(t.a,{href:"http://0.0.0.0:9996/docs",children:"http://0.0.0.0:9996/docs"})," to query the model interactively."]}),"\n",(0,s.jsx)(t.h2,{id:"install-fastapi",children:"Install FastAPI"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"pip install fastapi uvicorn\n"})}),"\n",(0,s.jsx)(t.h2,{id:"serve-model",children:"Serve Model"}),"\n",(0,s.jsx)(t.p,{children:"In a terminal, call:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"weave serve <your model ref>\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Get your model ref by navigating to the model and copying it from the UI. It should look like:\n",(0,s.jsx)(t.code,{children:"weave:///your_entity/project-name/YourModel:<hash>"})]}),"\n",(0,s.jsx)(t.p,{children:'To use it, navigate to the Swagger UI link, click the predict endpoint and then click "Try it out!".'})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var s=n(67294);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);