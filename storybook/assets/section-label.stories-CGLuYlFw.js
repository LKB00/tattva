import{j as t}from"./iframe-J6_2PHET.js";import{b5 as p,b as d}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const n=d.get("section-label"),_={title:"Controls/SectionLabel",component:p,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"Label only",render:()=>t.jsx(t.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"A plain group name above a list."},source:{code:`<div className="w-64">
  <SectionLabel>Today</SectionLabel>
</div>`}}}},o={name:"With an action",render:()=>t.jsx(t.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Add a button or link at the end of the row."},source:{code:`<div className="w-64">
  <SectionLabel action={<Button variant="ghost" size="sm">Clear</Button>}>Recent chats</SectionLabel>
</div>`}}}},I=["LabelOnly","WithAnAction"];var r,a,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Label only",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A plain group name above a list."
      },
      source: {
        code: "<div className=\\"w-64\\">\\n  <SectionLabel>Today</SectionLabel>\\n</div>"
      }
    }
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var s,c,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "With an action",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Add a button or link at the end of the row."
      },
      source: {
        code: "<div className=\\"w-64\\">\\n  <SectionLabel action={<Button variant=\\"ghost\\" size=\\"sm\\">Clear</Button>}>Recent chats</SectionLabel>\\n</div>"
      }
    }
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};export{e as LabelOnly,o as WithAnAction,I as __namedExportsOrder,_ as default};
