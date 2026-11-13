import{j as a}from"./iframe-D-pZXX8_.js";import{h as l,b as m}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const n=m.get("app-shell"),O={title:"Full screens and layout/AppShell",component:l,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"Side panel and main area",render:()=>a.jsx(a.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"The frame fills the space around it, so give that space a height. Make the window narrow and the side panel disappears."},source:{code:`<div className="h-105 overflow-hidden rounded-card border border-line">
  <AppShell rail={<ConversationList items={railItems} activeId="1" onSelect={() => {}} onNew={() => {}} />}>
    <div className="p-6 text-body leading-5 text-fg-muted">Main content goes here.</div>
  </AppShell>
</div>`}}}},r={name:"Without a side panel",render:()=>a.jsx(a.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"With no side panel, the main area takes the full width. The studio page uses this form."},source:{code:`<div className="h-105 overflow-hidden rounded-card border border-line">
  <AppShell>
    <div className="p-6 text-body leading-5 text-fg-muted">Full-width main column.</div>
  </AppShell>
</div>`}}}},R=["SidePanelAndMainArea","WithoutASidePanel"];var t,o,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Side panel and main area",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The frame fills the space around it, so give that space a height. Make the window narrow and the side panel disappears."
      },
      source: {
        code: "<div className=\\"h-105 overflow-hidden rounded-card border border-line\\">\\n  <AppShell rail={<ConversationList items={railItems} activeId=\\"1\\" onSelect={() => {}} onNew={() => {}} />}>\\n    <div className=\\"p-6 text-body leading-5 text-fg-muted\\">Main content goes here.</div>\\n  </AppShell>\\n</div>"
      }
    }
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var d,s,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Without a side panel",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With no side panel, the main area takes the full width. The studio page uses this form."
      },
      source: {
        code: "<div className=\\"h-105 overflow-hidden rounded-card border border-line\\">\\n  <AppShell>\\n    <div className=\\"p-6 text-body leading-5 text-fg-muted\\">Full-width main column.</div>\\n  </AppShell>\\n</div>"
      }
    }
  }
}`,...(p=(s=r.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};export{e as SidePanelAndMainArea,r as WithoutASidePanel,R as __namedExportsOrder,O as default};
