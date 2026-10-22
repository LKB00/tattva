import{j as s}from"./iframe-C8v_uZy_.js";import{b_ as m,b as p}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const o=p.get("thread-template"),B={title:"Full screens and layout/ThreadTemplate",component:m,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"A conversation with a message box",render:()=>s.jsx(s.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"The title sits above the conversation. Messages scroll while the message box stays put."},source:{code:`<div className="h-105 overflow-hidden rounded-card border border-line">
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
</div>`}}}},H=["AConversationWithAMessageBox","EmptyPlaceholders"];var t,a,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};export{e as AConversationWithAMessageBox,r as EmptyPlaceholders,H as __namedExportsOrder,B as default};
