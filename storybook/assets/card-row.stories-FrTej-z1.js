import{j as o}from"./iframe-C8v_uZy_.js";import{t as p,b as c}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const s=c.get("card-row"),v={title:"Generated interfaces/CardRow",component:p,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},r={name:"A row of results",render:()=>o.jsx(o.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"Wraps on wide screens, swipes on a phone."},source:{code:`<CardRow label="Hotels in Paris">
  <ResultCard ... />
  <ResultCard ... />
  <ResultCard ... />
</CardRow>`}}}},e={name:"Wider cards",render:()=>o.jsx(o.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"minCardWidth sets how narrow a card may get before the row wraps."},source:{code:'<CardRow label="Plans" minCardWidth={72}>...</CardRow>'}}}},z=["ARowOfResults","WiderCards"];var a,t,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "A row of results",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Wraps on wide screens, swipes on a phone."
      },
      source: {
        code: "<CardRow label=\\"Hotels in Paris\\">\\n  <ResultCard ... />\\n  <ResultCard ... />\\n  <ResultCard ... />\\n</CardRow>"
      }
    }
  }
}`,...(n=(t=r.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var d,i,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Wider cards",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "minCardWidth sets how narrow a card may get before the row wraps."
      },
      source: {
        code: "<CardRow label=\\"Plans\\" minCardWidth={72}>...</CardRow>"
      }
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{r as ARowOfResults,e as WiderCards,z as __namedExportsOrder,v as default};
