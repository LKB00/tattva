import{j as e}from"./iframe-D-pZXX8_.js";import{aN as g,b as u}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const t=u.get("menu"),B={title:"Navigation and overlays/Menu",component:g,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},n={name:"Icon-only trigger",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"triggerLabel gives the icon button its name. The menu opens below and lines up with the start of the button."},source:{code:`<Menu
  triggerLabel="More actions"
  trigger={<MoreIcon width={16} height={16} />}
  items={[
    { id: "copy", label: "Copy link", icon: <CopyIcon width={16} height={16} />, onSelect: () => setLast("Copy link") },
    { id: "rename", label: "Rename", icon: <EditIcon width={16} height={16} />, onSelect: () => setLast("Rename") },
    { id: "share", label: "Share", icon: <ShareIcon width={16} height={16} />, onSelect: () => setLast("Share") },
  ]}
/>`}}}},r={name:"Label, separator, shortcuts and a danger item",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"A group label names the section. A separator sets the dangerous action apart. The disabled item is announced but cannot be chosen."},source:{code:`<Menu
  trigger="Chat options"
  items={[
    { type: "label", label: "This chat" },
    { id: "rename", label: "Rename", shortcut: "R", icon: <EditIcon width={16} height={16} />, onSelect: () => setLast("Rename") },
    { id: "export", label: "Export", icon: <DownloadIcon width={16} height={16} />, disabled: true, onSelect: () => setLast("Export") },
    { type: "separator" },
    { id: "delete", label: "Delete chat", shortcut: "Del", danger: true, onSelect: () => setLast("Delete chat") },
  ]}
/>`}}}},o={name:"Text and icon trigger, aligned to the end",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"Use align end when the button sits at the right edge, so the menu grows to the left."},source:{code:`<Menu
  align="end"
  trigger={<><SettingsIcon width={16} height={16} />Settings</>}
  items={[
    { id: "regen", label: "Regenerate", icon: <RefreshIcon width={16} height={16} />, onSelect: () => setLast("Regenerate") },
    { id: "reset", label: "Reset to default", onSelect: () => setLast("Reset to default") },
  ]}
/>`}}}},G=["IconOnlyTrigger","LabelSeparatorShortcutsAndADangerItem","TextAndIconTriggerAlignedToTheEnd"];var a,s,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Icon-only trigger",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "triggerLabel gives the icon button its name. The menu opens below and lines up with the start of the button."
      },
      source: {
        code: "<Menu\\n  triggerLabel=\\"More actions\\"\\n  trigger={<MoreIcon width={16} height={16} />}\\n  items={[\\n    { id: \\"copy\\", label: \\"Copy link\\", icon: <CopyIcon width={16} height={16} />, onSelect: () => setLast(\\"Copy link\\") },\\n    { id: \\"rename\\", label: \\"Rename\\", icon: <EditIcon width={16} height={16} />, onSelect: () => setLast(\\"Rename\\") },\\n    { id: \\"share\\", label: \\"Share\\", icon: <ShareIcon width={16} height={16} />, onSelect: () => setLast(\\"Share\\") },\\n  ]}\\n/>"
      }
    }
  }
}`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var c,d,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Label, separator, shortcuts and a danger item",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A group label names the section. A separator sets the dangerous action apart. The disabled item is announced but cannot be chosen."
      },
      source: {
        code: "<Menu\\n  trigger=\\"Chat options\\"\\n  items={[\\n    { type: \\"label\\", label: \\"This chat\\" },\\n    { id: \\"rename\\", label: \\"Rename\\", shortcut: \\"R\\", icon: <EditIcon width={16} height={16} />, onSelect: () => setLast(\\"Rename\\") },\\n    { id: \\"export\\", label: \\"Export\\", icon: <DownloadIcon width={16} height={16} />, disabled: true, onSelect: () => setLast(\\"Export\\") },\\n    { type: \\"separator\\" },\\n    { id: \\"delete\\", label: \\"Delete chat\\", shortcut: \\"Del\\", danger: true, onSelect: () => setLast(\\"Delete chat\\") },\\n  ]}\\n/>"
      }
    }
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var h,m,p;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Text and icon trigger, aligned to the end",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Use align end when the button sits at the right edge, so the menu grows to the left."
      },
      source: {
        code: "<Menu\\n  align=\\"end\\"\\n  trigger={<><SettingsIcon width={16} height={16} />Settings</>}\\n  items={[\\n    { id: \\"regen\\", label: \\"Regenerate\\", icon: <RefreshIcon width={16} height={16} />, onSelect: () => setLast(\\"Regenerate\\") },\\n    { id: \\"reset\\", label: \\"Reset to default\\", onSelect: () => setLast(\\"Reset to default\\") },\\n  ]}\\n/>"
      }
    }
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{n as IconOnlyTrigger,r as LabelSeparatorShortcutsAndADangerItem,o as TextAndIconTriggerAlignedToTheEnd,G as __namedExportsOrder,B as default};
