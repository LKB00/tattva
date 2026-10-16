import{j as o}from"./iframe-DSdOWv-_.js";import{L as d,b as c}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const s=c.get("comparison-table"),H={title:"Numbers/ComparisonTable",component:d,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},e={name:"Three plans",render:()=>o.jsx(o.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"Make the window narrow to see the stacked cards."},source:{code:`<ComparisonTable
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
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{e as ThreePlans,r as TwoOptionsWithShortNotes,M as __namedExportsOrder,H as default};
