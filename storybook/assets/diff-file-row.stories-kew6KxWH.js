import{j as e}from"./iframe-DSdOWv-_.js";import{a0 as h,b as u}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const t=u.get("diff-file-row"),B={title:"Assistants/DiffFileRow",component:h,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},r={name:"Waiting, kept and rejected",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Choose Keep or Reject to see the label. Undo puts the row back."},source:{code:`const [s, setS] = useState("pending");

<DiffFileRow path="src/lib/format.ts" added={12} removed={3} state={s} selected
  onKeep={() => setS("kept")} onReject={() => setS("rejected")} onReset={() => setS("pending")} />`}}}},o={name:"Partly kept",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Some changes in the file are kept and others are not. Keep and Reject still decide the whole file."},source:{code:`<div className="max-w-xl">
  <DiffFileRow path="src/lib/format.ts" added={12} removed={3} state="partial" onKeep={() => {}} onReject={() => {}} onReset={() => {}} />
</div>`}}}},n={name:"A new file",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"A file with nothing removed still shows both counts."},source:{code:`<div className="max-w-xl">
  <DiffFileRow path="notes/packing-list.txt" added={6} removed={0} onKeep={() => {}} onReject={() => {}} />
</div>`}}}},G=["WaitingKeptAndRejected","PartlyKept","ANewFile"];var s,a,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Waiting, kept and rejected",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Choose Keep or Reject to see the label. Undo puts the row back."
      },
      source: {
        code: "const [s, setS] = useState(\\"pending\\");\\n\\n<DiffFileRow path=\\"src/lib/format.ts\\" added={12} removed={3} state={s} selected\\n  onKeep={() => setS(\\"kept\\")} onReject={() => setS(\\"rejected\\")} onReset={() => setS(\\"pending\\")} />"
      }
    }
  }
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var d,p,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Partly kept",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Some changes in the file are kept and others are not. Keep and Reject still decide the whole file."
      },
      source: {
        code: "<div className=\\"max-w-xl\\">\\n  <DiffFileRow path=\\"src/lib/format.ts\\" added={12} removed={3} state=\\"partial\\" onKeep={() => {}} onReject={() => {}} onReset={() => {}} />\\n</div>"
      }
    }
  }
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,l,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "A new file",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A file with nothing removed still shows both counts."
      },
      source: {
        code: "<div className=\\"max-w-xl\\">\\n  <DiffFileRow path=\\"notes/packing-list.txt\\" added={6} removed={0} onKeep={() => {}} onReject={() => {}} />\\n</div>"
      }
    }
  }
}`,...(f=(l=n.parameters)==null?void 0:l.docs)==null?void 0:f.source}}};export{n as ANewFile,o as PartlyKept,r as WaitingKeptAndRejected,G as __namedExportsOrder,B as default};
