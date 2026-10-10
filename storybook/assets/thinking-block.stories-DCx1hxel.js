import{j as n}from"./iframe-J6_2PHET.js";import{bH as d,b as p}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const o=p.get("thinking-block"),R={title:"Conversation/ThinkingBlock",component:d,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"Active",render:()=>n.jsx(n.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Use while the assistant is still thinking."},source:{code:"<ThinkingBlock active>Comparing the two schedules against the team calendar.</ThinkingBlock>"}}}},t={name:"Finished",render:()=>n.jsx(n.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"When done, give the time taken. It shows 0 seconds if you leave it out."},source:{code:"<ThinkingBlock seconds={8}>Comparing the two schedules against the team calendar.</ThinkingBlock>"}}}},q=["Active","Finished"];var i,r,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Active",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Use while the assistant is still thinking."
      },
      source: {
        code: "<ThinkingBlock active>Comparing the two schedules against the team calendar.</ThinkingBlock>"
      }
    }
  }
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var a,c,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Finished",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "When done, give the time taken. It shows 0 seconds if you leave it out."
      },
      source: {
        code: "<ThinkingBlock seconds={8}>Comparing the two schedules against the team calendar.</ThinkingBlock>"
      }
    }
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};export{e as Active,t as Finished,q as __namedExportsOrder,R as default};
