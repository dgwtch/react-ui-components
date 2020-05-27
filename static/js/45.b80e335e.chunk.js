(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[45],{303:function(e,t,a){"use strict";a.r(t);for(var n=a(2),r=a(0),o=a.n(r),l=a(3),i=a(47),c=[{property:"items",description:"Pass the items",default:"",type:"string[] | number[] | object[]",value:""},{property:"itemTitles",description:"Set items keys that should be rendered",default:"",type:"string[]",value:""},{property:"headers",description:"Set table headers title",default:"",type:"string[]",value:""},{property:"alignment",description:"Set table data alignment",default:"left",type:"string",value:"left | center | right"},{property:"tableTitle",description:"Set table title",default:"",type:"ReactNode",value:""},{property:"controls",description:"Set table row controls",default:"",type:"ReactNode",value:""},{property:"searchable",description:"Enable table data searching",default:"false",type:"boolean",value:"true | false"},{property:"searchKey",description:"Set searching column key",default:"",type:"string",value:""},{property:"pagination",description:"Add pagination to table",default:"false",type:"boolean",value:"true | false"},{property:"paginationDense",description:"Set pagination density",default:"false",type:"boolean",value:"true | false"},{property:"paginationPosition",description:"Set pagination block position",default:"left",type:"string",value:"left | right"},{property:"perPageOptions",description:"Set per page options",default:"[10, 20, 50, 100]",type:"number[]",value:""},{property:"onPerPageSelect",description:"Invokes on per page selection (return perPage value)",default:"",type:"function",value:""},{property:"paginationColor",description:"Set pagination color",default:"primary",type:"string",value:"primary | info | success | error"},{property:"itemsTotal",description:"Required if you use pagination prop",default:"0",type:"number",value:""},{property:"checkbox",description:"Set checkboxes",default:"false",type:"boolean",value:"true | false"},{property:"selectKey",description:"Set select key for activate row selection with checkbox",default:"",type:"string",value:""},{property:"onSelect",description:"Invokes on table row select (has effect with checkbox prop, returns selected rows array)",default:"",type:"function",value:""},{property:"sortable",description:"Set sorting filters on table header (sort asc | desc)",default:"false",type:"boolean",value:"true | false"},{property:"size",description:"Set table rows size",default:"",type:"string",value:"medium | large"},{property:"indexSign",description:"Set order index sign in table header",default:"#",type:"string",value:""},{property:"stripped",description:"Highlight every even row in table",default:"false",type:"boolean",value:"true | false"},{property:"color",description:"Set table color set",default:"",type:"string",value:"primary | info | success | error"},{property:"footer",description:"Set table footer (auto set on checkbox prop)",default:"",type:"any",value:""},{property:"ref",description:"Set ref",default:"",type:"ReactRefObject",value:""},{property:"id",description:"Set an html id to component",default:"",type:"string",value:""},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],s=[],p=0;p<100;p++)s.push({name:"Product ".concat(p+1),price:"$ ".concat(Math.ceil(1e3*Math.random())),count:Math.ceil(500*Math.random())});var u=["default","primary","info","success","error"],m=["left","center","right"],d=["format-align-left","format-align-center","format-align-right"];t.default=function(){var e=Object(r.useState)(u[0]),t=Object(n.a)(e,2),a=t[0],p=t[1],b=Object(r.useState)(!1),y=Object(n.a)(b,2),f=y[0],g=y[1],h=Object(r.useState)(!1),v=Object(n.a)(h,2),S=v[0],E=v[1],O=Object(r.useState)(!0),k=Object(n.a)(O,2),j=k[0],N=k[1],T=Object(r.useState)(!0),C=Object(n.a)(T,2),x=C[0],P=C[1],w=Object(r.useState)(!1),L=Object(n.a)(w,2),B=L[0],M=L[1],R=Object(r.useState)(!0),K=Object(n.a)(R,2),D=K[0],I=K[1],z=Object(r.useState)(!1),$=Object(n.a)(z,2),H=$[0],U=$[1],A=Object(r.useState)(!1),J=Object(n.a)(A,2),q=J[0],G=J[1],V=Object(r.useState)(!0),F=Object(n.a)(V,2),Q=F[0],W=F[1],X=Object(r.useState)(!0),Y=Object(n.a)(X,2),Z=Y[0],_=Y[1],ee=Object(r.useState)(m[0]),te=Object(n.a)(ee,2),ae=te[0],ne=te[1];return o.a.createElement(l.T.Consumer,null,(function(e){return o.a.createElement(i.a,{usage:'// Usage examples\nimport React, { useState } from \'react\';\nimport { Table, Button, Tooltip } from \'@assenti/rui-components\';\n\nlet goods = []\nfor (let i = 0; i < 100; i++) {\n    goods.push({\n        name: Product ${i+1},\n        price: $ ${Math.ceil(Math.random() * 1000)},\n        count: Math.ceil(Math.random() * 500)\n    })\n}\n\nfunction Example() {\n    return (\n        <>\n            <Table\n                pagination\n                paginationPosition="right"\n                itemsTotal={goods.length}\n                stripped\n                index\n                sortable\n                selectKey="name"\n                checkbox\n                onSelect={(selected) => console.log(selected)}\n                color="primary"\n                headers={[\'Name\', \'Price\', \'Count\']}\n                items={goods}\n                itemTitles={[\'name\', \'price\', \'count\']}\n                controls={(item) =>\n                    controls ? \n                    <div className="row justify-center align-center">\n                        <Tooltip tooltip="Edit">\n                            <Button\n                                small\n                                color="light"\n                                className="mr-10"\n                                icon="edit"\n                                onClick={() => console.log(item, \'edited\')}>\n                            </Button>\n                        </Tooltip>\n                        <Tooltip tooltip="Delete">\n                            <Button\n                                small\n                                color="light"\n                                icon="delete"\n                                onClick={() => console.log(item, \'deleted\')}>\n                            </Button> \n                        </Tooltip>\n                    </div> : null\n                }\n                />\n        </>\n    )\n}',backTopBtn:!0,apiSearchable:!0,componentName:"<Table/>",apiDescItems:c},o.a.createElement("div",{className:"row align-bottom"},o.a.createElement(l.K,{items:u,dark:e,prefix:o.a.createElement(l.z,{name:"brush"}),width:200,label:"Table color theme",color:"primary",className:"my-0",value:a,onChange:function(e){return p(e)}})),o.a.createElement("br",null),o.a.createElement(l.O,{color:"primary",check:f,className:"mb-10",rightLabel:"Grid",onChange:function(){return g(!f)}}),o.a.createElement(l.O,{color:"primary",check:S,className:"my-10",rightLabel:"Checkbox",onChange:function(){return E(!S)}}),o.a.createElement(l.O,{color:"primary",check:q,className:"my-10",rightLabel:"Stripped",onChange:function(){return G(!q)}}),o.a.createElement("br",null),o.a.createElement(l.O,{color:"primary",check:H,className:"my-10",rightLabel:"Table title",onChange:function(){return U(!H)}}),o.a.createElement(l.O,{color:"primary",check:j,className:"my-10",rightLabel:"Bordered",onChange:function(){return N(!j)}}),o.a.createElement("br",null),o.a.createElement(l.O,{color:"primary",check:x,className:"my-10",rightLabel:"Set index",onChange:function(){return P(!x)}}),o.a.createElement(l.O,{color:"primary",check:B,className:"my-10",rightLabel:"Searchable",onChange:function(){return M(!B)}}),o.a.createElement("br",null),o.a.createElement(l.O,{color:"primary",check:Q,className:"my-10",rightLabel:"No Hover",onChange:function(){return W(!Q)}}),o.a.createElement(l.O,{color:"primary",check:D,className:"my-10",rightLabel:"Sortable",onChange:function(){return I(!D)}}),o.a.createElement(l.O,{color:"primary",check:Z,className:"my-10",rightLabel:"Pagination",onChange:function(){return _(!Z)}}),o.a.createElement("div",{className:"row justify-end"},o.a.createElement(l.i,{default:0,icon:!0,onChange:function(e,t){return ne(m[t])},className:"ml-10",options:d})),o.a.createElement(l.r,null),o.a.createElement("br",null),o.a.createElement(l.P,{noHover:Q,pagination:Z,paginationPosition:"right",itemsTotal:s.length,stripped:q,grid:f,dark:e,index:x,sortable:D,tableTitle:H?o.a.createElement("h2",null,"Table title"):"",alignment:ae,searchable:B,searchKey:"name",selectKey:"name",checkbox:S,onSelect:function(e){return console.log(e)},color:a,bordered:j,headers:["Name","Price","Count"],items:s,itemTitles:["name","price","count"]}))}))}},47:function(e,t,a){"use strict";var n=a(2),r=a(0),o=a.n(r),l=a(3),i=a(343),c=a(291),s=a(292),p=["property","description","default","type","value"];t.a=function(e){var t=Object(r.useRef)(),a=Object(r.useState)(!1),u=Object(n.a)(a,2),m=u[0],d=u[1];return o.a.createElement(l.T.Consumer,null,(function(a){return o.a.createElement("div",{className:"rui-page",ref:t},o.a.createElement("div",{className:"rui-page-title"},e.componentName," Component"),o.a.createElement(l.k,{dark:a,header:o.a.createElement("h4",null,"Usage")},e.children,o.a.createElement(l.n,{className:"mt-10",extra:o.a.createElement(l.o,{defaultText:"Copy code",text:e.usage,dark:a}),onChange:function(e){return d(e)},customToggler:o.a.createElement(l.h,{className:"ml-20",name:m?"Close":"Open",icon:"code",color:"info"}),dark:a},o.a.createElement(i.a,{language:"jsx",style:a?c.a:s.a},e.usage))),e.backTopBtn?o.a.createElement(l.e,{dark:!0,setRef:t,size:"medium",tooltip:"Up"}):null,o.a.createElement(l.k,{className:"mt-10"},o.a.createElement(l.P,{tableTitle:o.a.createElement("h2",null,"API"),dark:a,headers:["Property","Description","Default","Type","Value"],items:e.apiDescItems,index:!0,bordered:!0,searchable:e.apiSearchable,searchKey:"property",itemTitles:p})))}))}}}]);