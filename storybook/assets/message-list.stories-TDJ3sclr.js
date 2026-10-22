import{j as r}from"./iframe-C8v_uZy_.js";import{aK as c,b as g}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const t=g.get("message-list"),Y={title:"Conversation/MessageList",component:c,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},e={name:"A short conversation",render:()=>r.jsx(r.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Your messages and the assistant's replies stack in one column."},source:{code:`<MessageList>
  <Message role="user">Summarise the meeting notes.</Message>
  <Message role="assistant">The team agreed to ship on Friday and review metrics next week.</Message>
</MessageList>`}}}},s={name:"A reply that is still being written",render:()=>r.jsx(r.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Give the conversation a name for screen readers. A reply that is still being written shows a blinking cursor."},source:{code:`<MessageList label="Revenue analysis">
  <Message role="user">What drove growth?</Message>
  <Message role="assistant" streaming>Revenue grew mostly because of enterprise renewals</Message>
</MessageList>`}}}},_=["AShortConversation","AReplyThatIsStillBeingWritten"];var n,a,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "A short conversation",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Your messages and the assistant's replies stack in one column."
      },
      source: {
        code: "<MessageList>\\n  <Message role=\\"user\\">Summarise the meeting notes.</Message>\\n  <Message role=\\"assistant\\">The team agreed to ship on Friday and review metrics next week.</Message>\\n</MessageList>"
      }
    }
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var i,m,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "A reply that is still being written",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Give the conversation a name for screen readers. A reply that is still being written shows a blinking cursor."
      },
      source: {
        code: "<MessageList label=\\"Revenue analysis\\">\\n  <Message role=\\"user\\">What drove growth?</Message>\\n  <Message role=\\"assistant\\" streaming>Revenue grew mostly because of enterprise renewals</Message>\\n</MessageList>"
      }
    }
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{s as AReplyThatIsStillBeingWritten,e as AShortConversation,_ as __namedExportsOrder,Y as default};
