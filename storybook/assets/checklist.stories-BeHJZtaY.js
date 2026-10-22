import{j as n}from"./iframe-C8v_uZy_.js";import{D as p,b as c}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const s=c.get("checklist"),Q={title:"Assistants/Checklist",component:p,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},e={name:"Open items with a summary",render:()=>n.jsx(n.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"The first row needs a person, so it has an amber dot. Finished work is one line at the end."},source:{code:`<Checklist
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
