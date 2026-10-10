import{j as s}from"./iframe-J6_2PHET.js";import{p as y}from"./proLock-DICmId1O.js";import{S as b}from"./StatTile-CcryVKxD.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./MeterBar-D9CLVzvA.js";import"./icons-DAivRSTR.js";const P={title:"Playground/StatTile",component:b,parameters:y("StatTile"),tags:["autodocs"],args:{label:"Median response time",value:"640 ms",serif:!1,delta:{text:"-120 ms",direction:"down",versus:"vs previous 7 days"},goodDirection:"down",detail:"Across 12,400 requests",needsAction:!1,actionText:"Needs review"},argTypes:{label:{control:"text"},value:{control:"text"},serif:{control:"boolean"},delta:{control:"object"},goodDirection:{control:"radio",options:["up","down","neutral"]},detail:{control:"text"},threshold:{control:"object"},needsAction:{control:"boolean"},actionText:{control:"text"},spark:{control:!1},className:{table:{disable:!0}}}},e={},r={args:{threshold:{value:640,max:1e3,at:800,label:"Target 800 ms"}}},o={args:{needsAction:!0,delta:{text:"+310 ms",direction:"up",versus:"vs previous 7 days"},value:"950 ms"}},t={decorators:[h=>s.jsx("div",{style:{width:240},children:s.jsx(h,{})})]},k=["Playground","WithThreshold","NeedsAction","Narrow"];var a,n,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var d,i,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    threshold: {
      value: 640,
      max: 1000,
      at: 800,
      label: "Target 800 ms"
    }
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,p,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    needsAction: true,
    delta: {
      text: "+310 ms",
      direction: "up",
      versus: "vs previous 7 days"
    },
    value: "950 ms"
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var v,g,x;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: 240
  }}><Story /></div>]
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};export{t as Narrow,o as NeedsAction,e as Playground,r as WithThreshold,k as __namedExportsOrder,P as default};
