import{j as e}from"./iframe-C8v_uZy_.js";import{a3 as h,b as u}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const t=u.get("diff-file-row"),B={title:"Assistants/DiffFileRow",component:h,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},r={name:"Waiting, kept and rejected",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Choose Keep or Reject to see the label. Undo puts the row back."},source:{code:`const [s, setS] = useState("pending");

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
