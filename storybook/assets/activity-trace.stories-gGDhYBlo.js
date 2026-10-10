import{j as e}from"./iframe-J6_2PHET.js";import{c as A,b as x}from"./registry-DJg46al6.js";import{a}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=x.get("activity-trace"),N={title:"Asking and showing work/ActivityTrace",component:A,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},t={name:"Folded, then open",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Folded, the trace is one line. Press it to see every step. The second trace starts open."},source:a("ActivityTrace")}}},n={name:"Streaming",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"A step arrives every 700 milliseconds. While streaming the list is open, the newest step is marked running, and each row is announced. At the end the summary changes and the person can fold it. With reduced motion on, rows appear without sliding."},source:a("ActivityTrace")}}},o={name:"A failed step",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"A failed step shows an X, the word Failed and a detail line. Pending steps show an empty circle. The icons and words carry the meaning, not the colour."},source:a("ActivityTrace")}}},s={name:"Controlled",render:()=>e.jsx(e.Fragment,{children:r.examples[3].render()}),parameters:{docs:{description:{story:"Pass open and onOpenChange when the parent needs to know, for example to fold every trace at once."},source:a("ActivityTrace")}}},Q=["FoldedThenOpen","Streaming","AFailedStep","Controlled"];var i,c,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Folded, then open",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Folded, the trace is one line. Press it to see every step. The second trace starts open."
      },
      source: proSource("ActivityTrace")
    }
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,m,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Streaming",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A step arrives every 700 milliseconds. While streaming the list is open, the newest step is marked running, and each row is announced. At the end the summary changes and the person can fold it. With reduced motion on, rows appear without sliding."
      },
      source: proSource("ActivityTrace")
    }
  }
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var h,u,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "A failed step",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A failed step shows an X, the word Failed and a detail line. Pending steps show an empty circle. The icons and words carry the meaning, not the colour."
      },
      source: proSource("ActivityTrace")
    }
  }
}`,...(y=(u=o.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var g,w,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Controlled",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Pass open and onOpenChange when the parent needs to know, for example to fold every trace at once."
      },
      source: proSource("ActivityTrace")
    }
  }
}`,...(v=(w=s.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};export{o as AFailedStep,s as Controlled,t as FoldedThenOpen,n as Streaming,Q as __namedExportsOrder,N as default};
