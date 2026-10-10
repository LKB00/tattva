import{j as e}from"./iframe-J6_2PHET.js";import{b as w}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import{B as S}from"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const t=w.get("button"),Q={title:"Controls/Button",component:S,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},n={name:"Variants",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Primary is the default. Use it once per screen. Lime is a small bright highlight with dark text. Ghost suits quiet actions in toolbars."},source:{code:`<div className="flex flex-wrap items-center gap-3">
  <Button variant="primary">Primary</Button>
  <Button variant="lime">Lime</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="danger">Delete chat</Button>
</div>`}}}},s={name:"Sizes",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Small, medium and large. Medium is the default."},source:{code:`<div className="flex flex-wrap items-center gap-3">
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
</div>`}}}},r={name:"With icons",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"An icon can sit before or after the label."},source:{code:`<div className="flex flex-wrap items-center gap-3">
  <Button leading={<PlusIcon width={14} height={14} />}>New chat</Button>
  <Button variant="secondary" trailing={<RefreshIcon width={14} height={14} />}>Regenerate</Button>
  <Button variant="lime" leading={<SparkleIcon width={14} height={14} />}>Ask AI</Button>
</div>`}}}},a={name:"Busy while saving",render:()=>e.jsx(e.Fragment,{children:t.examples[3].render()}),parameters:{docs:{description:{story:"Press it and it shows a spinner for a moment. The button keeps its width, ignores more presses and keeps focus, so nothing jumps and a second press does not save twice."},source:{code:`function Example() {
  const [busy, setBusy] = useState(false);
  const save = () => {
    setBusy(true);
    window.setTimeout(() => setBusy(false), 1500);
  };
  return <Button busy={busy} busyLabel="Saving" onClick={save}>Save changes</Button>;
}`}}}},o={name:"Disabled",render:()=>e.jsx(e.Fragment,{children:t.examples[4].render()}),parameters:{docs:{description:{story:"A disabled button looks faded and cannot be pressed."},source:{code:`<div className="flex flex-wrap items-center gap-3">
  <Button disabled>Send</Button>
  <Button variant="secondary" disabled>Cancel</Button>
</div>`}}}},X=["Variants","Sizes","WithIcons","BusyWhileSaving","Disabled"];var i,d,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Variants",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Primary is the default. Use it once per screen. Lime is a small bright highlight with dark text. Ghost suits quiet actions in toolbars."
      },
      source: {
        code: "<div className=\\"flex flex-wrap items-center gap-3\\">\\n  <Button variant=\\"primary\\">Primary</Button>\\n  <Button variant=\\"lime\\">Lime</Button>\\n  <Button variant=\\"secondary\\">Secondary</Button>\\n  <Button variant=\\"ghost\\">Ghost</Button>\\n  <Button variant=\\"danger\\">Delete chat</Button>\\n</div>"
      }
    }
  }
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,u,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Sizes",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Small, medium and large. Medium is the default."
      },
      source: {
        code: "<div className=\\"flex flex-wrap items-center gap-3\\">\\n  <Button size=\\"sm\\">Small</Button>\\n  <Button size=\\"md\\">Medium</Button>\\n  <Button size=\\"lg\\">Large</Button>\\n</div>"
      }
    }
  }
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var l,h,B;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "With icons",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "An icon can sit before or after the label."
      },
      source: {
        code: "<div className=\\"flex flex-wrap items-center gap-3\\">\\n  <Button leading={<PlusIcon width={14} height={14} />}>New chat</Button>\\n  <Button variant=\\"secondary\\" trailing={<RefreshIcon width={14} height={14} />}>Regenerate</Button>\\n  <Button variant=\\"lime\\" leading={<SparkleIcon width={14} height={14} />}>Ask AI</Button>\\n</div>"
      }
    }
  }
}`,...(B=(h=r.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var g,v,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Busy while saving",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press it and it shows a spinner for a moment. The button keeps its width, ignores more presses and keeps focus, so nothing jumps and a second press does not save twice."
      },
      source: {
        code: "function Example() {\\n  const [busy, setBusy] = useState(false);\\n  const save = () => {\\n    setBusy(true);\\n    window.setTimeout(() => setBusy(false), 1500);\\n  };\\n  return <Button busy={busy} busyLabel=\\"Saving\\" onClick={save}>Save changes</Button>;\\n}"
      }
    }
  }
}`,...(y=(v=a.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var f,x,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Disabled",
  render: () => <>{doc.examples[4].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A disabled button looks faded and cannot be pressed."
      },
      source: {
        code: "<div className=\\"flex flex-wrap items-center gap-3\\">\\n  <Button disabled>Send</Button>\\n  <Button variant=\\"secondary\\" disabled>Cancel</Button>\\n</div>"
      }
    }
  }
}`,...(b=(x=o.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};export{a as BusyWhileSaving,o as Disabled,s as Sizes,n as Variants,r as WithIcons,X as __namedExportsOrder,Q as default};
