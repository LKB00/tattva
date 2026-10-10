import{j as t}from"./iframe-J6_2PHET.js";import{F as i,b as c}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const s=c.get("cluster"),I={title:"Full screens and layout/Cluster",component:i,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},e={name:"Tags that wrap",render:()=>t.jsx(t.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:""},source:{code:`<Cluster gap={2}>
  <Badge>Draft</Badge>
  <Badge>Shared</Badge>
  <Badge>Reviewed</Badge>
</Cluster>`}}}},r={name:"Push apart",render:()=>t.jsx(t.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"Push the main button to the far end while the rest stay at the start."},source:{code:`<Cluster justify="between" className="w-full">
  <span>3 files</span>
  <Button size="sm">Send</Button>
</Cluster>`}}}},O=["TagsThatWrap","PushApart"];var a,n,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Tags that wrap",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: ""
      },
      source: {
        code: "<Cluster gap={2}>\\n  <Badge>Draft</Badge>\\n  <Badge>Shared</Badge>\\n  <Badge>Reviewed</Badge>\\n</Cluster>"
      }
    }
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var p,m,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Push apart",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Push the main button to the far end while the rest stay at the start."
      },
      source: {
        code: "<Cluster justify=\\"between\\" className=\\"w-full\\">\\n  <span>3 files</span>\\n  <Button size=\\"sm\\">Send</Button>\\n</Cluster>"
      }
    }
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};export{r as PushApart,e as TagsThatWrap,O as __namedExportsOrder,I as default};
