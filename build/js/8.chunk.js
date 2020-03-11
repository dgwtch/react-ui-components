(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[8],{278:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),o=n.n(r),i=n(3),c=n(317),l=n(271),s=n(57),d=n.n(s),m=["property","description","default","type","value"],p=[{property:"content",description:"Dropdown content",default:"",type:"any",value:""},{property:"trigger",description:"Trigger element (Button, InputField & etc.)",default:"",type:"any",value:""},{property:"width",description:"Set Dropdown content width",default:"",type:"string | number",value:""},{property:"minWidth",description:"Set Dropdown content minWidth",default:"",type:"string | number",value:""},{property:"position",description:"Set Dropdown content position",default:"left",type:"string",value:"centered | right"},{property:"leftOffset",description:"Set Dropdown content offset from left side",default:"0",type:"number",value:""},{property:"rightOffset",description:"Set Dropdown content offset from right side",default:"0",type:"number",value:""},{property:"dark",description:"Set dark mode",default:"false",type:"boolean",value:"true | false"},{property:"closeManaged",description:"Enable custom dropdown state control",default:"false",type:"boolean",value:"true | false"},{property:"visible",description:"Pass state visible value",default:"",type:"boolean",value:"true | false"},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],u=[{name:"Home",icon:"home"},{name:"Profile",icon:"account"},{name:"Settings",icon:"cog-outline"},{name:"Exit",icon:"exit-to-app"}],f="// Usage examples\nimport React, { useState } from 'react';\nimport { Header, Dropdown, Button, List, ListItem, Icon, Switch, Avatar } from '@assenti/rui-components';\nconst modules = [\n    { name: 'Home', icon: 'home' }, \n    { name: 'Profile', icon: 'account' }, \n    { name: 'Settings', icon: 'cog-outline' }, \n    { name: 'Exit', icon: 'exit-to-app' }\n];\n\nfunction Example() {\n    const [dark, setDark] = useState(false);\n\n    return (\n        <div>\n            <Switch \n                color=\"primary\" \n                check={dark}\n                rightLabel=\"Dark\"\n                className=\"my-10\"\n                onChange={() => setDark(!dark)}/>\n            <br/>\n            <Header \n                dark={dark}\n                smooth \n                title={\n                    <div className=\"row align-center\">\n                        <Icon name=\"react\" color=\"#61dafb\" className=\"mr-5\"/>Header</div>\n                    } \n                rightSide={\n                    <Dropdown\n                        dark={dark}\n                        width={200}\n                        position=\"right\"\n                        content={\n                            <div className=\"pa-10\">\n                                <div className=\"text-center\">\n                                    <Avatar img={manImage} size={80}/>\n                                    <div \n                                        className=\"text-center fw-bold fz-9 py-10\" \n                                        style={{ color: dark ? '#fff' : '#000', \n                                        borderBottom: '1px solid lightgray'}}>John Doe</div>\n                                </div>\n                                <List dark={dark}>\n                                    {modules.map((item, index) =>\n                                        <ListItem \n                                            keys={index}\n                                            hover\n                                            noDivider \n                                            item={item.name} \n                                            icon={item.icon}/>\n                                    )}\n                                </List>\n                            </div>\n                        }\n                        trigger={<Button dark={dark} light={!dark} icon=\"account\"/>}/>\n                }/>\n        </div>\n    )\n}";t.default=function(){var e=Object(r.createRef)(),t=Object(r.useState)(!1),n=Object(a.a)(t,2),s=n[0],g=n[1];return o.a.createElement("div",{className:"rui-page"},o.a.createElement("div",{className:"row align-center space-between"},o.a.createElement("div",{className:"rui-page-title"},"<Dropdown/>"," Component"),o.a.createElement("div",{onClick:function(){e.current&&e.current.scrollIntoView({behavior:"smooth",block:"center"})},className:"rui-link fz-13 fw-bold"},"API")),o.a.createElement(i.i,{outlined:!0,title:"Usage"},o.a.createElement(i.E,{color:"primary",check:s,rightLabel:"Dark",className:"my-10",onChange:function(){return g(!s)}}),o.a.createElement("br",null),o.a.createElement(i.q,{dark:s,smooth:!0,title:o.a.createElement("div",{className:"row align-center"},o.a.createElement(i.r,{name:"react",color:"#61dafb",className:"mr-5"}),"Header"),rightSide:o.a.createElement(i.o,{dark:s,width:200,position:"right",content:o.a.createElement("div",{className:"pa-10"},o.a.createElement("div",{className:"text-center"},o.a.createElement(i.b,{img:d.a,size:80}),o.a.createElement("div",{className:"text-center fw-bold fz-9 py-10",style:{color:s?"#fff":"#000",borderBottom:"1px solid lightgray"}},"John Doe")),o.a.createElement(i.u,{dark:s},u.map((function(e,t){return o.a.createElement(i.v,{keys:t,hover:!0,noDivider:!0,item:e.name,icon:e.icon})})))),trigger:o.a.createElement(i.f,{dark:s,light:!s,icon:"account"})})}),o.a.createElement(i.k,{icon:"code",iconSize:18,extra:o.a.createElement(i.l,{defaultText:"Copy code",text:f,className:"mr-10"}),tooltip:"Show/Hide Code"},o.a.createElement(c.a,{language:"jsx",style:l.a},f))),o.a.createElement("h2",{ref:e},"API"),o.a.createElement(i.F,{bordered:!0,headers:["Property","Description","Default","Type","Value"],items:p,index:!0,itemTitles:m}))}},57:function(e,t,n){e.exports=n.p+"static/media/man_.1a05fb23.png"}}]);