"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3290],{70357:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=a(85893),i=a(11151);const o={title:"Prompt Optimization"},s="Optimizing LLM Workflows Using DSPy and Weave",r={id:"reference/gen_notebooks/dspy_prompt_optimization",title:"Prompt Optimization",description:"Open in Colab",source:"@site/docs/reference/gen_notebooks/dspy_prompt_optimization.md",sourceDirName:"reference/gen_notebooks",slug:"/reference/gen_notebooks/dspy_prompt_optimization",permalink:"/reference/gen_notebooks/dspy_prompt_optimization",draft:!1,unlisted:!1,editUrl:"https://github.com/wandb/weave/blob/master/docs/docs/reference/gen_notebooks/dspy_prompt_optimization.md",tags:[],version:"current",lastUpdatedAt:1739575706e3,frontMatter:{title:"Prompt Optimization"},sidebar:"notebookSidebar",previous:{title:"Custom Model Cost",permalink:"/reference/gen_notebooks/custom_model_cost"},next:{title:"Log Feedback from Production",permalink:"/reference/gen_notebooks/feedback_prod"}},d={},l=[{value:"Installing the Dependencies",id:"installing-the-dependencies",level:2},{value:"Enable Tracking using Weave",id:"enable-tracking-using-weave",level:2},{value:"Load the BIG-Bench Hard Dataset",id:"load-the-big-bench-hard-dataset",level:2},{value:"The DSPy Program",id:"the-dspy-program",level:2},{value:"Writing the Causal Reasoning Signature",id:"writing-the-causal-reasoning-signature",level:3},{value:"Evaluating our DSPy Program",id:"evaluating-our-dspy-program",level:2},{value:"Optimizing our DSPy Program",id:"optimizing-our-dspy-program",level:2},{value:"Conclusion",id:"conclusion",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.admonition,{title:"This is a notebook",type:"tip",children:[(0,t.jsx)("a",{href:"https://colab.research.google.com/github/wandb/weave/blob/master/docs/./notebooks/dspy_prompt_optimization.ipynb",target:"_blank",rel:"noopener noreferrer",class:"navbar__item navbar__link button button--secondary button--med margin-right--sm notebook-cta-button",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/archive/d/d0/20221103151430%21Google_Colaboratory_SVG_Logo.svg",alt:"Open In Colab",height:"20px"}),(0,t.jsx)("div",{children:"Open in Colab"})]})}),(0,t.jsx)("a",{href:"https://github.com/wandb/weave/blob/master/docs/./notebooks/dspy_prompt_optimization.ipynb",target:"_blank",rel:"noopener noreferrer",class:"navbar__item navbar__link button button--secondary button--med margin-right--sm notebook-cta-button",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",alt:"View in Github",height:"15px"}),(0,t.jsx)("div",{children:"View in Github"})]})})]}),"\n",(0,t.jsx)(n.h1,{id:"optimizing-llm-workflows-using-dspy-and-weave",children:"Optimizing LLM Workflows Using DSPy and Weave"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/google/BIG-bench",children:"BIG-bench (Beyond the Imitation Game Benchmark)"})," is a collaborative benchmark intended to probe large language models and extrapolate their future capabilities consisting of more than 200 tasks. The ",(0,t.jsx)(n.a,{href:"https://github.com/suzgunmirac/BIG-Bench-Hard",children:"BIG-Bench Hard (BBH)"})," is a suite of 23 most challenging BIG-Bench tasks that can be quite difficult to be solved using the current generation of language models."]}),"\n",(0,t.jsxs)(n.p,{children:["This tutorial demonstrates how we can improve the performance of our LLM workflow implemented  on the ",(0,t.jsx)(n.strong,{children:"causal judgement task"})," from the BIG-bench Hard benchmark and evaluate our prompting strategies. We will use ",(0,t.jsx)(n.a,{href:"https://dspy-docs.vercel.app/",children:"DSPy"})," for implementing our LLM workflow and optimizing our prompting strategy. We will also use ",(0,t.jsx)(n.a,{href:"/",children:"Weave"})," to track our LLM workflow and evaluate our prompting strategies."]}),"\n",(0,t.jsx)(n.h2,{id:"installing-the-dependencies",children:"Installing the Dependencies"}),"\n",(0,t.jsx)(n.p,{children:"We need the following libraries for this tutorial:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://dspy-docs.vercel.app/",children:"DSPy"})," for building the LLM workflow and optimizing it."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/",children:"Weave"})," to track our LLM workflow and evaluate our prompting strategies."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://huggingface.co/docs/datasets/index",children:"datasets"})," to access the Big-Bench Hard dataset from HuggingFace Hub."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"!pip install -qU dspy-ai weave datasets\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Since we'll be using ",(0,t.jsx)(n.a,{href:"https://openai.com/index/openai-api/",children:"OpenAI API"})," as the LLM Vendor, we will also need an OpenAI API key. You can ",(0,t.jsx)(n.a,{href:"https://platform.openai.com/signup",children:"sign up"})," on the OpenAI platform to get your own API key."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import os\nfrom getpass import getpass\n\napi_key = getpass("Enter you OpenAI API key: ")\nos.environ["OPENAI_API_KEY"] = api_key\n'})}),"\n",(0,t.jsx)(n.h2,{id:"enable-tracking-using-weave",children:"Enable Tracking using Weave"}),"\n",(0,t.jsxs)(n.p,{children:["Weave is currently integrated with DSPy, and including ",(0,t.jsx)(n.a,{href:"/reference/python-sdk/weave/",children:(0,t.jsx)(n.code,{children:"weave.init"})})," at the start of our code lets us automatically trace our DSPy functions which can be explored in the Weave UI. Check out the ",(0,t.jsx)(n.a,{href:"/guides/integrations/dspy",children:"Weave integration docs for DSPy"})," to learn more."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import weave\n\nweave.init(project_name="dspy-bigbench-hard")\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In this tutorial, we use a metadata class inherited from ",(0,t.jsx)(n.a,{href:"/guides/tracking/objects",children:(0,t.jsx)(n.code,{children:"weave.Object"})})," to manage our metadata."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'class Metadata(weave.Object):\n    dataset_address: str = "maveriq/bigbenchhard"\n    big_bench_hard_task: str = "causal_judgement"\n    num_train_examples: int = 50\n    openai_model: str = "gpt-3.5-turbo"\n    openai_max_tokens: int = 2048\n    max_bootstrapped_demos: int = 8\n    max_labeled_demos: int = 8\n\n\nmetadata = Metadata()\n'})}),"\n",(0,t.jsx)(n.admonition,{title:"Object Versioning",type:"tip",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Metadata"})," objects are automatically versioned and traced when functions consuming them are traced"]})}),"\n",(0,t.jsx)(n.h2,{id:"load-the-big-bench-hard-dataset",children:"Load the BIG-Bench Hard Dataset"}),"\n",(0,t.jsxs)(n.p,{children:["We will load this dataset from HuggingFace Hub, split into training and validation sets, and ",(0,t.jsx)(n.a,{href:"/guides/core-types/datasets",children:"publish"})," them on Weave, this will let us version the datasets, and also use ",(0,t.jsx)(n.a,{href:"/guides/core-types/evaluations",children:(0,t.jsx)(n.code,{children:"weave.Evaluation"})})," to evaluate our prompting strategy."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import dspy\nfrom datasets import load_dataset\n\n\n@weave.op()\ndef get_dataset(metadata: Metadata):\n    # load the BIG-Bench Hard dataset corresponding to the task from Huggingface Hug\n    dataset = load_dataset(metadata.dataset_address, metadata.big_bench_hard_task)[\n        "train"\n    ]\n\n    # create the training and validation datasets\n    rows = [{"question": data["input"], "answer": data["target"]} for data in dataset]\n    train_rows = rows[0 : metadata.num_train_examples]\n    val_rows = rows[metadata.num_train_examples :]\n\n    # create the training and validation examples consisting of `dspy.Example` objects\n    dspy_train_examples = [\n        dspy.Example(row).with_inputs("question") for row in train_rows\n    ]\n    dspy_val_examples = [dspy.Example(row).with_inputs("question") for row in val_rows]\n\n    # publish the datasets to the Weave, this would let us version the data and use for evaluation\n    weave.publish(\n        weave.Dataset(\n            name=f"bigbenchhard_{metadata.big_bench_hard_task}_train", rows=train_rows\n        )\n    )\n    weave.publish(\n        weave.Dataset(\n            name=f"bigbenchhard_{metadata.big_bench_hard_task}_val", rows=val_rows\n        )\n    )\n\n    return dspy_train_examples, dspy_val_examples\n\n\ndspy_train_examples, dspy_val_examples = get_dataset(metadata)\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(59228).Z+"",width:"3024",height:"1188"})}),"\n",(0,t.jsx)(n.h2,{id:"the-dspy-program",children:"The DSPy Program"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://dspy-docs.vercel.app",children:"DSPy"})," is a framework that pushes building new LM pipelines away from manipulating free-form strings and closer to programming (composing modular operators to build text transformation graphs) where a compiler automatically generates optimized LM invocation strategies and prompts from a program."]}),"\n",(0,t.jsxs)(n.p,{children:["We will use the ",(0,t.jsx)(n.a,{href:"https://dspy-docs.vercel.app/api/language_model_clients/OpenAI",children:(0,t.jsx)(n.code,{children:"dspy.OpenAI"})})," abstraction to make LLM calls to ",(0,t.jsx)(n.a,{href:"https://platform.openai.com/docs/models/gpt-3-5-turbo",children:"GPT3.5 Turbo"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'system_prompt = """\nYou are an expert in the field of causal reasoning. You are to analyze the a given question carefully and answer in `Yes` or `No`.\nYou should also provide a detailed explanation justifying your answer.\n"""\n\nllm = dspy.OpenAI(model="gpt-3.5-turbo", system_prompt=system_prompt)\ndspy.settings.configure(lm=llm)\n'})}),"\n",(0,t.jsx)(n.h3,{id:"writing-the-causal-reasoning-signature",children:"Writing the Causal Reasoning Signature"}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.a,{href:"https://dspy-docs.vercel.app/docs/building-blocks/signatures",children:"signature"})," is a declarative specification of input/output behavior of a ",(0,t.jsx)(n.a,{href:"https://dspy-docs.vercel.app/docs/building-blocks/modules",children:"DSPy module"})," which are task-adaptive components\u2014akin to neural network layers\u2014that abstract any particular text transformation."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from pydantic import BaseModel, Field\n\n\nclass Input(BaseModel):\n    query: str = Field(description="The question to be answered")\n\n\nclass Output(BaseModel):\n    answer: str = Field(description="The answer for the question")\n    confidence: float = Field(\n        ge=0, le=1, description="The confidence score for the answer"\n    )\n    explanation: str = Field(description="The explanation for the answer")\n\n\nclass QuestionAnswerSignature(dspy.Signature):\n    input: Input = dspy.InputField()\n    output: Output = dspy.OutputField()\n\n\nclass CausalReasoningModule(dspy.Module):\n    def __init__(self):\n        self.prog = dspy.TypedPredictor(QuestionAnswerSignature)\n\n    @weave.op()\n    def forward(self, question) -> dict:\n        return self.prog(input=Input(query=question)).output.dict()\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Let's test our LLM workflow, i.e., the ",(0,t.jsx)(n.code,{children:"CausalReasoningModule"})," on an example from the causal reasoning subset of Big-Bench Hard."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import rich\n\nbaseline_module = CausalReasoningModule()\n\nprediction = baseline_module(dspy_train_examples[0]["question"])\nrich.print(prediction)\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(20925).Z+"",width:"3018",height:"1894"})}),"\n",(0,t.jsx)(n.h2,{id:"evaluating-our-dspy-program",children:"Evaluating our DSPy Program"}),"\n",(0,t.jsxs)(n.p,{children:["Now that we have a baseline prompting strategy, let's evaluate it on our validation set using ",(0,t.jsx)(n.a,{href:"/guides/core-types/evaluations",children:(0,t.jsx)(n.code,{children:"weave.Evaluation"})})," on a simple metric that matches the predicted answer with the ground truth. Weave will take each example, pass it through your application and score the output on multiple custom scoring functions. By doing this, you'll have a view of the performance of your application, and a rich UI to drill into individual outputs and scores."]}),"\n",(0,t.jsxs)(n.p,{children:["First, we need to create a simple weave evaluation scoring function that tells whether the answer from the baseline module's output is the same as the ground truth answer or not. Scoring functions need to have a ",(0,t.jsx)(n.code,{children:"model_output"})," keyword argument, but the other arguments are user defined and are taken from the dataset examples. It will only take the necessary keys by using a dictionary key based on the argument name."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'@weave.op()\ndef weave_evaluation_scorer(answer: str, model_output: Output) -> dict:\n    return {"match": int(answer.lower() == model_output["answer"].lower())}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Next, we can simply define the evaluation and run it."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'validation_dataset = weave.ref(\n    f"bigbenchhard_{metadata.big_bench_hard_task}_val:v0"\n).get()\n\nevaluation = weave.Evaluation(\n    name="baseline_causal_reasoning_module",\n    dataset=validation_dataset,\n    scorers=[weave_evaluation_scorer],\n)\n\nawait evaluation.evaluate(baseline_module.forward)\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(5218).Z+"",width:"3024",height:"1892"})}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"If you're running from a python script, you can use the following code to run the evaluation:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import asyncio\nasyncio.run(evaluation.evaluate(baseline_module.forward))\n"})})]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Running the evaluation causal reasoning dataset will cost approximately $0.24 in OpenAI credits."})}),"\n",(0,t.jsx)(n.h2,{id:"optimizing-our-dspy-program",children:"Optimizing our DSPy Program"}),"\n",(0,t.jsxs)(n.p,{children:["Now, that we have a baseline DSPy program, let us try to improve its performance for causal reasoning using a ",(0,t.jsx)(n.a,{href:"https://dspy-docs.vercel.app/docs/building-blocks/optimizers",children:"DSPy teleprompter"})," that can tune the parameters of a DSPy program to maximize the specified metrics. In this tutorial, we use the ",(0,t.jsx)(n.a,{href:"https://dspy-docs.vercel.app/api/category/optimizers",children:"BootstrapFewShot"})," teleprompter."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from dspy.teleprompt import BootstrapFewShot\n\n\n@weave.op()\ndef get_optimized_program(model: dspy.Module, metadata: Metadata) -> dspy.Module:\n    @weave.op()\n    def dspy_evaluation_metric(true, prediction, trace=None):\n        return prediction["answer"].lower() == true.answer.lower()\n\n    teleprompter = BootstrapFewShot(\n        metric=dspy_evaluation_metric,\n        max_bootstrapped_demos=metadata.max_bootstrapped_demos,\n        max_labeled_demos=metadata.max_labeled_demos,\n    )\n    return teleprompter.compile(model, trainset=dspy_train_examples)\n\n\noptimized_module = get_optimized_program(baseline_module, metadata)\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(2268).Z+"",width:"3024",height:"1896"})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Running the evaluation causal reasoning dataset will cost approximately $0.04 in OpenAI credits."})}),"\n",(0,t.jsx)(n.p,{children:"Now that we have our optimized program (the optimized prompting strategy), let's evaluate it once again on our validation set and compare it with our baseline DSPy program."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'evaluation = weave.Evaluation(\n    name="optimized_causal_reasoning_module",\n    dataset=validation_dataset,\n    scorers=[weave_evaluation_scorer],\n)\n\nawait evaluation.evaluate(optimized_module.forward)\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(66880).Z+"",width:"3024",height:"1892"})}),"\n",(0,t.jsx)(n.p,{children:"When coomparing the evalution of the baseline program with the optimized one shows that the optimized program answers the causal reasoning questions with siginificantly more accuracy."}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"In this tutorial, we learned how to use DSPy for prompt optimization alongside using Weave for tracking and evaluation to compare the original and optimized programs."})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},59228:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/1-db41b185fe52b059c32a80a27afca0b4.png"},20925:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/2-d96130a8f2b82b90c41b995c43a3368c.png"},5218:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/3-3d898e3859f15fa28225c3b1110a60c0.png"},2268:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/4-51fbd2763bcc0deee08e95b47f9b56cf.png"},66880:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/5-ddf334e719c17dca218b3823e7f1d25d.png"},11151:(e,n,a)=>{a.d(n,{Z:()=>r,a:()=>s});var t=a(67294);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);