import{j as o}from"./iframe-J6_2PHET.js";import{E as m,b as l}from"./registry-DJg46al6.js";import{a as c}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const t=l.get("clip-range-selector"),V={title:"Video/ClipRangeSelector",component:m,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},e={name:"Extend from part of an upload",render:()=>o.jsx(o.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Up to 10 seconds of a 24-second clip. Drag a handle or the window, use the keys (an arrow is one frame, Shift with an arrow is one second), type the times, or play the clip and press Set start or Set end at the playhead."},source:c("ClipRangeSelector")}}},r={name:"Processing, applied and too long",render:()=>o.jsx(o.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"While the AI works the range is locked and says why. Applied says where the result went. The last one was passed 19 seconds with a 10-second limit, so it keeps the start, moves the end and says so. Without thumbnails the strip is plain."},source:c("ClipRangeSelector")}}},q=["ExtendFromPartOfAnUpload","ProcessingAppliedAndTooLong"];var s,a,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Extend from part of an upload",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Up to 10 seconds of a 24-second clip. Drag a handle or the window, use the keys (an arrow is one frame, Shift with an arrow is one second), type the times, or play the clip and press Set start or Set end at the playhead."
      },
      source: proSource("ClipRangeSelector")
    }
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var i,p,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Processing, applied and too long",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "While the AI works the range is locked and says why. Applied says where the result went. The last one was passed 19 seconds with a 10-second limit, so it keeps the start, moves the end and says so. Without thumbnails the strip is plain."
      },
      source: proSource("ClipRangeSelector")
    }
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};export{e as ExtendFromPartOfAnUpload,r as ProcessingAppliedAndTooLong,q as __namedExportsOrder,V as default};
