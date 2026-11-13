import{j as t}from"./iframe-D-pZXX8_.js";import{X as m,b as c}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const o=c.get("context-panel"),_={title:"Trust/ContextPanel",component:m,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"A support chat",render:()=>t.jsx(t.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Take items out with the X. The instructions are set by the workspace, so they stay."},source:{code:`<ContextPanel
  items={[
    { id: "i", kind: "instruction", label: "Answer as the store's support team", detail: "Set by your workspace", fixed: true },
    { id: "p", kind: "page", label: "Orders dashboard", detail: "The page you have open" },
    { id: "f1", kind: "file", label: "Q3 refunds.csv", detail: "1,204 rows" },
    { id: "a", kind: "app", label: "Shopify", detail: "Read only" },
    { id: "m", kind: "memory", label: "You prefer replies under 100 words" },
  ]}
  onRemove={remove}
  onAdd={openPicker}
  room={{ used: 18400, total: 200000 }}
/>`}}}},r={name:"Nothing shared",render:()=>t.jsx(t.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"Say plainly that the assistant only sees the chat."},source:{code:"<ContextPanel items={[]} onRemove={remove} onAdd={openPicker} />"}}}},I=["ASupportChat","NothingShared"];var n,s,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "A support chat",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Take items out with the X. The instructions are set by the workspace, so they stay."
      },
      source: {
        code: "<ContextPanel\\n  items={[\\n    { id: \\"i\\", kind: \\"instruction\\", label: \\"Answer as the store's support team\\", detail: \\"Set by your workspace\\", fixed: true },\\n    { id: \\"p\\", kind: \\"page\\", label: \\"Orders dashboard\\", detail: \\"The page you have open\\" },\\n    { id: \\"f1\\", kind: \\"file\\", label: \\"Q3 refunds.csv\\", detail: \\"1,204 rows\\" },\\n    { id: \\"a\\", kind: \\"app\\", label: \\"Shopify\\", detail: \\"Read only\\" },\\n    { id: \\"m\\", kind: \\"memory\\", label: \\"You prefer replies under 100 words\\" },\\n  ]}\\n  onRemove={remove}\\n  onAdd={openPicker}\\n  room={{ used: 18400, total: 200000 }}\\n/>"
      }
    }
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var i,d,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Nothing shared",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Say plainly that the assistant only sees the chat."
      },
      source: {
        code: "<ContextPanel items={[]} onRemove={remove} onAdd={openPicker} />"
      }
    }
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};export{e as ASupportChat,r as NothingShared,I as __namedExportsOrder,_ as default};
