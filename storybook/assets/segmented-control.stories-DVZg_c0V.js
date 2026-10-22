import{j as t}from"./iframe-C8v_uZy_.js";import{b as p}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import{S as d}from"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const r=p.get("segmented-control"),I={title:"Controls/SegmentedControl",component:d,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},e={name:"Default size",render:()=>t.jsx(t.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"A group of three options."},source:{code:`const [v, setV] = useState("week");

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
