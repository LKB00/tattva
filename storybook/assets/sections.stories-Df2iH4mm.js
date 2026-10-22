import{j as s}from"./iframe-C8v_uZy_.js";import{bl as p,b as d}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const n=d.get("sections"),q={title:"Generated interfaces/Sections",component:p,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"While the answer streams",render:()=>s.jsx(s.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Each new section opens as it arrives, then the answer settles on the first."},source:{code:`<Sections streaming={isStreaming} sections={[
  { id: "flights", title: "Flights", meta: "2 options", content: <FactList facts={flightFacts} /> },
  { id: "stay", title: "Where to stay", meta: "3 hotels", content: stayText },
  { id: "plan", title: "Day by day", meta: "2 days", content: planText },
]} />`}}}},t={name:"A finished answer",render:()=>s.jsx(s.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"The first section open, the rest folded."},source:{code:"<Sections sections={sections} />"}}}},z=["WhileTheAnswerStreams","AFinishedAnswer"];var r,o,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "While the answer streams",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Each new section opens as it arrives, then the answer settles on the first."
      },
      source: {
        code: "<Sections streaming={isStreaming} sections={[\\n  { id: \\"flights\\", title: \\"Flights\\", meta: \\"2 options\\", content: <FactList facts={flightFacts} /> },\\n  { id: \\"stay\\", title: \\"Where to stay\\", meta: \\"3 hotels\\", content: stayText },\\n  { id: \\"plan\\", title: \\"Day by day\\", meta: \\"2 days\\", content: planText },\\n]} />"
      }
    }
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var a,c,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "A finished answer",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The first section open, the rest folded."
      },
      source: {
        code: "<Sections sections={sections} />"
      }
    }
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};export{t as AFinishedAnswer,e as WhileTheAnswerStreams,z as __namedExportsOrder,q as default};
