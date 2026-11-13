import{j as t}from"./iframe-D-pZXX8_.js";import{cn as p,b as d}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const o=d.get("version-pager"),O={title:"Conversation/VersionPager",component:p,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},r={name:"Default",render:()=>t.jsx(t.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Starts on the latest version."},source:{code:"<VersionPager total={3} />"}}}},e={name:"Edited, with a branch button",render:()=>t.jsx(t.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"Use it when your product can start a new chat from this version."},source:{code:'<VersionPager total={2} edited branchAction={<Button size="sm" variant="ghost">Branch from here</Button>} />'}}}},R=["Default","EditedWithABranchButton"];var n,s,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Default",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Starts on the latest version."
      },
      source: {
        code: "<VersionPager total={3} />"
      }
    }
  }
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var i,m,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Edited, with a branch button",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Use it when your product can start a new chat from this version."
      },
      source: {
        code: "<VersionPager total={2} edited branchAction={<Button size=\\"sm\\" variant=\\"ghost\\">Branch from here</Button>} />"
      }
    }
  }
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};export{r as Default,e as EditedWithABranchButton,R as __namedExportsOrder,O as default};
