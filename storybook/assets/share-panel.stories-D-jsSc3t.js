import{j as o}from"./iframe-C8v_uZy_.js";import{bp as s,b as p}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const r=p.get("share-panel"),_={title:"Conversation/SharePanel",component:s,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},e={name:"Share a chat",render:()=>o.jsx(o.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Change who can open it, copy the link, or stop sharing."},source:{code:`<SharePanel
  title="Lisbon trip plan"
  access={access}
  onAccessChange={setAccess}
  link="https://example.com/share/7KQ4M9XP"
  onStopSharing={stopSharing}
/>`}}}},v=["ShareAChat"];var t,n,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Share a chat",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Change who can open it, copy the link, or stop sharing."
      },
      source: {
        code: "<SharePanel\\n  title=\\"Lisbon trip plan\\"\\n  access={access}\\n  onAccessChange={setAccess}\\n  link=\\"https://example.com/share/7KQ4M9XP\\"\\n  onStopSharing={stopSharing}\\n/>"
      }
    }
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};export{e as ShareAChat,v as __namedExportsOrder,_ as default};
