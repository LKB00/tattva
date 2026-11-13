import{j as s}from"./iframe-D-pZXX8_.js";import{c6 as m,b as p}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const o=p.get("thread-template"),H={title:"Full screens and layout/ThreadTemplate",component:m,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"A conversation with a message box",render:()=>s.jsx(s.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"The title sits above the conversation. Messages scroll while the message box stays put."},source:{code:`<div className="h-105 overflow-hidden rounded-card border border-line">
  <AppShell>
    <ThreadTemplate header="Onboarding email draft" composer={<Composer onSend={() => {}} />} footnote={<AIDisclosure />}>
      <MessageList>
        <Message role="user">Draft a welcome email for new customers.</Message>
        <Message role="assistant">Here is a short draft you can adapt.</Message>
      </MessageList>
    </ThreadTemplate>
  </AppShell>
</div>`}}}},r={name:"Empty placeholders",render:()=>s.jsx(s.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"With no title, the content starts at the top. Anything can fill the conversation, not only messages."},source:{code:`<div className="h-105 overflow-hidden rounded-card border border-line">
  <AppShell>
    <ThreadTemplate composer={<div className="flex h-12 items-center justify-center rounded-card border border-dashed border-line-strong text-small leading-4 text-fg-subtle">Composer slot</div>}>
      <div className="flex h-24 items-center justify-center rounded-card border border-dashed border-line-strong text-small leading-4 text-fg-subtle">Thread body</div>
    </ThreadTemplate>
  </AppShell>
</div>`}}}},P=["AConversationWithAMessageBox","EmptyPlaceholders"];var t,a,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "A conversation with a message box",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The title sits above the conversation. Messages scroll while the message box stays put."
      },
      source: {
        code: "<div className=\\"h-105 overflow-hidden rounded-card border border-line\\">\\n  <AppShell>\\n    <ThreadTemplate header=\\"Onboarding email draft\\" composer={<Composer onSend={() => {}} />} footnote={<AIDisclosure />}>\\n      <MessageList>\\n        <Message role=\\"user\\">Draft a welcome email for new customers.</Message>\\n        <Message role=\\"assistant\\">Here is a short draft you can adapt.</Message>\\n      </MessageList>\\n    </ThreadTemplate>\\n  </AppShell>\\n</div>"
      }
    }
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var d,i,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Empty placeholders",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With no title, the content starts at the top. Anything can fill the conversation, not only messages."
      },
      source: {
        code: "<div className=\\"h-105 overflow-hidden rounded-card border border-line\\">\\n  <AppShell>\\n    <ThreadTemplate composer={<div className=\\"flex h-12 items-center justify-center rounded-card border border-dashed border-line-strong text-small leading-4 text-fg-subtle\\">Composer slot</div>}>\\n      <div className=\\"flex h-24 items-center justify-center rounded-card border border-dashed border-line-strong text-small leading-4 text-fg-subtle\\">Thread body</div>\\n    </ThreadTemplate>\\n  </AppShell>\\n</div>"
      }
    }
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};export{e as AConversationWithAMessageBox,r as EmptyPlaceholders,P as __namedExportsOrder,H as default};
