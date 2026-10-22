import{j as t}from"./iframe-C8v_uZy_.js";import{bh as c,b as m}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const o=m.get("scene-strip"),T={title:"Video/SceneStrip",component:c,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"A scene in progress",render:()=>t.jsx(t.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Five shots with every status. Drag a card, use its arrows, or focus it and press Alt with an arrow key. Add shot appends one."},source:{code:`<SceneStrip title="Ferry morning" shots={shots} onReorder={setShots} onOpen={openShot} onAdd={addShot} />

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
