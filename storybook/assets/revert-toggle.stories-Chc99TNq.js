import{j as t}from"./iframe-D-pZXX8_.js";import{bj as m,b as c}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const n=c.get("revert-toggle"),B={title:"Trust/RevertToggle",component:m,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"After an edit",render:()=>t.jsx(t.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Reverting drops the edit here, and the switch goes away."},source:{code:`<RevertToggle
  aiValue="Thank you for waiting. We expect to ship the fix on Friday."
  userValue={edit}
  onRevert={() => setEdit(undefined)}
/>`}}}},r={name:"Starting on the AI version",render:()=>t.jsx(t.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Opens on the AI version even when an edit exists."},source:{code:'<RevertToggle aiValue="Weekly sync, Tuesdays at 10:00." userValue="Weekly sync, Tuesdays at 09:30." defaultValue="ai" />'}}}},C=["AfterAnEdit","StartingOnTheAIVersion"];var o,s,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "After an edit",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Reverting drops the edit here, and the switch goes away."
      },
      source: {
        code: "<RevertToggle\\n  aiValue=\\"Thank you for waiting. We expect to ship the fix on Friday.\\"\\n  userValue={edit}\\n  onRevert={() => setEdit(undefined)}\\n/>"
      }
    }
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var i,d,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Starting on the AI version",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Opens on the AI version even when an edit exists."
      },
      source: {
        code: "<RevertToggle aiValue=\\"Weekly sync, Tuesdays at 10:00.\\" userValue=\\"Weekly sync, Tuesdays at 09:30.\\" defaultValue=\\"ai\\" />"
      }
    }
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};export{e as AfterAnEdit,r as StartingOnTheAIVersion,C as __namedExportsOrder,B as default};
