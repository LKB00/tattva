import{j as t}from"./iframe-C8v_uZy_.js";import{av as p,b as d}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const r=d.get("jump-to-latest"),O={title:"Conversation/JumpToLatest",component:p,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},e={name:"In a long conversation",render:()=>t.jsx(t.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Scroll up, then add a message. The button appears with a count."},source:{code:`const { ref, atBottom, unseen, markUnseen, scrollToBottom } = useStickToBottom();
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
