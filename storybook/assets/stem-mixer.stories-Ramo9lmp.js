import{j as e}from"./iframe-J6_2PHET.js";import{br as u,b as S}from"./registry-DJg46al6.js";import{a}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=S.get("stem-mixer"),H={title:"Voice and audio/StemMixer",component:u,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},t={name:"Mix and pick stems to export",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Four stems, Other muted. Solo one to hear it alone; the rest say they are silent. Tick stems to change what Export takes."},source:a("StemMixer")}}},o={name:"Separation states",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Separating shows placeholder rows and a plain time. Failed says it was not charged and offers Try again. Plan-locked says which plan has stems and that the full song still exports."},source:a("StemMixer")}}},s={name:"Phone width",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"Rows stack and the waveforms are hidden. Vocals is soloed, so the other rows say they are silent."},source:a("StemMixer")}}},J=["MixAndPickStemsToExport","SeparationStates","PhoneWidth"];var n,i,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Mix and pick stems to export",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Four stems, Other muted. Solo one to hear it alone; the rest say they are silent. Tick stems to change what Export takes."
      },
      source: proSource("StemMixer")
    }
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,c,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Separation states",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Separating shows placeholder rows and a plain time. Failed says it was not charged and offers Try again. Plan-locked says which plan has stems and that the full song still exports."
      },
      source: proSource("StemMixer")
    }
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var h,l,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Phone width",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Rows stack and the waveforms are hidden. Vocals is soloed, so the other rows say they are silent."
      },
      source: proSource("StemMixer")
    }
  }
}`,...(x=(l=s.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};export{t as MixAndPickStemsToExport,s as PhoneWidth,o as SeparationStates,J as __namedExportsOrder,H as default};
