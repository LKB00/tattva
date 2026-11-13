import{j as e}from"./iframe-D-pZXX8_.js";import{b as h}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import{M as x}from"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const t=h.get("meter"),B={title:"Numbers/Meter",component:x,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},r={name:"Plain",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"A dark fill, as wide as the amount used out of the limit."},source:{code:'<Meter label="Space used" value={40} valueText="40% of the space" />'}}}},a={name:"Past the warning point",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"At 85 with a warning point of 80 percent, the fill turns amber. The words beside it say why."},source:{code:`<div className="w-64 space-y-1">
  <Meter label="Space used" value={85} warnAt={0.8} valueText="85% of the space" />
  <p className="text-small leading-4 text-attention-fg">85% used. Start a new chat soon.</p>
</div>`}}}},n={name:"A limit other than 100",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"Set a limit when the amount is not a percent."},source:{code:'<Meter label="Credits used" value={30} max={120} valueText="30 of 120 credits" />'}}}},D=["Plain","PastTheWarningPoint","ALimitOtherThan100"];var s,o,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Plain",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A dark fill, as wide as the amount used out of the limit."
      },
      source: {
        code: "<Meter label=\\"Space used\\" value={40} valueText=\\"40% of the space\\" />"
      }
    }
  }
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var m,p,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Past the warning point",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "At 85 with a warning point of 80 percent, the fill turns amber. The words beside it say why."
      },
      source: {
        code: "<div className=\\"w-64 space-y-1\\">\\n  <Meter label=\\"Space used\\" value={85} warnAt={0.8} valueText=\\"85% of the space\\" />\\n  <p className=\\"text-small leading-4 text-attention-fg\\">85% used. Start a new chat soon.</p>\\n</div>"
      }
    }
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,l,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "A limit other than 100",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Set a limit when the amount is not a percent."
      },
      source: {
        code: "<Meter label=\\"Credits used\\" value={30} max={120} valueText=\\"30 of 120 credits\\" />"
      }
    }
  }
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};export{n as ALimitOtherThan100,a as PastTheWarningPoint,r as Plain,D as __namedExportsOrder,B as default};
