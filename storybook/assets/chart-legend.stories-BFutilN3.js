import{j as e}from"./iframe-DSdOWv-_.js";import{t as b,b as u}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const n=u.get("chart-legend"),R={title:"Numbers/ChartLegend",component:b,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},s={name:"A key with dashes and dots",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"The first two lines are solid with round dots. From the third on, the dash and dot shape change too, not only the color."},source:{code:'<ChartLegend items={[{ id: "a", label: "North shop" }, { id: "b", label: "East shop" }, { id: "c", label: "West shop" }, { id: "d", label: "Online" }]} />'}}}},r={name:"A key for bars",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Use this for bars and stacks. List items in the order the stack is read."},source:{code:'<ChartLegend kind="bar" label="Key, in stack order" items={[{ id: "in", label: "Walk-in" }, { id: "out", label: "Online" }, { id: "cache", label: "Phone" }]} />'}}}},o={name:"Switch lines on and off",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"Pressed means the line is shown. A hidden line keeps its place and color, and its name is crossed out."},source:{code:`function LegendToggleDemo() {
  const [hidden, setHidden] = useState<string[]>([]);
  return (
    <ChartLegend
      items={[{ id: "a", label: "North shop" }, { id: "b", label: "East shop" }, { id: "c", label: "West shop" }, { id: "d", label: "Online" }]}
      hidden={hidden}
      onToggle={(id) => setHidden((h) => (h.includes(id) ? h.filter((x) => x !== id) : [...h, id]))}
    />
  );
}`}}}},q=["AKeyWithDashesAndDots","AKeyForBars","SwitchLinesOnAndOff"];var t,d,i;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "A key with dashes and dots",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The first two lines are solid with round dots. From the third on, the dash and dot shape change too, not only the color."
      },
      source: {
        code: "<ChartLegend items={[{ id: \\"a\\", label: \\"North shop\\" }, { id: \\"b\\", label: \\"East shop\\" }, { id: \\"c\\", label: \\"West shop\\" }, { id: \\"d\\", label: \\"Online\\" }]} />"
      }
    }
  }
}`,...(i=(d=s.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var a,l,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "A key for bars",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Use this for bars and stacks. List items in the order the stack is read."
      },
      source: {
        code: "<ChartLegend kind=\\"bar\\" label=\\"Key, in stack order\\" items={[{ id: \\"in\\", label: \\"Walk-in\\" }, { id: \\"out\\", label: \\"Online\\" }, { id: \\"cache\\", label: \\"Phone\\" }]} />"
      }
    }
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var h,m,p;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Switch lines on and off",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Pressed means the line is shown. A hidden line keeps its place and color, and its name is crossed out."
      },
      source: {
        code: "function LegendToggleDemo() {\\n  const [hidden, setHidden] = useState<string[]>([]);\\n  return (\\n    <ChartLegend\\n      items={[{ id: \\"a\\", label: \\"North shop\\" }, { id: \\"b\\", label: \\"East shop\\" }, { id: \\"c\\", label: \\"West shop\\" }, { id: \\"d\\", label: \\"Online\\" }]}\\n      hidden={hidden}\\n      onToggle={(id) => setHidden((h) => (h.includes(id) ? h.filter((x) => x !== id) : [...h, id]))}\\n    />\\n  );\\n}"
      }
    }
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{r as AKeyForBars,s as AKeyWithDashesAndDots,o as SwitchLinesOnAndOff,q as __namedExportsOrder,R as default};
