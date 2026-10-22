import{j as r}from"./iframe-C8v_uZy_.js";import{bJ as m,b as c}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const n=c.get("step-timeline"),J={title:"Assistants/StepTimeline",component:m,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"In progress",render:()=>r.jsx(r.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"One step done, one in progress, one waiting."},source:{code:`<StepTimeline steps={[
  { id: "a", title: "Find missing documents", detail: "2 people", state: "done" },
  { id: "b", title: "Send reminders", detail: "Waiting for approval", state: "active" },
  { id: "c", title: "Confirm receipt", state: "todo" },
]} />`}}}},t={name:"A failed step",render:()=>r.jsx(r.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"A failed step gets a red cross and says what went wrong. Later steps keep waiting."},source:{code:`<StepTimeline steps={[
  { id: "a", title: "Fetch invoices", state: "done" },
  { id: "b", title: "Match payments", detail: "The bank export could not be read", state: "failed" },
  { id: "c", title: "Send summary", state: "todo" },
]} />`}}}},R=["InProgress","AFailedStep"];var s,i,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};export{t as AFailedStep,e as InProgress,R as __namedExportsOrder,J as default};
