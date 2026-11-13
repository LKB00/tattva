import{j as n}from"./iframe-D-pZXX8_.js";import{F as p,b as c}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const s=c.get("checklist"),Q={title:"Assistants/Checklist",component:p,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},e={name:"Open items with a summary",render:()=>n.jsx(n.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"The first row needs a person, so it has an amber dot. Finished work is one line at the end."},source:{code:`<Checklist
  doneSummary="Received from Atlas, Birch and Cedar"
  items={[
    { id: "1", title: <span className="font-medium">Dana Whitfield</span>, badge: <Badge tone="accent">Form A</Badge>, status: "No reply in 5 days, due in 2", attention: true },
    { id: "2", title: <span className="font-medium">Owen Park</span>, badge: <Badge tone="accent">Form A</Badge>, status: "Reminder sent yesterday" },
  ]}
/>`}}}},t={name:"Nothing needs a person",render:()=>n.jsx(n.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"When nothing needs a person, no amber appears."},source:{code:`<Checklist items={[
  { id: "1", title: "Draft agenda", status: "In progress" },
  { id: "2", title: "Book the room", status: "Queued" },
]} />`}}}},T=["OpenItemsWithASummary","NothingNeedsAPerson"];var r,a,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Open items with a summary",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The first row needs a person, so it has an amber dot. Finished work is one line at the end."
      },
      source: {
        code: "<Checklist\\n  doneSummary=\\"Received from Atlas, Birch and Cedar\\"\\n  items={[\\n    { id: \\"1\\", title: <span className=\\"font-medium\\">Dana Whitfield</span>, badge: <Badge tone=\\"accent\\">Form A</Badge>, status: \\"No reply in 5 days, due in 2\\", attention: true },\\n    { id: \\"2\\", title: <span className=\\"font-medium\\">Owen Park</span>, badge: <Badge tone=\\"accent\\">Form A</Badge>, status: \\"Reminder sent yesterday\\" },\\n  ]}\\n/>"
      }
    }
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var i,m,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Nothing needs a person",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "When nothing needs a person, no amber appears."
      },
      source: {
        code: "<Checklist items={[\\n  { id: \\"1\\", title: \\"Draft agenda\\", status: \\"In progress\\" },\\n  { id: \\"2\\", title: \\"Book the room\\", status: \\"Queued\\" },\\n]} />"
      }
    }
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};export{t as NothingNeedsAPerson,e as OpenItemsWithASummary,T as __namedExportsOrder,Q as default};
