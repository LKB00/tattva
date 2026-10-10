import{j as e}from"./iframe-J6_2PHET.js";import{aq as f,b as v}from"./registry-DJg46al6.js";import{a as n}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=v.get("live-captions"),D={title:"Voice and audio/LiveCaptions",component:f,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},t={name:"A live conversation",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Step through it. The person's words start light and settle. The assistant is cut off mid-answer, and the part it never said is struck through."},source:n("LiveCaptions")}}},s={name:"A call transcript you can play from",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Custom speakers, a hidden card number and a line that was cut off. Each line is a button that plays the recording from that point."},source:n("LiveCaptions")}}},o={name:"Unspoken words left out",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"With unspoken set to hide, the transcript keeps only what was played. The line still says Interrupted. announceFinal reads finished assistant lines to screen readers."},source:n("LiveCaptions")}}},G=["ALiveConversation","ACallTranscriptYouCanPlayFrom","UnspokenWordsLeftOut"];var a,i,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "A live conversation",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Step through it. The person's words start light and settle. The assistant is cut off mid-answer, and the part it never said is struck through."
      },
      source: proSource("LiveCaptions")
    }
  }
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,d,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "A call transcript you can play from",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Custom speakers, a hidden card number and a line that was cut off. Each line is a button that plays the recording from that point."
      },
      source: proSource("LiveCaptions")
    }
  }
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var l,u,h;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Unspoken words left out",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With unspoken set to hide, the transcript keeps only what was played. The line still says Interrupted. announceFinal reads finished assistant lines to screen readers."
      },
      source: proSource("LiveCaptions")
    }
  }
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};export{s as ACallTranscriptYouCanPlayFrom,t as ALiveConversation,o as UnspokenWordsLeftOut,G as __namedExportsOrder,D as default};
