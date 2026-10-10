import{j as e}from"./iframe-J6_2PHET.js";import{bz as f,b as g}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const n=g.get("switch"),G={title:"Forms/Switch",component:f,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},s={name:"Controlled switch",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Your code keeps the on-or-off value and updates it when the switch is pressed."},source:{code:`function Example() {
  const [on, setOn] = useState(true);
  return <Switch checked={on} onChange={setOn} label="Web search" />;
}`}}}},t={name:"In a settings row",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"The switch has no words of its own. Put a visible label beside it and give it the same name."},source:{code:`function Example() {
  const [search, setSearch] = useState(true);
  const [memory, setMemory] = useState(false);
  return (
    <div className="flex w-72 flex-col gap-3 text-body leading-5 text-fg">
      <div className="flex items-center justify-between">
        <span>Web search</span>
        <Switch checked={search} onChange={setSearch} label="Web search" />
      </div>
      <div className="flex items-center justify-between">
        <span>Memory</span>
        <Switch checked={memory} onChange={setMemory} label="Memory" />
      </div>
    </div>
  );
}`}}}},r={name:"Disabled with a description",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"A disabled switch looks faded and cannot be changed. The explanation is read out after the name, so say why the setting is unavailable."},source:{code:`<div className="flex w-72 items-center justify-between text-body leading-5 text-fg">
  <label htmlFor="memory-switch">Memory</label>
  <Switch id="memory-switch" checked={false} onChange={() => {}} label="Memory"
    disabled description="Turned off by your workspace admin." />
</div>`}}}},a={name:"With a visible label",render:()=>e.jsx(e.Fragment,{children:n.examples[3].render()}),parameters:{docs:{description:{story:"Pass the words as children. They sit beside the switch, pressing them flips it, and a screen reader uses them as the name."},source:{code:`function Example() {
  const [on, setOn] = useState(true);
  return <Switch checked={on} onChange={setOn} label="Web search">Web search</Switch>;
}`}}}},H=["ControlledSwitch","InASettingsRow","DisabledWithADescription","WithAVisibleLabel"];var o,i,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Controlled switch",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Your code keeps the on-or-off value and updates it when the switch is pressed."
      },
      source: {
        code: "function Example() {\\n  const [on, setOn] = useState(true);\\n  return <Switch checked={on} onChange={setOn} label=\\"Web search\\" />;\\n}"
      }
    }
  }
}`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,m,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "In a settings row",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The switch has no words of its own. Put a visible label beside it and give it the same name."
      },
      source: {
        code: "function Example() {\\n  const [search, setSearch] = useState(true);\\n  const [memory, setMemory] = useState(false);\\n  return (\\n    <div className=\\"flex w-72 flex-col gap-3 text-body leading-5 text-fg\\">\\n      <div className=\\"flex items-center justify-between\\">\\n        <span>Web search</span>\\n        <Switch checked={search} onChange={setSearch} label=\\"Web search\\" />\\n      </div>\\n      <div className=\\"flex items-center justify-between\\">\\n        <span>Memory</span>\\n        <Switch checked={memory} onChange={setMemory} label=\\"Memory\\" />\\n      </div>\\n    </div>\\n  );\\n}"
      }
    }
  }
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var h,p,u;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Disabled with a description",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A disabled switch looks faded and cannot be changed. The explanation is read out after the name, so say why the setting is unavailable."
      },
      source: {
        code: "<div className=\\"flex w-72 items-center justify-between text-body leading-5 text-fg\\">\\n  <label htmlFor=\\"memory-switch\\">Memory</label>\\n  <Switch id=\\"memory-switch\\" checked={false} onChange={() => {}} label=\\"Memory\\"\\n    disabled description=\\"Turned off by your workspace admin.\\" />\\n</div>"
      }
    }
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var b,w,y;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "With a visible label",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Pass the words as children. They sit beside the switch, pressing them flips it, and a screen reader uses them as the name."
      },
      source: {
        code: "function Example() {\\n  const [on, setOn] = useState(true);\\n  return <Switch checked={on} onChange={setOn} label=\\"Web search\\">Web search</Switch>;\\n}"
      }
    }
  }
}`,...(y=(w=a.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};export{s as ControlledSwitch,r as DisabledWithADescription,t as InASettingsRow,a as WithAVisibleLabel,H as __namedExportsOrder,G as default};
