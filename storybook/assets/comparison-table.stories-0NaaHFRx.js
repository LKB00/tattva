import{j as o}from"./iframe-D-pZXX8_.js";import{R as d,b as c}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const s=c.get("comparison-table"),L={title:"Numbers/ComparisonTable",component:d,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},e={name:"Three plans",render:()=>o.jsx(o.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"Make the window narrow to see the stacked cards."},source:{code:`<ComparisonTable
  caption="Plan comparison"
  items={[{ id: "a", name: "Free" }, { id: "b", name: "Team", badge: "Recommended" }, { id: "c", name: "Scale" }]}
  rows={[
    { id: "seats", label: "Seats", values: ["1", "10", "Unlimited"] },
    { id: "history", label: "History", values: ["7 days", "1 year", "Unlimited"] },
  ]}
/>`}}}},r={name:"Two options with short notes",render:()=>o.jsx(o.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:""},source:{code:`<ComparisonTable caption="Which assistant to pick" items={[{ id: "f", name: "Fast", subtitle: "Short answers" }, { id: "d", name: "Deep", subtitle: "Long analysis" }]}
  rows={[{ id: "wait", label: "Typical wait", values: ["Under 2s", "Over 10s"] }]} />`}}}},M=["ThreePlans","TwoOptionsWithShortNotes"];var a,t,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Three plans",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Make the window narrow to see the stacked cards."
      },
      source: {
        code: "<ComparisonTable\\n  caption=\\"Plan comparison\\"\\n  items={[{ id: \\"a\\", name: \\"Free\\" }, { id: \\"b\\", name: \\"Team\\", badge: \\"Recommended\\" }, { id: \\"c\\", name: \\"Scale\\" }]}\\n  rows={[\\n    { id: \\"seats\\", label: \\"Seats\\", values: [\\"1\\", \\"10\\", \\"Unlimited\\"] },\\n    { id: \\"history\\", label: \\"History\\", values: [\\"7 days\\", \\"1 year\\", \\"Unlimited\\"] },\\n  ]}\\n/>"
      }
    }
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Two options with short notes",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: ""
      },
      source: {
        code: "<ComparisonTable caption=\\"Which assistant to pick\\" items={[{ id: \\"f\\", name: \\"Fast\\", subtitle: \\"Short answers\\" }, { id: \\"d\\", name: \\"Deep\\", subtitle: \\"Long analysis\\" }]}\\n  rows={[{ id: \\"wait\\", label: \\"Typical wait\\", values: [\\"Under 2s\\", \\"Over 10s\\"] }]} />"
      }
    }
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{e as ThreePlans,r as TwoOptionsWithShortNotes,M as __namedExportsOrder,L as default};
