import{j as s}from"./iframe-DSdOWv-_.js";import{bV as m,b as p}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const o=p.get("thread-template"),H={title:"Full screens and layout/ThreadTemplate",component:m,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"A conversation with a message box",render:()=>s.jsx(s.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"The title sits above the conversation. Messages scroll while the message box stays put."},source:{code:`<div className="h-105 overflow-hidden rounded-card border border-line">
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
