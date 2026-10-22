import{j as n}from"./iframe-C8v_uZy_.js";import{bY as d,b as p}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const o=p.get("thinking-block"),Y={title:"Conversation/ThinkingBlock",component:d,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"Active",render:()=>n.jsx(n.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Use while the assistant is still thinking."},source:{code:"<ThinkingBlock active>Comparing the two schedules against the team calendar.</ThinkingBlock>"}}}},t={name:"Finished",render:()=>n.jsx(n.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"When done, give the time taken. It shows 0 seconds if you leave it out."},source:{code:"<ThinkingBlock seconds={8}>Comparing the two schedules against the team calendar.</ThinkingBlock>"}}}},q=["Active","Finished"];var i,r,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};export{e as Active,t as Finished,q as __namedExportsOrder,Y as default};
