import{j as t}from"./iframe-DSdOWv-_.js";import{Q as m,b as c}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const o=c.get("context-panel"),_={title:"Trust/ContextPanel",component:m,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"A support chat",render:()=>t.jsx(t.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Take items out with the X. The instructions are set by the workspace, so they stay."},source:{code:`<ContextPanel
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
