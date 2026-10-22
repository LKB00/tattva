import{j as t}from"./iframe-C8v_uZy_.js";import{bd as m,b as c}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const n=c.get("revert-toggle"),B={title:"Trust/RevertToggle",component:m,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"After an edit",render:()=>t.jsx(t.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Reverting drops the edit here, and the switch goes away."},source:{code:`<RevertToggle
  aiValue="Thank you for waiting. We expect to ship the fix on Friday."
  userValue={edit}
  onRevert={() => setEdit(undefined)}
/>`}}}},r={name:"Starting on the AI version",render:()=>t.jsx(t.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Opens on the AI version even when an edit exists."},source:{code:'<RevertToggle aiValue="Weekly sync, Tuesdays at 10:00." userValue="Weekly sync, Tuesdays at 09:30." defaultValue="ai" />'}}}},C=["AfterAnEdit","StartingOnTheAIVersion"];var o,s,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "After an edit",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Reverting drops the edit here, and the switch goes away."
      },
      source: {
        code: "<RevertToggle\\n  aiValue=\\"Thank you for waiting. We expect to ship the fix on Friday.\\"\\n  userValue={edit}\\n  onRevert={() => setEdit(undefined)}\\n/>"
      }
    }
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var i,d,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Starting on the AI version",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Opens on the AI version even when an edit exists."
      },
      source: {
        code: "<RevertToggle aiValue=\\"Weekly sync, Tuesdays at 10:00.\\" userValue=\\"Weekly sync, Tuesdays at 09:30.\\" defaultValue=\\"ai\\" />"
      }
    }
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};export{e as AfterAnEdit,r as StartingOnTheAIVersion,C as __namedExportsOrder,B as default};
