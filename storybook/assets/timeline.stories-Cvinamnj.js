import{j as n}from"./iframe-DSdOWv-_.js";import{bX as p,b as c}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const i=c.get("timeline"),_={title:"Numbers/Timeline",component:p,tags:["autodocs"],parameters:{docs:{description:{component:i.summary+" "+i.description}}}},e={name:"What happened, and when",render:()=>n.jsx(n.Fragment,{children:i.examples[0].render()}),parameters:{docs:{description:{story:""},source:{code:`<Timeline events={[
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
