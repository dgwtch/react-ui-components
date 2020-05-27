(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[22],{329:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(0),c=a.n(n),i=a(3),o=a(47),s=[{property:"crumbs",description:"Pass items",default:"",type:"array",value:"return a button click event object"},{property:"itemKey",description:"Set item key if you pass array of objects",default:"",type:"string",value:""},{property:"urlKey",description:"Set url key if you pass array of objects",default:"",type:"string",value:""},{property:"icon",description:"Set icon key if you pass array of objects",default:"",type:"string",value:""},{property:"isActive",description:"Set active crumb (return item and index)",default:"",type:"function",value:"true | false"},{property:"onChange",description:"Invokes on crumb click (return item and index)",default:"",type:"function",value:""},{property:"color",description:"Set color",default:"info",type:"string",value:"primary | info | success | error | dark | secondary"},{property:"size",description:"Set breadcrumbs size",default:"",type:"string",value:"medium | large"},{property:"position",description:"Set breadcrumbs position",default:"left",type:"string",value:"center | right"},{property:"delimiter",description:"Set your custom delimiter",default:"/",type:"any",value:""},{property:"dark",description:"Set dark mode",default:"false",type:"boolean",value:"true | false"},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],l=["default","medium","large"],u=["primary","info","success","error","dark","secondary"],m=["default","center","right"],p=[{item:"Home",url:"#/breadcrumbs",icon:"home"},{item:"Section",url:"#/breadcrumbs",icon:"credit-card"},{item:"Module",url:"#/breadcrumbs",icon:"help-circle-outline"}];t.default=function(){var e=Object(n.useState)(l[0]),t=Object(r.a)(e,2),a=t[0],d=t[1],y=Object(n.useState)(u[0]),f=Object(r.a)(y,2),b=f[0],h=f[1],g=Object(n.useState)(0),v=Object(r.a)(g,2),E=v[0],k=v[1],S=Object(n.useState)(m[0]),j=Object(r.a)(S,2),x=j[0],N=j[1],O=Object(n.useState)(!1),C=Object(r.a)(O,2),K=C[0],z=C[1];return c.a.createElement(i.T.Consumer,null,(function(e){return c.a.createElement(o.a,{usage:"// Usage examples\nimport React, { useState } from 'react';\nimport { Breadcrumbs } from '@assenti/react-ui-components';\nconst crumbs = [\n    { item: 'Home', url: '', icon: 'home' },\n    { item: 'Section', url: '', icon: 'credit-card' },\n    { item: 'Module', url: '', icon: 'help-circle-outline'}\n]\n\nfunction Example() {\n    const [active, setActive] = useState(0);\n\n    return (\n        <>\n            <Breadcrumbs\n                itemKey=\"item\"\n                urlKey=\"url\"\n                icon=\"icon\"\n                onChange={(item, index) => setActive(index)}\n                isActive={(item, index) => index === active} \n                crumbs={crumbs}/>\n        </>\n    )\n}",componentName:"<Breadcrumbs/>",apiDescItems:s},c.a.createElement(i.K,{items:l,dark:e,prefix:c.a.createElement(i.z,{name:"format-size"}),width:200,label:"Breadcrumbs size",color:"primary",className:"my-5",value:a,onChange:function(e){return d(e)}}),c.a.createElement("br",null),c.a.createElement(i.K,{items:u,dark:e,prefix:c.a.createElement(i.z,{name:"brush"}),width:200,label:"Breadcrumbs color",color:"primary",className:"my-5",value:b,onChange:function(e){return h(e)}}),c.a.createElement("br",null),c.a.createElement(i.K,{items:m,prefix:c.a.createElement(i.z,{name:"chart-ppf"}),width:200,dark:e,label:"Breadcrumbs position",color:"primary",className:"my-5",value:x,onChange:function(e){return N(e)}}),c.a.createElement("br",null),c.a.createElement(i.O,{check:K,color:"primary",rightLabel:"Icon",className:"my-10",onChange:function(){return z(!K)}}),c.a.createElement(i.r,{className:"my-20"}),c.a.createElement("div",{style:{minHeight:300}},c.a.createElement("div",{className:"pa-10"},c.a.createElement(i.g,{size:a,dark:e,color:b,position:x,itemKey:"item",urlKey:"url",icon:K?"icon":null,onChange:function(e,t){return k(t)},isActive:function(e,t){return t===E},crumbs:p})),c.a.createElement("h1",{className:"pa-10"},p[E].item)))}))}},47:function(e,t,a){"use strict";var r=a(2),n=a(0),c=a.n(n),i=a(3),o=a(343),s=a(291),l=a(292),u=["property","description","default","type","value"];t.a=function(e){var t=Object(n.useRef)(),a=Object(n.useState)(!1),m=Object(r.a)(a,2),p=m[0],d=m[1];return c.a.createElement(i.T.Consumer,null,(function(a){return c.a.createElement("div",{className:"rui-page",ref:t},c.a.createElement("div",{className:"rui-page-title"},e.componentName," Component"),c.a.createElement(i.k,{dark:a,header:c.a.createElement("h4",null,"Usage")},e.children,c.a.createElement(i.n,{className:"mt-10",extra:c.a.createElement(i.o,{defaultText:"Copy code",text:e.usage,dark:a}),onChange:function(e){return d(e)},customToggler:c.a.createElement(i.h,{className:"ml-20",name:p?"Close":"Open",icon:"code",color:"info"}),dark:a},c.a.createElement(o.a,{language:"jsx",style:a?s.a:l.a},e.usage))),e.backTopBtn?c.a.createElement(i.e,{dark:!0,setRef:t,size:"medium",tooltip:"Up"}):null,c.a.createElement(i.k,{className:"mt-10"},e.apiDescItems.length>0&&c.a.createElement(i.P,{tableTitle:c.a.createElement("h2",null,"API"),dark:a,headers:["Property","Description","Default","Type","Value"],items:e.apiDescItems,index:!0,bordered:!0,searchable:e.apiSearchable,searchKey:"property",itemTitles:u}),e.content))}))}}}]);