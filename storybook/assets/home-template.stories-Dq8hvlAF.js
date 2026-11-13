import{j as t}from"./iframe-D-pZXX8_.js";import{aw as p,b as m}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const o=m.get("home-template"),Q={title:"Full screens and layout/HomeTemplate",component:p,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"Greeting, tray and AI notice",render:()=>t.jsx(t.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"A greeting, a tray with one row and a message box, and the AI notice below."},source:{code:`<div className="h-105 overflow-hidden rounded-card border border-line">
  <AppShell>
    <HomeTemplate heading={<HeroHeading text="Where should we start?" type={false} />} footnote={<AIDisclosure />}>
      <Tray label="Needs you" footer={<Composer onSend={() => {}} />}>
        <TrayRow attention title="Quarterly report" detail="Approval pending" trailing="Open →" />
      </Tray>
    </HomeTemplate>
  </AppShell>
</div>`}}}},r={name:"Empty placeholders",render:()=>t.jsx(t.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"The same layout with plain placeholders, showing what goes where."},source:{code:`<div className="h-105 overflow-hidden rounded-card border border-line">
  <AppShell>
    <HomeTemplate heading={<h2 className="text-center text-title-md">Heading slot</h2>} footnote={<p className="text-center text-small leading-4 text-fg-subtle">Footnote slot</p>}>
      <div className="flex h-24 items-center justify-center rounded-card border border-dashed border-line-strong text-small leading-4 text-fg-subtle">Children slot</div>
    </HomeTemplate>
  </AppShell>
</div>`}}}},W=["GreetingTrayAndAINotice","EmptyPlaceholders"];var n,a,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Greeting, tray and AI notice",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A greeting, a tray with one row and a message box, and the AI notice below."
      },
      source: {
        code: "<div className=\\"h-105 overflow-hidden rounded-card border border-line\\">\\n  <AppShell>\\n    <HomeTemplate heading={<HeroHeading text=\\"Where should we start?\\" type={false} />} footnote={<AIDisclosure />}>\\n      <Tray label=\\"Needs you\\" footer={<Composer onSend={() => {}} />}>\\n        <TrayRow attention title=\\"Quarterly report\\" detail=\\"Approval pending\\" trailing=\\"Open →\\" />\\n      </Tray>\\n    </HomeTemplate>\\n  </AppShell>\\n</div>"
      }
    }
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var d,l,i;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Empty placeholders",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The same layout with plain placeholders, showing what goes where."
      },
      source: {
        code: "<div className=\\"h-105 overflow-hidden rounded-card border border-line\\">\\n  <AppShell>\\n    <HomeTemplate heading={<h2 className=\\"text-center text-title-md\\">Heading slot</h2>} footnote={<p className=\\"text-center text-small leading-4 text-fg-subtle\\">Footnote slot</p>}>\\n      <div className=\\"flex h-24 items-center justify-center rounded-card border border-dashed border-line-strong text-small leading-4 text-fg-subtle\\">Children slot</div>\\n    </HomeTemplate>\\n  </AppShell>\\n</div>"
      }
    }
  }
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};export{r as EmptyPlaceholders,e as GreetingTrayAndAINotice,W as __namedExportsOrder,Q as default};
