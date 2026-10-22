import{j as t}from"./iframe-C8v_uZy_.js";import{c3 as c,b as l}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const s=l.get("tool-chip"),U={title:"Conversation/ToolChip",component:c,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},e={name:"Tags you can remove",render:()=>t.jsx(t.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"Pressing Remove takes the tag away."},source:{code:`const [tools, setTools] = useState(["Web search", "Deep research"]);

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
