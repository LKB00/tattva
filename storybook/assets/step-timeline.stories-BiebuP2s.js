import{j as r}from"./iframe-D-pZXX8_.js";import{bR as m,b as c}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const n=c.get("step-timeline"),_={title:"Assistants/StepTimeline",component:m,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"In progress",render:()=>r.jsx(r.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"One step done, one in progress, one waiting."},source:{code:`<StepTimeline steps={[
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
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};export{t as AFailedStep,e as InProgress,q as __namedExportsOrder,_ as default};
