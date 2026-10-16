import{j as r}from"./iframe-DSdOWv-_.js";import{ah as m,b as d}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const o=d.get("ghost-text"),W={title:"Creating/GhostText",component:m,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"Accept or dismiss",render:()=>r.jsx(r.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Click the Tab hint to accept, or the close button to dismiss. In a real editor, Tab accepts and Escape dismisses."},source:{code:`<GhostText typed="Thanks for the update." partialHint="Ctrl + Right accepts one word"
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
