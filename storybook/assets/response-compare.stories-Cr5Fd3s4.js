import{j as r}from"./iframe-D-pZXX8_.js";import{bg as c,b as d}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const s=d.get("response-compare"),_={title:"Conversation/ResponseCompare",component:c,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},e={name:"Pick the better reply",render:()=>r.jsx(r.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"Press Choose this reply under one, or About the same."},source:{code:`<ResponseCompare
  replies={[
    { id: "a", label: "Reply A", content: <p>Your refund of ₹3,499 was sent on 12 October…</p> },
    { id: "b", label: "Reply B", content: <p>Refunds usually take a while…</p> },
  ]}
  onChoose={(id) => saveChoice(id)}
/>`}}}},o={name:"Without About the same",render:()=>r.jsx(r.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"Turn it off when a choice is required."},source:{code:"<ResponseCompare allowSame={false} replies={replies} onChoose={choose} />"}}}},I=["PickTheBetterReply","WithoutAboutTheSame"];var t,n,p;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Pick the better reply",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press Choose this reply under one, or About the same."
      },
      source: {
        code: "<ResponseCompare\\n  replies={[\\n    { id: \\"a\\", label: \\"Reply A\\", content: <p>Your refund of ₹3,499 was sent on 12 October…</p> },\\n    { id: \\"b\\", label: \\"Reply B\\", content: <p>Refunds usually take a while…</p> },\\n  ]}\\n  onChoose={(id) => saveChoice(id)}\\n/>"
      }
    }
  }
}`,...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var a,i,m;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Without About the same",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Turn it off when a choice is required."
      },
      source: {
        code: "<ResponseCompare allowSame={false} replies={replies} onChoose={choose} />"
      }
    }
  }
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as PickTheBetterReply,o as WithoutAboutTheSame,I as __namedExportsOrder,_ as default};
