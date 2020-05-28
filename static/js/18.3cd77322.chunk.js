(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[18],{338:function(e,t,n){"use strict";n.r(t);var o=n(2),i=n(0),a=n.n(i),r=n(3),l=n(50),c=n.n(l),s=n(47),m=[{title:"WhatsApp",icon:"whatsapp",iconColor:"#25D366"},{title:"Account",icon:"",iconColor:"",img:c.a},{title:"Facebook",icon:"facebook",iconColor:"#3b5998"},{title:"LinkedIn",icon:"linkedin",iconColor:"#007bb6"},{title:"Instagram",icon:"instagram",iconColor:"#8134AF"},{divider:!0},{title:"Github",icon:"github",iconColor:"#4d4d4d"},{title:"Gitlab",icon:"gitlab",iconColor:"#fc6d26"},{divider:!0},{title:"Trash",icon:"delete",iconColor:"#4d4d4d"}],p=["top","bottom","left","right"],u=[{property:"onItemClick",description:"Handle item click in Dock (return item)",default:"",type:"function",value:""},{property:"items",description:"Dock content items",default:"",type:"[{ title?: string, icon?: string, iconColor?: string, img?: string, divider?: boolean }]",value:""},{property:"itemSize",description:"Set Dock items size",default:"60px",type:"number",value:""},{property:"iconSize",description:"Set Dock items icon size",default:"40px",type:"number",value:""},{property:"visible",description:"Visible state",default:"false",type:"boolean",value:"true | false"},{property:"position",description:"Set Dock position",default:"bottom",type:"string",value:"top | bottom | left | right"},{property:"length",description:"Set Dock length (Horizontal: width; Vertical: Height)",default:"",type:"number | string",value:""},{property:"dark",description:"Set dark mode",default:"false",type:"boolean",value:"true | false"},{property:"tile",description:"Set tile borders type",default:"false",type:"boolean",value:"true | false"}];t.default=function(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),n=t[0],l=t[1],c=Object(i.useState)(!1),d=Object(o.a)(c,2),b=d[0],f=d[1],k=Object(i.useState)("top"),g=Object(o.a)(k,2),h=g[0],y=g[1];return a.a.createElement(r.T.Consumer,null,(function(e){return a.a.createElement(s.a,{usage:"// Usage examples\nimport React, { useState } from 'react';\nimport { Dock, Button } from '@assenti/react-ui-components';\nconst positions = ['top','bottom','left','right'];\nconst dockItems = [\n    { title: 'WhatsApp', icon: 'whatsapp', iconColor: '#25D366' },\n    { title: 'Account', icon: '', iconColor: '', img: manImage },\n    { title: 'Facebook', icon: 'facebook', iconColor: '#3b5998' },\n    { title: 'LinkedIn', icon: 'linkedin', iconColor: '#007bb6' },\n    { title: 'Instagram', icon: 'instagram', iconColor: '#8134AF' },\n    { divider: true },\n    { title: 'Github', icon: 'github', iconColor: '#4d4d4d' },\n    { title: 'Gitlab', icon: 'gitlab', iconColor: '#fc6d26' },\n    { divider: true },\n    { title: 'Trash', icon: 'delete', iconColor: '#4d4d4d' }\n]\n\nfunction Example() {\n    const [dock, setDock] = useState(false);\n\n    return (\n        <>\n            <Button \n                name=\"Switch Dock\" \n                color=\"primary\"\n                onClick={() => setDock(!dock)}/>\n            <Dock \n                items={dockItems}\n                length={500}\n                onItemClick={item => {\n                    console.log(item)\n                    setDock(false)\n                }}\n                visible={dock}/>\n        </>\n    )\n}",componentName:"<Dock/>",apiDescItems:u},a.a.createElement("p",null,"Inspired by macOS Dock toolbar"),a.a.createElement("br",null),a.a.createElement(r.K,{items:p,prefix:a.a.createElement(r.z,{name:"chart-ppf"}),width:200,dark:e,label:"Position",color:"primary",className:"my-10",value:h,onChange:function(e){return y(e)}}),a.a.createElement("br",null),a.a.createElement(r.O,{color:"primary",check:b,rightLabel:"Tile borders type",className:"my-10",onChange:function(){return f(!b)}}),a.a.createElement("br",null),a.a.createElement(r.r,null),a.a.createElement(r.h,{name:"Switch Dock",color:"primary",onClick:function(){return l(!n)}}),a.a.createElement(r.s,{items:m,length:500,tile:b,dark:e,onItemClick:function(e){console.log(e),l(!1)},visible:n,position:h}))}))}},47:function(e,t,n){"use strict";var o=n(2),i=n(0),a=n.n(i),r=n(3),l=n(343),c=n(291),s=n(292),m=["property","description","default","type","value"];t.a=function(e){var t=Object(i.useRef)(),n=Object(i.useState)(!1),p=Object(o.a)(n,2),u=p[0],d=p[1];return a.a.createElement(r.T.Consumer,null,(function(n){return a.a.createElement("div",{className:"rui-page",ref:t},a.a.createElement("div",{className:"rui-page-title"},e.componentName," Component"),a.a.createElement(r.k,{dark:n,header:a.a.createElement("h4",null,"Usage")},e.children,a.a.createElement(r.n,{className:"mt-10",extra:a.a.createElement(r.o,{defaultText:"Copy code",text:e.usage,dark:n}),onChange:function(e){return d(e)},customToggler:a.a.createElement(r.h,{className:"ml-20",name:u?"Close":"Open",icon:"code",color:"info"}),dark:n},a.a.createElement(l.a,{language:"jsx",style:n?c.a:s.a},e.usage))),e.backTopBtn?a.a.createElement(r.e,{dark:!0,setRef:t,size:"medium",tooltip:"Up"}):null,a.a.createElement(r.k,{className:"mt-10"},e.apiDescItems.length>0&&a.a.createElement(r.P,{tableTitle:a.a.createElement("h2",null,"API"),dark:n,headers:["Property","Description","Default","Type","Value"],items:e.apiDescItems,index:!0,bordered:!0,searchable:e.apiSearchable,searchKey:"property",itemTitles:m}),e.content))}))}},50:function(e,t,n){e.exports=n.p+"static/media/man.e941ef11.png"}}]);