import{j as e}from"./iframe-J6_2PHET.js";import{ao as k,b as w}from"./registry-DJg46al6.js";import{a as t}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const s=w.get("likeness-consent"),z={title:"Video/LikenessConsent",component:k,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},r={name:"Every status",render:()=>e.jsx(e.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"The view of the person who asked. Pending is amber because Asha still has to act; nothing else is. They can see who may use it but not change it."},source:t("LikenessConsent")}}},o={name:"The person in it: who can use it, uses and revoke",render:()=>e.jsx(e.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"With canManage, Asha picks who may use her likeness (narrowest first), sees each use, and can revoke with a confirm in place."},source:t("LikenessConsent")}}},n={name:"Record here",render:()=>e.jsx(e.Fragment,{children:s.examples[2].render()}),parameters:{docs:{description:{story:'Tomas is in the room, so "record now" opens VoiceConsentCheck with subject="likeness" inside the panel. Done moves to accepted.'},source:t("LikenessConsent")}}},B=["EveryStatus","ThePersonInItWhoCanUseItUsesAndRevoke","RecordHere"];var a,i,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Every status",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The view of the person who asked. Pending is amber because Asha still has to act; nothing else is. They can see who may use it but not change it."
      },
      source: proSource("LikenessConsent")
    }
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,m,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "The person in it: who can use it, uses and revoke",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With canManage, Asha picks who may use her likeness (narrowest first), sees each use, and can revoke with a confirm in place."
      },
      source: proSource("LikenessConsent")
    }
  }
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var h,u,l;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Record here",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Tomas is in the room, so \\"record now\\" opens VoiceConsentCheck with subject=\\"likeness\\" inside the panel. Done moves to accepted."
      },
      source: proSource("LikenessConsent")
    }
  }
}`,...(l=(u=n.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};export{r as EveryStatus,n as RecordHere,o as ThePersonInItWhoCanUseItUsesAndRevoke,B as __namedExportsOrder,z as default};
