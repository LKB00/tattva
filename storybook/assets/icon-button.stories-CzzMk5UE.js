import{j as e}from"./iframe-D-pZXX8_.js";import{b as u}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import{I as g}from"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const t=u.get("icon-button"),_={title:"Controls/IconButton",component:g,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},n={name:"Variants and sizes",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Ghost is the default for message toolbars. There are medium and small sizes."},source:{code:`<div className="flex flex-wrap items-center gap-3">
  <IconButton label="Copy"><CopyIcon width={16} height={16} /></IconButton>
  <IconButton label="Regenerate" variant="secondary"><RefreshIcon width={16} height={16} /></IconButton>
  <IconButton label="Search" variant="primary"><SearchIcon width={16} height={16} /></IconButton>
  <IconButton label="New" variant="lime"><PlusIcon width={16} height={16} /></IconButton>
  <IconButton label="Copy" size="sm"><CopyIcon width={14} height={14} /></IconButton>
</div>`}}}},o={name:"Send and stop",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"The send button is lime. When it is disabled it stays visible but faded, so the message box does not look empty."},source:{code:`<div className="flex items-center gap-3">
  <IconButton label="Send message" variant="lime"><SendIcon width={16} height={16} /></IconButton>
  <IconButton label="Send message" variant="lime" disabled><SendIcon width={16} height={16} /></IconButton>
  <IconButton label="Stop generating" variant="primary"><StopIcon width={16} height={16} /></IconButton>
</div>`}}}},s={name:"Toggle with active",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"Set active to show a pressed state. The button gets a soft highlight, and screen readers say it is pressed."},source:{code:`function Example() {
  const [liked, setLiked] = useState(false);
  return (
    <IconButton label="Good response" active={liked} onClick={() => setLiked((v) => !v)}>
      <ThumbUpIcon width={16} height={16} />
    </IconButton>
  );
}`}}}},O=["VariantsAndSizes","SendAndStop","ToggleWithActive"];var r,a,i;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Variants and sizes",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Ghost is the default for message toolbars. There are medium and small sizes."
      },
      source: {
        code: "<div className=\\"flex flex-wrap items-center gap-3\\">\\n  <IconButton label=\\"Copy\\"><CopyIcon width={16} height={16} /></IconButton>\\n  <IconButton label=\\"Regenerate\\" variant=\\"secondary\\"><RefreshIcon width={16} height={16} /></IconButton>\\n  <IconButton label=\\"Search\\" variant=\\"primary\\"><SearchIcon width={16} height={16} /></IconButton>\\n  <IconButton label=\\"New\\" variant=\\"lime\\"><PlusIcon width={16} height={16} /></IconButton>\\n  <IconButton label=\\"Copy\\" size=\\"sm\\"><CopyIcon width={14} height={14} /></IconButton>\\n</div>"
      }
    }
  }
}`,...(i=(a=n.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var c,d,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Send and stop",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The send button is lime. When it is disabled it stays visible but faded, so the message box does not look empty."
      },
      source: {
        code: "<div className=\\"flex items-center gap-3\\">\\n  <IconButton label=\\"Send message\\" variant=\\"lime\\"><SendIcon width={16} height={16} /></IconButton>\\n  <IconButton label=\\"Send message\\" variant=\\"lime\\" disabled><SendIcon width={16} height={16} /></IconButton>\\n  <IconButton label=\\"Stop generating\\" variant=\\"primary\\"><StopIcon width={16} height={16} /></IconButton>\\n</div>"
      }
    }
  }
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var l,p,h;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Toggle with active",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Set active to show a pressed state. The button gets a soft highlight, and screen readers say it is pressed."
      },
      source: {
        code: "function Example() {\\n  const [liked, setLiked] = useState(false);\\n  return (\\n    <IconButton label=\\"Good response\\" active={liked} onClick={() => setLiked((v) => !v)}>\\n      <ThumbUpIcon width={16} height={16} />\\n    </IconButton>\\n  );\\n}"
      }
    }
  }
}`,...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};export{o as SendAndStop,s as ToggleWithActive,n as VariantsAndSizes,O as __namedExportsOrder,_ as default};
