import{j as e}from"./iframe-J6_2PHET.js";import{bM as f,b as v}from"./registry-DJg46al6.js";import{a as n}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const t=v.get("toast"),L={title:"Navigation and overlays/Toast",component:f,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},o={name:"Each tone",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Neutral, success, info and danger. Every tone except neutral has an icon, and every toast has a title, so colour is never the only cue. A danger toast is announced straight away."},source:n("Toast")}}},r={name:"With an Undo action",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Delete first, then offer Undo. The action is a real button. The toast stays for 8 seconds, the default for a toast with an action, and a thin bar along the bottom shows the time left."},source:n("Toast")}}},s={name:"Saving, then saved",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"Show one toast while the work runs, with duration 0 so it stays. When it ends, update changes the same toast in place. Its timer starts again, here with the 6 seconds a toast with a description gets."},source:n("Toast")}}},a={name:"The Toast on its own",render:()=>e.jsx(e.Fragment,{children:t.examples[3].render()}),parameters:{docs:{description:{story:"The Toast component has no timer and no region. Use it to draw a toast in a page, or to build your own host. Pass onDismiss to show the close button."},source:n("Toast")}}},Q=["EachTone","WithAnUndoAction","SavingThenSaved","TheToastOnItsOwn"];var i,c,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Each tone",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Neutral, success, info and danger. Every tone except neutral has an icon, and every toast has a title, so colour is never the only cue. A danger toast is announced straight away."
      },
      source: proSource("Toast")
    }
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "With an Undo action",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Delete first, then offer Undo. The action is a real button. The toast stays for 8 seconds, the default for a toast with an action, and a thin bar along the bottom shows the time left."
      },
      source: proSource("Toast")
    }
  }
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var u,l,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Saving, then saved",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Show one toast while the work runs, with duration 0 so it stays. When it ends, update changes the same toast in place. Its timer starts again, here with the 6 seconds a toast with a description gets."
      },
      source: proSource("Toast")
    }
  }
}`,...(g=(l=s.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var T,w,y;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "The Toast on its own",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The Toast component has no timer and no region. Use it to draw a toast in a page, or to build your own host. Pass onDismiss to show the close button."
      },
      source: proSource("Toast")
    }
  }
}`,...(y=(w=a.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};export{o as EachTone,s as SavingThenSaved,a as TheToastOnItsOwn,r as WithAnUndoAction,Q as __namedExportsOrder,L as default};
