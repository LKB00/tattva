import{j as t}from"./iframe-DSdOWv-_.js";import{b_ as c,b as l}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const s=l.get("tool-chip"),P={title:"Conversation/ToolChip",component:c,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},e={name:"Tags you can remove",render:()=>t.jsx(t.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"Pressing Remove takes the tag away."},source:{code:`const [tools, setTools] = useState(["Web search", "Deep research"]);

<div className="flex flex-wrap gap-2">
  {tools.map((t) => (
    <ToolChip key={t} label={t} icon={<GlobeIcon width={14} height={14} />}
      onRemove={() => setTools((l) => l.filter((x) => x !== t))} />
  ))}
  {tools.length === 0 && <span className="text-small leading-4 text-fg-muted">No tools on.</span>}
</div>`}}}},o={name:"A tag that stays",render:()=>t.jsx(t.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"With no remove option there is no button. Use it when the tool is locked on."},source:{code:'<ToolChip label="Web search" icon={<GlobeIcon width={14} height={14} />} />'}}}},U=["TagsYouCanRemove","ATagThatStays"];var r,n,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{o as ATagThatStays,e as TagsYouCanRemove,U as __namedExportsOrder,P as default};
