import{j as t}from"./iframe-D-pZXX8_.js";import{be as p,b as d}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const o=d.get("refusal-notice"),C={title:"Trust/RefusalNotice",component:p,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"Reason and alternative",render:()=>t.jsx(t.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Offer something useful the assistant can do instead."},source:{code:`<RefusalNotice
  reason="I can't write messages that pretend to be a real person."
  alternative="I can write a clearly labeled template you can edit."
/>`}}}},r={name:"Reason only",render:()=>t.jsx(t.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:""},source:{code:`<RefusalNotice reason="That is something I can't help with." />`}}}},D=["ReasonAndAlternative","ReasonOnly"];var a,n,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Reason and alternative",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Offer something useful the assistant can do instead."
      },
      source: {
        code: "<RefusalNotice\\n  reason=\\"I can't write messages that pretend to be a real person.\\"\\n  alternative=\\"I can write a clearly labeled template you can edit.\\"\\n/>"
      }
    }
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var i,m,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Reason only",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: ""
      },
      source: {
        code: "<RefusalNotice reason=\\"That is something I can't help with.\\" />"
      }
    }
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};export{e as ReasonAndAlternative,r as ReasonOnly,D as __namedExportsOrder,C as default};
