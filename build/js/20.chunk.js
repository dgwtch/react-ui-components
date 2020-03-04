(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[20],{270:function(e,a,n){"use strict";n.r(a);var t=n(1),o=n(0),s=n.n(o),l=n(3),c=n(302),r=n(268),i=n(2),d=["property","description","default","type","value"],m=[{property:"mask",description:"Set mask type",default:"",type:"string",value:"phone | card | card-issue | iin"},{property:"code",description:'Set phone prefix code (example: "+7", "+1", has effect with mask="phone")',default:"",type:"string",value:""},{property:"dateDelimiter",description:'Set date delimiter (has effect with mask="date")',default:".",type:"string",value:""},{property:"InputField Component all props",description:"You can set all InputField Component props",default:"",type:"",value:""}];a.default=function(){var e=Object(o.useState)(""),a=Object(t.a)(e,2),n=a[0],u=a[1],p=Object(o.useState)(""),_=Object(t.a)(p,2),h=_[0],v=_[1],g=Object(o.useState)(""),f=Object(t.a)(g,2),k=f[0],I=f[1],w=Object(o.useState)(""),E=Object(t.a)(w,2),z=E[0],b=E[1],C=Object(o.useState)(""),M=Object(t.a)(C,2),y=M[0],N=M[1];return s.a.createElement("div",{className:"rui-page"},s.a.createElement("div",{className:"row align-center space-between"},s.a.createElement("div",{className:"rui-page-title"},"InputMask Component")),s.a.createElement(l.e,{outlined:!0,color:"gray",title:"Usage"},s.a.createElement("div",{className:"pa-5 fz-9"},"Kazakhstan phone mask: ",Object(i.i)("7777777777")),s.a.createElement(l.o,{width:250,size:"medium",value:n,mask:"phone",code:"+7",placeholder:"+7 (___) ___-__-__",onChange:function(e,a){console.log(e),console.log(a),u(a)},prefix:s.a.createElement(l.m,{name:"smartphone"})}),s.a.createElement("br",null),s.a.createElement("div",{className:"pa-5 fz-9"},"Credit card mask: ",Object(i.e)("1234567890191112"),", Credit card issue date: ",Object(i.d)("0220")),s.a.createElement("div",{className:"row"},s.a.createElement(l.o,{width:250,size:"medium",value:h,mask:"card",placeholder:"____-____-____-____",onChange:function(e,a){console.log(e),console.log(a),v(a)},prefix:s.a.createElement(l.m,{name:"credit-card"})}),s.a.createElement(l.o,{width:90,size:"medium",value:k,mask:"card-issue",placeholder:"__ / __",onChange:function(e,a){console.log(e),console.log(a),I(a)},prefix:s.a.createElement(l.m,{name:"calendar-month"})})),s.a.createElement("br",null),s.a.createElement("div",{className:"pa-5 fz-9"},"Kazakhstan IIN/BIN: ",Object(i.g)("123456789012")),s.a.createElement(l.o,{width:250,size:"medium",value:z,mask:"iin",placeholder:"___ ___ ___ ___",onChange:function(e,a){console.log(e),console.log(a),b(a)},prefix:s.a.createElement(l.m,{name:"card-account-details"})}),s.a.createElement("br",null),s.a.createElement("div",{className:"pa-5 fz-9"},"Date (DD.MM.YYYY or MM/DD/YYYY)"),s.a.createElement(l.o,{width:250,size:"medium",value:y,mask:"date",placeholder:"DD.MM.YYYY",onChange:function(e,a){console.log(e),console.log(a),N(a)},prefix:s.a.createElement(l.m,{name:"calendar-month"})}),s.a.createElement(l.g,{icon:"code",iconSize:18,contentStyles:{padding:0},tooltip:"Code"},s.a.createElement(c.a,{language:"jsx",style:r.a},'// Usage examples\nimport React, { useState } from \'react\';\nimport { InputMask, Icon } from \'@assenti/react-ui-components\';\nimport { phoneMask, creditMask, creditIssueMask, iinMask } from \'@assenti/react-ui-components\';\n\nfunction Example() {\n    const [phone, setPhone] = useState(\'\');\n    const [card, setCard] = useState(\'\');\n    const [cardIssue, setCardIssue] = useState(\'\');\n    const [iin, setIin] = useState(\'\');\n    const kztPhone = \'7777777777\';\n    const cardForm = \'1234567890191112\';\n    const cardIssueForm = \'0220\';\n    const iinForm = \'123456789012\';\n\n    return (\n        <div>\n            <div className="pa-5 fz-9">Kazakhstan phone mask: {phoneMask(kztPhone)}</div>\n                <InputMask \n                    width={250}\n                    size="medium"\n                    value={phone}\n                    mask="phone"\n                    code="+7"\n                    placeholder="+7 (___) ___-__-__"\n                    onChange={(value, rowValue) => {\n                        console.log(value)\n                        console.log(rowValue)\n                        setPhone(rowValue)\n                    }}\n                    prefix={<Icon name="smartphone"/>}/>\n                <br/>\n                <div className="pa-5 fz-9">Credit card mask: {creditMask(cardForm)}, Credit card issue date: {creditIssueMask(cardIssueForm)}</div>\n                <div className="row">\n                    <InputMask \n                        width={250}\n                        size="medium"\n                        value={card}\n                        mask="card"\n                        placeholder="____-____-____-____"\n                        onChange={(value, rowValue) => {\n                            console.log(value)\n                            console.log(rowValue)\n                            setCard(rowValue)\n                        }}\n                        prefix={<Icon name="credit-card"/>}/>\n                    <InputMask \n                        width={90}\n                        size="medium"\n                        value={cardIssue}\n                        mask="card-issue"\n                        placeholder="__ / __"\n                        onChange={(value, rowValue) => {\n                            console.log(value)\n                            console.log(rowValue)\n                            setCardIssue(rowValue)\n                        }}\n                        prefix={<Icon name="calendar-month"/>}/>\n                </div>\n                <br/>\n                <div className="pa-5 fz-9">Kazakhstan IIN/BIN: {iinMask(iinForm)}</div>\n                <InputMask \n                    width={250}\n                    size="medium"\n                    value={iin}\n                    mask="iin"\n                    placeholder="___ ___ ___ ___"\n                    onChange={(value, rowValue) => {\n                        console.log(value)\n                        console.log(rowValue)\n                        setIin(rowValue)\n                    }}\n                    prefix={<Icon name="card-account-details"/>}/>\n        </div>\n    )\n}\n'))),s.a.createElement("h2",null,"API"),s.a.createElement(l.z,{bordered:!0,headers:["Property","Description","Default","Type","Value"],items:m,index:!0,itemTitles:d}))}}}]);
//# sourceMappingURL=20.chunk.js.map