"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7839],{8091:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>N,contentTitle:()=>_,default:()=>B,frontMatter:()=>b,metadata:()=>f,toc:()=>v});var l=a(85893),i=a(11151),n=a(58219),r=a.n(n),c=(a(62316),a(51039)),t=a.n(c),d=(a(82723),a(9487)),o=a.n(d),m=(a(41429),a(5397)),p=a.n(m),h=a(4667),j=a.n(h),x=a(9472),u=a.n(x),y=(a(1176),a(92503)),g=(a(12005),a(85162));const b={id:"call-start-batch-call-upsert-batch-post",title:"Call Start Batch",description:"Call Start Batch",sidebar_label:"Call Start Batch",hide_title:!0,hide_table_of_contents:!0,api:"eJydVttO20AQ/ZVon0NuRaLKG1CqIhURkdCHRlE0sZdkqS/bvQBR5H/vzKwT2yEECg94dzw7e+bMmXE2wsHSiuFUXEKSWDFri1xLA07l2XUshiJC89w6MG6+ABet5mzw2sqdRefWibYw8q+X1l3k8VoMNyLKMyczR0vQOlERx+w+2jwjm41WMgVaaUM3OiUt7TgkLZSTKVsgW98+IMKNcGstEVK+eJTR9kZlZEzwcU3gnXIJ+VA2FxRqTNBv8liKov25CFdZHM7PivY2ABgDa1E5s6MoKoeDN4Tc9u64NBKc5AB3iKCgINUhZ7xkg9V5ZgNFg16PHrG0kVGaWMVQYx9F0toHn7TuSme8/ZNFMOHxnyVQMTFiIJJzXO6lyXVAZAfLUHdEutntCNv8/h2uKYVjTFMEinE6GLwm8xckKmaqWlfG5ObzTMbSgUoaZDYdkjw6TrV1RmXLOm0KkSylOUrRzzwAxHMitUuK3IxXud6gbGBJ/VG6vO3KZLQm9PY9/imvcHXpVytGRW9g9+00vgX6Dl22dfkxmYxeBQy1tTLyRrk100l+F2AV0j2dFYimWXISSItF2grNjOClW+U0A8sBp8HhZBJdmoDd+gQUdJV5ksbyTd5gwcXKOW2H3S43ROcZsnjRASXo5i2uMYkmyKCGbkc/RaDQ7IX7Bb+nxEh1d9W4vXqBVCeyNj4RRUozi2qIKYXasE55G1RIRFKn1grd3OV6nkHaUEKsrE5g/cq+a/uaTYPBjtkzMgAZzwFR4CQbnJ70Byf9s0nvdDjoDftfO2dnX36jHzg8sfCO6cGUVaa9K9fPi7lHwvcio9X4rGEkFeyYkFlc8UCbD7KArh/AK18iudVSRaB3iDqAtj5NwfCn0XO/oZX+ZpzcQ86FLzX9Haw7H11jBBJVCNrr9Ds9ahVSYwo8dcoqHNBuQ9w7RTn54rpYP8VzgXW6KWU95S89nmwIG8W6IvHj680G9SfvTVIUZEbxUTJTXD6BUbAg4FNKZiUhxulEGvwj1wQvjM4Tnhvknnju9f0xSrUKJ84jIvOo76zWn6Pb8QSdF+Uvj7LeBp6p3vh/KFjMdDp83siGoxeypedKiBCTWgu8W9UYCz3XLp+1sYxzuoaPyVHROR6+R/qoLkhTu0zHl6b6EH/z/Aisfc5NXDuvSxNN/KL4B+hfSvU=",sidebar_class_name:"post api-method",info_path:"reference/service-api/fastapi",custom_edit_url:null},_=void 0,f={id:"reference/service-api/call-start-batch-call-upsert-batch-post",title:"Call Start Batch",description:"Call Start Batch",source:"@site/docs/reference/service-api/call-start-batch-call-upsert-batch-post.api.mdx",sourceDirName:"reference/service-api",slug:"/reference/service-api/call-start-batch-call-upsert-batch-post",permalink:"/reference/service-api/call-start-batch-call-upsert-batch-post",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1739575706e3,frontMatter:{id:"call-start-batch-call-upsert-batch-post",title:"Call Start Batch",description:"Call Start Batch",sidebar_label:"Call Start Batch",hide_title:!0,hide_table_of_contents:!0,api:"eJydVttO20AQ/ZVon0NuRaLKG1CqIhURkdCHRlE0sZdkqS/bvQBR5H/vzKwT2yEECg94dzw7e+bMmXE2wsHSiuFUXEKSWDFri1xLA07l2XUshiJC89w6MG6+ABet5mzw2sqdRefWibYw8q+X1l3k8VoMNyLKMyczR0vQOlERx+w+2jwjm41WMgVaaUM3OiUt7TgkLZSTKVsgW98+IMKNcGstEVK+eJTR9kZlZEzwcU3gnXIJ+VA2FxRqTNBv8liKov25CFdZHM7PivY2ABgDa1E5s6MoKoeDN4Tc9u64NBKc5AB3iKCgINUhZ7xkg9V5ZgNFg16PHrG0kVGaWMVQYx9F0toHn7TuSme8/ZNFMOHxnyVQMTFiIJJzXO6lyXVAZAfLUHdEutntCNv8/h2uKYVjTFMEinE6GLwm8xckKmaqWlfG5ObzTMbSgUoaZDYdkjw6TrV1RmXLOm0KkSylOUrRzzwAxHMitUuK3IxXud6gbGBJ/VG6vO3KZLQm9PY9/imvcHXpVytGRW9g9+00vgX6Dl22dfkxmYxeBQy1tTLyRrk100l+F2AV0j2dFYimWXISSItF2grNjOClW+U0A8sBp8HhZBJdmoDd+gQUdJV5ksbyTd5gwcXKOW2H3S43ROcZsnjRASXo5i2uMYkmyKCGbkc/RaDQ7IX7Bb+nxEh1d9W4vXqBVCeyNj4RRUozi2qIKYXasE55G1RIRFKn1grd3OV6nkHaUEKsrE5g/cq+a/uaTYPBjtkzMgAZzwFR4CQbnJ70Byf9s0nvdDjoDftfO2dnX36jHzg8sfCO6cGUVaa9K9fPi7lHwvcio9X4rGEkFeyYkFlc8UCbD7KArh/AK18iudVSRaB3iDqAtj5NwfCn0XO/oZX+ZpzcQ86FLzX9Haw7H11jBBJVCNrr9Ds9ahVSYwo8dcoqHNBuQ9w7RTn54rpYP8VzgXW6KWU95S89nmwIG8W6IvHj680G9SfvTVIUZEbxUTJTXD6BUbAg4FNKZiUhxulEGvwj1wQvjM4Tnhvknnju9f0xSrUKJ84jIvOo76zWn6Pb8QSdF+Uvj7LeBp6p3vh/KFjMdDp83siGoxeypedKiBCTWgu8W9UYCz3XLp+1sYxzuoaPyVHROR6+R/qoLkhTu0zHl6b6EH/z/Aisfc5NXDuvSxNN/KL4B+hfSvU=",sidebar_class_name:"post api-method",info_path:"reference/service-api/fastapi",custom_edit_url:null},sidebar:"serviceApiSidebar",previous:{title:"Call End",permalink:"/reference/service-api/call-end-call-end-post"},next:{title:"Calls Delete",permalink:"/reference/service-api/calls-delete-calls-delete-post"}},N={},v=[];function k(e){const s={p:"p",...(0,i.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"Call Start Batch"}),"\n",(0,l.jsx)(t(),{method:"post",path:"/call/upsert_batch"}),"\n",(0,l.jsx)(s.p,{children:"Call Start Batch"}),"\n",(0,l.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,l.jsx)(o(),{className:"openapi-tabs__mime",children:(0,l.jsx)(g.default,{label:"application/json",value:"application/json-schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,l.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,l.jsx)(s.p,{children:"Body"})}),(0,l.jsx)("strong",{className:"openapi-schema__required",children:(0,l.jsx)(s.p,{children:"required"})})]}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsxs)("span",{className:"openapi-schema__container",children:[(0,l.jsx)("strong",{className:"openapi-schema__property",children:(0,l.jsx)(s.p,{children:"batch"})}),(0,l.jsx)("span",{className:"openapi-schema__name",children:(0,l.jsx)(s.p,{children:"object[]"})}),(0,l.jsx)("span",{className:"openapi-schema__divider"}),(0,l.jsx)("span",{className:"openapi-schema__required",children:(0,l.jsx)(s.p,{children:"required"})})]})}),(0,l.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,l.jsx)("li",{children:(0,l.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"Array ["})})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"badge badge--info",children:(0,l.jsx)(s.p,{children:"anyOf"})}),(0,l.jsxs)(u(),{children:[(0,l.jsxs)(g.default,{label:"CallBatchStartMode",value:"0-item-properties",children:[(0,l.jsx)(j(),{collapsible:!1,name:"mode",required:!1,schemaName:"Mode (string)",qualifierMessage:void 0,schema:{type:"string",title:"Mode",default:"start"}}),(0,l.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsxs)("span",{className:"openapi-schema__container",children:[(0,l.jsx)("strong",{className:"openapi-schema__property",children:(0,l.jsx)(s.p,{children:"req"})}),(0,l.jsx)("span",{className:"openapi-schema__name",children:(0,l.jsx)(s.p,{children:"object"})}),(0,l.jsx)("span",{className:"openapi-schema__divider"}),(0,l.jsx)("span",{className:"openapi-schema__required",children:(0,l.jsx)(s.p,{children:"required"})})]})}),(0,l.jsx)("div",{style:{marginLeft:"1rem"},children:(0,l.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsxs)("span",{className:"openapi-schema__container",children:[(0,l.jsx)("strong",{className:"openapi-schema__property",children:(0,l.jsx)(s.p,{children:"start"})}),(0,l.jsx)("span",{className:"openapi-schema__name",children:(0,l.jsx)(s.p,{children:"object"})}),(0,l.jsx)("span",{className:"openapi-schema__divider"}),(0,l.jsx)("span",{className:"openapi-schema__required",children:(0,l.jsx)(s.p,{children:"required"})})]})}),(0,l.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(j(),{collapsible:!1,name:"project_id",required:!0,schemaName:"Project Id (string)",qualifierMessage:void 0,schema:{type:"string",title:"Project Id"}}),(0,l.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsxs)("summary",{style:{},children:[(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"id"})}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:(0,l.jsx)(s.p,{children:"object"})})]}),(0,l.jsx)("div",{style:{marginLeft:"1rem"}}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"badge badge--info",children:(0,l.jsx)(s.p,{children:"anyOf"})}),(0,l.jsx)(u(),{children:(0,l.jsx)(g.default,{label:"MOD1",value:"0-item-properties",children:(0,l.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"string"})})})})]})]})}),(0,l.jsx)(j(),{collapsible:!1,name:"op_name",required:!0,schemaName:"Op Name (string)",qualifierMessage:void 0,schema:{type:"string",title:"Op Name"}}),(0,l.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsxs)("summary",{style:{},children:[(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"display_name"})}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:(0,l.jsx)(s.p,{children:"object"})})]}),(0,l.jsx)("div",{style:{marginLeft:"1rem"}}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"badge badge--info",children:(0,l.jsx)(s.p,{children:"anyOf"})}),(0,l.jsx)(u(),{children:(0,l.jsx)(g.default,{label:"MOD1",value:"0-item-properties",children:(0,l.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"string"})})})})]})]})}),(0,l.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsxs)("summary",{style:{},children:[(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"trace_id"})}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:(0,l.jsx)(s.p,{children:"object"})})]}),(0,l.jsx)("div",{style:{marginLeft:"1rem"}}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"badge badge--info",children:(0,l.jsx)(s.p,{children:"anyOf"})}),(0,l.jsx)(u(),{children:(0,l.jsx)(g.default,{label:"MOD1",value:"0-item-properties",children:(0,l.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"string"})})})})]})]})}),(0,l.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsxs)("summary",{style:{},children:[(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"parent_id"})}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:(0,l.jsx)(s.p,{children:"object"})})]}),(0,l.jsx)("div",{style:{marginLeft:"1rem"}}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"badge badge--info",children:(0,l.jsx)(s.p,{children:"anyOf"})}),(0,l.jsx)(u(),{children:(0,l.jsx)(g.default,{label:"MOD1",value:"0-item-properties",children:(0,l.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"string"})})})})]})]})}),(0,l.jsx)(j(),{collapsible:!1,name:"started_at",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",title:"Started At"}}),(0,l.jsx)(j(),{collapsible:!1,name:"attributes",required:!0,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",title:"Attributes"}}),(0,l.jsx)(j(),{collapsible:!1,name:"inputs",required:!0,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",title:"Inputs"}}),(0,l.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsxs)("summary",{style:{},children:[(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"wb_user_id"})}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:(0,l.jsx)(s.p,{children:"object"})})]}),(0,l.jsx)("div",{style:{marginLeft:"1rem"},children:(0,l.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"Do not set directly. Server will automatically populate this field."})})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"badge badge--info",children:(0,l.jsx)(s.p,{children:"anyOf"})}),(0,l.jsx)(u(),{children:(0,l.jsx)(g.default,{label:"MOD1",value:"0-item-properties",children:(0,l.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"string"})})})})]})]})}),(0,l.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsxs)("summary",{style:{},children:[(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"wb_run_id"})}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:(0,l.jsx)(s.p,{children:"object"})})]}),(0,l.jsx)("div",{style:{marginLeft:"1rem"}}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"badge badge--info",children:(0,l.jsx)(s.p,{children:"anyOf"})}),(0,l.jsx)(u(),{children:(0,l.jsx)(g.default,{label:"MOD1",value:"0-item-properties",children:(0,l.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"string"})})})})]})]})})]})]})})})]})})]}),(0,l.jsxs)(g.default,{label:"CallBatchEndMode",value:"1-item-properties",children:[(0,l.jsx)(j(),{collapsible:!1,name:"mode",required:!1,schemaName:"Mode (string)",qualifierMessage:void 0,schema:{type:"string",title:"Mode",default:"end"}}),(0,l.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsxs)("span",{className:"openapi-schema__container",children:[(0,l.jsx)("strong",{className:"openapi-schema__property",children:(0,l.jsx)(s.p,{children:"req"})}),(0,l.jsx)("span",{className:"openapi-schema__name",children:(0,l.jsx)(s.p,{children:"object"})}),(0,l.jsx)("span",{className:"openapi-schema__divider"}),(0,l.jsx)("span",{className:"openapi-schema__required",children:(0,l.jsx)(s.p,{children:"required"})})]})}),(0,l.jsx)("div",{style:{marginLeft:"1rem"},children:(0,l.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsxs)("span",{className:"openapi-schema__container",children:[(0,l.jsx)("strong",{className:"openapi-schema__property",children:(0,l.jsx)(s.p,{children:"end"})}),(0,l.jsx)("span",{className:"openapi-schema__name",children:(0,l.jsx)(s.p,{children:"object"})}),(0,l.jsx)("span",{className:"openapi-schema__divider"}),(0,l.jsx)("span",{className:"openapi-schema__required",children:(0,l.jsx)(s.p,{children:"required"})})]})}),(0,l.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(j(),{collapsible:!1,name:"project_id",required:!0,schemaName:"Project Id (string)",qualifierMessage:void 0,schema:{type:"string",title:"Project Id"}}),(0,l.jsx)(j(),{collapsible:!1,name:"id",required:!0,schemaName:"Id (string)",qualifierMessage:void 0,schema:{type:"string",title:"Id"}}),(0,l.jsx)(j(),{collapsible:!1,name:"ended_at",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",title:"Ended At"}}),(0,l.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsxs)("summary",{style:{},children:[(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"exception"})}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:(0,l.jsx)(s.p,{children:"object"})})]}),(0,l.jsx)("div",{style:{marginLeft:"1rem"}}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"badge badge--info",children:(0,l.jsx)(s.p,{children:"anyOf"})}),(0,l.jsx)(u(),{children:(0,l.jsx)(g.default,{label:"MOD1",value:"0-item-properties",children:(0,l.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"string"})})})})]})]})}),(0,l.jsx)(j(),{collapsible:!1,name:"output",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{title:"Output",type:"object"}}),(0,l.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsxs)("span",{className:"openapi-schema__container",children:[(0,l.jsx)("strong",{className:"openapi-schema__property",children:(0,l.jsx)(s.p,{children:"summary"})}),(0,l.jsx)("span",{className:"openapi-schema__name",children:(0,l.jsx)(s.p,{children:"object"})}),(0,l.jsx)("span",{className:"openapi-schema__divider"}),(0,l.jsx)("span",{className:"openapi-schema__required",children:(0,l.jsx)(s.p,{children:"required"})})]})}),(0,l.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsxs)("span",{className:"openapi-schema__container",children:[(0,l.jsx)("strong",{className:"openapi-schema__property",children:(0,l.jsx)(s.p,{children:"usage"})}),(0,l.jsx)("span",{className:"openapi-schema__name",children:(0,l.jsx)(s.p,{children:"object"})})]})}),(0,l.jsx)("div",{style:{marginLeft:"1rem"},children:(0,l.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsxs)("span",{className:"openapi-schema__container",children:[(0,l.jsx)("strong",{className:"openapi-schema__property",children:(0,l.jsx)(s.p,{children:"property name*"})}),(0,l.jsx)("span",{className:"openapi-schema__name",children:(0,l.jsx)(s.p,{children:"LLMUsageSchema"})})]})}),(0,l.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsxs)("summary",{style:{},children:[(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"prompt_tokens"})}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:(0,l.jsx)(s.p,{children:"object"})})]}),(0,l.jsx)("div",{style:{marginLeft:"1rem"}}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"badge badge--info",children:(0,l.jsx)(s.p,{children:"anyOf"})}),(0,l.jsx)(u(),{children:(0,l.jsx)(g.default,{label:"MOD1",value:"0-item-properties",children:(0,l.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"integer"})})})})]})]})}),(0,l.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsxs)("summary",{style:{},children:[(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"input_tokens"})}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:(0,l.jsx)(s.p,{children:"object"})})]}),(0,l.jsx)("div",{style:{marginLeft:"1rem"}}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"badge badge--info",children:(0,l.jsx)(s.p,{children:"anyOf"})}),(0,l.jsx)(u(),{children:(0,l.jsx)(g.default,{label:"MOD1",value:"0-item-properties",children:(0,l.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"integer"})})})})]})]})}),(0,l.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsxs)("summary",{style:{},children:[(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"completion_tokens"})}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:(0,l.jsx)(s.p,{children:"object"})})]}),(0,l.jsx)("div",{style:{marginLeft:"1rem"}}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"badge badge--info",children:(0,l.jsx)(s.p,{children:"anyOf"})}),(0,l.jsx)(u(),{children:(0,l.jsx)(g.default,{label:"MOD1",value:"0-item-properties",children:(0,l.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"integer"})})})})]})]})}),(0,l.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsxs)("summary",{style:{},children:[(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"output_tokens"})}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:(0,l.jsx)(s.p,{children:"object"})})]}),(0,l.jsx)("div",{style:{marginLeft:"1rem"}}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"badge badge--info",children:(0,l.jsx)(s.p,{children:"anyOf"})}),(0,l.jsx)(u(),{children:(0,l.jsx)(g.default,{label:"MOD1",value:"0-item-properties",children:(0,l.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"integer"})})})})]})]})}),(0,l.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsxs)("summary",{style:{},children:[(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"requests"})}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:(0,l.jsx)(s.p,{children:"object"})})]}),(0,l.jsx)("div",{style:{marginLeft:"1rem"}}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"badge badge--info",children:(0,l.jsx)(s.p,{children:"anyOf"})}),(0,l.jsx)(u(),{children:(0,l.jsx)(g.default,{label:"MOD1",value:"0-item-properties",children:(0,l.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"integer"})})})})]})]})}),(0,l.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsxs)("summary",{style:{},children:[(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"total_tokens"})}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:(0,l.jsx)(s.p,{children:"object"})})]}),(0,l.jsx)("div",{style:{marginLeft:"1rem"}}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"badge badge--info",children:(0,l.jsx)(s.p,{children:"anyOf"})}),(0,l.jsx)(u(),{children:(0,l.jsx)(g.default,{label:"MOD1",value:"0-item-properties",children:(0,l.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"integer"})})})})]})]})})]})]})})})]})}),(0,l.jsx)(j(),{name:"property name*",required:!1,schemaName:"any",qualifierMessage:void 0,schema:{properties:{usage:{additionalProperties:{properties:{prompt_tokens:{anyOf:[{type:"integer"},{type:"null"}],title:"Prompt Tokens"},input_tokens:{anyOf:[{type:"integer"},{type:"null"}],title:"Input Tokens"},completion_tokens:{anyOf:[{type:"integer"},{type:"null"}],title:"Completion Tokens"},output_tokens:{anyOf:[{type:"integer"},{type:"null"}],title:"Output Tokens"},requests:{anyOf:[{type:"integer"},{type:"null"}],title:"Requests"},total_tokens:{anyOf:[{type:"integer"},{type:"null"}],title:"Total Tokens"}},type:"object",title:"LLMUsageSchema"},type:"object",title:"Usage"}},additionalProperties:!0,type:"object",title:"SummaryInsertMap"},collapsible:!1,discriminator:!1})]})]})})]})]})})})]})})]})]})]}),(0,l.jsx)("li",{children:(0,l.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,l.jsx)(s.p,{children:"]"})})})]})]})})})]})})}),"\n",(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsxs)(r(),{label:void 0,id:void 0,children:[(0,l.jsxs)(g.default,{label:"200",value:"200",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Successful Response"})}),(0,l.jsx)("div",{children:(0,l.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(g.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(u(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsxs)("span",{className:"openapi-schema__container",children:[(0,l.jsx)("strong",{className:"openapi-schema__property",children:(0,l.jsx)(s.p,{children:"res"})}),(0,l.jsx)("span",{className:"openapi-schema__name",children:(0,l.jsx)(s.p,{children:"object[]"})}),(0,l.jsx)("span",{className:"openapi-schema__divider"}),(0,l.jsx)("span",{className:"openapi-schema__required",children:(0,l.jsx)(s.p,{children:"required"})})]})}),(0,l.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,l.jsx)("li",{children:(0,l.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"Array ["})})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"badge badge--info",children:(0,l.jsx)(s.p,{children:"anyOf"})}),(0,l.jsxs)(u(),{children:[(0,l.jsxs)(g.default,{label:"CallStartRes",value:"0-item-properties",children:[(0,l.jsx)(j(),{collapsible:!1,name:"id",required:!0,schemaName:"Id (string)",qualifierMessage:void 0,schema:{type:"string",title:"Id"}}),(0,l.jsx)(j(),{collapsible:!1,name:"trace_id",required:!0,schemaName:"Trace Id (string)",qualifierMessage:void 0,schema:{type:"string",title:"Trace Id"}})]}),(0,l.jsx)(g.default,{label:"CallEndRes",value:"1-item-properties",children:(0,l.jsx)(j(),{collapsible:!1,name:"",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{}})})]})]}),(0,l.jsx)("li",{children:(0,l.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,l.jsx)(s.p,{children:"]"})})})]})]})})})]})}),(0,l.jsx)(g.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(p(),{responseExample:'{\n  "res": [\n    {},\n    {}\n  ]\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(g.default,{label:"422",value:"422",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Validation Error"})}),(0,l.jsx)("div",{children:(0,l.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(g.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(u(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsxs)("span",{className:"openapi-schema__container",children:[(0,l.jsx)("strong",{className:"openapi-schema__property",children:(0,l.jsx)(s.p,{children:"detail"})}),(0,l.jsx)("span",{className:"openapi-schema__name",children:(0,l.jsx)(s.p,{children:"object[]"})})]})}),(0,l.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,l.jsx)("li",{children:(0,l.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"Array ["})})}),(0,l.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsxs)("span",{className:"openapi-schema__container",children:[(0,l.jsx)("strong",{className:"openapi-schema__property",children:(0,l.jsx)(s.p,{children:"loc"})}),(0,l.jsx)("span",{className:"openapi-schema__name",children:(0,l.jsx)(s.p,{children:"object[]"})}),(0,l.jsx)("span",{className:"openapi-schema__divider"}),(0,l.jsx)("span",{className:"openapi-schema__required",children:(0,l.jsx)(s.p,{children:"required"})})]})}),(0,l.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,l.jsx)("li",{children:(0,l.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"Array ["})})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"badge badge--info",children:(0,l.jsx)(s.p,{children:"anyOf"})}),(0,l.jsxs)(u(),{children:[(0,l.jsx)(g.default,{label:"MOD1",value:"0-item-properties",children:(0,l.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"string"})})}),(0,l.jsx)(g.default,{label:"MOD2",value:"1-item-properties",children:(0,l.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"integer"})})})]})]}),(0,l.jsx)("li",{children:(0,l.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,l.jsx)(s.p,{children:"]"})})})]})]})}),(0,l.jsx)(j(),{collapsible:!1,name:"msg",required:!0,schemaName:"Message (string)",qualifierMessage:void 0,schema:{type:"string",title:"Message"}}),(0,l.jsx)(j(),{collapsible:!1,name:"type",required:!0,schemaName:"Error Type (string)",qualifierMessage:void 0,schema:{type:"string",title:"Error Type"}}),(0,l.jsx)("li",{children:(0,l.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,l.jsx)(s.p,{children:"]"})})})]})]})})})]})}),(0,l.jsx)(g.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(p(),{responseExample:'{\n  "detail": [\n    {\n      "loc": [\n        "string",\n        0\n      ],\n      "msg": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json"})})]})})})})]})]})})})]})}function B(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(k,{...e})}):k(e)}},13155:(e,s,a)=>{a.r(s),a.d(s,{default:()=>C});var l=a(67294),i=a(72389),n=a(90512),r=a(66412),c=a(35281),t=a(37016);const d={codeBlockContainer:"codeBlockContainer_APcc"};var o=a(85893);function m(e){let{as:s,...a}=e;const l=(0,r.p)(),i=(0,t.QC)(l);return(0,o.jsx)(s,{...a,style:i,className:(0,n.Z)(a.className,d.codeBlockContainer,c.k.common.codeBlock)})}const p={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"};function h(e){let{children:s,className:a}=e;return(0,o.jsx)(m,{as:"pre",tabIndex:0,className:(0,n.Z)(p.codeBlockStandalone,"thin-scrollbar",a),children:(0,o.jsx)("code",{className:p.codeBlockLines,children:s})})}var j=a(86668),x=a(85448),u=a(42573);const y={codeLine:"codeLine_iPqp",codeLineNumber:"codeLineNumber_F4P7",codeLineContent:"codeLineContent_pOih"};function g(e){let{line:s,classNames:a,showLineNumbers:l,getLineProps:i,getTokenProps:r}=e;1===s.length&&"\n"===s[0].content&&(s[0].content="");const c=i({line:s,className:(0,n.Z)(a,l&&y.codeLine)}),t=s.map(((e,s)=>(0,o.jsx)("span",{...r({token:e,key:s})},s)));return(0,o.jsxs)("span",{...c,children:[l?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:y.codeLineNumber}),(0,o.jsx)("span",{className:y.codeLineContent,children:t})]}):t,(0,o.jsx)("br",{})]})}var b=a(10195),_=a(95999),f=a(30345),N=a(37666);const v={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function k(e){let{code:s,className:a}=e;const[i,r]=(0,l.useState)(!1),c=(0,l.useRef)(void 0),t=(0,l.useCallback)((()=>{window.analytics?.track("Weave Docs: Code copied",{code:"string"==typeof s?s.slice(0,100):"code is not string"}),(0,b.default)(s),r(!0),c.current=window.setTimeout((()=>{r(!1)}),1e3)}),[s]);return(0,l.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),(0,o.jsx)("button",{type:"button","aria-label":i?(0,_.translate)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,_.translate)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,_.translate)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,n.Z)("clean-btn",a,v.copyButton,i&&v.copyButtonCopied),onClick:t,children:(0,o.jsxs)("span",{className:v.copyButtonIcons,"aria-hidden":"true",children:[(0,o.jsx)(f.Z,{className:v.copyButtonIcon}),(0,o.jsx)(N.Z,{className:v.copyButtonSuccessIcon})]})})}var B=a(96043);const w={wordWrapButtonIcon:"wordWrapButtonIcon_iowe",wordWrapButtonEnabled:"wordWrapButtonEnabled_gY8A"};function L(e){let{className:s,onClick:a,isEnabled:l}=e;const i=(0,_.translate)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,o.jsx)("button",{type:"button",onClick:a,className:(0,n.Z)("clean-btn",s,l&&w.wordWrapButtonEnabled),"aria-label":i,title:i,children:(0,o.jsx)(B.Z,{className:w.wordWrapButtonIcon,"aria-hidden":"true"})})}function T(e){let{children:s,className:a="",metastring:l,title:i,showLineNumbers:c,language:d}=e;const{prism:{defaultLanguage:h,magicComments:y}}=(0,j.L)(),b=function(e){return e?.toLowerCase()}(d??(0,t.Vo)(a)??h),_=(0,r.p)(),f=(0,x.F)(),N=(0,t.bc)(l)||i,{lineClassNames:v,code:B}=(0,t.nZ)(s,{metastring:l,language:b,magicComments:y}),w=c??(0,t.nt)(l);return(0,o.jsxs)(m,{as:"div",className:(0,n.Z)(a,b&&!a.includes(`language-${b}`)&&`language-${b}`),children:[N&&(0,o.jsx)("div",{className:p.codeBlockTitle,children:N}),(0,o.jsxs)("div",{className:p.codeBlockContent,children:[(0,o.jsx)(u.Highlight,{theme:_,code:B,language:b??"text",children:e=>{let{className:s,style:a,tokens:l,getLineProps:i,getTokenProps:r}=e;return(0,o.jsx)("pre",{tabIndex:0,ref:f.codeBlockRef,className:(0,n.Z)(s,p.codeBlock,"thin-scrollbar"),style:a,children:(0,o.jsx)("code",{className:(0,n.Z)(p.codeBlockLines,w&&p.codeBlockLinesWithNumbering),children:l.map(((e,s)=>(0,o.jsx)(g,{line:e,getLineProps:i,getTokenProps:r,classNames:v[s],showLineNumbers:w},s)))})})}}),(0,o.jsxs)("div",{className:p.buttonGroup,children:[(f.isEnabled||f.isCodeScrollable)&&(0,o.jsx)(L,{className:p.codeButton,onClick:()=>f.toggle(),isEnabled:f.isEnabled}),(0,o.jsx)(k,{className:p.codeButton,code:B})]})]})]})}function C(e){let{children:s,...a}=e;const n=(0,i.default)(),r=function(e){return l.Children.toArray(e).some((e=>(0,l.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(s),c="string"==typeof r?T:h;return(0,o.jsx)(c,{...a,children:r},String(n))}}}]);