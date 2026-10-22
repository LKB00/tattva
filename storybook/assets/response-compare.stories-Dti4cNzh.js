import{j as r}from"./iframe-C8v_uZy_.js";import{ba as c,b as d}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const s=d.get("response-compare"),_={title:"Conversation/ResponseCompare",component:c,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},e={name:"Pick the better reply",render:()=>r.jsx(r.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"Press Choose this reply under one, or About the same."},source:{code:`<ResponseCompare
  replies={[
    { id: "a", label: "Reply A", content: <p>Your refund of ₹3,499 was sent on 12 October…</p> },
    { id: "b", label: "Reply B", content: <p>Refunds usually take a while…</p> },
  ]}
  onChoose={(id) => saveChoice(id)}
/>`}}}},o={name:"Without About the same",render:()=>r.jsx(r.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"Turn it off when a choice is required."},source:{code:"<ResponseCompare allowSame={false} replies={replies} onChoose={choose} />"}}}},I=["PickTheBetterReply","WithoutAboutTheSame"];var t,n,p;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Pick the better reply",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press Choose this reply under one, or About the same."
      },
      source: {
        code: "<ResponseCompare\\n  replies={[\\n    { id: \\"a\\", label: \\"Reply A\\", content: <p>Your refund of ₹3,499 was sent on 12 October…</p> },\\n    { id: \\"b\\", label: \\"Reply B\\", content: <p>Refunds usually take a while…</p> },\\n  ]}\\n  onChoose={(id) => saveChoice(id)}\\n/>"
      }
    }
  }
}`,...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var a,i,m;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Without About the same",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Turn it off when a choice is required."
      },
      source: {
        code: "<ResponseCompare allowSame={false} replies={replies} onChoose={choose} />"
      }
    }
  }
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as PickTheBetterReply,o as WithoutAboutTheSame,I as __namedExportsOrder,_ as default};
