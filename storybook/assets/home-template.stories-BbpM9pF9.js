import{j as t}from"./iframe-C8v_uZy_.js";import{ar as p,b as m}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const o=m.get("home-template"),Q={title:"Full screens and layout/HomeTemplate",component:p,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"Greeting, tray and AI notice",render:()=>t.jsx(t.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"A greeting, a tray with one row and a message box, and the AI notice below."},source:{code:`<div className="h-105 overflow-hidden rounded-card border border-line">
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
