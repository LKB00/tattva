import{j as s}from"./iframe-DSdOWv-_.js";import{a9 as d,b as p}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const o=p.get("feedback-bar"),q={title:"Trust/FeedbackBar",component:d,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"Interactive",render:()=>s.jsx(s.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Try thumbs down to see the reasons. The line below shows what was sent."},source:{code:"<FeedbackBar onSubmit={(rating, reason) => console.log(rating, reason)} />"}}}},r={name:"Reset for a new message",render:()=>s.jsx(s.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"Send feedback, then choose Next message. The bar starts fresh for each new message."},source:{code:"<FeedbackBar resetKey={message.id} onSubmit={(rating, reason) => send(message.id, rating, reason)} />"}}}},z=["Interactive","ResetForANewMessage"];var t,a,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Interactive",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Try thumbs down to see the reasons. The line below shows what was sent."
      },
      source: {
        code: "<FeedbackBar onSubmit={(rating, reason) => console.log(rating, reason)} />"
      }
    }
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var m,i,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Reset for a new message",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Send feedback, then choose Next message. The bar starts fresh for each new message."
      },
      source: {
        code: "<FeedbackBar resetKey={message.id} onSubmit={(rating, reason) => send(message.id, rating, reason)} />"
      }
    }
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};export{e as Interactive,r as ResetForANewMessage,z as __namedExportsOrder,q as default};
