import{j as o}from"./iframe-C8v_uZy_.js";import{O as d,b as c}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const s=c.get("comparison-table"),L={title:"Numbers/ComparisonTable",component:d,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},e={name:"Three plans",render:()=>o.jsx(o.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"Make the window narrow to see the stacked cards."},source:{code:`<ComparisonTable
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
