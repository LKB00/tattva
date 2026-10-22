import{j as r}from"./iframe-C8v_uZy_.js";import{aG as p,b as c}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const s=c.get("memory-list"),O={title:"Trust/MemoryList",component:p,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},e={name:"Editable list",render:()=>r.jsx(r.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"Edits and deletes work in this demo."},source:{code:`<MemoryList
  entries={items}
  onEdit={(id, text) => setItems(items.map((m) => (m.id === id ? { ...m, text } : m)))}
  onDelete={(id) => setItems(items.filter((m) => m.id !== id))}
/>`}}}},t={name:"Nothing remembered",render:()=>r.jsx(r.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"Change the message shown when the list is empty."},source:{code:'<MemoryList entries={[]} defaultPaused emptyState="Memory is paused, so nothing is being saved." />'}}}},T=["EditableList","NothingRemembered"];var i,o,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(d=t.parameters)==null?void 0:d.docs)==null?void 0:a.source}}};export{e as EditableList,t as NothingRemembered,T as __namedExportsOrder,O as default};
