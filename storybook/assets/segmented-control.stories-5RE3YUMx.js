import{j as t}from"./iframe-J6_2PHET.js";import{b as p}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import{S as d}from"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=p.get("segmented-control"),I={title:"Controls/SegmentedControl",component:d,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},e={name:"Default size",render:()=>t.jsx(t.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"A group of three options."},source:{code:`const [v, setV] = useState("week");

<SegmentedControl label="Range" value={v} onChange={setV}
  options={[{ value: "day", label: "Day" }, { value: "week", label: "Week" }, { value: "month", label: "Month" }]} />`}}}},o={name:"Small size",render:()=>t.jsx(t.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"The small size fits inside rows and panels."},source:{code:`<SegmentedControl size="sm" label="Strength" value={v} onChange={setV}
  options={[{ value: "week", label: "Subtle" }, { value: "day", label: "Strong" }]} />`}}}},O=["DefaultSize","SmallSize"];var n,a,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Default size",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A group of three options."
      },
      source: {
        code: "const [v, setV] = useState(\\"week\\");\\n\\n<SegmentedControl label=\\"Range\\" value={v} onChange={setV}\\n  options={[{ value: \\"day\\", label: \\"Day\\" }, { value: \\"week\\", label: \\"Week\\" }, { value: \\"month\\", label: \\"Month\\" }]} />"
      }
    }
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var l,m,i;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Small size",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The small size fits inside rows and panels."
      },
      source: {
        code: "<SegmentedControl size=\\"sm\\" label=\\"Strength\\" value={v} onChange={setV}\\n  options={[{ value: \\"week\\", label: \\"Subtle\\" }, { value: \\"day\\", label: \\"Strong\\" }]} />"
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};export{e as DefaultSize,o as SmallSize,O as __namedExportsOrder,I as default};
