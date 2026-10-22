import{j as t}from"./iframe-C8v_uZy_.js";import{U as m,b as c}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const o=c.get("context-panel"),_={title:"Trust/ContextPanel",component:m,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"A support chat",render:()=>t.jsx(t.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Take items out with the X. The instructions are set by the workspace, so they stay."},source:{code:`<ContextPanel
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
