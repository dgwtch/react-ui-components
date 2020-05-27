(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[34],{322:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(0),l=a.n(n),o=a(3),u=a(47),c=[{property:"onChange",description:"Handle input value change (return input change event object)",default:"",type:"function",value:""},{property:"onKeyUp",description:"Invokes on InputField any key pressed (return key change event object)",default:"",type:"function",value:""},{property:"onEnter",description:'Invokes on InputField "Enter" key pressed',default:"",type:"function",value:""},{property:"onFocus",description:"Invokes on focus (return key change event object)",default:"",type:"function",value:""},{property:"onBlur",description:"Invokes on blur (return key change event object)",default:"",type:"function",value:""},{property:"value",description:"Input value",default:"",type:"string | number",value:""},{property:"autoComplete",description:"Enable input autocomplete",default:"false",type:"boolean",value:"true | false"},{property:"name",description:"Set name prop for get all inputted values for autocomplete",default:"",type:"string",value:""},{property:"clearable",description:"Allow clear icon on value inputted",default:"false",type:"boolean",value:"true | false"},{property:"onClear",description:"Invokes on clear icon click",default:"",type:"function",value:""},{property:"lifted",description:"Lift up the input field",default:"false",type:"boolean",value:"true | false"},{property:"autoFocus",description:"Set input focus on component mounted",default:"false",type:"boolean",value:"true | false"},{property:"color",description:"Set color of input field from list",default:"primary",type:"string",value:"primary | info | success | error"},{property:"disabled",description:"Make input field disabled",default:"false",type:"boolean",value:"true | false"},{property:"borderType",description:"Set borders type",default:"",type:"string",value:"tile | smooth | rounded"},{property:"uppercase",description:"Transform text to upper case",default:"false",type:"boolean",value:"true | false"},{property:"size",description:"Set input field size",default:"",type:"string",value:"medium | large"},{property:"prefix",description:"Set prefix",default:"",type:"string | number | React.Node",value:""},{property:"suffix",description:"Set suffix",default:"",type:"string | number | React.Node",value:""},{property:"type",description:"Set input type",default:"text",type:"string",value:"text | password | number | email"},{property:"min",description:'Set min number (has effect with type="number")',default:"",type:"number",value:""},{property:"max",description:'Set max number (has effect with type="number")',default:"",type:"number",value:""},{property:"minLength",description:'Set min length for text (has effect with type="text")',default:"",type:"number",value:""},{property:"maxLength",description:'Set max length for text (has effect with type="text")',default:"",type:"number",value:""},{property:"required",description:"Set input required",default:"false",type:"boolean",value:"true | false"},{property:"readOnly",description:"Set input readOnly",default:"false",type:"boolean",value:"true | false"},{property:"whiteBackground",description:"Set input background color to white",default:"false",type:"boolean",value:"true | false"},{property:"style",description:"Set a custom inline styles",default:"",type:"object",value:""},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],i=["default","medium","large"],p=["primary","info","success","error"],s=["default","rounded","smooth","tile"];t.default=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],m=t[1],d=Object(n.useState)(""),f=Object(r.a)(d,2),b=f[0],y=f[1],h=Object(n.useState)(""),g=Object(r.a)(h,2),v=g[0],E=g[1],k=Object(n.useState)(""),O=Object(r.a)(k,2),S=O[0],j=O[1],x=Object(n.useState)(0),C=Object(r.a)(x,2),w=C[0],I=C[1],N=Object(n.useState)(i[0]),z=Object(r.a)(N,2),L=z[0],T=z[1],B=Object(n.useState)(p[0]),q=Object(r.a)(B,2),A=q[0],F=q[1],R=Object(n.useState)(s[0]),D=Object(r.a)(R,2),K=D[0],U=D[1],P=Object(n.useState)(!1),H=Object(r.a)(P,2),J=H[0],W=H[1],M=Object(n.useState)(!1),V=Object(r.a)(M,2),G=V[0],Q=V[1],X=Object(n.useState)(!1),Y=Object(r.a)(X,2),Z=Y[0],$=Y[1],_=Object(n.useState)(!1),ee=Object(r.a)(_,2),te=ee[0],ae=ee[1],re=Object(n.useState)(!1),ne=Object(r.a)(re,2),le=ne[0],oe=ne[1],ue=Object(n.useState)(!1),ce=Object(r.a)(ue,2),ie=ce[0],pe=ce[1];return l.a.createElement(o.T.Consumer,null,(function(e){return l.a.createElement(u.a,{usage:'// Usage examples\nimport React, { useState } from \'react\';\nimport { InputField, Icon } from \'@assenti/react-ui-components\';\n\nfunction Example() {\n    const [login, setLogin] = useState(\'\');\n\n    return (\n        <>\n            <InputField\n                label="Login"\n                placeholder="Input your login" \n                value={login}\n                autoComplete\n                name="login"\n                color="primary"\n                width={300}\n                onChange={e => setLogin(e.target.value)}/>\n        </>\n    )\n}',componentName:"<InputField/>",apiDescItems:c,apiSearchable:!0,backTopBtn:!0},l.a.createElement(o.K,{items:i,dark:e,prefix:l.a.createElement(o.z,{name:"format-size"}),width:200,label:"Size",color:"primary",className:"mb-5",value:L,onChange:function(e){return T(e)}}),l.a.createElement("br",null),l.a.createElement(o.K,{items:p,dark:e,prefix:l.a.createElement(o.z,{name:"brush"}),width:200,label:"Color",color:"primary",className:"mb-5",value:A,onChange:function(e){return F(e)}}),l.a.createElement("br",null),l.a.createElement(o.K,{items:s,dark:e,prefix:l.a.createElement(o.z,{name:"shape"}),width:200,label:"Border type",color:"primary",className:"mb-5",value:K,onChange:function(e){return U(e)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.O,{color:"primary",check:J,rightLabel:"Required",className:"ml-5",onChange:function(){return W(!J)}}),l.a.createElement(o.O,{color:"primary",check:Z,rightLabel:"Label",className:"ml-5",onChange:function(){return $(!Z)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.O,{color:"primary",check:G,rightLabel:"Hint",className:"ml-5",onChange:function(){return Q(!G)}}),l.a.createElement(o.O,{color:"primary",check:te,rightLabel:"White background",className:"ml-5",onChange:function(){return ae(!te)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.O,{check:ie,color:"primary",rightLabel:"Uppercase",className:"ml-5",onChange:function(){return pe(!ie)}}),l.a.createElement(o.O,{check:le,color:"primary",rightLabel:"Lifted",className:"ml-5",onChange:function(){return oe(!le)}}),l.a.createElement(o.r,null),l.a.createElement("br",null),l.a.createElement(o.A,{label:Z?"Login":"",dark:e,placeholder:"Input your login",value:a,autoComplete:!0,hint:G?"I am a hint":null,borderType:K,name:"login",color:A,lifted:le,uppercase:ie,whiteBackground:te,style:{width:300},required:J,size:L,onChange:function(e){return m(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.A,{label:Z?"Password":"",placeholder:"Input your password",value:b,dark:e,borderType:K,type:"password",hint:G?"I am a hint":null,color:A,required:J,style:{width:300},lifted:le,uppercase:ie,size:L,whiteBackground:te,onChange:function(e){return y(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.A,{label:Z?"Amount":"",placeholder:"Input amount",value:w,type:"number",dark:e,min:0,required:J,lifted:le,uppercase:ie,borderType:K,hint:G?"I am a hint":null,color:A,prefix:l.a.createElement(o.z,{name:"tenge"}),style:{width:300},whiteBackground:te,size:L,onChange:function(e){return I(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.A,{label:Z?"Login":"",placeholder:"Input your login",value:v,required:J,borderType:K,lifted:le,dark:e,uppercase:ie,hint:G?"I am a hint":null,clearable:!0,whiteBackground:te,autoFocus:!0,onClear:function(){return E("")},prefix:l.a.createElement(o.z,{name:"account"}),color:A,style:{width:300},size:L,onChange:function(e){return E(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.A,{placeholder:"Search...",value:S,hint:G?"I am a hint":null,color:A,style:{minWidth:300},label:Z?"Search":"",size:L,lifted:le,uppercase:ie,dark:e,whiteBackground:te,required:J,borderType:K,prefix:l.a.createElement(o.z,{name:"search"}),suffix:l.a.createElement(o.h,{name:"Search",color:"primary",size:L,onClick:function(){return console.log(S)}}),onEnter:function(){return console.log(S)},onChange:function(e){return j(e.target.value)}}))}))}},47:function(e,t,a){"use strict";var r=a(2),n=a(0),l=a.n(n),o=a(3),u=a(343),c=a(291),i=a(292),p=["property","description","default","type","value"];t.a=function(e){var t=Object(n.useRef)(),a=Object(n.useState)(!1),s=Object(r.a)(a,2),m=s[0],d=s[1];return l.a.createElement(o.T.Consumer,null,(function(a){return l.a.createElement("div",{className:"rui-page",ref:t},l.a.createElement("div",{className:"rui-page-title"},e.componentName," Component"),l.a.createElement(o.k,{dark:a,header:l.a.createElement("h4",null,"Usage")},e.children,l.a.createElement(o.n,{className:"mt-10",extra:l.a.createElement(o.o,{defaultText:"Copy code",text:e.usage,dark:a}),onChange:function(e){return d(e)},customToggler:l.a.createElement(o.h,{className:"ml-20",name:m?"Close":"Open",icon:"code",color:"info"}),dark:a},l.a.createElement(u.a,{language:"jsx",style:a?c.a:i.a},e.usage))),e.backTopBtn?l.a.createElement(o.e,{dark:!0,setRef:t,size:"medium",tooltip:"Up"}):null,l.a.createElement(o.k,{className:"mt-10"},e.apiDescItems.length>0&&l.a.createElement(o.P,{tableTitle:l.a.createElement("h2",null,"API"),dark:a,headers:["Property","Description","Default","Type","Value"],items:e.apiDescItems,index:!0,bordered:!0,searchable:e.apiSearchable,searchKey:"property",itemTitles:p}),e.content))}))}}}]);