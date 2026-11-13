import{j as e}from"./iframe-D-pZXX8_.js";import{bk as h,b as v}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const s=v.get("review-table"),I={title:"Numbers/ReviewTable",component:h,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},r={name:"Expenses from receipts",render:()=>e.jsx(e.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"The fourth row is missing its name; saving says so and marks the cell. Change any cell to see the edit count."},source:{code:`<ReviewTable label="Expenses the assistant found in your receipts" saveLabel="Save expenses"
  columns={[
    { key: "what", label: "What", required: true },
    { key: "date", label: "Date", type: "date" },
    { key: "amount", label: "Amount ($)", type: "number", required: true },
    { key: "category", label: "Category", type: "choice", options: ["Travel", "Meals", "Office", "Other"] },
  ]}
  rows={drafted} saving={saving} onSave={save} onDiscard={discard} />`}}}},a={name:"Rows that can be taken out",render:()=>e.jsx(e.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"allowRemove adds a Remove button to each row; Start over brings every row and value back."},source:{code:'<ReviewTable allowRemove label="Expenses the assistant found in your receipts" columns={columns} rows={drafted} onSave={save} />'}}}},t={name:"While the assistant drafts",render:()=>e.jsx(e.Fragment,{children:s.examples[2].render()}),parameters:{docs:{description:{story:"Placeholder rows hold the space until the rows arrive."},source:{code:'<ReviewTable loading label="Expenses the assistant is reading" columns={columns} rows={[]} onSave={save} />'}}}},N=["ExpensesFromReceipts","RowsThatCanBeTakenOut","WhileTheAssistantDrafts"];var o,n,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Expenses from receipts",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The fourth row is missing its name; saving says so and marks the cell. Change any cell to see the edit count."
      },
      source: {
        code: "<ReviewTable label=\\"Expenses the assistant found in your receipts\\" saveLabel=\\"Save expenses\\"\\n  columns={[\\n    { key: \\"what\\", label: \\"What\\", required: true },\\n    { key: \\"date\\", label: \\"Date\\", type: \\"date\\" },\\n    { key: \\"amount\\", label: \\"Amount ($)\\", type: \\"number\\", required: true },\\n    { key: \\"category\\", label: \\"Category\\", type: \\"choice\\", options: [\\"Travel\\", \\"Meals\\", \\"Office\\", \\"Other\\"] },\\n  ]}\\n  rows={drafted} saving={saving} onSave={save} onDiscard={discard} />"
      }
    }
  }
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,m,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Rows that can be taken out",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "allowRemove adds a Remove button to each row; Start over brings every row and value back."
      },
      source: {
        code: "<ReviewTable allowRemove label=\\"Expenses the assistant found in your receipts\\" columns={columns} rows={drafted} onSave={save} />"
      }
    }
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var l,p,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "While the assistant drafts",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Placeholder rows hold the space until the rows arrive."
      },
      source: {
        code: "<ReviewTable loading label=\\"Expenses the assistant is reading\\" columns={columns} rows={[]} onSave={save} />"
      }
    }
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};export{r as ExpensesFromReceipts,a as RowsThatCanBeTakenOut,t as WhileTheAssistantDrafts,N as __namedExportsOrder,I as default};
