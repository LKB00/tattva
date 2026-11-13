import{j as r}from"./iframe-D-pZXX8_.js";import{bK as m,b as c}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const a=c.get("split-canvas-template"),K={title:"Full screens and layout/SplitCanvasTemplate",component:m,tags:["autodocs"],parameters:{docs:{description:{component:a.summary+" "+a.description}}}},e={name:"A prompt and a canvas",render:()=>r.jsx(r.Fragment,{children:a.examples[0].render()}),parameters:{docs:{description:{story:"A document on the right. On a narrow screen the two sides stack."},source:{code:`<div className="h-105 overflow-hidden rounded-card border border-line">
  <AppShell>
    <SplitCanvasTemplate
      primary={<Composer onSend={() => {}} />}
      canvas={
        <CanvasPanel title="Launch announcement.md">
          <Markdown>{"# Launch announcement\\n\\nA calmer way to build with AI."}</Markdown>
        </CanvasPanel>
      }
    />
  </AppShell>
</div>`}}}},n={name:"Empty placeholders",render:()=>r.jsx(r.Fragment,{children:a.examples[1].render()}),parameters:{docs:{description:{story:"Each side has a name for screen readers. The defaults are Conversation on the left and Canvas on the right, and both can be renamed."},source:{code:`<div className="h-105 overflow-hidden rounded-card border border-line">
  <AppShell>
    <SplitCanvasTemplate
      primary={<div className="flex h-24 items-center justify-center rounded-card border border-dashed border-line-strong text-small leading-4 text-fg-subtle">Primary slot</div>}
      canvas={<div className="flex h-full min-h-24 items-center justify-center rounded-card border border-dashed border-line-strong text-small leading-4 text-fg-subtle">Canvas slot</div>}
    />
  </AppShell>
</div>`}}}},R=["APromptAndACanvas","EmptyPlaceholders"];var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "A prompt and a canvas",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A document on the right. On a narrow screen the two sides stack."
      },
      source: {
        code: "<div className=\\"h-105 overflow-hidden rounded-card border border-line\\">\\n  <AppShell>\\n    <SplitCanvasTemplate\\n      primary={<Composer onSend={() => {}} />}\\n      canvas={\\n        <CanvasPanel title=\\"Launch announcement.md\\">\\n          <Markdown>{\\"# Launch announcement\\\\n\\\\nA calmer way to build with AI.\\"}</Markdown>\\n        </CanvasPanel>\\n      }\\n    />\\n  </AppShell>\\n</div>"
      }
    }
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var d,i,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Empty placeholders",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Each side has a name for screen readers. The defaults are Conversation on the left and Canvas on the right, and both can be renamed."
      },
      source: {
        code: "<div className=\\"h-105 overflow-hidden rounded-card border border-line\\">\\n  <AppShell>\\n    <SplitCanvasTemplate\\n      primary={<div className=\\"flex h-24 items-center justify-center rounded-card border border-dashed border-line-strong text-small leading-4 text-fg-subtle\\">Primary slot</div>}\\n      canvas={<div className=\\"flex h-full min-h-24 items-center justify-center rounded-card border border-dashed border-line-strong text-small leading-4 text-fg-subtle\\">Canvas slot</div>}\\n    />\\n  </AppShell>\\n</div>"
      }
    }
  }
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};export{e as APromptAndACanvas,n as EmptyPlaceholders,R as __namedExportsOrder,K as default};
