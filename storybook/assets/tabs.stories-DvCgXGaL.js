import{j as e}from"./iframe-J6_2PHET.js";import{bA as u,b as h}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const n=h.get("tabs"),z={title:"Navigation and overlays/Tabs",component:u,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},a={name:"Underline with counts",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"The default look. A count sits after the name. A disabled tab is skipped by the arrow keys."},source:{code:`function Example() {
  const [tab, setTab] = useState("inbox");
  return (
    <Tabs
      label="Mail folders"
      value={tab}
      onChange={setTab}
      tabs={[
        { id: "inbox", label: "Inbox", count: 12 },
        { id: "sent", label: "Sent" },
        { id: "drafts", label: "Drafts", count: 3 },
        { id: "archive", label: "Archive", disabled: true },
      ]}
    />
  );
}`}}}},t={name:"Pill, filling the width",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Use the pill look for a small switch inside a card. fill makes the tabs share the width."},source:{code:`function Example() {
  const [range, setRange] = useState("week");
  return (
    <Tabs
      label="Time range"
      variant="pill"
      fill
      value={range}
      onChange={setRange}
      tabs={[
        { id: "day", label: "Day" },
        { id: "week", label: "Week" },
        { id: "month", label: "Month" },
      ]}
    />
  );
}`}}}},s={name:"With panels and manual activation",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"Each tab brings its panel and only the active panel is drawn. With manual activation the arrow keys move focus and Enter or Space picks the tab."},source:{code:`function Example() {
  const [tab, setTab] = useState("summary");
  return (
    <Tabs
      label="Report"
      value={tab}
      onChange={setTab}
      activation="manual"
      tabs={[
        { id: "summary", label: "Summary", panel: <p className="text-body leading-5 text-fg">Three tasks finished and one is waiting for you.</p> },
        { id: "steps", label: "Steps", count: 4, panel: <p className="text-body leading-5 text-fg">Four steps ran. None of them changed a file.</p> },
        { id: "sources", label: "Sources", panel: <p className="text-body leading-5 text-fg">Two pages were read.</p> },
      ]}
    />
  );
}`}}}},B=["UnderlineWithCounts","PillFillingTheWidth","WithPanelsAndManualActivation"];var r,o,i;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Underline with counts",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The default look. A count sits after the name. A disabled tab is skipped by the arrow keys."
      },
      source: {
        code: "function Example() {\\n  const [tab, setTab] = useState(\\"inbox\\");\\n  return (\\n    <Tabs\\n      label=\\"Mail folders\\"\\n      value={tab}\\n      onChange={setTab}\\n      tabs={[\\n        { id: \\"inbox\\", label: \\"Inbox\\", count: 12 },\\n        { id: \\"sent\\", label: \\"Sent\\" },\\n        { id: \\"drafts\\", label: \\"Drafts\\", count: 3 },\\n        { id: \\"archive\\", label: \\"Archive\\", disabled: true },\\n      ]}\\n    />\\n  );\\n}"
      }
    }
  }
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var l,d,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Pill, filling the width",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Use the pill look for a small switch inside a card. fill makes the tabs share the width."
      },
      source: {
        code: "function Example() {\\n  const [range, setRange] = useState(\\"week\\");\\n  return (\\n    <Tabs\\n      label=\\"Time range\\"\\n      variant=\\"pill\\"\\n      fill\\n      value={range}\\n      onChange={setRange}\\n      tabs={[\\n        { id: \\"day\\", label: \\"Day\\" },\\n        { id: \\"week\\", label: \\"Week\\" },\\n        { id: \\"month\\", label: \\"Month\\" },\\n      ]}\\n    />\\n  );\\n}"
      }
    }
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,m,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "With panels and manual activation",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Each tab brings its panel and only the active panel is drawn. With manual activation the arrow keys move focus and Enter or Space picks the tab."
      },
      source: {
        code: "function Example() {\\n  const [tab, setTab] = useState(\\"summary\\");\\n  return (\\n    <Tabs\\n      label=\\"Report\\"\\n      value={tab}\\n      onChange={setTab}\\n      activation=\\"manual\\"\\n      tabs={[\\n        { id: \\"summary\\", label: \\"Summary\\", panel: <p className=\\"text-body leading-5 text-fg\\">Three tasks finished and one is waiting for you.</p> },\\n        { id: \\"steps\\", label: \\"Steps\\", count: 4, panel: <p className=\\"text-body leading-5 text-fg\\">Four steps ran. None of them changed a file.</p> },\\n        { id: \\"sources\\", label: \\"Sources\\", panel: <p className=\\"text-body leading-5 text-fg\\">Two pages were read.</p> },\\n      ]}\\n    />\\n  );\\n}"
      }
    }
  }
}`,...(b=(m=s.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};export{t as PillFillingTheWidth,a as UnderlineWithCounts,s as WithPanelsAndManualActivation,B as __namedExportsOrder,z as default};
