import{j as e}from"./iframe-DSdOWv-_.js";import{aI as w,b as f}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const s=f.get("message"),G={title:"Conversation/Message",component:w,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},a={name:"User and assistant",render:()=>e.jsx(e.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"The person's bubble never fills the whole width. The assistant has no bubble."},source:{code:`<div className="w-full max-w-xl space-y-6">
  <Message role="user">Can you summarize the meeting?</Message>
  <Message role="assistant">
    <p>The team agreed to ship on Friday and review the open risks on Wednesday.</p>
  </Message>
</div>`}}}},r={name:"Streaming",render:()=>e.jsx(e.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"While words are still appearing, a blinking cursor shows and screen readers do not read each new word."},source:{code:`<Message role="assistant" streaming>
  <p>Looking at the notes now, the main decision was</p>
</Message>`}}}},n={name:"With a footer",render:()=>e.jsx(e.Fragment,{children:s.examples[2].render()}),parameters:{docs:{description:{story:"Add actions and feedback at the bottom once the reply is finished."},source:{code:`<Message
  role="assistant"
  footer={
    <div className="space-y-2">
      <MessageActions text="The team agreed to ship on Friday." onRegenerate={() => {}} />
      <ConfidenceIndicator level="high" />
    </div>
  }
>
  <p>The team agreed to ship on Friday.</p>
</Message>`}}}},t={name:"Plain turns, with the mark once",render:()=>e.jsx(e.Fragment,{children:s.examples[3].render()}),parameters:{docs:{description:{story:"The person's turns are serif text with no bubble. The first reply shows the AI mark and name above it; the rest need no mark, because the thread already says who is speaking."},source:{code:`<div className="flex w-full max-w-xl flex-col gap-5">
  <Message role="user" variant="plain">My refund from Flipkart is stuck.</Message>
  <Message role="assistant" mark="top">I read your message and found the order.</Message>
  <Message role="user" variant="plain">Yes, that one.</Message>
  <Message role="assistant">Is the amount ₹3,499?</Message>
</div>`}}}},H=["UserAndAssistant","Streaming","WithAFooter","PlainTurnsWithTheMarkOnce"];var o,i,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "User and assistant",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The person's bubble never fills the whole width. The assistant has no bubble."
      },
      source: {
        code: "<div className=\\"w-full max-w-xl space-y-6\\">\\n  <Message role=\\"user\\">Can you summarize the meeting?</Message>\\n  <Message role=\\"assistant\\">\\n    <p>The team agreed to ship on Friday and review the open risks on Wednesday.</p>\\n  </Message>\\n</div>"
      }
    }
  }
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,p,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Streaming",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "While words are still appearing, a blinking cursor shows and screen readers do not read each new word."
      },
      source: {
        code: "<Message role=\\"assistant\\" streaming>\\n  <p>Looking at the notes now, the main decision was</p>\\n</Message>"
      }
    }
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var l,h,g;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "With a footer",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Add actions and feedback at the bottom once the reply is finished."
      },
      source: {
        code: "<Message\\n  role=\\"assistant\\"\\n  footer={\\n    <div className=\\"space-y-2\\">\\n      <MessageActions text=\\"The team agreed to ship on Friday.\\" onRegenerate={() => {}} />\\n      <ConfidenceIndicator level=\\"high\\" />\\n    </div>\\n  }\\n>\\n  <p>The team agreed to ship on Friday.</p>\\n</Message>"
      }
    }
  }
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var u,M,y;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Plain turns, with the mark once",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The person's turns are serif text with no bubble. The first reply shows the AI mark and name above it; the rest need no mark, because the thread already says who is speaking."
      },
      source: {
        code: "<div className=\\"flex w-full max-w-xl flex-col gap-5\\">\\n  <Message role=\\"user\\" variant=\\"plain\\">My refund from Flipkart is stuck.</Message>\\n  <Message role=\\"assistant\\" mark=\\"top\\">I read your message and found the order.</Message>\\n  <Message role=\\"user\\" variant=\\"plain\\">Yes, that one.</Message>\\n  <Message role=\\"assistant\\">Is the amount ₹3,499?</Message>\\n</div>"
      }
    }
  }
}`,...(y=(M=t.parameters)==null?void 0:M.docs)==null?void 0:y.source}}};export{t as PlainTurnsWithTheMarkOnce,r as Streaming,a as UserAndAssistant,n as WithAFooter,H as __namedExportsOrder,G as default};
