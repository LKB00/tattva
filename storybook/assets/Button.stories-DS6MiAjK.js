import{j as o}from"./iframe-J6_2PHET.js";import{B as b}from"./Button-D60Nh1os.js";import{S as w,P as x}from"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,O={title:"Playground/Button",component:b,tags:["autodocs"],args:{children:"Save changes",variant:"primary",size:"md",disabled:!1,onClick:f()},argTypes:{variant:{control:"select",options:["primary","lime","secondary","ghost","danger"]},size:{control:"radio",options:["sm","md","lg"]},disabled:{control:"boolean"},children:{control:"text",name:"label"},leading:{control:!1},trailing:{control:!1},onClick:{table:{disable:!0}}}},r={},e={args:{disabled:!0}},a={args:{children:"Send message",leading:o.jsx(x,{width:14,height:14}),trailing:o.jsx(w,{width:14,height:14})}},s={args:{children:"Continue with a very long label that wraps"},decorators:[y=>o.jsx("div",{style:{width:320},children:o.jsx(y,{})})]},B=["Playground","Disabled","WithIcons","Narrow"];var t,n,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var d,c,l;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,g,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: "Send message",
    leading: <PlusIcon width={14} height={14} />,
    trailing: <SendIcon width={14} height={14} />
  }
}`,...(p=(g=a.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var h,u,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: "Continue with a very long label that wraps"
  },
  decorators: [Story => <div style={{
    width: 320
  }}><Story /></div>]
}`,...(S=(u=s.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};export{e as Disabled,s as Narrow,r as Playground,a as WithIcons,B as __namedExportsOrder,O as default};
