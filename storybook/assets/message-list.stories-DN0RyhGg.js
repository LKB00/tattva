import{j as r}from"./iframe-DSdOWv-_.js";import{aG as c,b as g}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const t=g.get("message-list"),Y={title:"Conversation/MessageList",component:c,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},e={name:"A short conversation",render:()=>r.jsx(r.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Your messages and the assistant's replies stack in one column."},source:{code:`<MessageList>
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
