import{j as e}from"./iframe-J6_2PHET.js";import{A as u,b as g}from"./registry-DJg46al6.js";import{a}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=g.get("action-draft"),G={title:"Markets and trading/ActionDraft",component:u,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},t={name:"Draft with an edited field",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Press Edit on Quantity, change it and press Done. The Edited tag appears. Enter 0 to see Confirm lock."},source:a("ActionDraft")}}},n={name:"Working, then done",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"After Confirm the fields are read only and the steps advance. A live region announces the change. Restart plays it again."},source:a("ActionDraft")}}},o={name:"Failed",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"The error is in words in an alert, with the step that failed. Nothing is hidden behind colour."},source:a("ActionDraft")}}},H=["DraftWithAnEditedField","WorkingThenDone","Failed"];var i,s,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Draft with an edited field",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press Edit on Quantity, change it and press Done. The Edited tag appears. Enter 0 to see Confirm lock."
      },
      source: proSource("ActionDraft")
    }
  }
}`,...(d=(s=t.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var p,c,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Working, then done",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "After Confirm the fields are read only and the steps advance. A live region announces the change. Restart plays it again."
      },
      source: proSource("ActionDraft")
    }
  }
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var h,l,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Failed",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The error is in words in an alert, with the step that failed. Nothing is hidden behind colour."
      },
      source: proSource("ActionDraft")
    }
  }
}`,...(f=(l=o.parameters)==null?void 0:l.docs)==null?void 0:f.source}}};export{t as DraftWithAnEditedField,o as Failed,n as WorkingThenDone,H as __namedExportsOrder,G as default};
