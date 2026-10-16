import{j as t}from"./iframe-DSdOWv-_.js";import{bF as c,b as d}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const s=d.get("streaming-reveal"),z={title:"Conversation/StreamingReveal",component:c,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},e={name:"A reply as it is written",render:()=>t.jsx(t.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"Replay writes the text again. Only the newest words are faint."},source:{code:`const { text, streaming } = useStreamingText(answer);
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
