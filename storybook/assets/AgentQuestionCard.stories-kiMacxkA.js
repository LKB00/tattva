import{j as t}from"./iframe-J6_2PHET.js";import{p as h}from"./proLock-DICmId1O.js";import{A as x}from"./AgentQuestionCard-D0QhujV4.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./icons-DAivRSTR.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";const{fn:a}=__STORYBOOK_MODULE_TEST__,R={title:"Playground/AgentQuestionCard",component:x,parameters:h("AgentQuestionCard"),tags:["autodocs"],args:{question:"Which format should the weekly report use?",reason:"approach",allowText:!0,runName:"Weekly report",options:[{id:"pdf",label:"PDF",description:"Easy to share and print."},{id:"doc",label:"Document",description:"Easy to keep editing."},{id:"slides",label:"Slides"}],onAnswer:a(),onReopen:a()},argTypes:{question:{control:"text"},reason:{control:"select",options:["approach","information","sign-in","risky-step"]},options:{control:"object"},allowText:{control:"boolean"},answer:{control:"object"},runName:{control:"text"},labels:{control:!1},onAnswer:{table:{disable:!0}},onReopen:{table:{disable:!0}},className:{table:{disable:!0}}}},e={},o={args:{answer:{kind:"option",value:"pdf",label:"PDF"}}},r={args:{reason:"risky-step",question:"Delete the 14 old drafts?",options:[],allowText:!1}},s={decorators:[f=>t.jsx("div",{style:{width:320},children:t.jsx(f,{})})]},v=["Playground","Answered","RiskyStep","Narrow"];var n,i,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,c,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    answer: {
      kind: "option",
      value: "pdf",
      label: "PDF"
    }
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,u,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    reason: "risky-step",
    question: "Delete the 14 old drafts?",
    options: [],
    allowText: false
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,w,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: 320
  }}><Story /></div>]
}`,...(b=(w=s.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};export{o as Answered,s as Narrow,e as Playground,r as RiskyStep,v as __namedExportsOrder,R as default};
