import{j as e}from"./iframe-J6_2PHET.js";import{a1 as g,b as y}from"./registry-DJg46al6.js";import{a as t}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=y.get("enhance-compare"),G={title:"Voice and audio/EnhanceCompare",component:g,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},a={name:"Clean up an interview",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Press Clean up. While it works the original stays playable. When it is ready, play and press B or the switch: the playhead stays where it was. Move the strength or a check box and Apply appears, because the After you hear no longer matches the settings."},source:t("EnhanceCompare")}}},n={name:"Ready, comparing",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"A short voice memo already cleaned up, listening to Before. The After version carries the AI label; the original does not. The heading can be changed to match the job."},source:t("EnhanceCompare")}}},o={name:"Failed",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"The clean-up did not finish. The panel says the recording is unchanged and whether you were charged, and Try again starts it once more (in this demo it then works)."},source:t("EnhanceCompare")}}},H=["CleanUpAnInterview","ReadyComparing","Failed"];var s,i,p;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Clean up an interview",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press Clean up. While it works the original stays playable. When it is ready, play and press B or the switch: the playhead stays where it was. Move the strength or a check box and Apply appears, because the After you hear no longer matches the settings."
      },
      source: proSource("EnhanceCompare")
    }
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,m,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Ready, comparing",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A short voice memo already cleaned up, listening to Before. The After version carries the AI label; the original does not. The heading can be changed to match the job."
      },
      source: proSource("EnhanceCompare")
    }
  }
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var h,l,u;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Failed",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The clean-up did not finish. The panel says the recording is unchanged and whether you were charged, and Try again starts it once more (in this demo it then works)."
      },
      source: proSource("EnhanceCompare")
    }
  }
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};export{a as CleanUpAnInterview,o as Failed,n as ReadyComparing,H as __namedExportsOrder,G as default};
