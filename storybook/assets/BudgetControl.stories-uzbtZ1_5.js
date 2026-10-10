import{j as r}from"./iframe-J6_2PHET.js";import{p as b}from"./proLock-DICmId1O.js";import{B as f}from"./BudgetControl-BWZpiVpd.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./icons-DAivRSTR.js";import"./MeterBar-D9CLVzvA.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,T={title:"Playground/BudgetControl",component:f,parameters:b("BudgetControl"),tags:["autodocs"],args:{limits:[{id:"time",label:"Time",used:12,cap:30,unit:"minutes"},{id:"spend",label:"Spend",used:3,cap:10,unit:"credits"}],defaultLimitAction:"stop-and-ask",warnAt:.8,onCapChange:s(),onLimitActionChange:s()},argTypes:{limits:{control:"object"},limitAction:{control:"select",options:[void 0,"stop-and-ask","stop","ask-for-more"]},defaultLimitAction:{control:"select",options:["stop-and-ask","stop","ask-for-more"]},warnAt:{control:{type:"number",min:0,max:1,step:.05}},labels:{control:!1},onCapChange:{table:{disable:!0}},onLimitActionChange:{table:{disable:!0}},className:{table:{disable:!0}}}},e={},t={args:{limits:[{id:"time",label:"Time",used:28,cap:30,unit:"minutes"},{id:"spend",label:"Spend",used:10,cap:10,unit:"credits"}]}},o={decorators:[g=>r.jsx("div",{style:{width:320},children:r.jsx(g,{})})]},k=["Playground","NearLimit","Narrow"];var a,n,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var d,m,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    limits: [{
      id: "time",
      label: "Time",
      used: 28,
      cap: 30,
      unit: "minutes"
    }, {
      id: "spend",
      label: "Spend",
      used: 10,
      cap: 10,
      unit: "credits"
    }]
  }
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,l,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: 320
  }}><Story /></div>]
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};export{o as Narrow,t as NearLimit,e as Playground,k as __namedExportsOrder,T as default};
