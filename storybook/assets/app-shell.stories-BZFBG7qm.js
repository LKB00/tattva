import{j as t}from"./iframe-J6_2PHET.js";import{h as c,b as l}from"./registry-DJg46al6.js";import{a as d}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const a=l.get("app-shell"),C={title:"Full screens and layout/AppShell",component:c,tags:["autodocs"],parameters:{docs:{description:{component:a.summary+" "+a.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},e={name:"Side panel and main area",render:()=>t.jsx(t.Fragment,{children:a.examples[0].render()}),parameters:{docs:{description:{story:"The frame fills the space around it, so give that space a height. Make the window narrow and the side panel disappears."},source:d("AppShell")}}},r={name:"Without a side panel",render:()=>t.jsx(t.Fragment,{children:a.examples[1].render()}),parameters:{docs:{description:{story:"With no side panel, the main area takes the full width. The studio page uses this form."},source:d("AppShell")}}},D=["SidePanelAndMainArea","WithoutASidePanel"];var o,s,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Side panel and main area",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The frame fills the space around it, so give that space a height. Make the window narrow and the side panel disappears."
      },
      source: proSource("AppShell")
    }
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var n,p,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Without a side panel",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With no side panel, the main area takes the full width. The studio page uses this form."
      },
      source: proSource("AppShell")
    }
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};export{e as SidePanelAndMainArea,r as WithoutASidePanel,D as __namedExportsOrder,C as default};
