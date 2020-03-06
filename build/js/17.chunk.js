(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[17],{299:function(e,t,o){"use strict";o.r(t);var a=o(1),n=o(0),r=o.n(n),i=o(3),l=o(311),p=o(271),s=["property","description","default","type","value"],c=[{property:"text",description:"Set text that should be copied",default:"",type:"string",value:""},{property:"icon",description:"Set custom icon from icons list",default:"content-copy",type:"string",value:""},{property:"size",description:"Set icon size",default:"16px",type:"number",value:""},{property:"color",description:"Set icon color",default:"gray",type:"string",value:""},{property:"defaultText",description:"Set tooltip default text",default:"Copy",type:"string",value:""},{property:"copiedText",description:"Set tooltip copied text",default:"Copied to clipboard",type:"string",value:""},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:"hex | rgb() | css preset colors"}],d="// Usage examples\nimport React from 'react';\nimport { CopyToClipboard, InputField } from '@assenti/react-ui-components';\nconst text = 'Some text';\n\nfunction Example() {\n    return (\n        <div className=\"row align-center\">\n            <InputField color=\"info\" readOnly value={text} width={200}/>\n            <CopyToClipboard text={text} className=\"ml-10\"/>\n        </div>\n    )\n}";t.default=function(){var e=Object(n.useState)("Some text"),t=Object(a.a)(e,2),o=t[0],u=t[1];return r.a.createElement("div",{className:"rui-page"},r.a.createElement("div",{className:"rui-page-title"},"CopyToClipboard Component"),r.a.createElement(i.g,{outlined:!0,title:"Collapse Component usage"},r.a.createElement("div",{className:"row align-center"},r.a.createElement(i.q,{color:"info",onChange:function(e){return u(e.target.value)},value:o,width:200}),r.a.createElement(i.j,{text:o,className:"ml-10"})),r.a.createElement(i.i,{icon:"code",iconSize:18,extra:r.a.createElement(i.j,{defaultText:"Copy code",text:d,className:"mr-10"}),contentStyles:{padding:0},tooltip:"Show/Hide Code"},r.a.createElement(l.a,{language:"jsx",style:p.a},d))),r.a.createElement("h2",null,"API"),r.a.createElement(i.C,{bordered:!0,headers:["Property","Descriprion","Default","Type","Value"],items:c,index:!0,itemTitles:s}))}}}]);
//# sourceMappingURL=17.chunk.js.map