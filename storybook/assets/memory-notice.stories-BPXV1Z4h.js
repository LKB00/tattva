import{j as t}from"./iframe-D-pZXX8_.js";import{aM as p,b as d}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const r=d.get("memory-notice"),R={title:"Trust/MemoryNotice",component:p,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},e={name:"With actions",render:()=>t.jsx(t.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Undo and close both hide the notice here."},source:{code:'<MemoryNotice saved="You prefer metric units." onManage={() => {}} onUndo={() => setShown(false)} onDismiss={() => setShown(false)} />'}}}},o={name:"Information only",render:()=>t.jsx(t.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"With no buttons, the notice only says what was saved."},source:{code:'<MemoryNotice title="Saved to this project" saved="The beta ships on the first Monday of November." />'}}}},k=["WithActions","InformationOnly"];var n,s,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "With actions",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Undo and close both hide the notice here."
      },
      source: {
        code: "<MemoryNotice saved=\\"You prefer metric units.\\" onManage={() => {}} onUndo={() => setShown(false)} onDismiss={() => setShown(false)} />"
      }
    }
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var a,m,c;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Information only",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With no buttons, the notice only says what was saved."
      },
      source: {
        code: "<MemoryNotice title=\\"Saved to this project\\" saved=\\"The beta ships on the first Monday of November.\\" />"
      }
    }
  }
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};export{o as InformationOnly,e as WithActions,k as __namedExportsOrder,R as default};
