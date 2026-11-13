import{j as t}from"./iframe-D-pZXX8_.js";import{cb as c,b as l}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const s=l.get("tool-chip"),U={title:"Conversation/ToolChip",component:c,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},e={name:"Tags you can remove",render:()=>t.jsx(t.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"Pressing Remove takes the tag away."},source:{code:`const [tools, setTools] = useState(["Web search", "Deep research"]);

<div className="flex flex-wrap gap-2">
  {tools.map((t) => (
    <ToolChip key={t} label={t} icon={<GlobeIcon width={14} height={14} />}
      onRemove={() => setTools((l) => l.filter((x) => x !== t))} />
  ))}
  {tools.length === 0 && <span className="text-small leading-4 text-fg-muted">No tools on.</span>}
</div>`}}}},o={name:"A tag that stays",render:()=>t.jsx(t.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"With no remove option there is no button. Use it when the tool is locked on."},source:{code:'<ToolChip label="Web search" icon={<GlobeIcon width={14} height={14} />} />'}}}},Y=["TagsYouCanRemove","ATagThatStays"];var r,n,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Tags you can remove",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Pressing Remove takes the tag away."
      },
      source: {
        code: "const [tools, setTools] = useState([\\"Web search\\", \\"Deep research\\"]);\\n\\n<div className=\\"flex flex-wrap gap-2\\">\\n  {tools.map((t) => (\\n    <ToolChip key={t} label={t} icon={<GlobeIcon width={14} height={14} />}\\n      onRemove={() => setTools((l) => l.filter((x) => x !== t))} />\\n  ))}\\n  {tools.length === 0 && <span className=\\"text-small leading-4 text-fg-muted\\">No tools on.</span>}\\n</div>"
      }
    }
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var i,m,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "A tag that stays",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With no remove option there is no button. Use it when the tool is locked on."
      },
      source: {
        code: "<ToolChip label=\\"Web search\\" icon={<GlobeIcon width={14} height={14} />} />"
      }
    }
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{o as ATagThatStays,e as TagsYouCanRemove,Y as __namedExportsOrder,U as default};
