import{j as o}from"./iframe-DSdOWv-_.js";import{R as p,b as m}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const n=m.get("context-pill"),W={title:"Conversation/ContextPill",component:p,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"Picker and removable",render:()=>o.jsx(o.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"The first tag opens a list of choices. The second is something attached that the person can remove."},source:{code:`<div className="flex flex-wrap items-center gap-2">
  <ContextPill icon={<GlobeIcon width={14} height={14} />} onClick={() => {}}>All sources</ContextPill>
  <ContextPill icon={<FileIcon width={14} height={14} />} onClear={() => {}}>Q3 planning.pdf</ContextPill>
</div>`}}}},t={name:"Static label",render:()=>o.jsx(o.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"With neither, it is a plain label."},source:{code:"<ContextPill icon={<PaperclipIcon width={14} height={14} />}>2 files attached</ContextPill>"}}}},_=["PickerAndRemovable","StaticLabel"];var r,i,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Picker and removable",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The first tag opens a list of choices. The second is something attached that the person can remove."
      },
      source: {
        code: "<div className=\\"flex flex-wrap items-center gap-2\\">\\n  <ContextPill icon={<GlobeIcon width={14} height={14} />} onClick={() => {}}>All sources</ContextPill>\\n  <ContextPill icon={<FileIcon width={14} height={14} />} onClear={() => {}}>Q3 planning.pdf</ContextPill>\\n</div>"
      }
    }
  }
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var s,c,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Static label",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With neither, it is a plain label."
      },
      source: {
        code: "<ContextPill icon={<PaperclipIcon width={14} height={14} />}>2 files attached</ContextPill>"
      }
    }
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};export{e as PickerAndRemovable,t as StaticLabel,_ as __namedExportsOrder,W as default};
