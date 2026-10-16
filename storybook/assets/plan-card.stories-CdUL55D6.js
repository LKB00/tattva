import{j as e}from"./iframe-DSdOWv-_.js";import{b as g}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import{P as u}from"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const t=g.get("plan-card"),B={title:"Assistants/PlanCard",component:u,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},n={name:"Awaiting approval",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:'The starting state. Approve and Revise work, and the "nothing has changed" label shows.'},source:{code:`<PlanCard
  title="Plan the party seating"
  estimate="About 6 minutes"
  steps={[
    { id: "1", title: "Look at the guest list", description: "See who has replied so far." },
    { id: "2", title: "Add a seat for each guest", description: "Group friends and family together." },
    { id: "3", title: "Check the table plan", description: "Make sure nobody is left out." },
  ]}
/>`}}}},a={name:"Editable steps",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Each step gets Edit and Remove buttons. They go away once the plan is approved or revised."},source:{code:`<PlanCard
  title="Plan the party seating"
  steps={steps}
  onEditStep={() => {}}
  onRemoveStep={() => {}}
/>`}}}},r={name:"Draft and approved",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:'A draft keeps the buttons off while the plan is being written. An approved plan hides the "nothing has changed" label.'},source:{code:`<PlanCard title="Plan the party seating" steps={steps} state="draft" />
<PlanCard title="Plan the party seating" steps={steps} state="approved" />`}}}},H=["AwaitingApproval","EditableSteps","DraftAndApproved"];var s,o,p;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Awaiting approval",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The starting state. Approve and Revise work, and the \\"nothing has changed\\" label shows."
      },
      source: {
        code: "<PlanCard\\n  title=\\"Plan the party seating\\"\\n  estimate=\\"About 6 minutes\\"\\n  steps={[\\n    { id: \\"1\\", title: \\"Look at the guest list\\", description: \\"See who has replied so far.\\" },\\n    { id: \\"2\\", title: \\"Add a seat for each guest\\", description: \\"Group friends and family together.\\" },\\n    { id: \\"3\\", title: \\"Check the table plan\\", description: \\"Make sure nobody is left out.\\" },\\n  ]}\\n/>"
      }
    }
  }
}`,...(p=(o=n.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var i,d,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Editable steps",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Each step gets Edit and Remove buttons. They go away once the plan is approved or revised."
      },
      source: {
        code: "<PlanCard\\n  title=\\"Plan the party seating\\"\\n  steps={steps}\\n  onEditStep={() => {}}\\n  onRemoveStep={() => {}}\\n/>"
      }
    }
  }
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,m,h;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Draft and approved",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A draft keeps the buttons off while the plan is being written. An approved plan hides the \\"nothing has changed\\" label."
      },
      source: {
        code: "<PlanCard title=\\"Plan the party seating\\" steps={steps} state=\\"draft\\" />\\n<PlanCard title=\\"Plan the party seating\\" steps={steps} state=\\"approved\\" />"
      }
    }
  }
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};export{n as AwaitingApproval,r as DraftAndApproved,a as EditableSteps,H as __namedExportsOrder,B as default};
