import{j as t}from"./iframe-D-pZXX8_.js";import{bS as c,b as d}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const s=d.get("streaming-reveal"),z={title:"Conversation/StreamingReveal",component:c,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},e={name:"A reply as it is written",render:()=>t.jsx(t.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"Replay writes the text again. Only the newest words are faint."},source:{code:`const { text, streaming } = useStreamingText(answer);
<StreamingReveal text={text} streaming={streaming} />`}}}},r={name:"Inside a message",render:()=>t.jsx(t.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"The message keeps its blinking cursor and screen reader behavior. This only changes how words appear."},source:{code:`<Message role="assistant" streaming={streaming}>
  <p><StreamingReveal text={text} streaming={streaming} /></p>
</Message>`}}}},B=["AReplyAsItIsWritten","InsideAMessage"];var n,a,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{e as AReplyAsItIsWritten,r as InsideAMessage,B as __namedExportsOrder,z as default};
