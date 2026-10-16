import{j as r}from"./iframe-DSdOWv-_.js";import{aC as p,b as c}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const s=c.get("memory-list"),T={title:"Trust/MemoryList",component:p,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},e={name:"Editable list",render:()=>r.jsx(r.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"Edits and deletes work in this demo."},source:{code:`<MemoryList
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
