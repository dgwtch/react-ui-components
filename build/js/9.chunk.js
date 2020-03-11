(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[9],{308:function(e,t,o){"use strict";o.r(t);var n=o(1),i=o(0),r=o.n(i),a=o(3),l=o(317),c=o(271),s=o(46),p=o.n(s),u=["property","description","default","type","value"],m=[{property:"icon",description:"Set floating button icon",default:"",type:"string",value:""},{property:"color",description:"Set floating button color",default:"",type:"string",value:""},{property:"onClick",description:"Invokes on button click (return click event object)",default:"",type:"function",value:""},{property:"position",description:"Set floating button position",default:"bottom-right",type:"string",value:"top-left | top-right | bottom-left | bottom-right"},{property:"size",description:"Set button size",default:"medium",type:"string",value:"medium | large"},{property:"color",description:"Set button color",default:"primary",type:"string",value:"primary | info | success | error"},{property:"tooltip",description:"Set button tooltip",default:"",type:"string",value:""},{property:"tooltipPosition",description:"Set tooltip position",default:"top",type:"string",value:"top | bottom | right | left"},{property:"offsetX",description:"Set offset from right",default:"5px",type:"number | string",value:""},{property:"offsetY",description:"Set offset from bottom",default:"5px",type:"number | string",value:""},{property:"dark",description:"Set dark mode",default:"false",type:"boolean",value:"true | false"},{property:"light",description:"Set light mode",default:"false",type:"boolean",value:"true | false"}],d='// Usage example\nimport React, { useState } from \'react\';\nimport { FloatingBtn, Card, Dialog, Select, Icon, Switch } from \'../components\';\nconst colors = [\'primary\', \'info\', \'success\', \'error\', \'black\', \'secondary\'];\nconst positions = [\'top-left\', \'top-right\', \'bottom-left\', \'bottom-right\'];\n\nfunction Example() {\n    const [dialog, setDialog] = useState(false);\n    const [tooltip, setTooltip] = useState(false);\n    const [color, setColor] = useState(colors[0]);\n    const [position, setPosition] = useState(positions[3]);\n\n    return (\n        <div>\n            <Select\n                items={colors}\n                prefix={<Icon name="brush"/>}\n                width={200}\n                label="Color theme"\n                color="primary"\n                value={color}\n                onChange={v => setColor(v)}/>\n            <br/>\n            <Select\n                items={positions}\n                prefix={<Icon name="book-open"/>}\n                width={200}\n                label="Position"\n                color="primary"\n                value={position}\n                onChange={v => setPosition(v)}/>\n            <br/>\n            <Switch \n                color="primary" \n                check={tooltip}\n                rightLabel="Tooltip"\n                className="my-10"\n                onChange={() => setTooltip(!tooltip)}/>\n            <br/>\n            <Card \n                className="relative"\n                width={200} \n                img={manImage}\n                footer={<h4 className="text-center">John Doe</h4>}>\n                <FloatingBtn \n                    icon="plus"\n                    size="large"\n                    tooltip={tooltip ? \'Add Friend\' : null}\n                    color={color}\n                    position={position} \n                    onClick={() => setDialog(true)}/>\n            </Card>\n            <Dialog \n                visible={dialog}\n                icon="account-plus"\n                iconColor="#1678c2"\n                titleColor="#1678c2" \n                onCancel={() => setDialog(false)}\n                cancelText="Nope"\n                onConfirm={() => setDialog(false)}\n                confirmText="Yeap"\n                title="New friend"\n                description="Add John to your friends list?"/>\n        </div>\n    )\n}',f=["primary","info","success","error","black","secondary"],g=["top-left","top-right","bottom-left","bottom-right"];t.default=function(){var e=Object(i.useState)(!1),t=Object(n.a)(e,2),o=t[0],s=t[1],b=Object(i.useState)(!1),y=Object(n.a)(b,2),h=y[0],v=y[1],S=Object(i.useState)(f[0]),C=Object(n.a)(S,2),E=C[0],x=C[1],k=Object(i.useState)(g[3]),w=Object(n.a)(k,2),N=w[0],D=w[1];return r.a.createElement("div",{className:"rui-page"},r.a.createElement("div",{className:"rui-page-title"},"<FloatingBtn/>"," Component"),r.a.createElement(a.i,{outlined:!0,title:"Usage"},r.a.createElement(a.D,{items:f,prefix:r.a.createElement(a.r,{name:"brush"}),width:200,label:"Color theme",color:"primary",value:E,onChange:function(e){return x(e)}}),r.a.createElement("br",null),r.a.createElement(a.D,{items:g,prefix:r.a.createElement(a.r,{name:"book-open"}),width:200,label:"Position",color:"primary",value:N,onChange:function(e){return D(e)}}),r.a.createElement("br",null),r.a.createElement(a.E,{color:"primary",check:h,rightLabel:"Tooltip",className:"my-10",onChange:function(){return v(!h)}}),r.a.createElement("br",null),r.a.createElement(a.i,{className:"relative",width:200,img:p.a,footer:r.a.createElement("h4",{className:"text-center"},"John Doe")},r.a.createElement(a.p,{icon:"plus",size:"large",tooltip:h?"Add Friend":null,color:E,position:N,onClick:function(){return s(!0)}})),r.a.createElement(a.m,{visible:o,icon:"account-plus",iconColor:"#1678c2",titleColor:"#1678c2",onCancel:function(){return s(!1)},cancelText:"Nope",onConfirm:function(){return s(!1)},confirmText:"Yeap",title:"New friend",description:"Add John to your friends list?"}),r.a.createElement(a.k,{icon:"code",iconSize:18,extra:r.a.createElement(a.l,{defaultText:"Copy code",text:d,className:"mr-10"}),contentStyles:{padding:0},tooltip:"Show/Hide Code"},r.a.createElement(l.a,{language:"jsx",style:c.a},d))),r.a.createElement("h2",null,"API"),r.a.createElement(a.F,{bordered:!0,headers:["Property","Description","Default","Type","Value"],items:m,index:!0,itemTitles:u}))}},46:function(e,t,o){e.exports=o.p+"static/media/man.e941ef11.png"}}]);