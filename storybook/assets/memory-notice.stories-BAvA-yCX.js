import{j as t}from"./iframe-C8v_uZy_.js";import{aH as p,b as d}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const r=d.get("memory-notice"),H={title:"Trust/MemoryNotice",component:p,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},e={name:"With actions",render:()=>t.jsx(t.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Undo and close both hide the notice here."},source:{code:'<MemoryNotice saved="You prefer metric units." onManage={() => {}} onUndo={() => setShown(false)} onDismiss={() => setShown(false)} />'}}}},o={name:"Information only",render:()=>t.jsx(t.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"With no buttons, the notice only says what was saved."},source:{code:'<MemoryNotice title="Saved to this project" saved="The beta ships on the first Monday of November." />'}}}},R=["WithActions","InformationOnly"];var n,s,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "With actions",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Undo and close both hide the notice here."
      },
      source: {
        code: "<MemoryNotice saved=\\"You prefer metric units.\\" onManage={() => {}} onUndo={() => setShown(false)} onDismiss={() => setShown(false)} />"
      }
    }
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var a,m,c;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Information only",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With no buttons, the notice only says what was saved."
      },
      source: {
        code: "<MemoryNotice title=\\"Saved to this project\\" saved=\\"The beta ships on the first Monday of November.\\" />"
      }
    }
  }
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};export{o as InformationOnly,e as WithActions,R as __namedExportsOrder,H as default};
