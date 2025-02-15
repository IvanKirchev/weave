"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6316],{69350:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>o});var s=i(85893),l=i(11151);const r={},d="Playground",t={id:"guides/tools/playground",title:"Playground",description:"The LLM Playground is currently in preview.",source:"@site/docs/guides/tools/playground.md",sourceDirName:"guides/tools",slug:"/guides/tools/playground",permalink:"/guides/tools/playground",draft:!1,unlisted:!1,editUrl:"https://github.com/wandb/weave/blob/master/docs/docs/guides/tools/playground.md",tags:[],version:"current",lastUpdatedAt:1739575706e3,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Comparison",permalink:"/guides/tools/comparison"},next:{title:"Logging media",permalink:"/guides/core-types/media"}},a={},o=[{value:"Features",id:"features",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Add provider credentials and information",id:"add-provider-credentials-and-information",level:3},{value:"Access the Playground",id:"access-the-playground",level:3},{value:"Select an LLM",id:"select-an-llm",level:2},{value:"Amazon Bedrock",id:"amazon-bedrock",level:3},{value:"Anthropic",id:"anthropic",level:3},{value:"Azure",id:"azure",level:3},{value:"Google Gemini",id:"google-gemini",level:3},{value:"Groq",id:"groq",level:3},{value:"OpenAI",id:"openai",level:3},{value:"X.AI",id:"xai",level:3},{value:"Adjust LLM parameters",id:"adjust-llm-parameters",level:2},{value:"Add a function",id:"add-a-function",level:2},{value:"Retry, edit, and delete messages",id:"retry-edit-and-delete-messages",level:2},{value:"Add a new message",id:"add-a-new-message",level:2},{value:"Compare LLMs",id:"compare-llms",level:2},{value:"Adjust the number of trials",id:"adjust-the-number-of-trials",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"playground",children:"Playground"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"The LLM Playground is currently in preview."})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Evaluating LLM prompts and responses is challenging. The Weave Playground is designed to simplify the process of iterating on LLM prompts and responses, making it easier to experiment with different models and prompts. With features like prompt editing, message retrying, and model comparison, Playground helps you to quickly test and improve your LLM applications. Playground currently supports OpenAI, Anthropic, Google Gemini, Groq, and Amazon Bedrock models."}),"\n",(0,s.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Quick access:"})," Open the Playground from the W&B sidebar for a fresh session or from the Call page to test an existing project."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Message controls:"})," Edit, retry, or delete messages directly within the chat."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Flexible messaging:"})," Add new messages as either user or system inputs, and send them to the LLM."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Customizable settings:"})," Configure your preferred LLM provider and adjust model settings."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Multi-LLM support:"})," Switch between models, with team-level API key management."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Compare models:"})," Compare how different models respond to prompts."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Get started with the Playground to optimize your LLM interactions and streamline your prompt engineering process and LLM application development."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#add-provider-credentials-and-information",children:"Add provider credentials and information"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#access-the-playground",children:"Access the Playground"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#select-an-llm",children:"Select an LLM"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#adjust-llm-parameters",children:"Adjust LLM parameters"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#add-a-function",children:"Add a function"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#retry-edit-and-delete-messages",children:"Retry, edit, and delete messages"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#add-a-new-message",children:"Add a new message"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#compare-llms",children:"Compare LLMs"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#adjust-the-number-of-trials",children:"Adjust the number of trials"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.p,{children:["Before you can use Playground, you must ",(0,s.jsx)(n.a,{href:"#add-provider-credentials-and-information",children:"add provider credentials"}),", and ",(0,s.jsx)(n.a,{href:"#access-the-playground",children:"open the Playground UI"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"add-provider-credentials-and-information",children:"Add provider credentials and information"}),"\n",(0,s.jsx)(n.p,{children:"Playground currently supports OpenAI, Anthropic, Gemini, Groq, Amazon Bedrock, and Azure models.\nTo use one of the available models, add the appropriate information to your team secrets in W&B settings."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["OpenAI: ",(0,s.jsx)(n.code,{children:"OPENAI_API_KEY"})]}),"\n",(0,s.jsxs)(n.li,{children:["Anthropic: ",(0,s.jsx)(n.code,{children:"ANTHROPIC_API_KEY"})]}),"\n",(0,s.jsxs)(n.li,{children:["Google Gemini: ",(0,s.jsx)(n.code,{children:"GOOGLE_API_KEY"})]}),"\n",(0,s.jsxs)(n.li,{children:["Groq: ",(0,s.jsx)(n.code,{children:"GEMMA_API_KEY"})]}),"\n",(0,s.jsxs)(n.li,{children:["Amazon Bedrock:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"AWS_ACCESS_KEY_ID"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"AWS_SECRET_ACCESS_KEY"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"AWS_REGION_NAME"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Azure:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"AZURE_API_KEY"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"AZURE_API_BASE"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"AZURE_API_VERSION"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"access-the-playground",children:"Access the Playground"}),"\n",(0,s.jsx)(n.p,{children:"There are two ways to access the Playground:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Open a fresh Playground page with a simple system prompt"}),": In the sidebar, select ",(0,s.jsx)(n.strong,{children:"Playground"}),". Playground opens in the same tab."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Open Playground for a specific call"}),":","\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["In the sidebar, select the ",(0,s.jsx)(n.strong,{children:"Traces"})," tab. A list of traces displays."]}),"\n",(0,s.jsx)(n.li,{children:"In the list of traces, click the name of the call that you want to view. The call's details page opens."}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Open chat in playground"}),". Playground opens in a new tab."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Screenshot of Open in Playground button",src:i(61961).Z+"",width:"2582",height:"1732"})}),"\n",(0,s.jsx)(n.h2,{id:"select-an-llm",children:"Select an LLM"}),"\n",(0,s.jsx)(n.p,{children:"You can switch the LLM using the dropdown menu in the top left. The available models from various providers are listed below:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#amazon-bedrock",children:"Amazon Bedrock"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#anthropic",children:"Anthropic"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#azure",children:"Azure"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#gemini",children:"Google Gemini"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#groq",children:"Groq"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#openai",children:"OpenAI"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#xai",children:"X.AI"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"amazon-bedrock",children:(0,s.jsx)(n.a,{href:"/guides/integrations/bedrock",children:"Amazon Bedrock"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ai21.j2-mid-v1"}),"\n",(0,s.jsx)(n.li,{children:"ai21.j2-ultra-v1"}),"\n",(0,s.jsx)(n.li,{children:"amazon.nova-micro-v1:0"}),"\n",(0,s.jsx)(n.li,{children:"amazon.nova-lite-v1:0"}),"\n",(0,s.jsx)(n.li,{children:"amazon.nova-pro-v1:0"}),"\n",(0,s.jsx)(n.li,{children:"amazon.titan-text-lite-v1"}),"\n",(0,s.jsx)(n.li,{children:"amazon.titan-text-express-v1"}),"\n",(0,s.jsx)(n.li,{children:"mistral.mistral-7b-instruct-v0:2"}),"\n",(0,s.jsx)(n.li,{children:"mistral.mixtral-8x7b-instruct-v0:1"}),"\n",(0,s.jsx)(n.li,{children:"mistral.mistral-large-2402-v1:0"}),"\n",(0,s.jsx)(n.li,{children:"mistral.mistral-large-2407-v1:0"}),"\n",(0,s.jsx)(n.li,{children:"anthropic.claude-3-sonnet-20240229-v1:0"}),"\n",(0,s.jsx)(n.li,{children:"anthropic.claude-3-5-sonnet-20240620-v1:0"}),"\n",(0,s.jsx)(n.li,{children:"anthropic.claude-3-haiku-20240307-v1:0"}),"\n",(0,s.jsx)(n.li,{children:"anthropic.claude-3-opus-20240229-v1:0"}),"\n",(0,s.jsx)(n.li,{children:"anthropic.claude-v2"}),"\n",(0,s.jsx)(n.li,{children:"anthropic.claude-v2:1"}),"\n",(0,s.jsx)(n.li,{children:"anthropic.claude-instant-v1"}),"\n",(0,s.jsx)(n.li,{children:"cohere.command-text-v14"}),"\n",(0,s.jsx)(n.li,{children:"cohere.command-light-text-v14"}),"\n",(0,s.jsx)(n.li,{children:"cohere.command-r-plus-v1:0"}),"\n",(0,s.jsx)(n.li,{children:"cohere.command-r-v1:0"}),"\n",(0,s.jsx)(n.li,{children:"meta.llama2-13b-chat-v1"}),"\n",(0,s.jsx)(n.li,{children:"meta.llama2-70b-chat-v1"}),"\n",(0,s.jsx)(n.li,{children:"meta.llama3-8b-instruct-v1:0"}),"\n",(0,s.jsx)(n.li,{children:"meta.llama3-70b-instruct-v1:0"}),"\n",(0,s.jsx)(n.li,{children:"meta.llama3-1-8b-instruct-v1:0"}),"\n",(0,s.jsx)(n.li,{children:"meta.llama3-1-70b-instruct-v1:0"}),"\n",(0,s.jsx)(n.li,{children:"meta.llama3-1-405b-instruct-v1:0"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"anthropic",children:(0,s.jsx)(n.a,{href:"/guides/integrations/anthropic",children:"Anthropic"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"claude-3-5-sonnet-20240620"}),"\n",(0,s.jsx)(n.li,{children:"claude-3-5-sonnet-20241022"}),"\n",(0,s.jsx)(n.li,{children:"claude-3-haiku-20240307"}),"\n",(0,s.jsx)(n.li,{children:"claude-3-opus-20240229"}),"\n",(0,s.jsx)(n.li,{children:"claude-3-sonnet-20240229"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"azure",children:(0,s.jsx)(n.a,{href:"/guides/integrations/azure",children:"Azure"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"azure/o1-mini"}),"\n",(0,s.jsx)(n.li,{children:"azure/o1-mini-2024-09-12"}),"\n",(0,s.jsx)(n.li,{children:"azure/o1"}),"\n",(0,s.jsx)(n.li,{children:"azure/o1-preview"}),"\n",(0,s.jsx)(n.li,{children:"azure/o1-preview-2024-09-12"}),"\n",(0,s.jsx)(n.li,{children:"azure/gpt-4o"}),"\n",(0,s.jsx)(n.li,{children:"azure/gpt-4o-2024-08-06"}),"\n",(0,s.jsx)(n.li,{children:"azure/gpt-4o-2024-11-20"}),"\n",(0,s.jsx)(n.li,{children:"azure/gpt-4o-2024-05-13"}),"\n",(0,s.jsx)(n.li,{children:"azure/gpt-4o-mini"}),"\n",(0,s.jsx)(n.li,{children:"azure/gpt-4o-mini-2024-07-18"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"google-gemini",children:(0,s.jsx)(n.a,{href:"/guides/integrations/google-gemini",children:"Google Gemini"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"gemini/gemini-1.5-flash-001"}),"\n",(0,s.jsx)(n.li,{children:"gemini/gemini-1.5-flash-002"}),"\n",(0,s.jsx)(n.li,{children:"gemini/gemini-1.5-flash-8b-exp-0827"}),"\n",(0,s.jsx)(n.li,{children:"gemini/gemini-1.5-flash-8b-exp-0924"}),"\n",(0,s.jsx)(n.li,{children:"gemini/gemini-1.5-flash-exp-0827"}),"\n",(0,s.jsx)(n.li,{children:"gemini/gemini-1.5-flash-latest"}),"\n",(0,s.jsx)(n.li,{children:"gemini/gemini-1.5-flash"}),"\n",(0,s.jsx)(n.li,{children:"gemini/gemini-1.5-pro-001"}),"\n",(0,s.jsx)(n.li,{children:"gemini/gemini-1.5-pro-002"}),"\n",(0,s.jsx)(n.li,{children:"gemini/gemini-1.5-pro-exp-0801"}),"\n",(0,s.jsx)(n.li,{children:"gemini/gemini-1.5-pro-exp-0827"}),"\n",(0,s.jsx)(n.li,{children:"gemini/gemini-1.5-pro-latest"}),"\n",(0,s.jsx)(n.li,{children:"gemini/gemini-1.5-pro"}),"\n",(0,s.jsx)(n.li,{children:"gemini/gemini-pro"}),"\n",(0,s.jsx)(n.li,{children:"gemini/gemini-2.0-flash-exp"}),"\n",(0,s.jsx)(n.li,{children:"gemini/gemini-2.0-flash-thinking-exp"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"groq",children:(0,s.jsx)(n.a,{href:"/guides/integrations/groq",children:"Groq"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"groq/gemma-7b-it"}),"\n",(0,s.jsx)(n.li,{children:"groq/gemma2-9b-it"}),"\n",(0,s.jsx)(n.li,{children:"groq/llama-3.1-8b-instant"}),"\n",(0,s.jsx)(n.li,{children:"groq/llama3-70b-8192"}),"\n",(0,s.jsx)(n.li,{children:"groq/llama3-8b-8192"}),"\n",(0,s.jsx)(n.li,{children:"groq/llama3-groq-8b-8192-tool-use-preview"}),"\n",(0,s.jsx)(n.li,{children:"groq/mixtral-8x7b-32768"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"openai",children:(0,s.jsx)(n.a,{href:"/guides/integrations/openai",children:"OpenAI"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"gpt-4o-mini"}),"\n",(0,s.jsx)(n.li,{children:"gpt-3.5-turbo-0125"}),"\n",(0,s.jsx)(n.li,{children:"gpt-3.5-turbo-1106"}),"\n",(0,s.jsx)(n.li,{children:"gpt-4-1106-preview"}),"\n",(0,s.jsx)(n.li,{children:"gpt-4-32k-0314"}),"\n",(0,s.jsx)(n.li,{children:"gpt-4-turbo-2024-04-09"}),"\n",(0,s.jsx)(n.li,{children:"gpt-4-turbo-preview"}),"\n",(0,s.jsx)(n.li,{children:"gpt-4-turbo"}),"\n",(0,s.jsx)(n.li,{children:"gpt-4"}),"\n",(0,s.jsx)(n.li,{children:"gpt-4o-2024-05-13"}),"\n",(0,s.jsx)(n.li,{children:"gpt-4o-2024-08-06"}),"\n",(0,s.jsx)(n.li,{children:"gpt-4o-mini-2024-07-18"}),"\n",(0,s.jsx)(n.li,{children:"gpt-4o"}),"\n",(0,s.jsx)(n.li,{children:"gpt-4o-2024-11-20"}),"\n",(0,s.jsx)(n.li,{children:"o1-mini-2024-09-12"}),"\n",(0,s.jsx)(n.li,{children:"o1-mini"}),"\n",(0,s.jsx)(n.li,{children:"o1-preview-2024-09-12"}),"\n",(0,s.jsx)(n.li,{children:"o1-preview"}),"\n",(0,s.jsx)(n.li,{children:"o1-2024-12-17"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"xai",children:"X.AI"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"xai/grok-beta"}),"\n",(0,s.jsx)(n.li,{children:"xai/grok-2-1212"}),"\n",(0,s.jsx)(n.li,{children:"xai/grok-2"}),"\n",(0,s.jsx)(n.li,{children:"xai/grok-2-latest"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"adjust-llm-parameters",children:"Adjust LLM parameters"}),"\n",(0,s.jsx)(n.p,{children:"You can experiment with different parameter values for your selected model. To adjust parameters, do the following:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["In the upper right corner of the Playground UI, click ",(0,s.jsx)(n.strong,{children:"Chat settings"})," to open the parameter settings dropdown."]}),"\n",(0,s.jsxs)(n.li,{children:["In the dropdown, adjust parameters as desired. You can also toggle Weave call tracking on or off, and ",(0,s.jsx)(n.a,{href:"#add-a-function",children:"add a function"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Chat settings"})," to close the dropdown and save your changes."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Screenshot of Playground settings",src:i(35394).Z+"",width:"2584",height:"1326"})}),"\n",(0,s.jsx)(n.h2,{id:"add-a-function",children:"Add a function"}),"\n",(0,s.jsx)(n.p,{children:"You can test how different models use functions based on input it receives from the user. To add a function for testing in Playground, do the following:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["In the upper right corner of the Playground UI, click ",(0,s.jsx)(n.strong,{children:"Chat settings"})," to open the parameter settings dropdown."]}),"\n",(0,s.jsxs)(n.li,{children:["In the dropdown, click ",(0,s.jsx)(n.strong,{children:"+ Add function"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"In the pop-up, add your function information."}),"\n",(0,s.jsxs)(n.li,{children:["To save your changes and close the function pop-up, click the ",(0,s.jsx)(n.strong,{children:"x"})," in the upper right corner."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Chat settings"})," to close the settings dropdown and save your changes."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"retry-edit-and-delete-messages",children:"Retry, edit, and delete messages"}),"\n",(0,s.jsxs)(n.p,{children:["With Playground, you can retry, edit, and delete messages. To use this feature, hover over the message you want to edit, retry, or delete. Three buttons display: ",(0,s.jsx)(n.strong,{children:"Delete"}),", ",(0,s.jsx)(n.strong,{children:"Edit"}),", and ",(0,s.jsx)(n.strong,{children:"Retry"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Delete"}),": Remove the message from the chat."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Edit"}),": Modify the message content."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Retry"}),": Delete all subsequent messages and retry the chat from the selected message."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"Screenshot of Playground message buttons",src:i(83353).Z+"",width:"1716",height:"626"}),"\n",(0,s.jsx)(n.img,{alt:"Screenshot of Playground editing",src:i(88155).Z+"",width:"1668",height:"762"})]}),"\n",(0,s.jsx)(n.h2,{id:"add-a-new-message",children:"Add a new message"}),"\n",(0,s.jsx)(n.p,{children:"To add a new message to the chat, do the following:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["In the chat box, select one of the available roles (",(0,s.jsx)(n.strong,{children:"Assistant"})," or ",(0,s.jsx)(n.strong,{children:"User"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"+ Add"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["To send a new message to the LLM, click the ",(0,s.jsx)(n.strong,{children:"Send"})," button. Alternatively, press the ",(0,s.jsx)(n.strong,{children:"Command"})," and ",(0,s.jsx)(n.strong,{children:"Enter"})," keys."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Screenshot of Playground sending a message",src:i(44737).Z+"",width:"1788",height:"364"})}),"\n",(0,s.jsx)(n.h2,{id:"compare-llms",children:"Compare LLMs"}),"\n",(0,s.jsx)(n.p,{children:"Playground allows you to compare LLMs. To perform a comparison, do the following:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["In the Playground UI, click ",(0,s.jsx)(n.strong,{children:"Compare"}),". A second chat opens next to the original chat."]}),"\n",(0,s.jsxs)(n.li,{children:["In the second chat, you can:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#select-an-llm",children:"Select the LLM to compare"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#adjust-llm-parameters",children:"Adjust parameters"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#add-a-function",children:"Add functions"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["In the message box, enter a message that you want to test with both models and press ",(0,s.jsx)(n.strong,{children:"Send"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"adjust-the-number-of-trials",children:"Adjust the number of trials"}),"\n",(0,s.jsxs)(n.p,{children:["Playground allows you to generate multiple outputs for the same input by setting the number of trials. The default setting is ",(0,s.jsx)(n.code,{children:"1"}),". To adjust the number of trials, do the following:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"In the Playground UI, open the settings sidebar if it is not already open."}),"\n",(0,s.jsxs)(n.li,{children:["Adjust the ",(0,s.jsx)(n.strong,{children:"Number of trials"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},61961:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/open_chat_in_playground-805b1401f1420257a1eb4573846b38db.png"},44737:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/playground_chat_input-ea91ef8df856725937e5a0dcb1bfad20.png"},83353:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/playground_message_buttons-445507d84c440dfd8d81f7f57f15b7ce.png"},88155:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/playground_message_editor-3fb64862ac8887ace05575836f3125dc.png"},35394:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/playground_settings-dd2e072754145147fa56a74d4b882b85.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>d});var s=i(67294);const l={},r=s.createContext(l);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);