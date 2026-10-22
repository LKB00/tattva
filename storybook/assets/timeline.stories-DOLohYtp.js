import{j as n}from"./iframe-C8v_uZy_.js";import{c0 as p,b as c}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const i=c.get("timeline"),_={title:"Numbers/Timeline",component:p,tags:["autodocs"],parameters:{docs:{description:{component:i.summary+" "+i.description}}}},e={name:"What happened, and when",render:()=>n.jsx(n.Fragment,{children:i.examples[0].render()}),parameters:{docs:{description:{story:""},source:{code:`<Timeline events={[
  { id: "1", time: "09:40", title: "Request received", state: "done" },
  { id: "2", time: "09:41", title: "Reading 4 files", state: "current" },
  { id: "3", time: "09:44", title: "Report", state: "upcoming" },
]} />`}}}},t={name:"When something fails",render:()=>n.jsx(n.Fragment,{children:i.examples[1].render()}),parameters:{docs:{description:{story:""},source:{code:`<Timeline events={[
  { id: "1", time: "3 Oct", dateTime: "2026-10-03", title: "Update started", state: "done" },
  { id: "2", time: "4 Oct", dateTime: "2026-10-04", title: "Moving your data", state: "failed", description: "It took too long." },
]} />`}}}},N=["WhatHappenedAndWhen","WhenSomethingFails"];var r,o,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "What happened, and when",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: ""
      },
      source: {
        code: "<Timeline events={[\\n  { id: \\"1\\", time: \\"09:40\\", title: \\"Request received\\", state: \\"done\\" },\\n  { id: \\"2\\", time: \\"09:41\\", title: \\"Reading 4 files\\", state: \\"current\\" },\\n  { id: \\"3\\", time: \\"09:44\\", title: \\"Report\\", state: \\"upcoming\\" },\\n]} />"
      }
    }
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var a,m,d;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "When something fails",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: ""
      },
      source: {
        code: "<Timeline events={[\\n  { id: \\"1\\", time: \\"3 Oct\\", dateTime: \\"2026-10-03\\", title: \\"Update started\\", state: \\"done\\" },\\n  { id: \\"2\\", time: \\"4 Oct\\", dateTime: \\"2026-10-04\\", title: \\"Moving your data\\", state: \\"failed\\", description: \\"It took too long.\\" },\\n]} />"
      }
    }
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};export{e as WhatHappenedAndWhen,t as WhenSomethingFails,N as __namedExportsOrder,_ as default};
