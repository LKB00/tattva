import{j as t}from"./iframe-D-pZXX8_.js";import{b as p}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import{S as d}from"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const r=p.get("segmented-control"),I={title:"Controls/SegmentedControl",component:d,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},e={name:"Default size",render:()=>t.jsx(t.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"A group of three options."},source:{code:`const [v, setV] = useState("week");

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
