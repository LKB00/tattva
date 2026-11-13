import{j as r}from"./iframe-D-pZXX8_.js";import{aL as p,b as c}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const s=c.get("memory-list"),T={title:"Trust/MemoryList",component:p,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},e={name:"Editable list",render:()=>r.jsx(r.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"Edits and deletes work in this demo."},source:{code:`<MemoryList
  entries={items}
  onEdit={(id, text) => setItems(items.map((m) => (m.id === id ? { ...m, text } : m)))}
  onDelete={(id) => setItems(items.filter((m) => m.id !== id))}
/>`}}}},t={name:"Nothing remembered",render:()=>r.jsx(r.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"Change the message shown when the list is empty."},source:{code:'<MemoryList entries={[]} defaultPaused emptyState="Memory is paused, so nothing is being saved." />'}}}},q=["EditableList","NothingRemembered"];var i,o,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Editable list",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Edits and deletes work in this demo."
      },
      source: {
        code: "<MemoryList\\n  entries={items}\\n  onEdit={(id, text) => setItems(items.map((m) => (m.id === id ? { ...m, text } : m)))}\\n  onDelete={(id) => setItems(items.filter((m) => m.id !== id))}\\n/>"
      }
    }
  }
}`,...(m=(o=e.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var n,d,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Nothing remembered",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Change the message shown when the list is empty."
      },
      source: {
        code: "<MemoryList entries={[]} defaultPaused emptyState=\\"Memory is paused, so nothing is being saved.\\" />"
      }
    }
  }
}`,...(a=(d=t.parameters)==null?void 0:d.docs)==null?void 0:a.source}}};export{e as EditableList,t as NothingRemembered,q as __namedExportsOrder,T as default};
