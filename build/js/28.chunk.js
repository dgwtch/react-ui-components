(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[28],{293:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(0),a=n.n(r),l=n(3),i=n(311),c=n(271),s=["property","description","default","type","value"],p=[{property:"trigger",description:"Set pop over trigger",default:"click",type:"string",value:"click | hover"},{property:"control",description:"Allow pop over custom state control",default:"false",type:"boolean",value:"true | false"},{property:"visible",description:"Set custom state (active if control prop set)",default:"",type:"boolean",value:"true | false"},{property:"onClose",description:"Invokes on pop over close button click and blur",default:"",type:"function",value:""},{property:"noBlur",description:"Disable closeing popover on blur (has effect with control prop)",default:"false",type:"boolean",value:"true | false"},{property:"title",description:"Set pop over title",default:"",type:"",value:""},{property:"content",description:"Set content in pop over body",default:"",type:"any",value:""},{property:"position",description:"Set popover position",default:"top",type:"string",value:"top | bottom | right | left"},{property:"dark",description:"Set dark mode",default:"false",type:"boolean",value:"true | false"},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],u='// Usage examples\nimport React, { useState } from \'react\';\nimport { PopOver, Button, Select, Icon, Switch } from \'@assenti/react-ui-components\';\nconst positions = [\'left\', \'top\', \'bottom\', \'right\'];\n\nfunction Example() {\n    const [visible, setVisible] = useState(false);\n    const [trigger, setTrigger] = useState(false);\n    const [dark, setDark] = useState(false);\n    const [control, setControl] = useState(false);\n    const [position, setPosition] = useState(positions[0]);\n\n    return (\n        <div>\n            <Select\n                items={positions}\n                prefix={<Icon name="book-open"/>}\n                width={200}\n                label="PopOver position"\n                color="primary"\n                className="my-10"\n                value={position}\n                onChange={v => setPosition(v)}/>\n            <br/>\n            <Switch \n                check={trigger} \n                color="primary"\n                leftLabel="Hover" \n                rightLabel="Click" \n                className="my-10"\n                onChange={() => setTrigger(!trigger)}/>\n            <br/>\n            <Switch \n                check={dark} \n                color="primary"\n                rightLabel="Dark" \n                className="my-10"\n                onChange={() => setDark(!dark)}/>\n            <br/>\n            <Switch \n                check={control} \n                color="primary"\n                rightLabel="Control state" \n                className="my-10"\n                onChange={() => setControl(!control)}/>\n            <div className="row justify-center py-30">\n                <PopOver \n                    title="Quit"\n                    dark={dark}\n                    trigger={trigger ? \'click\' : \'hover\'}\n                    position={position}\n                    control={control}\n                    visible={visible}\n                    onClose={() => setVisible(false)}\n                    content={\n                        <div>\n                            <p>Are are sure?</p>\n                            <div className="row align-center justify-center">\n                                <Button \n                                    name="Nope" \n                                    color="secondary" \n                                    className="mr-5"\n                                    onClick={() => console.log(\'Nope!\')}/>\n                                <Button \n                                    name="Yeap" \n                                    color="primary" \n                                    onClick={() => console.log(\'Yeap!\')}/>\n                            </div>\n                        </div>\n                    }>\n                    <Button\n                        onClick={() => control ? setVisible(true) : {}} \n                        name="Get started" \n                        color="primary"/>\n                </PopOver>\n            </div>\n        </div>\n    )\n}',m=["left","top","bottom","right"];t.default=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),n=t[0],d=t[1],f=Object(r.useState)(!1),v=Object(o.a)(f,2),y=v[0],g=v[1],b=Object(r.useState)(!1),h=Object(o.a)(b,2),k=h[0],C=h[1],E=Object(r.useState)(!1),S=Object(o.a)(E,2),N=S[0],w=S[1],O=Object(r.useState)(m[1]),j=Object(o.a)(O,2),P=j[0],x=j[1],B=Object(r.useRef)();return a.a.createElement("div",{className:"rui-page",ref:B},a.a.createElement("div",{className:"row align-center space-between"},a.a.createElement("div",{className:"rui-page-title"},"PopOver Component")),a.a.createElement(l.g,{outlined:!0,title:"PopOver usage"},a.a.createElement(l.A,{items:m,prefix:a.a.createElement(l.p,{name:"book-open"}),width:200,label:"PopOver position",color:"primary",className:"my-10",value:P,onChange:function(e){return x(e)}}),a.a.createElement("br",null),a.a.createElement(l.B,{check:y,color:"primary",leftLabel:"Hover",rightLabel:"Click",className:"my-10",onChange:function(){return g(!y)}}),a.a.createElement("br",null),a.a.createElement(l.B,{check:k,color:"primary",rightLabel:"Dark",className:"my-10",onChange:function(){return C(!k)}}),a.a.createElement("br",null),a.a.createElement(l.B,{check:N,color:"primary",rightLabel:"Control state",className:"my-10",onChange:function(){return w(!N)}}),a.a.createElement("div",{className:"row justify-center py-30"},a.a.createElement(l.w,{title:"Quit",dark:k,trigger:y?"click":"hover",position:P,control:N,visible:n,onClose:function(){return d(!1)},content:a.a.createElement("div",null,a.a.createElement("p",null,"Are are sure?"),a.a.createElement("div",{className:"row align-center justify-center"},a.a.createElement(l.e,{name:"Nope",color:"secondary",className:"mr-5",onClick:function(){return console.log("Nope!")}}),a.a.createElement(l.e,{name:"Yeap",color:"primary",onClick:function(){return console.log("Yeap!")}})))},a.a.createElement(l.e,{onClick:function(){return N?d(!0):{}},name:"Get started",color:"primary"}))),a.a.createElement(l.i,{icon:"code",iconSize:18,extra:a.a.createElement(l.j,{defaultText:"Copy code",text:u,className:"mr-10"}),contentStyles:{padding:0},tooltip:"Show/Hide Code"},a.a.createElement(i.a,{language:"jsx",style:c.a},u))),a.a.createElement("h2",null,"API"),a.a.createElement(l.b,{setRef:B,dark:!0,size:"medium"}),a.a.createElement(l.C,{bordered:!0,headers:["Property","Description","Default","Type","Value"],items:p,index:!0,itemTitles:s}))}}}]);
//# sourceMappingURL=28.chunk.js.map