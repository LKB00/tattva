import{j as e}from"./iframe-D-pZXX8_.js";import{b as h}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import{U as l}from"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const r=h.get("usage-meter"),q={title:"Numbers/UsageMeter",component:l,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},t={name:"With an estimate",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Shows the cost before the person confirms an action."},source:{code:'<UsageMeter remaining={340} total={500} estimate={12} resetText="Resets Nov 1" />'}}}},s={name:"Running low",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"When credits run low, the meter explains why and shows the upgrade button."},source:{code:'<UsageMeter remaining={40} total={500} resetText="Resets Nov 1" upgrade={<Button size="sm" variant="lime">Upgrade</Button>} />'}}}},n={name:"Cost is more than what is left",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"The warning says so even when usage is moderate."},source:{code:'<UsageMeter remaining={30} total={100} estimate={60} unit="credits" />'}}}},D=["WithAnEstimate","RunningLow","CostIsMoreThanWhatIsLeft"];var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "With an estimate",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Shows the cost before the person confirms an action."
      },
      source: {
        code: "<UsageMeter remaining={340} total={500} estimate={12} resetText=\\"Resets Nov 1\\" />"
      }
    }
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var m,p,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Running low",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "When credits run low, the meter explains why and shows the upgrade button."
      },
      source: {
        code: "<UsageMeter remaining={40} total={500} resetText=\\"Resets Nov 1\\" upgrade={<Button size=\\"sm\\" variant=\\"lime\\">Upgrade</Button>} />"
      }
    }
  }
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,u,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Cost is more than what is left",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The warning says so even when usage is moderate."
      },
      source: {
        code: "<UsageMeter remaining={30} total={100} estimate={60} unit=\\"credits\\" />"
      }
    }
  }
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};export{n as CostIsMoreThanWhatIsLeft,s as RunningLow,t as WithAnEstimate,D as __namedExportsOrder,q as default};
