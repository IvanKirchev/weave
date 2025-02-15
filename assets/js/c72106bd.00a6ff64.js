"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1388],{56758:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=a(85893),s=a(11151),t=a(65488),l=a(85162);const o={},i="Evaluation Metrics",c={id:"guides/evaluation/scorers",title:"Evaluation Metrics",description:"Evaluations in Weave",source:"@site/docs/guides/evaluation/scorers.md",sourceDirName:"guides/evaluation",slug:"/guides/evaluation/scorers",permalink:"/guides/evaluation/scorers",draft:!1,unlisted:!1,editUrl:"https://github.com/wandb/weave/blob/master/docs/docs/guides/evaluation/scorers.md",tags:[],version:"current",lastUpdatedAt:1739575706e3,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Evaluations",permalink:"/guides/core-types/evaluations"},next:{title:"Guardrails and Monitors",permalink:"/guides/evaluation/guardrails_and_monitors"}},d={},u=[{value:"Evaluations in Weave",id:"evaluations-in-weave",level:2},{value:"Create your own Scorers",id:"create-your-own-scorers",level:2},{value:"Function-based Scorers",id:"function-based-scorers",level:3},{value:"Class-based Scorers",id:"class-based-scorers",level:3},{value:"How Scorers Work",id:"how-scorers-work",level:2},{value:"Scorer Keyword Arguments",id:"scorer-keyword-arguments",level:3},{value:"Mapping Column Names with <code>column_map</code>",id:"mapping-column-names-with-column_map",level:3},{value:"Mapping Column Names with <code>columnMapping</code>",id:"mapping-column-names-with-columnmapping",level:3},{value:"Final summarization of the scorer",id:"final-summarization-of-the-scorer",level:3},{value:"Applying Scorers to a Call",id:"applying-scorers-to-a-call",level:3},{value:"Score Analysis",id:"score-analysis",level:2},{value:"Analyze a single Call&#39;s Scores",id:"analyze-a-single-calls-scores",level:3},{value:"Single Call API",id:"single-call-api",level:4},{value:"Single Call UI",id:"single-call-ui",level:4},{value:"Analyze multiple Calls&#39; Scores",id:"analyze-multiple-calls-scores",level:3},{value:"Multiple Calls API",id:"multiple-calls-api",level:4},{value:"Multiple Calls UI",id:"multiple-calls-ui",level:4},{value:"Analyze all Calls scored by a specific Scorer",id:"analyze-all-calls-scored-by-a-specific-scorer",level:3},{value:"All Calls by Scorer API",id:"all-calls-by-scorer-api",level:4},{value:"All Calls by Scorer UI",id:"all-calls-by-scorer-ui",level:4}];function h(e){const r={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"evaluation-metrics",children:"Evaluation Metrics"}),"\n",(0,n.jsx)(r.h2,{id:"evaluations-in-weave",children:"Evaluations in Weave"}),"\n",(0,n.jsx)(r.p,{children:"In Weave, Scorers are used to evaluate AI outputs and return evaluation metrics. They take the AI's output, analyze it, and return a dictionary of results. Scorers can use your input data as reference if needed and can also output extra information, such as explanations or reasonings from the evaluation."}),"\n",(0,n.jsxs)(t.Z,{groupId:"programming-language",queryString:!0,children:[(0,n.jsxs)(l.default,{value:"python",label:"Python",default:!0,children:[(0,n.jsxs)(r.p,{children:["Scorers are passed to a ",(0,n.jsx)(r.code,{children:"weave.Evaluation"})," object during evaluation. There are two types of Scorers in weave:"]}),(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Function-based Scorers:"})," Simple Python functions decorated with ",(0,n.jsx)(r.code,{children:"@weave.op"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Class-based Scorers:"})," Python classes that inherit from ",(0,n.jsx)(r.code,{children:"weave.Scorer"})," for more complex evaluations."]}),"\n"]}),(0,n.jsx)(r.p,{children:"Scorers must return a dictionary and can return multiple metrics, nested metrics and non-numeric values such as text returned from a LLM-evaluator about its reasoning."})]}),(0,n.jsx)(l.default,{value:"typescript",label:"TypeScript",children:(0,n.jsxs)(r.p,{children:["Scorers are special ops passed to a ",(0,n.jsx)(r.code,{children:"weave.Evaluation"})," object during evaluation."]})})]}),"\n",(0,n.jsx)(r.h2,{id:"create-your-own-scorers",children:"Create your own Scorers"}),"\n",(0,n.jsxs)(r.admonition,{title:"Ready-to-Use Scorers",type:"tip",children:[(0,n.jsxs)(r.p,{children:["While this guide shows you how to create custom scorers, Weave comes with a variety of ",(0,n.jsx)(r.a,{href:"/guides/evaluation/builtin_scorers",children:"predefined scorers"})," that you can use right away, including:"]}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/guides/evaluation/builtin_scorers#hallucinationfreescorer",children:"Hallucination detection"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/guides/evaluation/builtin_scorers#summarizationscorer",children:"Summarization quality"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/guides/evaluation/builtin_scorers#embeddingsimilarityscorer",children:"Embedding similarity"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/guides/evaluation/builtin_scorers#ragas---contextrelevancyscorer",children:"Relevancy evaluation"})}),"\n",(0,n.jsx)(r.li,{children:"And more!"}),"\n"]})]}),"\n",(0,n.jsx)(r.h3,{id:"function-based-scorers",children:"Function-based Scorers"}),"\n",(0,n.jsxs)(t.Z,{groupId:"programming-language",queryString:!0,children:[(0,n.jsxs)(l.default,{value:"python",label:"Python",default:!0,children:[(0,n.jsxs)(r.p,{children:["These are functions decorated with ",(0,n.jsx)(r.code,{children:"@weave.op"})," that return a dictionary. They're great for simple evaluations like:"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'import weave\n\n@weave.op\ndef evaluate_uppercase(text: str) -> dict:\n    return {"text_is_uppercase": text.isupper()}\n\nmy_eval = weave.Evaluation(\n    dataset=[{"text": "HELLO WORLD"}],\n    scorers=[evaluate_uppercase]\n)\n'})}),(0,n.jsxs)(r.p,{children:["When the evaluation is run, ",(0,n.jsx)(r.code,{children:"evaluate_uppercase"})," checks if the text is all uppercase."]})]}),(0,n.jsxs)(l.default,{value:"typescript",label:"TypeScript",children:[(0,n.jsxs)(r.p,{children:["These are functions wrapped with ",(0,n.jsx)(r.code,{children:"weave.op"})," that accept an object with ",(0,n.jsx)(r.code,{children:"modelOutput"})," and optionally ",(0,n.jsx)(r.code,{children:"datasetRow"}),".  They're great for simple evaluations like:"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"import * as weave from 'weave'\n\nconst evaluateUppercase = weave.op(\n    ({modelOutput}) => modelOutput.toUpperCase() === modelOutput,\n    {name: 'textIsUppercase'}\n);\n\n\nconst myEval = new weave.Evaluation({\n    dataset: [{text: 'HELLO WORLD'}],\n    scorers: [evaluateUppercase],\n})\n"})})]})]}),"\n",(0,n.jsx)(r.h3,{id:"class-based-scorers",children:"Class-based Scorers"}),"\n",(0,n.jsxs)(t.Z,{groupId:"programming-language",queryString:!0,children:[(0,n.jsxs)(l.default,{value:"python",label:"Python",default:!0,children:[(0,n.jsxs)(r.p,{children:["For more advanced evaluations, especially when you need to keep track of additional scorer metadata, try different prompts for your LLM-evaluators, or make multiple function calls, you can use the ",(0,n.jsx)(r.code,{children:"Scorer"})," class."]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Requirements:"})}),(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["Inherit from ",(0,n.jsx)(r.code,{children:"weave.Scorer"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["Define a ",(0,n.jsx)(r.code,{children:"score"})," method decorated with ",(0,n.jsx)(r.code,{children:"@weave.op"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["The ",(0,n.jsx)(r.code,{children:"score"})," method must return a dictionary."]}),"\n"]}),(0,n.jsx)(r.p,{children:"Example:"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'import weave\nfrom openai import OpenAI\nfrom weave import Scorer\n\nllm_client = OpenAI()\n\n#highlight-next-line\nclass SummarizationScorer(Scorer):\n    model_id: str = "gpt-4o"\n    system_prompt: str = "Evaluate whether the summary is good."\n\n    @weave.op\n    def some_complicated_preprocessing(self, text: str) -> str:\n        processed_text = "Original text: \\n" + text + "\\n"\n        return processed_text\n\n    @weave.op\n    def call_llm(self, summary: str, processed_text: str) -> dict:\n        res = llm_client.chat.completions.create(\n            messages=[\n                {"role": "system", "content": self.system_prompt},\n                {"role": "user", "content": (\n                    f"Analyse how good the summary is compared to the original text."\n                    f"Summary: {summary}\\n{processed_text}"\n                )}])\n        return {"summary_quality": res}\n\n    @weave.op\n    def score(self, output: str, text: str) -> dict:\n        """Score the summary quality.\n\n        Args:\n            output: The summary generated by an AI system\n            text: The original text being summarized\n        """\n        processed_text = self.some_complicated_preprocessing(text)\n        eval_result = self.call_llm(summary=output, processed_text=processed_text)\n        return {"summary_quality": eval_result}\n\nevaluation = weave.Evaluation(\n    dataset=[{"text": "The quick brown fox jumps over the lazy dog."}],\n    scorers=[summarization_scorer])\n'})}),(0,n.jsx)(r.p,{children:"This class evaluates how good a summary is by comparing it to the original text."})]}),(0,n.jsx)(l.default,{value:"typescript",label:"TypeScript",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-plaintext",children:"This feature is not available in TypeScript yet.  Stay tuned!\n"})})})]}),"\n",(0,n.jsx)(r.h2,{id:"how-scorers-work",children:"How Scorers Work"}),"\n",(0,n.jsx)(r.h3,{id:"scorer-keyword-arguments",children:"Scorer Keyword Arguments"}),"\n",(0,n.jsxs)(t.Z,{groupId:"programming-language",queryString:!0,children:[(0,n.jsxs)(l.default,{value:"python",label:"Python",default:!0,children:[(0,n.jsx)(r.p,{children:"Scorers can access both the output from your AI system and the input data from the dataset row."}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Input:"}),' If you would like your scorer to use data from your dataset row, such as a "label" or "target" column then you can easily make this available to the scorer by adding a ',(0,n.jsx)(r.code,{children:"label"})," or ",(0,n.jsx)(r.code,{children:"target"})," keyword argument to your scorer definition."]}),"\n"]}),(0,n.jsxs)(r.p,{children:['For example if you wanted to use a column called "label" from your dataset then your scorer function (or ',(0,n.jsx)(r.code,{children:"score"})," class method) would have a parameter list like this:"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"@weave.op\ndef my_custom_scorer(output: str, label: int) -> dict:\n    ...\n"})}),(0,n.jsxs)(r.p,{children:["When a weave ",(0,n.jsx)(r.code,{children:"Evaluation"})," is run, the output of the AI system is passed to the ",(0,n.jsx)(r.code,{children:"output"})," parameter. The ",(0,n.jsx)(r.code,{children:"Evaluation"})," also automatically tries to match any additional scorer argument names to your dataset columns. If customizing your scorer arguments or dataset columns is not feasible, you can use column mapping - see below for more."]}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Output:"})," Include an ",(0,n.jsx)(r.code,{children:"output"})," parameter in your scorer function's signature to access the AI system's output."]}),"\n"]}),(0,n.jsxs)(r.h3,{id:"mapping-column-names-with-column_map",children:["Mapping Column Names with ",(0,n.jsx)(r.code,{children:"column_map"})]}),(0,n.jsxs)(r.p,{children:["Sometimes, the ",(0,n.jsx)(r.code,{children:"score"})," methods' argument names don't match the column names in your dataset. You can fix this using a ",(0,n.jsx)(r.code,{children:"column_map"}),"."]}),(0,n.jsxs)(r.p,{children:["If you're using a class-based scorer, pass a dictionary to the ",(0,n.jsx)(r.code,{children:"column_map"})," attribute of ",(0,n.jsx)(r.code,{children:"Scorer"})," when you initialise your scorer class. This dictionary maps your ",(0,n.jsx)(r.code,{children:"score"})," method's argument names to the dataset's column names, in the order: ",(0,n.jsx)(r.code,{children:"{scorer_keyword_argument: dataset_column_name}"}),"."]}),(0,n.jsx)(r.p,{children:"Example:"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'import weave\nfrom weave import Scorer\n\n# A dataset with news articles to be summarised\ndataset = [\n    {"news_article": "The news today was great...", "date": "2030-04-20", "source": "Bright Sky Network"},\n    ...\n]\n\n# Scorer class\nclass SummarizationScorer(Scorer):\n\n    @weave.op\n    def score(output, text) -> dict:\n        """\n            output: output summary from a LLM summarization system\n            text: the text being summarised\n        """\n        ...  # evaluate the quality of the summary\n\n# create a scorer with a column mapping the `text` argument to the `news_article` data column\nscorer = SummarizationScorer(column_map={"text" : "news_article"})\n'})}),(0,n.jsxs)(r.p,{children:["Now, the ",(0,n.jsx)(r.code,{children:"text"})," argument in the ",(0,n.jsx)(r.code,{children:"score"})," method will receive data from the ",(0,n.jsx)(r.code,{children:"news_article"})," dataset column."]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Notes:"})}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Another equivalent option to map your columns is to subclass the ",(0,n.jsx)(r.code,{children:"Scorer"})," and overload the ",(0,n.jsx)(r.code,{children:"score"})," method mapping the columns explicitly."]}),"\n"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"import weave\nfrom weave import Scorer\n\nclass MySummarizationScorer(SummarizationScorer):\n\n    @weave.op\n    def score(self, output: str, news_article: str) -> dict:  # Added type hints\n        # overload the score method and map columns manually\n        return super().score(output=output, text=news_article)\n"})})]}),(0,n.jsxs)(l.default,{value:"typescript",label:"TypeScript",children:[(0,n.jsx)(r.p,{children:"Scorers can access both the output from your AI system and the contents of the dataset row."}),(0,n.jsxs)(r.p,{children:["You can easily access relevant columns from the dataset row by adding a ",(0,n.jsx)(r.code,{children:"datasetRow"})," keyword argument to your scorer definition."]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"const myScorer = weave.op(\n    ({modelOutput, datasetRow}) => {\n        return modelOutput * 2 === datasetRow.expectedOutputTimesTwo;\n    },\n    {name: 'myScorer'}\n);\n"})}),(0,n.jsxs)(r.h3,{id:"mapping-column-names-with-columnmapping",children:["Mapping Column Names with ",(0,n.jsx)(r.code,{children:"columnMapping"})]}),(0,n.jsx)(r.admonition,{type:"important",children:(0,n.jsxs)(r.p,{children:["In TypeScript, this feature is currently on the ",(0,n.jsx)(r.code,{children:"Evaluation"})," object, not individual scorers."]})}),(0,n.jsxs)(r.p,{children:["Sometimes your ",(0,n.jsx)(r.code,{children:"datasetRow"})," keys will not exactly match the scorer's naming scheme, but they are semantically similar. You can map the columns using the ",(0,n.jsx)(r.code,{children:"Evaluation"}),"'s ",(0,n.jsx)(r.code,{children:"columnMapping"})," option."]}),(0,n.jsxs)(r.p,{children:["The mapping is always from the scorer's perspective, i.e. ",(0,n.jsx)(r.code,{children:"{scorer_key: dataset_column_name}"}),"."]}),(0,n.jsx)(r.p,{children:"Example:"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"const myScorer = weave.op(\n    ({modelOutput, datasetRow}) => {\n        return modelOutput * 2 === datasetRow.expectedOutputTimesTwo;\n    },\n    {name: 'myScorer'}\n);\n\nconst myEval = new weave.Evaluation({\n    dataset: [{expected: 2}],\n    scorers: [myScorer],\n    columnMapping: {expectedOutputTimesTwo: 'expected'}\n});\n"})})]})]}),"\n",(0,n.jsx)(r.h3,{id:"final-summarization-of-the-scorer",children:"Final summarization of the scorer"}),"\n",(0,n.jsxs)(t.Z,{groupId:"programming-language",queryString:!0,children:[(0,n.jsxs)(l.default,{value:"python",label:"Python",default:!0,children:[(0,n.jsxs)(r.p,{children:["During evaluation, the scorer will be computed for each row of your dataset. To provide a final score for the evaluation we provide an ",(0,n.jsx)(r.code,{children:"auto_summarize"})," depending on the returning type of the output."]}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Averages are computed for numerical columns"}),"\n",(0,n.jsx)(r.li,{children:"Count and fraction for boolean columns"}),"\n",(0,n.jsx)(r.li,{children:"Other column types are ignored"}),"\n"]}),(0,n.jsxs)(r.p,{children:["You can override the ",(0,n.jsx)(r.code,{children:"summarize"})," method on the ",(0,n.jsx)(r.code,{children:"Scorer"})," class and provide your own way of computing the final scores. The ",(0,n.jsx)(r.code,{children:"summarize"})," function expects:"]}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["A single parameter ",(0,n.jsx)(r.code,{children:"score_rows"}),": This is a list of dictionaries, where each dictionary contains the scores returned by the ",(0,n.jsx)(r.code,{children:"score"})," method for a single row of your dataset."]}),"\n",(0,n.jsx)(r.li,{children:"It should return a dictionary containing the summarized scores."}),"\n"]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Why this is useful?"})}),(0,n.jsx)(r.p,{children:"When you need to score all rows before deciding on the final value of the score for the dataset."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'class MyBinaryScorer(Scorer):\n    """\n    Returns True if the full output matches the target, False if not\n    """\n\n    @weave.op\n    def score(output, target):\n        return {"match": if output == target}\n\n    def summarize(self, score_rows: list) -> dict:\n        full_match = all(row["match"] for row in score_rows)\n        return {"full_match": full_match}\n'})}),(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:["In this example, the default ",(0,n.jsx)(r.code,{children:"auto_summarize"})," would have returned the count and proportion of True."]}),"\n"]}),(0,n.jsxs)(r.p,{children:["If you want to learn more, check the implementation of ",(0,n.jsx)(r.a,{href:"/tutorial-rag#optional-defining-a-scorer-class",children:"CorrectnessLLMJudge"}),"."]})]}),(0,n.jsxs)(l.default,{value:"typescript",label:"TypeScript",children:[(0,n.jsxs)(r.p,{children:["During evaluation, the scorer will be computed for each row of your dataset.  To provide a final score, we use an internal ",(0,n.jsx)(r.code,{children:"summarizeResults"})," function that aggregates depending on the output type."]}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Averages are computed for numerical columns"}),"\n",(0,n.jsx)(r.li,{children:"Count and fraction for boolean columns"}),"\n",(0,n.jsx)(r.li,{children:"Other column types are ignored"}),"\n"]}),(0,n.jsx)(r.p,{children:"We don't currently support custom summarization."})]})]}),"\n",(0,n.jsx)(r.h3,{id:"applying-scorers-to-a-call",children:"Applying Scorers to a Call"}),"\n",(0,n.jsxs)(r.p,{children:["To apply scorers to your Weave ops, you'll need to use the ",(0,n.jsx)(r.code,{children:".call()"})," method which provides access to both the operation's result and its tracking information. This allows you to associate scorer results with specific calls in Weave's database."]}),"\n",(0,n.jsxs)(r.p,{children:["For more information on how to use the ",(0,n.jsx)(r.code,{children:".call()"})," method, see the ",(0,n.jsx)(r.a,{href:"/guides/tracking/tracing#calling-ops#getting-a-handle-to-the-call-object-during-execution",children:"Calling Ops"})," guide."]}),"\n",(0,n.jsxs)(t.Z,{groupId:"programming-language",queryString:!0,children:[(0,n.jsxs)(l.default,{value:"python",label:"Python",default:!0,children:[(0,n.jsx)(r.p,{children:"Here's a basic example:"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'# Get both result and Call object\nresult, call = generate_text.call("Say hello")\n\n# Apply a scorer\nscore = await call.apply_scorer(MyScorer())\n'})}),(0,n.jsx)(r.p,{children:"You can also apply multiple scorers to the same call:"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"# Apply multiple scorers in parallel\nawait asyncio.gather(\n    call.apply_scorer(quality_scorer),\n    call.apply_scorer(toxicity_scorer)\n)\n"})}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Notes:"})}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Scorer results are automatically stored in Weave's database"}),"\n",(0,n.jsx)(r.li,{children:"Scorers run asynchronously after the main operation completes"}),"\n",(0,n.jsx)(r.li,{children:"You can view scorer results in the UI or query them via the API"}),"\n"]}),(0,n.jsxs)(r.p,{children:["For more detailed information about using scorers as guardrails or monitors, including production best practices and complete examples, see our ",(0,n.jsx)(r.a,{href:"/guides/evaluation/guardrails_and_monitors",children:"Guardrails and Monitors guide"}),"."]})]}),(0,n.jsx)(l.default,{value:"typescript",label:"TypeScript",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-plaintext",children:"This feature is not available in TypeScript yet. Stay tuned!\n"})})})]}),"\n",(0,n.jsx)(r.h2,{id:"score-analysis",children:"Score Analysis"}),"\n",(0,n.jsx)(r.p,{children:"In this section, we'll show you how to analyze the scores for a single call, multiple calls, and all calls scored by a specific scorer."}),"\n",(0,n.jsx)(r.h3,{id:"analyze-a-single-calls-scores",children:"Analyze a single Call's Scores"}),"\n",(0,n.jsx)(r.h4,{id:"single-call-api",children:"Single Call API"}),"\n",(0,n.jsxs)(r.p,{children:["To retrieve the calls for a single call, you can use the ",(0,n.jsx)(r.code,{children:"get_call"})," method."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'client = weave.init("my-project")\n\n# Get a single call\ncall = client.get_call("call-uuid-here")\n\n# Get the feedback for the call which contains the scores\nfeedback = list(call.feedback)\n'})}),"\n",(0,n.jsx)(r.h4,{id:"single-call-ui",children:"Single Call UI"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"Call Scores Tab",src:a(42336).Z+"",width:"4112",height:"2328"})}),"\n",(0,n.jsx)(r.p,{children:'Scores for an individual call are displayed in the call details page under the "Scores" tab.'}),"\n",(0,n.jsx)(r.h3,{id:"analyze-multiple-calls-scores",children:"Analyze multiple Calls' Scores"}),"\n",(0,n.jsx)(r.h4,{id:"multiple-calls-api",children:"Multiple Calls API"}),"\n",(0,n.jsxs)(r.p,{children:["To retrieve the calls for multiple calls, you can use the ",(0,n.jsx)(r.code,{children:"get_calls"})," method."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'client = weave.init("my-project")\n\n# Get multiple calls - use whatever filters you want and include feedback\ncalls = client.get_calls(..., include_feedback=True)\n\n# Iterate over the calls and access the feedback which contains the scores\nfor call in calls:\n    feedback = list(call.feedback)\n'})}),"\n",(0,n.jsx)(r.h4,{id:"multiple-calls-ui",children:"Multiple Calls UI"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"Multiple Calls Tab",src:a(40922).Z+"",width:"4112",height:"2328"})}),"\n",(0,n.jsx)(r.p,{children:'Scores for multiple calls are displayed in the traces table under the "Scores" column.'}),"\n",(0,n.jsx)(r.h3,{id:"analyze-all-calls-scored-by-a-specific-scorer",children:"Analyze all Calls scored by a specific Scorer"}),"\n",(0,n.jsx)(r.h4,{id:"all-calls-by-scorer-api",children:"All Calls by Scorer API"}),"\n",(0,n.jsxs)(r.p,{children:["To retrieve all calls scored by a specific scorer, you can use the ",(0,n.jsx)(r.code,{children:"get_calls"})," method."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'client = weave.init("my-project")\n\n# To get all the calls scored by any version of a scorer, use the scorer name (typically the class name)\ncalls = client.get_calls(scored_by=["MyScorer"], include_feedback=True)\n\n# To get all the calls scored by a specific version of a scorer, use the entire ref\n# Refs can be obtained from the scorer object or via the UI.\ncalls = client.get_calls(scored_by=[myScorer.ref.uri()], include_feedback=True)\n\n# Iterate over the calls and access the feedback which contains the scores\nfor call in calls:\n    feedback = list(call.feedback)\n'})}),"\n",(0,n.jsx)(r.h4,{id:"all-calls-by-scorer-ui",children:"All Calls by Scorer UI"}),"\n",(0,n.jsx)(r.p,{children:'Finally, if you would like to see all the calls scored by a Scorer, navigate to the Scorers Tab in the UI and select "Programmatic Scorer" tab. Click your Scorer to open the Scorer details page.'}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"Scorer Details Page",src:a(52202).Z+"",width:"1919",height:"946"})}),"\n",(0,n.jsxs)(r.p,{children:["Next, click the ",(0,n.jsx)(r.code,{children:"View Traces"})," button under ",(0,n.jsx)(r.code,{children:"Scores"})," to view all the calls scored by your Scorer."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"Filtered Calls to Scorer Version",src:a(29282).Z+"",width:"1919",height:"946"})}),"\n",(0,n.jsx)(r.p,{children:"This will default to the selected version of the Scorer. You can remove the version filter to see all the calls scored by any version of the Scorer."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"Filtered Calls to Scorer Name",src:a(7533).Z+"",width:"1919",height:"946"})})]})}function p(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},85162:(e,r,a)=>{a.r(r),a.d(r,{default:()=>l});a(67294);var n=a(90512);const s={tabItem:"tabItem_Ymn6"};var t=a(85893);function l(e){let{children:r,hidden:a,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,l),hidden:a,children:r})}},65488:(e,r,a)=>{a.d(r,{Z:()=>p});var n=a(67294),s=a(90512),t=a(12466),l=a(70989),o=a(72389);const i={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var c=a(85893);function d(e){let{className:r,block:a,selectedValue:n,selectValue:l,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,t.o5)(),h=e=>{const r=e.currentTarget,a=d.indexOf(r),s=o[a].value;s!==n&&(u(r),l(s))},p=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;r=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;r=d[a]??d[d.length-1];break}}r?.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},r),children:o.map((e=>{let{value:r,label:a,attributes:t}=e;return(0,c.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>d.push(e),onKeyDown:p,onClick:h,...t,className:(0,s.Z)("tabs__item",i.tabItem,t?.className,{"tabs__item--active":n===r}),children:a??r},r)}))})}function u(e){let{lazy:r,children:a,selectedValue:s}=e;const t=(Array.isArray(a)?a:[a]).filter(Boolean);if(r){const e=t.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function h(e){const r=(0,l.Y)(e);return(0,c.jsxs)("div",{className:(0,s.Z)("tabs-container",i.tabList),children:[(0,c.jsx)(d,{...r,...e}),(0,c.jsx)(u,{...r,...e})]})}function p(e){const r=(0,o.default)();return(0,c.jsx)(h,{...e,children:(0,l.h)(e.children)},String(r))}},70989:(e,r,a)=>{a.d(r,{Y:()=>p,h:()=>c});var n=a(67294),s=a(16550),t=a(20469),l=a(91980),o=a(67392),i=a(20812);function c(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:r,children:a}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return c(e).map((e=>{let{props:{value:r,label:a,attributes:n,default:s}}=e;return{value:r,label:a,attributes:n,default:s}}))}(a);return function(e){const r=(0,o.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,a])}function u(e){let{value:r,tabValues:a}=e;return a.some((e=>e.value===r))}function h(e){let{queryString:r=!1,groupId:a}=e;const t=(0,s.k6)(),o=function(e){let{queryString:r=!1,groupId:a}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:r,groupId:a});return[(0,l._X)(o),(0,n.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(t.location.search);r.set(o,e),t.replace({...t.location,search:r.toString()})}),[o,t])]}function p(e){const{defaultValue:r,queryString:a=!1,groupId:s}=e,l=d(e),[o,c]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!u({value:r,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:l}))),[p,m]=h({queryString:a,groupId:s}),[x,y]=function(e){let{groupId:r}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,t]=(0,i.Nk)(a);return[s,(0,n.useCallback)((e=>{a&&t.set(e)}),[a,t])]}({groupId:s}),g=(()=>{const e=p??x;return u({value:e,tabValues:l})?e:null})();(0,t.Z)((()=>{g&&c(g)}),[g]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),m(e),y(e)}),[m,y,l]),tabValues:l}}},42336:(e,r,a)=>{a.d(r,{Z:()=>n});const n=a.p+"assets/images/call_scores_tab-6c14c21ca1bda52dd415c24df33305dd.png"},7533:(e,r,a)=>{a.d(r,{Z:()=>n});const n=a.p+"assets/images/filtered_calls_scorer_name-fd3f872c8155d828563f18a2a3b13009.png"},29282:(e,r,a)=>{a.d(r,{Z:()=>n});const n=a.p+"assets/images/filtered_calls_to_scorer_version-112c89bc4f0c4c11c0893a9215ad8389.png"},52202:(e,r,a)=>{a.d(r,{Z:()=>n});const n=a.p+"assets/images/scorer_detail_page-a2456a939ab4747b62933cd0c4c311d1.png"},40922:(e,r,a)=>{a.d(r,{Z:()=>n});const n=a.p+"assets/images/traces_table_scores-92574f231f687f055ad88d0cb5722593.png"},11151:(e,r,a)=>{a.d(r,{Z:()=>o,a:()=>l});var n=a(67294);const s={},t=n.createContext(s);function l(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);