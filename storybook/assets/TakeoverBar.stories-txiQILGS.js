import{j as a}from"./iframe-DSdOWv-_.js";import{T as y}from"./TakeoverBar-BFylOAVd.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./icons-B_WjQLVo.js";import"./Button-B2T4qG1k.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,S={title:"Playground/TakeoverBar",component:y,tags:["autodocs"],args:{state:"agent-working",step:"Filling in the shipping form",onTakeOver:t(),onResume:t(),onHandBack:t()},argTypes:{state:{control:"radio",options:["you-control","agent-working","supervise"]},step:{control:"text"},labels:{control:!1},onTakeOver:{table:{disable:!0}},onResume:{table:{disable:!0}},onHandBack:{table:{disable:!0}},className:{table:{disable:!0}}}},r={},e={args:{state:"you-control"}},o={args:{state:"supervise"},decorators:[g=>a.jsx("div",{style:{width:320},children:a.jsx(g,{})})]},f=["Playground","YouControl","Narrow"];var s,n,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,l,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    state: "you-control"
  }
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,m,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    state: "supervise"
  },
  decorators: [Story => <div style={{
    width: 320
  }}><Story /></div>]
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};export{o as Narrow,r as Playground,e as YouControl,f as __namedExportsOrder,S as default};
