import{j as r}from"./iframe-DSdOWv-_.js";import{bE as m,b as c}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const n=c.get("step-timeline"),R={title:"Assistants/StepTimeline",component:m,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"In progress",render:()=>r.jsx(r.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"One step done, one in progress, one waiting."},source:{code:`<StepTimeline steps={[
  { id: "a", title: "Find missing documents", detail: "2 people", state: "done" },
  { id: "b", title: "Send reminders", detail: "Waiting for approval", state: "active" },
  { id: "c", title: "Confirm receipt", state: "todo" },
]} />`}}}},t={name:"A failed step",render:()=>r.jsx(r.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"A failed step gets a red cross and says what went wrong. Later steps keep waiting."},source:{code:`<StepTimeline steps={[
  { id: "a", title: "Fetch invoices", state: "done" },
  { id: "b", title: "Match payments", detail: "The bank export could not be read", state: "failed" },
  { id: "c", title: "Send summary", state: "todo" },
]} />`}}}},q=["InProgress","AFailedStep"];var s,i,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "In progress",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "One step done, one in progress, one waiting."
      },
      source: {
        code: "<StepTimeline steps={[\\n  { id: \\"a\\", title: \\"Find missing documents\\", detail: \\"2 people\\", state: \\"done\\" },\\n  { id: \\"b\\", title: \\"Send reminders\\", detail: \\"Waiting for approval\\", state: \\"active\\" },\\n  { id: \\"c\\", title: \\"Confirm receipt\\", state: \\"todo\\" },\\n]} />"
      }
    }
  }
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var a,p,d;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "A failed step",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A failed step gets a red cross and says what went wrong. Later steps keep waiting."
      },
      source: {
        code: "<StepTimeline steps={[\\n  { id: \\"a\\", title: \\"Fetch invoices\\", state: \\"done\\" },\\n  { id: \\"b\\", title: \\"Match payments\\", detail: \\"The bank export could not be read\\", state: \\"failed\\" },\\n  { id: \\"c\\", title: \\"Send summary\\", state: \\"todo\\" },\\n]} />"
      }
    }
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};export{t as AFailedStep,e as InProgress,q as __namedExportsOrder,R as default};
