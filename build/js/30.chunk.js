(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[30],{302:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),o=a.n(r),s=a(3),i=a(317),u=a(271),c=["property","description","default","type","value"],l=[{property:"itemsCount",description:"Pass items total count",default:"",type:"number",value:""},{property:"perPageVariants",description:"Set per page preset variants",default:"[10, 20, 50, 100]",type:"number[]",value:""},{property:"perPage",description:"Set per page value",default:"10",type:"number",value:""},{property:"onPerPageSelect",description:"Invokes on per page selection (return perPage value)",default:"",type:"function",value:""},{property:"perPageText",description:'Set "10 / page" text',default:"page",type:"string",value:""},{property:"current",description:"Set pagination default current page",default:"1",type:"number",value:""},{property:"onChange",description:"Invokes on page selection (return page value)",default:"",type:"function",value:""},{property:"color",description:"Set color of pagination from list",default:"primary",type:"string",value:"primary | info | success | error"},{property:"rounded",description:"Make border radius rounded",default:"false",type:"boolean",value:"true | false"},{property:"size",description:"Set pagination size",default:"",type:"string",value:"medium | large"},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],p='// Usage examples\nimport React, { useState } from \'react\';\nimport { Pagination, InputField } from \'@assenti/rui-components\';\n\nfunction Example() {\n    const [itemsCount, setItemsCount] = useState(100);\n    const [perPage, setPerPage] = useState(10);\n    const [currentPage, setCurrentPage] = useState(1);\n\n    return (\n        <div>\n            <Pagination\n                itemsCount={itemsCount}\n                color="primary"\n                perPage={perPage}\n                current={currentPage}\n                onChange={page => setCurrentPage(page)}\n                onPerPageSelect={value => setPerPage(value)}\n                className="pa-5"\n                pageText="module"/>\n            <Pagination\n                itemsCount={itemsCount}\n                color="info"\n                current={currentPage}\n                onChange={page => setCurrentPage(page)}\n                className="pa-5"\n                perPage={perPage}\n                onPerPageSelect={value => setPerPage(value)}/>\n            <Pagination\n                itemsCount={itemsCount}\n                color="success"\n                className="pa-5"\n                current={currentPage}\n                onChange={page => setCurrentPage(page)}\n                perPage={perPage}\n                onPerPageSelect={value => setPerPage(value)}/>\n            <Pagination\n                itemsCount={itemsCount}\n                color="error"\n                perPage={perPage}\n                onPerPageSelect={value => setPerPage(value)}\n                className="pa-5"\n                current={currentPage}\n                onChange={page => setCurrentPage(page)}/>\n        </div>\n    )\n}\n',m=["primary","info","success","error"],g=["default","medium","large"];t.default=function(){var e=Object(r.useState)(100),t=Object(n.a)(e,1)[0],a=Object(r.useState)(10),d=Object(n.a)(a,2),P=d[0],f=d[1],y=Object(r.useState)(1),v=Object(n.a)(y,2),b=v[0],C=v[1],S=Object(r.useState)(m[0]),E=Object(n.a)(S,2),h=E[0],j=E[1],x=Object(r.useState)(g[0]),N=Object(n.a)(x,2),O=N[0],k=N[1],w=Object(r.useState)(!1),z=Object(n.a)(w,2),I=z[0],T=z[1],D=Object(r.useRef)();return o.a.createElement("div",{className:"rui-page",ref:D},o.a.createElement("div",{className:"row align-center space-between"},o.a.createElement("div",{className:"rui-page-title"},"<Pagination/>"," Component")),o.a.createElement(s.i,{outlined:!0,title:"Usage"},o.a.createElement(s.D,{items:m,prefix:o.a.createElement(s.r,{name:"brush"}),width:200,label:"Pagination color",color:"primary",className:"my-10",value:h,onChange:function(e){return j(e)}}),o.a.createElement("br",null),o.a.createElement(s.D,{items:g,prefix:o.a.createElement(s.r,{name:"format-size"}),width:200,label:"Pagination size",color:"primary",className:"my-10",value:O,onChange:function(e){return k(e)}}),o.a.createElement("br",null),o.a.createElement(s.E,{check:I,color:"primary",rightLabel:"Rounded",className:"my-10",onChange:function(){return T(!I)}}),o.a.createElement("br",null),o.a.createElement(s.x,{itemsCount:t,color:h,size:O,perPage:P,current:b,onChange:function(e){return C(e)},onPerPageSelect:function(e){return f(e)},className:"pa-5",rounded:I}),o.a.createElement(s.k,{icon:"code",iconSize:18,extra:o.a.createElement(s.l,{defaultText:"Copy code",text:p,className:"mr-10"}),tooltip:"Show/Hide Code"},o.a.createElement(i.a,{language:"jsx",style:u.a},p))),o.a.createElement(s.c,{size:"medium",dark:!0,setRef:D}),o.a.createElement("h2",null,"API"),o.a.createElement(s.F,{bordered:!0,headers:["Property","Description","Default","Type","Value"],items:l,index:!0,itemTitles:c}))}}}]);