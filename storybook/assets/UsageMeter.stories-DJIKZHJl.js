import{j as o}from"./iframe-DSdOWv-_.js";import{U as g}from"./UsageMeter-IsJk8RBz.js";import"./preload-helper-Dp1pzeXC.js";import"./MeterBar-BMetz_pC.js";import"./cn-2dOUpm6k.js";const N={title:"Playground/UsageMeter",component:g,tags:["autodocs"],args:{remaining:640,total:1e3,unit:"credits",label:"Usage",resetText:"Resets on the 1st",warnAt:.8},argTypes:{remaining:{control:{type:"number",min:0}},total:{control:{type:"number",min:1}},unit:{control:"text"},estimate:{control:{type:"number",min:0}},resetText:{control:"text"},warnAt:{control:{type:"number",min:0,max:1,step:.05}},warnText:{control:"text"},label:{control:"text"},upgrade:{control:!1},className:{table:{disable:!0}}}},e={},r={args:{remaining:90,estimate:40,warnText:"You are close to your limit."}},t={decorators:[u=>o.jsx("div",{style:{width:320},children:o.jsx(u,{})})]},S=["Playground","NearLimit","Narrow"];var a,s,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var i,m,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    remaining: 90,
    estimate: 40,
    warnText: "You are close to your limit."
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var l,p,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: 320
  }}><Story /></div>]
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};export{t as Narrow,r as NearLimit,e as Playground,S as __namedExportsOrder,N as default};
