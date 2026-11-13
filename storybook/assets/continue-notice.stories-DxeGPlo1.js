import{j as t}from"./iframe-D-pZXX8_.js";import{Y as a,b as d}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const n=d.get("continue-notice"),Y={title:"Conversation/ContinueNotice",component:a,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"Hit the length limit",render:()=>t.jsx(t.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Press Continue to carry on from where it stopped."},source:{code:'<ContinueNotice reason="length" onContinue={continueReply} />'}}}},o={name:"Stopped, and lost",render:()=>t.jsx(t.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"The person pressed Stop; the connection dropped."},source:{code:`<ContinueNotice reason="stopped" onContinue={continueReply} />
<ContinueNotice reason="lost" onContinue={retry} />`}}}},k=["HitTheLengthLimit","StoppedAndLost"];var r,i,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Hit the length limit",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press Continue to carry on from where it stopped."
      },
      source: {
        code: "<ContinueNotice reason=\\"length\\" onContinue={continueReply} />"
      }
    }
  }
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var p,c,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Stopped, and lost",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The person pressed Stop; the connection dropped."
      },
      source: {
        code: "<ContinueNotice reason=\\"stopped\\" onContinue={continueReply} />\\n<ContinueNotice reason=\\"lost\\" onContinue={retry} />"
      }
    }
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};export{e as HitTheLengthLimit,o as StoppedAndLost,k as __namedExportsOrder,Y as default};
