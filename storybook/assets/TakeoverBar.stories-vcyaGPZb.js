import{j as t}from"./iframe-J6_2PHET.js";import{p as v}from"./proLock-DICmId1O.js";import{T as y}from"./TakeoverBar-MV-iEnBS.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./icons-DAivRSTR.js";import"./Button-D60Nh1os.js";const{fn:a}=__STORYBOOK_MODULE_TEST__,w={title:"Playground/TakeoverBar",component:y,parameters:v("TakeoverBar"),tags:["autodocs"],args:{state:"agent-working",step:"Filling in the shipping form",onTakeOver:a(),onResume:a(),onHandBack:a()},argTypes:{state:{control:"radio",options:["you-control","agent-working","supervise"]},step:{control:"text"},labels:{control:!1},onTakeOver:{table:{disable:!0}},onResume:{table:{disable:!0}},onHandBack:{table:{disable:!0}},className:{table:{disable:!0}}}},r={},e={args:{state:"you-control"}},o={args:{state:"supervise"},decorators:[g=>t.jsx("div",{style:{width:320},children:t.jsx(g,{})})]},B=["Playground","YouControl","Narrow"];var s,n,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,p,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    state: "you-control"
  }
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var m,d,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    state: "supervise"
  },
  decorators: [Story => <div style={{
    width: 320
  }}><Story /></div>]
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};export{o as Narrow,r as Playground,e as YouControl,B as __namedExportsOrder,w as default};
