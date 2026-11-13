import{j as t}from"./iframe-D-pZXX8_.js";import{aA as p,b as d}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const r=d.get("jump-to-latest"),O={title:"Conversation/JumpToLatest",component:p,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},e={name:"In a long conversation",render:()=>t.jsx(t.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Scroll up, then add a message. The button appears with a count."},source:{code:`const { ref, atBottom, unseen, markUnseen, scrollToBottom } = useStickToBottom();
<div className="relative">
  <div ref={ref} className="h-56 overflow-y-auto">…</div>
  <JumpToLatest visible={!atBottom} count={unseen} onClick={scrollToBottom} />
</div>`}}}},o={name:"Both labels",render:()=>t.jsx(t.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"The two labels side by side."},source:{code:`<div className="relative h-16">
  <JumpToLatest visible onClick={go} />
</div>
<div className="relative h-16">
  <JumpToLatest visible count={3} onClick={go} />
</div>`}}}},R=["InALongConversation","BothLabels"];var s,n,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "In a long conversation",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Scroll up, then add a message. The button appears with a count."
      },
      source: {
        code: "const { ref, atBottom, unseen, markUnseen, scrollToBottom } = useStickToBottom();\\n<div className=\\"relative\\">\\n  <div ref={ref} className=\\"h-56 overflow-y-auto\\">…</div>\\n  <JumpToLatest visible={!atBottom} count={unseen} onClick={scrollToBottom} />\\n</div>"
      }
    }
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var i,m,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Both labels",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The two labels side by side."
      },
      source: {
        code: "<div className=\\"relative h-16\\">\\n  <JumpToLatest visible onClick={go} />\\n</div>\\n<div className=\\"relative h-16\\">\\n  <JumpToLatest visible count={3} onClick={go} />\\n</div>"
      }
    }
  }
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};export{o as BothLabels,e as InALongConversation,R as __namedExportsOrder,O as default};
