(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[6],{299:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(10),c=a(2),i=a(0),o=a.n(i),l=a(3),s=a(344),m=a(291),u=a(292),p=a(67),d="// Usage examples\nimport React, { useState } from 'react';\nimport { List, Button } from '@assenti/rui-components';\nconst names = [\n    { name: 'Steve Rogers', hero: 'Captain America', phone: '1234567890', icon: 'shield-account', img: manImage, check: false, active: false }, \n    { name: 'Peter Parker', hero: 'Spider man', phone: '1234567890', icon: 'shield-account', img: manImage2, check: false, active: true }, \n    { name: 'Tony Stark', hero: 'Iron man', phone: '1234567890', icon: 'shield-account', img: manImage3, check: false, active: false }, \n    { name: 'Bruce Benner', hero: 'Hulk', phone: '1234567890', icon: 'shield-account', img: manImage4, check: false, active: false },\n    { name: 'Natasha Romanoff', hero: 'Black Widow', phone: '1234567890', icon: 'shield-account', img: girlImage, check: false, active: false },\n    { name: 'Stephen Strange', hero: 'Doctor Strange', phone: '1234567890', icon: 'shield-account', img: manImage4, check: false, active: false },\n];\n\nfunction Example() {\n    const [selected, setSelected] = useState([]);\n\n    const selectOne = (item) => {\n        if (isSelected(item)) {\n            setSelected(selected => selected.filter(_item => _item !== item))\n        } else setSelected([...selected, item]);\n    }\n\n    const isSelected = (item) => {\n        let result = false\n        for (const select of selected) {\n            if (item === select) result = true \n        }\n        return result\n    }\n\n    return (\n        <>\n            <List\n                header={\n                    <div className=\"row align-center space-between\">\n                        Selected persons: {selected.length}\n                        {selected.length > 0 ? <Button className=\"ma-0\" light icon=\"share\" size={18}/> : ''}\n                    </div>\n                }>\n                {names.map((item, index) => \n                    <List.Item\n                        isActiveItem={isSelected(item.hero)}\n                        onClick={() => checkbox ? selectOne(item.hero) : {}}\n                        key={index} \n                        item={item.name}\n                        color=\"primary\"\n                        subTitle={item.hero}\n                        icon={item.icon}\n                        checkbox={checkbox}/>\n                )}\n            </List>\n        </>\n    )\n}",h=["property","description","default","type","value"],f=[{property:"header",description:"Set list header",default:"",type:"any",value:""},{property:"size",description:"Set list item size",default:"",type:"string",value:"medium | large"},{property:"grid",description:"Set grid view",default:"false",type:"boolean",value:"true | false"},{property:"dark",description:"Set dark mode (can not be used with light prop)",default:"false",type:"boolean",value:"true | false"},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],b=[{property:"render",description:"You can pass your own custom element",default:"",type:"any",value:""},{property:"onClick",description:"Invokes on item click",default:"",type:"function",value:""},{property:"item",description:"Set list item",default:"",type:"string | number | object",value:""},{property:"subTitle",description:"Set subtitle in list item (It can be just text or Tag and etc.)",default:"",type:"any",value:""},{property:"href",description:"Set list item title as <a/> tag with href",default:"",type:"string",value:""},{property:"blank",description:"Open a link in a new browser tab (has effect with href prop)",default:"false",type:"boolean",value:"true | false"},{property:"tooltip",description:"Set tooltip",default:"",type:"string",value:""},{property:"tooltipPosition",description:"Set tooltip position",default:"top",type:"string",value:"left | right | bottom"},{property:"isActiveItem",description:"Set active list item",default:"false",type:"boolean",value:"true | false"},{property:"roundedActive",description:"Set hover and active list item rounded",default:"false",type:"boolean",value:"true | false"},{property:"color",description:"Set active list item color",default:"",type:"string",value:"primary | info | success | error"},{property:"leftBorder",description:"Set left border highlighting on active item",default:"false",type:"boolean",value:"true | false"},{property:"checkbox",description:"A placeholder for checkbox (Expect a checkbox element or Component)",default:"",type:"any",value:""},{property:"icon",description:"Set icon before the text in list item",default:"",type:"string",value:"home | search | etc. (see icon names list in docs)"},{property:"controls",description:"A placeholder for item controls like buttons or etc.",default:"",type:"any",value:""},{property:"noDivider",description:"Remove the divider line between items",default:"false",type:"boolean",value:"true | false"},{property:"hover",description:"Highlight hovered list item",default:"false",type:"boolean",value:"true | false"},{property:"avatar",description:"Avatar slot",default:"",type:"ReactNode",value:""},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],g=["default","medium","large"],y=["primary","info","success","error"],v=["default","rounded","tile"],k=["image","icon","none"],E=["view-list","grid"];t.default=function(){var e=Object(i.useState)([]),t=Object(c.a)(e,2),a=t[0],S=t[1],j=Object(i.useState)(g[0]),O=Object(c.a)(j,2),N=O[0],w=O[1],x=Object(i.useState)(v[1]),C=Object(c.a)(x,2),I=C[0],P=C[1],z=Object(i.useState)(y[0]),L=Object(c.a)(z,2),A=L[0],T=L[1],R=Object(i.useState)(!0),B=Object(c.a)(R,2),D=B[0],H=B[1],K=Object(i.useState)(!1),V=Object(c.a)(K,2),U=V[0],_=V[1],J=Object(i.useState)(!1),Q=Object(c.a)(J,2),W=Q[0],Y=Q[1],q=Object(i.useState)(!0),F=Object(c.a)(q,2),G=F[0],M=F[1],X=Object(i.useState)(!0),Z=Object(c.a)(X,2),$=Z[0],ee=Z[1],te=Object(i.useState)(!1),ae=Object(c.a)(te,2),ne=ae[0],re=ae[1],ce=Object(i.useState)(!1),ie=Object(c.a)(ce,2),oe=ie[0],le=ie[1],se=Object(i.useState)(!0),me=Object(c.a)(se,2),ue=me[0],pe=me[1],de=Object(i.useRef)(),he=Object(i.useRef)(),fe=Object(i.useRef)(),be=Object(i.useState)(k[0]),ge=Object(c.a)(be,2),ye=ge[0],ve=ge[1],ke=Object(i.useState)("view-list"),Ee=Object(c.a)(ke,2),Se=Ee[0],je=Ee[1],Oe=function(e){var t,r=!1,c=Object(n.a)(a);try{for(c.s();!(t=c.n()).done;){e===t.value&&(r=!0)}}catch(i){c.e(i)}finally{c.f()}return r};return o.a.createElement(l.U.Consumer,null,(function(e){return o.a.createElement("div",{className:"rui-page",ref:fe},o.a.createElement("div",{className:"row align-center space-between"},o.a.createElement("div",{className:"rui-page-title"},"<List/>"," Component"),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"rui-link fz-13 fw-bold mr-10",onClick:function(){de.current&&de.current.scrollIntoView({behavior:"smooth",block:"start"})}},"List API"),o.a.createElement("div",{className:"rui-link fz-13 fw-bold",onClick:function(){he.current&&he.current.scrollIntoView({behavior:"smooth",block:"start"})}},"List.Item API"))),o.a.createElement(l.k,{dark:e,header:o.a.createElement("h4",null,"Usage")},o.a.createElement(l.K,{items:g,prefix:o.a.createElement(l.z,{name:"format-size"}),width:200,dark:e,label:"List size",color:"primary",value:N,onChange:function(e){return w(e)}}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(l.K,{items:v,prefix:o.a.createElement(l.z,{name:"shape"}),width:200,dark:e,label:"Avatar border type",color:"primary",value:I,onChange:function(e){return P(e)}}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(l.K,{items:y,prefix:o.a.createElement(l.z,{name:"brush"}),width:200,dark:e,label:"Active item color",color:"primary",value:A,onChange:function(e){return T(e)}}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(l.P,{color:"primary",check:G,rightLabel:"Hover",className:"my-10",onChange:function(){return M(!G)}}),o.a.createElement(l.P,{color:"primary",check:W,rightLabel:"Hide dividers",className:"my-10",onChange:function(){return Y(!W)}}),o.a.createElement("br",null),o.a.createElement(l.I,{options:k,value:ye,name:"type",className:"mt-10",onChange:function(e){return ve(e)}}),o.a.createElement("br",null),o.a.createElement(l.P,{color:"primary",check:$,rightLabel:"Subtitle",className:"my-10",onChange:function(){return ee(!$)}}),o.a.createElement(l.P,{color:"primary",check:D,rightLabel:"Header",className:"my-10",onChange:function(){return H(!D)}}),o.a.createElement("br",null),o.a.createElement(l.P,{color:"primary",check:U,rightLabel:"Rounded active item",className:"my-10",onChange:function(){return _(!U)}}),o.a.createElement(l.P,{color:"primary",check:ne,rightLabel:"Active item left border",className:"my-10",onChange:function(){return re(!ne)}}),o.a.createElement("br",null),o.a.createElement(l.P,{color:"primary",check:oe,rightLabel:"Checkbox",className:"my-10",onChange:function(){return le(!oe)}}),o.a.createElement(l.P,{color:"primary",check:ue,rightLabel:"Controls",className:"my-10",onChange:function(){return pe(!ue)}}),o.a.createElement("br",null),o.a.createElement("div",{className:"row justify-end"},o.a.createElement(l.i,{default:0,options:E,icon:!0,onChange:function(e){return je(e)},dark:e})),o.a.createElement(l.r,null),o.a.createElement("br",null),o.a.createElement(l.k,{className:"pa-0",dark:e},o.a.createElement(l.C,{grid:"grid"===Se,size:N,dark:e,header:D?o.a.createElement("div",{className:"row align-center space-between"},"Selected persons: ",a.length,a.length>0?o.a.createElement(l.h,{className:"ma-0",light:!0,icon:"share",size:18}):""):null},p.a.map((function(t,n){return o.a.createElement(l.C.Item,{isActiveItem:Oe(t.hero),onClick:function(){return oe?function(e){Oe(e)?S((function(t){return t.filter((function(t){return t!==e}))})):S([].concat(Object(r.a)(a),[e]))}(t.hero):{}},key:n,hover:G,width:"grid"===Se?"25%":"",item:t.name,color:A,noDivider:W,roundedActive:U,leftBorder:ne,subTitle:$?t.hero:null,icon:"icon"===ye?t.icon:null,avatar:"image"===ye?o.a.createElement(l.c,{className:"mr-10",img:t.img,width:40,height:40,borderType:"rounded"}):null,checkbox:oe,controls:ue?o.a.createElement("div",{className:"row align-center justify-end fz-9"},o.a.createElement("div",{className:"row align-center justify-end"},o.a.createElement(l.z,{name:"smartphone",size:16,className:"mr-5",color:e?"lightgray":""}),Object(l.bb)(t.phone)),"grid"===Se?null:o.a.createElement(l.h,{className:"ml-10",dark:e,light:!e,icon:"edit",iconSize:16})):null})})))),o.a.createElement(l.n,{className:"px-15",icon:"code",dark:e,extra:o.a.createElement(l.o,{defaultText:"Copy code",text:d,dark:e,className:"mr-10"}),iconSize:18,tooltip:"Show/Hide Code"},o.a.createElement(s.a,{language:"jsx",style:e?m.a:u.a},d))),o.a.createElement(l.k,{className:"mt-10"},o.a.createElement(l.Q,{tableTitle:o.a.createElement("h2",{ref:de},"List API"),dark:e,headers:["Property","Description","Default","Type","Value"],items:f,index:!0,bordered:!0,itemTitles:h})),o.a.createElement(l.k,{className:"mt-10"},o.a.createElement(l.Q,{dark:e,tableTitle:o.a.createElement("h2",{ref:he},"List.Item API"),searchKey:"property",searchable:!0,bordered:!0,headers:["Property","Description","Default","Type","Value"],items:b,index:!0,itemTitles:h})),o.a.createElement(l.e,{setRef:fe,dark:!0,size:"medium"}))}))}},50:function(e,t,a){e.exports=a.p+"static/media/man.e941ef11.png"},53:function(e,t,a){e.exports=a.p+"static/media/hipster.4ca6ae2f.png"},54:function(e,t,a){e.exports=a.p+"static/media/man_.1a05fb23.png"},56:function(e,t,a){e.exports=a.p+"static/media/girl.465a6768.png"},58:function(e,t,a){e.exports=a.p+"static/media/old.21fd9a1f.png"},67:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(50),r=a.n(n),c=a(53),i=a.n(c),o=a(54),l=a.n(o),s=a(58),m=a.n(s),u=a(56),p=a.n(u),d=[{name:"Steve Rogers",hero:"Captain America",phone:"1234567890",icon:"shield-account",img:r.a,check:!1,active:!1},{name:"Peter Parker",hero:"Spider man",phone:"1234567890",icon:"shield-account",img:i.a,check:!1,active:!0},{name:"Tony Stark",hero:"Iron man",phone:"1234567890",icon:"shield-account",img:l.a,check:!1,active:!1},{name:"Bruce Benner",hero:"Hulk",phone:"1234567890",icon:"shield-account",img:m.a,check:!1,active:!1},{name:"Natasha Romanoff",hero:"Black Widow",phone:"1234567890",icon:"shield-account",img:p.a,check:!1,active:!1},{name:"Stephen Strange",hero:"Doctor Strange",phone:"1234567890",icon:"shield-account",img:m.a,check:!1,active:!1}]}}]);