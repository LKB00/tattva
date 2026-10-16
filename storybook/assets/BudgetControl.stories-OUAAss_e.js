import{j as s}from"./iframe-DSdOWv-_.js";import{B as b}from"./BudgetControl-DSEWE3rC.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./icons-B_WjQLVo.js";import"./MeterBar-BMetz_pC.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,A={title:"Playground/BudgetControl",component:b,tags:["autodocs"],args:{limits:[{id:"time",label:"Time",used:12,cap:30,unit:"minutes"},{id:"spend",label:"Spend",used:3,cap:10,unit:"credits"}],defaultLimitAction:"stop-and-ask",warnAt:.8,onCapChange:r(),onLimitActionChange:r()},argTypes:{limits:{control:"object"},limitAction:{control:"select",options:[void 0,"stop-and-ask","stop","ask-for-more"]},defaultLimitAction:{control:"select",options:["stop-and-ask","stop","ask-for-more"]},warnAt:{control:{type:"number",min:0,max:1,step:.05}},labels:{control:!1},onCapChange:{table:{disable:!0}},onLimitActionChange:{table:{disable:!0}},className:{table:{disable:!0}}}},e={},t={args:{limits:[{id:"time",label:"Time",used:28,cap:30,unit:"minutes"},{id:"spend",label:"Spend",used:10,cap:10,unit:"credits"}]}},o={decorators:[g=>s.jsx("div",{style:{width:320},children:s.jsx(g,{})})]},L=["Playground","NearLimit","Narrow"];var a,n,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var d,c,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,p,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: 320
  }}><Story /></div>]
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};export{o as Narrow,t as NearLimit,e as Playground,L as __namedExportsOrder,A as default};
