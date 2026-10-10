import{j as e}from"./iframe-J6_2PHET.js";import{aB as M,b as f}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const s=f.get("message"),H={title:"Conversation/Message",component:M,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},a={name:"User and assistant",render:()=>e.jsx(e.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"The person's bubble never fills the whole width. The assistant has no bubble."},source:{code:`<div className="w-full max-w-xl space-y-6">
  <Message role="user">Can you summarize the meeting?</Message>
  <Message role="assistant">
    <p>The team agreed to ship on Friday and review the open risks on Wednesday.</p>
  </Message>
</div>`}}}},n={name:"Streaming",render:()=>e.jsx(e.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"While words are still appearing, a blinking cursor shows and screen readers do not read each new word."},source:{code:`<Message role="assistant" streaming>
  <p>Looking at the notes now, the main decision was</p>
</Message>`}}}},r={name:"With a footer",render:()=>e.jsx(e.Fragment,{children:s.examples[2].render()}),parameters:{docs:{description:{story:"Add actions and feedback at the bottom once the reply is finished."},source:{code:`<Message
  role="assistant"
  footer={
    <div className="space-y-2">
      <MessageActions text="The team agreed to ship on Friday." onRegenerate={() => {}} />
      <ConfidenceIndicator level="high" />
    </div>
  }
>
  <p>The team agreed to ship on Friday.</p>
</Message>`}}}},t={name:"Plain turns, avatar on the latest line only",render:()=>e.jsx(e.Fragment,{children:s.examples[3].render()}),parameters:{docs:{description:{story:"The person's turns are serif text with no bubble. Only the newest assistant line carries the avatar, so the mark appears once, not down the whole thread."},source:{code:`<div className="flex w-full max-w-xl flex-col gap-5">
  <Message role="user" variant="plain">My refund from Flipkart is stuck.</Message>
  <Message role="assistant" showAvatar={false}>I read your message and found the order.</Message>
  <Message role="assistant">Is the amount ₹3,499?</Message>
</div>`}}}},J=["UserAndAssistant","Streaming","WithAFooter","PlainTurnsAvatarOnTheLatestLineOnly"];var o,i,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,p,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var l,h,g;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var u,w,y;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Plain turns, avatar on the latest line only",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The person's turns are serif text with no bubble. Only the newest assistant line carries the avatar, so the mark appears once, not down the whole thread."
      },
      source: {
        code: "<div className=\\"flex w-full max-w-xl flex-col gap-5\\">\\n  <Message role=\\"user\\" variant=\\"plain\\">My refund from Flipkart is stuck.</Message>\\n  <Message role=\\"assistant\\" showAvatar={false}>I read your message and found the order.</Message>\\n  <Message role=\\"assistant\\">Is the amount ₹3,499?</Message>\\n</div>"
      }
    }
  }
}`,...(y=(w=t.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};export{t as PlainTurnsAvatarOnTheLatestLineOnly,n as Streaming,a as UserAndAssistant,r as WithAFooter,J as __namedExportsOrder,H as default};
