import{j as o}from"./iframe-J6_2PHET.js";import{ar as c,b as l}from"./registry-DJg46al6.js";import{a as d}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const s=l.get("live-log"),B={title:"Asking and showing work/LiveLog",component:c,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},e={name:"Lines arriving, with pause",render:()=>o.jsx(o.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:'A new line arrives every 0.9 seconds. Press Pause to hold them; new ones wait behind the "N new lines" button. Scroll up to stop following.'},source:d("LiveLog")}}},r={name:"Wrapped lines with levels",render:()=>o.jsx(o.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"With wrap, long lines break instead of scrolling sideways. Warnings and errors carry an icon and a word."},source:d("LiveLog")}}},C=["LinesArrivingWithPause","WrappedLinesWithLevels"];var n,i,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Lines arriving, with pause",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A new line arrives every 0.9 seconds. Press Pause to hold them; new ones wait behind the \\"N new lines\\" button. Scroll up to stop following."
      },
      source: proSource("LiveLog")
    }
  }
}`,...(t=(i=e.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var a,p,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Wrapped lines with levels",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With wrap, long lines break instead of scrolling sideways. Warnings and errors carry an icon and a word."
      },
      source: proSource("LiveLog")
    }
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};export{e as LinesArrivingWithPause,r as WrappedLinesWithLevels,C as __namedExportsOrder,B as default};
