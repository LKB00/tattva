import{j as t}from"./iframe-DSdOWv-_.js";import{b as p}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import{S as d}from"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const r=p.get("segmented-control"),I={title:"Controls/SegmentedControl",component:d,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},e={name:"Default size",render:()=>t.jsx(t.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"A group of three options."},source:{code:`const [v, setV] = useState("week");

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
