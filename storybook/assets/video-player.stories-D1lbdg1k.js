import{j as e}from"./iframe-J6_2PHET.js";import{b$ as y,b as g}from"./registry-DJg46al6.js";import{a as o}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=g.get("video-player"),C={title:"Video/VideoPlayer",component:y,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},n={name:"Generated take with frame actions",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"No file is needed: the player draws a stand-in scene and simulates time. Press Play, pause anywhere, then step frames with the buttons, or with comma and period while focus is in the player. The paused-frame actions return the time and frame number."},source:o("VideoPlayer")}}},a={name:"Shapes: 9:16 and 1:1",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"The frame keeps its shape before anything loads. A 9:16 clip is capped in width. A clip with no sound says so on the mute button. Loop starts on when loop is set, and the person can turn it off."},source:o("VideoPlayer")}}},t={name:"Generating, error and loading",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"While generating, the first frame is dimmed under one calm working edge and nothing can play. Say why someone is waiting, never a countdown. When it finishes, screen readers hear that it is ready. An error says whether credits came back."},source:o("VideoPlayer")}}},D=["GeneratedTakeWithFrameActions","Shapes916And11","GeneratingErrorAndLoading"];var s,i,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Generated take with frame actions",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "No file is needed: the player draws a stand-in scene and simulates time. Press Play, pause anywhere, then step frames with the buttons, or with comma and period while focus is in the player. The paused-frame actions return the time and frame number."
      },
      source: proSource("VideoPlayer")
    }
  }
}`,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,p,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Shapes: 9:16 and 1:1",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The frame keeps its shape before anything loads. A 9:16 clip is capped in width. A clip with no sound says so on the mute button. Loop starts on when loop is set, and the person can turn it off."
      },
      source: proSource("VideoPlayer")
    }
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var h,l,u;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Generating, error and loading",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "While generating, the first frame is dimmed under one calm working edge and nothing can play. Say why someone is waiting, never a countdown. When it finishes, screen readers hear that it is ready. An error says whether credits came back."
      },
      source: proSource("VideoPlayer")
    }
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};export{n as GeneratedTakeWithFrameActions,t as GeneratingErrorAndLoading,a as Shapes916And11,D as __namedExportsOrder,C as default};
