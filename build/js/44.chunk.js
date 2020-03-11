(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[44],{281:function(e,o,t){"use strict";t.r(o);var n=t(1),r=t(0),i=t.n(r),a=t(3),l=t(317),c=t(271),s='// Usage examples\nimport React, { useState } from \'react\';\nimport { Tooltip, Button, Select, Icon } from \'@assenti/react-ui-components\';\nconst colors = [\'default\', \'primary\', \'info\', \'success\', \'error\'];\n\nfunction Example() {\n    const [color, setColor] = useState(colors[0]);\n\n    return (\n        <div>\n            <Select\n                items={colors}\n                prefix={<Icon name="brush"/>}\n                width={200}\n                label="Tooltip color"\n                color="primary"\n                className="my-10"\n                value={color}\n                onChange={v => setColor(v)}/>\n            <br/>\n            <div className="row align-center py-20">\n                <Tooltip \n                    tooltip="Top position"\n                    color={color} \n                    className="mr-20">\n                    <Button icon="search" color="info"/>\n                </Tooltip>\n                <Tooltip \n                    tooltip="Bottom position" \n                    position="bottom"\n                    color={color}  \n                    className="mr-20">\n                    <Button color="info" name="Button" onAction={() =>{}}/>\n                </Tooltip>\n                <Tooltip \n                    tooltip="Left position"\n                    color={color}  \n                    position="left" \n                    className="mr-20">\n                    <Button icon="menu" light/>\n                </Tooltip>\n                <Tooltip \n                    tooltip="Right position"\n                    color={color}  \n                    position="right">\n                    <Button icon="rocket" color="error"/>\n                </Tooltip>\n            </div>\n            <br/>\n        </div>\n    )\n}',p=["property","description","default","type","value"],m=[{property:"tooltip",description:"Set tooltip text",default:"",type:"string",value:""},{property:"position",description:"Set tooltip position",default:"top",type:"string",value:"bottom | right | left"},{property:"color",description:"Set tooltip color",default:"transparent black",type:"string",value:"primary | info | error | success"},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],u=["default","primary","info","success","error"];o.default=function(){var e=Object(r.useState)(u[0]),o=Object(n.a)(e,2),t=o[0],d=o[1];return i.a.createElement("div",{className:"rui-page"},i.a.createElement("div",{className:"row align-center space-between"},i.a.createElement("div",{className:"rui-page-title"},"<Tooltip/>"," Component")),i.a.createElement(a.i,{outlined:!0,title:"Usage"},i.a.createElement(a.D,{items:u,prefix:i.a.createElement(a.r,{name:"brush"}),width:200,label:"Tooltip color",color:"primary",className:"my-10",value:t,onChange:function(e){return d(e)}}),i.a.createElement("br",null),i.a.createElement("div",{className:"row align-center py-20"},i.a.createElement(a.L,{tooltip:"Top position",color:t,className:"mr-20"},i.a.createElement(a.f,{icon:"search",color:"info"})),i.a.createElement(a.L,{tooltip:"Bottom position",position:"bottom",color:t,className:"mr-20"},i.a.createElement(a.f,{color:"info",name:"Button",onAction:function(){}})),i.a.createElement(a.L,{tooltip:"Left position",color:t,position:"left",className:"mr-20"},i.a.createElement(a.f,{icon:"menu",light:!0})),i.a.createElement(a.L,{tooltip:"Right position",color:t,position:"right"},i.a.createElement(a.f,{icon:"rocket",color:"error"}))),i.a.createElement("br",null),i.a.createElement(a.k,{icon:"code",iconSize:18,extra:i.a.createElement(a.l,{defaultText:"Copy code",text:s,className:"mr-10"}),contentStyles:{padding:0},tooltip:"Show/Hide Code"},i.a.createElement(l.a,{language:"jsx",style:c.a},s))),i.a.createElement("h2",{id:"tooltip-api"},"API"),i.a.createElement(a.F,{bordered:!0,headers:p,items:m,index:!0,itemTitles:p}))}}}]);