import{j as t}from"./iframe-C8v_uZy_.js";import{bK as c,b as d}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const s=d.get("streaming-reveal"),q={title:"Conversation/StreamingReveal",component:c,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},e={name:"A reply as it is written",render:()=>t.jsx(t.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"Replay writes the text again. Only the newest words are faint."},source:{code:`const { text, streaming } = useStreamingText(answer);
<StreamingReveal text={text} streaming={streaming} />`}}}},r={name:"Inside a message",render:()=>t.jsx(t.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"The message keeps its blinking cursor and screen reader behavior. This only changes how words appear."},source:{code:`<Message role="assistant" streaming={streaming}>
  <p><StreamingReveal text={text} streaming={streaming} /></p>
</Message>`}}}},z=["AReplyAsItIsWritten","InsideAMessage"];var n,a,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "A reply as it is written",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Replay writes the text again. Only the newest words are faint."
      },
      source: {
        code: "const { text, streaming } = useStreamingText(answer);\\n<StreamingReveal text={text} streaming={streaming} />"
      }
    }
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var o,m,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Inside a message",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The message keeps its blinking cursor and screen reader behavior. This only changes how words appear."
      },
      source: {
        code: "<Message role=\\"assistant\\" streaming={streaming}>\\n  <p><StreamingReveal text={text} streaming={streaming} /></p>\\n</Message>"
      }
    }
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{e as AReplyAsItIsWritten,r as InsideAMessage,z as __namedExportsOrder,q as default};
