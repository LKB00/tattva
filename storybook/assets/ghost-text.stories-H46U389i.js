import{j as r}from"./iframe-C8v_uZy_.js";import{al as m,b as d}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const o=d.get("ghost-text"),W={title:"Creating/GhostText",component:m,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"Accept or dismiss",render:()=>r.jsx(r.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Click the Tab hint to accept, or the close button to dismiss. In a real editor, Tab accepts and Escape dismisses."},source:{code:`<GhostText typed="Thanks for the update." partialHint="Ctrl + Right accepts one word"
  onAccept={() => accept()} onDismiss={() => dismiss()}>
  {" I will review the draft tomorrow morning."}
</GhostText>`}}}},t={name:"Display only",render:()=>r.jsx(r.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"Without buttons the hint is plain text. Use it when your editor handles every key."},source:{code:'<GhostText typed="Dear team,">{" thank you for your patience."}</GhostText>'}}}},_=["AcceptOrDismiss","DisplayOnly"];var s,n,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Accept or dismiss",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Click the Tab hint to accept, or the close button to dismiss. In a real editor, Tab accepts and Escape dismisses."
      },
      source: {
        code: "<GhostText typed=\\"Thanks for the update.\\" partialHint=\\"Ctrl + Right accepts one word\\"\\n  onAccept={() => accept()} onDismiss={() => dismiss()}>\\n  {\\" I will review the draft tomorrow morning.\\"}\\n</GhostText>"
      }
    }
  }
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var a,p,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Display only",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Without buttons the hint is plain text. Use it when your editor handles every key."
      },
      source: {
        code: "<GhostText typed=\\"Dear team,\\">{\\" thank you for your patience.\\"}</GhostText>"
      }
    }
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{e as AcceptOrDismiss,t as DisplayOnly,_ as __namedExportsOrder,W as default};
