(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[7],{282:function(e,t,a){e.exports=a.p+"static/media/slide1.5224be5c.jpg"},283:function(e,t,a){e.exports=a.p+"static/media/slide2.a834a990.jpg"},284:function(e,t,a){e.exports=a.p+"static/media/slide3.2a435fab.jpg"},293:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),i=a.n(r),l=a(3),o=a(282),s=a.n(o),c=a(283),u=a.n(c),p=a(284),m=a.n(p),d=a(47),f=[{property:"items",description:"Carousel slides",default:"",type:"{ img: string, title: string }",value:""},{property:"onClick",description:"Invokes on slide click",default:"",type:"function",value:""},{property:"height",description:"Set Carousel height",default:"",type:"string | number",value:""},{property:"width",description:"Set Carousel width",default:"",type:"string | number",value:""},{property:"hideArrows",description:"Hide arrows",default:"false",type:"boolean",value:"true | false"},{property:"hideDots",description:"Hide dots",default:"false",type:"boolean",value:"true | false"},{property:"autoMotion",description:"Enable Carousel auto motion",default:"false",type:"boolean",value:"true | false"},{property:"interval",description:"Set Carousel slides change motion interval",default:"3000ms",type:"number",value:""},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}];t.default=function(){var e=[{img:s.a,title:"Slide 1"},{img:u.a,title:"Slide 2"},{img:m.a,title:"Slide 3"}],t=Object(r.useState)(!1),a=Object(n.a)(t,2),o=a[0],c=a[1],p=Object(r.useState)(!1),g=Object(n.a)(p,2),h=g[0],y=g[1];return i.a.createElement(l.T.Consumer,null,(function(t){return i.a.createElement(d.a,{usage:"// Usage example\nimport React from 'react';\nimport { Carousel } from '../components';\nimport slide1 from 'path/to/images/slide1.jpg';\nimport slide2 from 'path/to/images/slide2.jpg';\nimport slide3 from 'path/to/images/slide3.jpg';\n\nfunction Example() {\n    const slides = [\n        { img: slide1, title: 'Slide 1' },\n        { img: slide2, title: 'Slide 2' },\n        { img: slide3, title: 'Slide 3' }\n    ]\n\n    return (\n        <>\n            <Carousel \n                height={400}\n                autoMotion\n                items={slides}/>\n        </>\n    )\n}",apiDescItems:f,componentName:"<Carousel/>"},i.a.createElement(l.O,{color:"primary",check:o,rightLabel:"Hide arrows",className:"my-10",onChange:function(){return c(!o)}}),i.a.createElement(l.O,{color:"primary",check:h,rightLabel:"Hide dots",className:"my-10",onChange:function(){return y(!h)}}),i.a.createElement("br",null),i.a.createElement(l.r,null),i.a.createElement(l.l,{height:400,autoMotion:!0,hideArrows:o,onClick:function(e,t){return console.log(e,t)},hideDots:h,items:e}))}))}},47:function(e,t,a){"use strict";var n=a(2),r=a(0),i=a.n(r),l=a(3),o=a(343),s=a(291),c=a(292),u=["property","description","default","type","value"];t.a=function(e){var t=Object(r.useRef)(),a=Object(r.useState)(!1),p=Object(n.a)(a,2),m=p[0],d=p[1];return i.a.createElement(l.T.Consumer,null,(function(a){return i.a.createElement("div",{className:"rui-page",ref:t},i.a.createElement("div",{className:"rui-page-title"},e.componentName," Component"),i.a.createElement(l.k,{dark:a,header:i.a.createElement("h4",null,"Usage")},e.children,i.a.createElement(l.n,{className:"mt-10",extra:i.a.createElement(l.o,{defaultText:"Copy code",text:e.usage,dark:a}),onChange:function(e){return d(e)},customToggler:i.a.createElement(l.h,{className:"ml-20",name:m?"Close":"Open",icon:"code",color:"info"}),dark:a},i.a.createElement(o.a,{language:"jsx",style:a?s.a:c.a},e.usage))),e.backTopBtn?i.a.createElement(l.e,{dark:!0,setRef:t,size:"medium",tooltip:"Up"}):null,i.a.createElement(l.k,{className:"mt-10"},e.apiDescItems.length>0&&i.a.createElement(l.P,{tableTitle:i.a.createElement("h2",null,"API"),dark:a,headers:["Property","Description","Default","Type","Value"],items:e.apiDescItems,index:!0,bordered:!0,searchable:e.apiSearchable,searchKey:"property",itemTitles:u}),e.content))}))}}}]);