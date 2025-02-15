"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5839],{75081:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=t(85893),i=t(11151),r=t(65488),s=t(85162);const o={},l="NVIDIA NIM",c={id:"guides/integrations/nvidia_nim",title:"NVIDIA NIM",description:"Weave automatically tracks and logs LLM calls made via the ChatNVIDIA library, after weave.init() is called.",source:"@site/docs/guides/integrations/nvidia_nim.md",sourceDirName:"guides/integrations",slug:"/guides/integrations/nvidia_nim",permalink:"/guides/integrations/nvidia_nim",draft:!1,unlisted:!1,editUrl:"https://github.com/wandb/weave/blob/master/docs/docs/guides/integrations/nvidia_nim.md",tags:[],version:"current",lastUpdatedAt:1739575706e3,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"MistralAI",permalink:"/guides/integrations/mistral"},next:{title:"OpenAI",permalink:"/guides/integrations/openai"}},d={},u=[{value:"Tracing",id:"tracing",level:2},{value:"Track your own ops",id:"track-your-own-ops",level:2},{value:"Create a <code>Model</code> for easier experimentation",id:"create-a-model-for-easier-experimentation",level:2},{value:"Usage Info",id:"usage-info",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"nvidia-nim",children:"NVIDIA NIM"}),"\n",(0,a.jsxs)(n.p,{children:["Weave automatically tracks and logs LLM calls made via the ",(0,a.jsx)(n.a,{href:"https://python.langchain.com/docs/integrations/chat/nvidia_ai_endpoints/",children:"ChatNVIDIA"})," library, after ",(0,a.jsx)(n.code,{children:"weave.init()"})," is called."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["For the latest tutorials, visit ",(0,a.jsx)(n.a,{href:"https://wandb.ai/site/partners/nvidia",children:"Weights & Biases on NVIDIA"}),"."]})}),"\n",(0,a.jsx)(n.h2,{id:"tracing",children:"Tracing"}),"\n",(0,a.jsx)(n.p,{children:"It\u2019s important to store traces of LLM applications in a central database, both during development and in production. You\u2019ll use these traces for debugging and to help build a dataset of tricky examples to evaluate against while improving your application."}),"\n",(0,a.jsxs)(r.Z,{groupId:"programming-language",queryString:!0,children:[(0,a.jsxs)(s.default,{value:"python",label:"Python",default:!0,children:[(0,a.jsxs)(n.p,{children:["Weave can automatically capture traces for the ",(0,a.jsx)(n.a,{href:"https://python.langchain.com/docs/integrations/chat/nvidia_ai_endpoints/",children:"ChatNVIDIA python library"}),"."]}),(0,a.jsxs)(n.p,{children:["Start capturing by calling ",(0,a.jsx)(n.code,{children:"weave.init(<project-name>)"})," with a project name your choice."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from langchain_nvidia_ai_endpoints import ChatNVIDIA\nimport weave\nclient = ChatNVIDIA(model="mistralai/mixtral-8x7b-instruct-v0.1", temperature=0.8, max_tokens=64, top_p=1)\n# highlight-next-line\nweave.init(\'emoji-bot\')\n\nmessages=[\n    {\n      "role": "system",\n      "content": "You are AGI. You will be provided with a message, and your task is to respond using emojis only."\n    }]\n\nresponse = client.invoke(messages)\n'})})]}),(0,a.jsx)(s.default,{value:"typescript",label:"TypeScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plaintext",children:"This feature is not available in TypeScript yet since this library is only in Python.\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"chatnvidia_trace.png",src:t(57699).Z+"",width:"1042",height:"671"})}),"\n",(0,a.jsx)(n.h2,{id:"track-your-own-ops",children:"Track your own ops"}),"\n",(0,a.jsxs)(r.Z,{groupId:"programming-language",queryString:!0,children:[(0,a.jsxs)(s.default,{value:"python",label:"Python",default:!0,children:[(0,a.jsxs)(n.p,{children:["Wrapping a function with ",(0,a.jsx)(n.code,{children:"@weave.op"})," starts capturing inputs, outputs and app logic so you can debug how data flows through your app. You can deeply nest ops and build a tree of functions that you want to track. This also starts automatically versioning code as you experiment to capture ad-hoc details that haven't been committed to git."]}),(0,a.jsxs)(n.p,{children:["Simply create a function decorated with ",(0,a.jsx)(n.a,{href:"/guides/tracking/ops",children:(0,a.jsx)(n.code,{children:"@weave.op"})})," that calls into ",(0,a.jsx)(n.a,{href:"https://python.langchain.com/docs/integrations/chat/nvidia_ai_endpoints/",children:"ChatNVIDIA python library"}),"."]}),(0,a.jsx)(n.p,{children:"In the example below, we have 2 functions wrapped with op. This helps us see how intermediate steps, like the retrieval step in a RAG app, are affecting how our app behaves."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'# highlight-next-line\nimport weave\nfrom langchain_nvidia_ai_endpoints import ChatNVIDIA\nimport requests, random\nPROMPT="""Emulate the Pokedex from early Pok\xe9mon episodes. State the name of the Pokemon and then describe it.\n        Your tone is informative yet sassy, blending factual details with a touch of dry humor. Be concise, no more than 3 sentences. """\nPOKEMON = [\'pikachu\', \'charmander\', \'squirtle\', \'bulbasaur\', \'jigglypuff\', \'meowth\', \'eevee\']\nclient = ChatNVIDIA(model="mistralai/mixtral-8x7b-instruct-v0.1", temperature=0.7, max_tokens=100, top_p=1)\n\n# highlight-next-line\n@weave.op\ndef get_pokemon_data(pokemon_name):\n    # highlight-next-line\n    # This is a step within your application, like the retrieval step within a RAG app\n    url = f"https://pokeapi.co/api/v2/pokemon/{pokemon_name}"\n    response = requests.get(url)\n    if response.status_code == 200:\n        data = response.json()\n        name = data["name"]\n        types = [t["type"]["name"] for t in data["types"]]\n        species_url = data["species"]["url"]\n        species_response = requests.get(species_url)\n        evolved_from = "Unknown"\n        if species_response.status_code == 200:\n            species_data = species_response.json()\n            if species_data["evolves_from_species"]:\n                evolved_from = species_data["evolves_from_species"]["name"]\n        return {"name": name, "types": types, "evolved_from": evolved_from}\n    else:\n        return None\n\n# highlight-next-line\n@weave.op\ndef pokedex(name: str, prompt: str) -> str:\n    # highlight-next-line\n    # This is your root op that calls out to other ops\n    # highlight-next-line\n    data = get_pokemon_data(name)\n    if not data: return "Error: Unable to fetch data"\n\n    messages=[\n            {"role": "system","content": prompt},\n            {"role": "user", "content": str(data)}\n        ]\n\n    response = client.invoke(messages)\n    return response.content\n\n# highlight-next-line\nweave.init(\'pokedex-nvidia\')\n# Get data for a specific Pok\xe9mon\npokemon_data = pokedex(random.choice(POKEMON), PROMPT)\n'})}),(0,a.jsxs)(n.p,{children:["Navigate to Weave and you can click ",(0,a.jsx)(n.code,{children:"get_pokemon_data"})," in the UI to see the inputs & outputs of that step."]})]}),(0,a.jsx)(s.default,{value:"typescript",label:"TypeScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plaintext",children:"This feature is not available in TypeScript yet since this library is only in Python.\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"nvidia_pokedex.png",src:t(34098).Z+"",width:"1037",height:"573"})}),"\n",(0,a.jsxs)(n.h2,{id:"create-a-model-for-easier-experimentation",children:["Create a ",(0,a.jsx)(n.code,{children:"Model"})," for easier experimentation"]}),"\n",(0,a.jsxs)(r.Z,{groupId:"programming-language",queryString:!0,children:[(0,a.jsxs)(s.default,{value:"python",label:"Python",default:!0,children:[(0,a.jsxs)(n.p,{children:["Organizing experimentation is difficult when there are many moving pieces. By using the ",(0,a.jsx)(n.a,{href:"/guides/core-types/models",children:(0,a.jsx)(n.code,{children:"Model"})})," class, you can capture and organize the experimental details of your app like your system prompt or the model you're using. This helps organize and compare different iterations of your app."]}),(0,a.jsxs)(n.p,{children:["In addition to versioning code and capturing inputs/outputs, ",(0,a.jsx)(n.a,{href:"/guides/core-types/models",children:(0,a.jsx)(n.code,{children:"Model"})}),"s capture structured parameters that control your application\u2019s behavior, making it easy to find what parameters worked best. You can also use Weave Models with ",(0,a.jsx)(n.code,{children:"serve"}),", and ",(0,a.jsx)(n.a,{href:"/guides/core-types/evaluations",children:(0,a.jsx)(n.code,{children:"Evaluation"})}),"s."]}),(0,a.jsxs)(n.p,{children:["In the example below, you can experiment with ",(0,a.jsx)(n.code,{children:"model"})," and ",(0,a.jsx)(n.code,{children:"system_message"}),". Every time you change one of these, you'll get a new ",(0,a.jsx)(n.em,{children:"version"})," of ",(0,a.jsx)(n.code,{children:"GrammarCorrectorModel"}),"."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import weave\nfrom langchain_nvidia_ai_endpoints import ChatNVIDIA\n\nweave.init(\'grammar-nvidia\')\n\nclass GrammarCorrectorModel(weave.Model): # Change to `weave.Model`\n  system_message: str\n\n  @weave.op()\n  def predict(self, user_input): # Change to `predict`\n    client = ChatNVIDIA(model="mistralai/mixtral-8x7b-instruct-v0.1", temperature=0, max_tokens=100, top_p=1)\n\n    messages=[\n          {\n              "role": "system",\n              "content": self.system_message\n          },\n          {\n              "role": "user",\n              "content": user_input\n          }\n          ]\n\n    response = client.invoke(messages)\n    return response.content\n\n\ncorrector = GrammarCorrectorModel(\n    system_message = "You are a grammar checker, correct the following user input.")\nresult = corrector.predict("That was so easy, it was a piece of pie!")\nprint(result)\n'})})]}),(0,a.jsx)(s.default,{value:"typescript",label:"TypeScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plaintext",children:"This feature is not available in TypeScript yet since this library is only in Python.\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"chatnvidia_model.png",src:t(27442).Z+"",width:"3450",height:"1230"})}),"\n",(0,a.jsx)(n.h2,{id:"usage-info",children:"Usage Info"}),"\n",(0,a.jsxs)(n.p,{children:["The ChatNVIDIA integration supports ",(0,a.jsx)(n.code,{children:"invoke"}),", ",(0,a.jsx)(n.code,{children:"stream"})," and their async variants. It also supports tool use.\nAs ChatNVIDIA is meant to be used with many types of models, it does not have function calling support."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},85162:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});t(67294);var a=t(90512);const i={tabItem:"tabItem_Ymn6"};var r=t(85893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,s),hidden:t,children:n})}},65488:(e,n,t)=>{t.d(n,{Z:()=>h});var a=t(67294),i=t(90512),r=t(12466),s=t(70989),o=t(72389);const l={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var c=t(85893);function d(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.o5)(),p=e=>{const n=e.currentTarget,t=d.indexOf(n),i=o[t].value;i!==a&&(u(n),s(i))},h=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,c.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>d.push(e),onKeyDown:h,onClick:p,...r,className:(0,i.Z)("tabs__item",l.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function u(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function p(e){const n=(0,s.Y)(e);return(0,c.jsxs)("div",{className:(0,i.Z)("tabs-container",l.tabList),children:[(0,c.jsx)(d,{...n,...e}),(0,c.jsx)(u,{...n,...e})]})}function h(e){const n=(0,o.default)();return(0,c.jsx)(p,{...e,children:(0,s.h)(e.children)},String(n))}},70989:(e,n,t)=>{t.d(n,{Y:()=>h,h:()=>c});var a=t(67294),i=t(16550),r=t(20469),s=t(91980),o=t(67392),l=t(20812);function c(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}(t);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function u(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=d(e),[o,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[h,m]=p({queryString:t,groupId:i}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,l.Nk)(t);return[i,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),v=(()=>{const e=h??g;return u({value:e,tabValues:s})?e:null})();(0,r.Z)((()=>{v&&c(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),m(e),f(e)}),[m,f,s]),tabValues:s}}},27442:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/chatnvidia_model-e44a29da32188caa14ed268a661d84e9.png"},57699:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/chatnvidia_trace-6d200a684d6c6833f451cae2443bae88.png"},34098:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/nvidia_pokedex-abe7df96fd204e793735911e9d5e0f37.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var a=t(67294);const i={},r=a.createContext(i);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);