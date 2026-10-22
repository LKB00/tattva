import{j as e}from"./iframe-C8v_uZy_.js";import{ai as l,b as g}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const n=g.get("gen-ui-renderer"),Y={title:"Generated interfaces/GenUIRenderer",component:l,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},t={name:"A summary that appears piece by piece",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Pieces arrive out of order. The page shows placeholders for what is missing and fills them in. The button asks before it sends anything."},source:{code:`const [state, setState] = useState(emptySpec());
// For each streamed chunk:
setState((s) => applyChunk(s, chunk));

<GenUIRenderer
  state={state}
  pendingActionId={pending}
  onAction={(e) => { setPending(e.actionId); sendToAssistant(e); }}
/>`}}}},s={name:"A broken part shows as a quiet card",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"An unknown part, a part with styling, a part missing its name and a part that never arrived. Nothing crashes, and the readable text is kept."},source:{code:`const state = specFrom("page", [
  { id: "page", type: "Group", children: ["ok", "unknown", "styled", "nolabel", "gone"] },
  { id: "ok", type: "Callout", props: { text: "You have spent 640 euros of 900." } },
  { id: "unknown", type: "Carousel3D", props: { title: "Photos from Lisbon" } },
  { id: "styled", type: "Callout", props: { text: "Book the hotel before Friday.", className: "mt-12 p-8" } },
  { id: "nolabel", type: "StatTile", props: { value: "120 euros" } },
]);
<GenUIRenderer state={state} />`}}}},r={name:"Pick, set and approve",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"Each choice goes back to the assistant as an event. Booking the trip is marked as hard to undo, so it asks first and then shows that it is waiting."},source:{code:`<GenUIRenderer
  state={specFrom("page", nodes)}
  pendingActionId={pending}
  onAction={(e) => {
    // e = { actionId, nodeId, type: "press" | "submit" | "select" | "change", value }
    setPending(e.actionId);
    sendToAssistant(e);
  }}
/>`}}}},_=["ASummaryThatAppearsPieceByPiece","ABrokenPartShowsAsAQuietCard","PickSetAndApprove"];var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "A summary that appears piece by piece",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Pieces arrive out of order. The page shows placeholders for what is missing and fills them in. The button asks before it sends anything."
      },
      source: {
        code: "const [state, setState] = useState(emptySpec());\\n// For each streamed chunk:\\nsetState((s) => applyChunk(s, chunk));\\n\\n<GenUIRenderer\\n  state={state}\\n  pendingActionId={pending}\\n  onAction={(e) => { setPending(e.actionId); sendToAssistant(e); }}\\n/>"
      }
    }
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var p,d,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "A broken part shows as a quiet card",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "An unknown part, a part with styling, a part missing its name and a part that never arrived. Nothing crashes, and the readable text is kept."
      },
      source: {
        code: "const state = specFrom(\\"page\\", [\\n  { id: \\"page\\", type: \\"Group\\", children: [\\"ok\\", \\"unknown\\", \\"styled\\", \\"nolabel\\", \\"gone\\"] },\\n  { id: \\"ok\\", type: \\"Callout\\", props: { text: \\"You have spent 640 euros of 900.\\" } },\\n  { id: \\"unknown\\", type: \\"Carousel3D\\", props: { title: \\"Photos from Lisbon\\" } },\\n  { id: \\"styled\\", type: \\"Callout\\", props: { text: \\"Book the hotel before Friday.\\", className: \\"mt-12 p-8\\" } },\\n  { id: \\"nolabel\\", type: \\"StatTile\\", props: { value: \\"120 euros\\" } },\\n]);\\n<GenUIRenderer state={state} />"
      }
    }
  }
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,h,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Pick, set and approve",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Each choice goes back to the assistant as an event. Booking the trip is marked as hard to undo, so it asks first and then shows that it is waiting."
      },
      source: {
        code: "<GenUIRenderer\\n  state={specFrom(\\"page\\", nodes)}\\n  pendingActionId={pending}\\n  onAction={(e) => {\\n    // e = { actionId, nodeId, type: \\"press\\" | \\"submit\\" | \\"select\\" | \\"change\\", value }\\n    setPending(e.actionId);\\n    sendToAssistant(e);\\n  }}\\n/>"
      }
    }
  }
}`,...(u=(h=r.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};export{s as ABrokenPartShowsAsAQuietCard,t as ASummaryThatAppearsPieceByPiece,r as PickSetAndApprove,_ as __namedExportsOrder,Y as default};
