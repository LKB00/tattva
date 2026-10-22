import{j as o}from"./iframe-C8v_uZy_.js";import{L as m,b as i}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const a=i.get("collapsible"),L={title:"Controls/Collapsible",component:m,tags:["autodocs"],parameters:{docs:{description:{component:a.summary+" "+a.description}}}},e={name:"Closed by default",render:()=>o.jsx(o.Fragment,{children:a.examples[0].render()}),parameters:{docs:{description:{story:"The heading can hold more than words, like a count or a badge."},source:{code:`<Collapsible header={<span className="text-body leading-5 font-medium">Advanced options</span>}>
  <p className="mt-2 pl-6 text-body leading-5 text-fg-muted">These settings apply to new chats only.</p>
</Collapsible>`}}}},t={name:"Open by default",render:()=>o.jsx(o.Fragment,{children:a.examples[1].render()}),parameters:{docs:{description:{story:"Start it open when the content is the main reason people came."},source:{code:`<Collapsible defaultOpen header={<span className="text-body leading-5 font-medium">Details</span>}>
  <p className="mt-2 pl-6 text-body leading-5 text-fg-muted">Created on 4 March by the workspace owner.</p>
</Collapsible>`}}}},R=["ClosedByDefault","OpenByDefault"];var n,r,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Closed by default",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The heading can hold more than words, like a count or a badge."
      },
      source: {
        code: "<Collapsible header={<span className=\\"text-body leading-5 font-medium\\">Advanced options</span>}>\\n  <p className=\\"mt-2 pl-6 text-body leading-5 text-fg-muted\\">These settings apply to new chats only.</p>\\n</Collapsible>"
      }
    }
  }
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var p,d,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Open by default",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Start it open when the content is the main reason people came."
      },
      source: {
        code: "<Collapsible defaultOpen header={<span className=\\"text-body leading-5 font-medium\\">Details</span>}>\\n  <p className=\\"mt-2 pl-6 text-body leading-5 text-fg-muted\\">Created on 4 March by the workspace owner.</p>\\n</Collapsible>"
      }
    }
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};export{e as ClosedByDefault,t as OpenByDefault,R as __namedExportsOrder,L as default};
