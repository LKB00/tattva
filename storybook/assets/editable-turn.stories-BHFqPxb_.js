import{j as r}from"./iframe-C8v_uZy_.js";import{a8 as i,b as a}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const n=a.get("editable-turn"),F={title:"Conversation/EditableTurn",component:i,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"Edit and send again",render:()=>r.jsx(r.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Press Edit, change the question, and Send. Then use the pager to go back."},source:{code:`<EditableTurn
  versions={versions}
  current={current}
  onChangeVersion={setCurrent}
  onResend={(text) => sendEdit(text)}
  onCopy={copy}
/>`}}}},I=["EditAndSendAgain"];var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Edit and send again",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press Edit, change the question, and Send. Then use the pager to go back."
      },
      source: {
        code: "<EditableTurn\\n  versions={versions}\\n  current={current}\\n  onChangeVersion={setCurrent}\\n  onResend={(text) => sendEdit(text)}\\n  onCopy={copy}\\n/>"
      }
    }
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};export{e as EditAndSendAgain,I as __namedExportsOrder,F as default};
