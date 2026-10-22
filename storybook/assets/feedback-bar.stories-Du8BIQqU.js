import{j as s}from"./iframe-C8v_uZy_.js";import{ad as d,b as p}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const o=p.get("feedback-bar"),q={title:"Trust/FeedbackBar",component:d,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"Interactive",render:()=>s.jsx(s.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Try thumbs down to see the reasons. The line below shows what was sent."},source:{code:"<FeedbackBar onSubmit={(rating, reason) => console.log(rating, reason)} />"}}}},r={name:"Reset for a new message",render:()=>s.jsx(s.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"Send feedback, then choose Next message. The bar starts fresh for each new message."},source:{code:"<FeedbackBar resetKey={message.id} onSubmit={(rating, reason) => send(message.id, rating, reason)} />"}}}},z=["Interactive","ResetForANewMessage"];var t,a,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
