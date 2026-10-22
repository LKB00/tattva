import{j as o}from"./iframe-C8v_uZy_.js";import{S as m,b as d}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const n=d.get("context-chip"),W={title:"Conversation/ContextChip",component:m,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"Picker and removable",render:()=>o.jsx(o.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"The first tag opens a list of choices. The second is something attached that the person can remove."},source:{code:`<div className="flex flex-wrap items-center gap-2">
  <ContextChip icon={<GlobeIcon width={14} height={14} />} onClick={() => {}}>All sources</ContextChip>
  <ContextChip icon={<FileIcon width={14} height={14} />} onClear={() => {}}>Q3 planning.pdf</ContextChip>
</div>`}}}},t={name:"Static label",render:()=>o.jsx(o.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"With neither, it is a plain label."},source:{code:"<ContextChip icon={<PaperclipIcon width={14} height={14} />}>2 files attached</ContextChip>"}}}},_=["PickerAndRemovable","StaticLabel"];var r,i,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Picker and removable",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The first tag opens a list of choices. The second is something attached that the person can remove."
      },
      source: {
        code: "<div className=\\"flex flex-wrap items-center gap-2\\">\\n  <ContextChip icon={<GlobeIcon width={14} height={14} />} onClick={() => {}}>All sources</ContextChip>\\n  <ContextChip icon={<FileIcon width={14} height={14} />} onClear={() => {}}>Q3 planning.pdf</ContextChip>\\n</div>"
      }
    }
  }
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var s,c,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Static label",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With neither, it is a plain label."
      },
      source: {
        code: "<ContextChip icon={<PaperclipIcon width={14} height={14} />}>2 files attached</ContextChip>"
      }
    }
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};export{e as PickerAndRemovable,t as StaticLabel,_ as __namedExportsOrder,W as default};
