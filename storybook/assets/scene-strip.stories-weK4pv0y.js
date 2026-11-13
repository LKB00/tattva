import{j as t}from"./iframe-D-pZXX8_.js";import{bo as c,b as m}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const o=m.get("scene-strip"),T={title:"Video/SceneStrip",component:c,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"A scene in progress",render:()=>t.jsx(t.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Five shots with every status. Drag a card, use its arrows, or focus it and press Alt with an arrow key. Add shot appends one."},source:{code:`<SceneStrip title="Ferry morning" shots={shots} onReorder={setShots} onOpen={openShot} onAdd={addShot} />

const shots = [
  { id: "a", label: "Harbour at dawn", prompt: "Wide shot of a quiet harbour…", durationSec: 6, status: "ready" },
  { id: "b", label: "Ferry leaves", durationSec: 8, status: "needsPick", note: "4 takes" },
  { id: "c", label: "Deck close-up", status: "generating" },
  { id: "d", label: "Island arrives", status: "failed", note: "Not charged" },
  { id: "e", label: "Title card", durationSec: 4, status: "ready" },
];`}}}},r={name:"Empty",render:()=>t.jsx(t.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"Before any shots exist: a short line and Add shot."},source:{code:'<SceneStrip title="Product teaser" shots={[]} onReorder={setShots} onAdd={addShot} />'}}}},W=["ASceneInProgress","Empty"];var s,n,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "A scene in progress",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Five shots with every status. Drag a card, use its arrows, or focus it and press Alt with an arrow key. Add shot appends one."
      },
      source: {
        code: "<SceneStrip title=\\"Ferry morning\\" shots={shots} onReorder={setShots} onOpen={openShot} onAdd={addShot} />\\n\\nconst shots = [\\n  { id: \\"a\\", label: \\"Harbour at dawn\\", prompt: \\"Wide shot of a quiet harbour…\\", durationSec: 6, status: \\"ready\\" },\\n  { id: \\"b\\", label: \\"Ferry leaves\\", durationSec: 8, status: \\"needsPick\\", note: \\"4 takes\\" },\\n  { id: \\"c\\", label: \\"Deck close-up\\", status: \\"generating\\" },\\n  { id: \\"d\\", label: \\"Island arrives\\", status: \\"failed\\", note: \\"Not charged\\" },\\n  { id: \\"e\\", label: \\"Title card\\", durationSec: 4, status: \\"ready\\" },\\n];"
      }
    }
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var d,i,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Empty",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Before any shots exist: a short line and Add shot."
      },
      source: {
        code: "<SceneStrip title=\\"Product teaser\\" shots={[]} onReorder={setShots} onAdd={addShot} />"
      }
    }
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};export{e as ASceneInProgress,r as Empty,W as __namedExportsOrder,T as default};
