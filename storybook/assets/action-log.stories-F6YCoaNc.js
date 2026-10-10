import{j as r}from"./iframe-J6_2PHET.js";import{a as u,b as f}from"./registry-DJg46al6.js";import{a as s}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const o=f.get("action-log"),D={title:"Assistants/ActionLog",component:u,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},e={name:"A morning of chores",render:()=>r.jsx(r.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Try the filter, then press Undo on the first row. It becomes Undone and the summary updates."},source:s("ActionLog")}}},t={name:"Starting on failed actions",render:()=>r.jsx(r.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"Open the log filtered to what went wrong."},source:s("ActionLog")}}},n={name:"Nothing to show",render:()=>r.jsx(r.Fragment,{children:o.examples[2].render()}),parameters:{docs:{description:{story:"When the filter matches no rows, the log says so in words."},source:s("ActionLog")}}},G=["AMorningOfChores","StartingOnFailedActions","NothingToShow"];var i,a,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "A morning of chores",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Try the filter, then press Undo on the first row. It becomes Undone and the summary updates."
      },
      source: proSource("ActionLog")
    }
  }
}`,...(c=(a=e.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var m,p,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Starting on failed actions",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Open the log filtered to what went wrong."
      },
      source: proSource("ActionLog")
    }
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var h,g,l;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Nothing to show",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "When the filter matches no rows, the log says so in words."
      },
      source: proSource("ActionLog")
    }
  }
}`,...(l=(g=n.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};export{e as AMorningOfChores,n as NothingToShow,t as StartingOnFailedActions,G as __namedExportsOrder,D as default};
