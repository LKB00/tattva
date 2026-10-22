import{j as t}from"./iframe-C8v_uZy_.js";import{V as a,b as d}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const n=d.get("continue-notice"),V={title:"Conversation/ContinueNotice",component:a,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"Hit the length limit",render:()=>t.jsx(t.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Press Continue to carry on from where it stopped."},source:{code:'<ContinueNotice reason="length" onContinue={continueReply} />'}}}},o={name:"Stopped, and lost",render:()=>t.jsx(t.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"The person pressed Stop; the connection dropped."},source:{code:`<ContinueNotice reason="stopped" onContinue={continueReply} />
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
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};export{e as HitTheLengthLimit,o as StoppedAndLost,k as __namedExportsOrder,V as default};
