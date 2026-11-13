import{j as o}from"./iframe-D-pZXX8_.js";import{V as m,b as d}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const n=d.get("context-chip"),W={title:"Conversation/ContextChip",component:m,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"Picker and removable",render:()=>o.jsx(o.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"The first tag opens a list of choices. The second is something attached that the person can remove."},source:{code:`<div className="flex flex-wrap items-center gap-2">
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
