import{j as n}from"./iframe-C8v_uZy_.js";import{m,b as c}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const r=c.get("attention-dot"),C={title:"Controls/AttentionDot",component:m,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},e={name:"Beside text",render:()=>n.jsx(n.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"The dot comes with a line saying what the person has to do."},source:{code:`<div className="flex items-center gap-2 text-body leading-5 text-fg">
  <AttentionDot label="Approval needed" />
  <span>The assistant wants to run a command on your computer</span>
</div>`}}}},t={name:"In a list row",render:()=>n.jsx(n.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"A chat in a list that is waiting on you. The dot is the marker. The words say why."},source:{code:`<div className="flex w-72 items-center justify-between rounded-card border border-line bg-surface px-3 py-2 text-body leading-5 text-fg">
  <span>Quarterly report</span>
  <span className="flex items-center gap-2 text-small leading-4 text-fg-muted">
    <AttentionDot />
    Needs your input
  </span>
</div>`}}}},O=["BesideText","InAListRow"];var o,s,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Beside text",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The dot comes with a line saying what the person has to do."
      },
      source: {
        code: "<div className=\\"flex items-center gap-2 text-body leading-5 text-fg\\">\\n  <AttentionDot label=\\"Approval needed\\" />\\n  <span>The assistant wants to run a command on your computer</span>\\n</div>"
      }
    }
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var i,d,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "In a list row",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A chat in a list that is waiting on you. The dot is the marker. The words say why."
      },
      source: {
        code: "<div className=\\"flex w-72 items-center justify-between rounded-card border border-line bg-surface px-3 py-2 text-body leading-5 text-fg\\">\\n  <span>Quarterly report</span>\\n  <span className=\\"flex items-center gap-2 text-small leading-4 text-fg-muted\\">\\n    <AttentionDot />\\n    Needs your input\\n  </span>\\n</div>"
      }
    }
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};export{e as BesideText,t as InAListRow,O as __namedExportsOrder,C as default};
