import{j as e}from"./iframe-J6_2PHET.js";import{c0 as y,b as w}from"./registry-DJg46al6.js";import{a as s}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=w.get("voice-card"),H={title:"Voice and audio/VoiceCard",component:y,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},o={name:"Play a sample",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Press the round button to hear a sample and again to stop it. Starting one stops the other. Basalt shows a sample that fails to load."},source:s("VoiceCard")}}},a={name:"Ownership and availability",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Your own verified clone, a licensed library voice being withdrawn, one locked to a plan, a clone not yet verified (a person must act, so amber), and one already withdrawn."},source:s("VoiceCard")}}},t={name:"As a radio",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"With onSelect the card is a radio. Choosing never plays the sample; the sample button is its own control."},source:s("VoiceCard")}}},J=["PlayASample","OwnershipAndAvailability","AsARadio"];var n,i,p;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Play a sample",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press the round button to hear a sample and again to stop it. Starting one stops the other. Basalt shows a sample that fails to load."
      },
      source: proSource("VoiceCard")
    }
  }
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var d,c,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Ownership and availability",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Your own verified clone, a licensed library voice being withdrawn, one locked to a plan, a clone not yet verified (a person must act, so amber), and one already withdrawn."
      },
      source: proSource("VoiceCard")
    }
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,h,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "As a radio",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With onSelect the card is a radio. Choosing never plays the sample; the sample button is its own control."
      },
      source: proSource("VoiceCard")
    }
  }
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};export{t as AsARadio,a as OwnershipAndAvailability,o as PlayASample,J as __namedExportsOrder,H as default};
