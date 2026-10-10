import{j as t,r as h}from"./iframe-J6_2PHET.js";import{S as s}from"./SegmentedControl-CnxzYyJm.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";const y=[{value:"day",label:"Day"},{value:"week",label:"Week"},{value:"month",label:"Month"}],C={title:"Playground/SegmentedControl",component:s,tags:["autodocs"],args:{options:y,value:"week",label:"Time range",size:"md",onChange:()=>{}},argTypes:{options:{control:"object"},value:{control:"text"},label:{control:"text"},size:{control:"radio",options:["sm","md"]},onChange:{table:{disable:!0}},className:{table:{disable:!0}}},render:e=>{const[v,b]=h.useState(e.value);return t.jsx(s,{...e,value:v,onChange:b})}},a={},r={args:{size:"sm"}},o={args:{options:[{value:"a",label:"Everything"},{value:"b",label:"Only mine"},{value:"c",label:"Shared with me"}],value:"a"},decorators:[e=>t.jsx("div",{style:{width:320},children:t.jsx(e,{})})]},E=["Playground","Small","Narrow"];var n,l,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,i,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: "sm"
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var u,p,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    options: [{
      value: "a",
      label: "Everything"
    }, {
      value: "b",
      label: "Only mine"
    }, {
      value: "c",
      label: "Shared with me"
    }],
    value: "a"
  },
  decorators: [Story => <div style={{
    width: 320
  }}><Story /></div>]
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};export{o as Narrow,a as Playground,r as Small,E as __namedExportsOrder,C as default};
