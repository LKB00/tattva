import{j as t}from"./iframe-C8v_uZy_.js";import{J as i,b as c}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const s=c.get("cluster"),I={title:"Full screens and layout/Cluster",component:i,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},e={name:"Tags that wrap",render:()=>t.jsx(t.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:""},source:{code:`<Cluster gap={2}>
  <Badge>Draft</Badge>
  <Badge>Shared</Badge>
  <Badge>Reviewed</Badge>
</Cluster>`}}}},r={name:"Push apart",render:()=>t.jsx(t.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"Push the main button to the far end while the rest stay at the start."},source:{code:`<Cluster justify="between" className="w-full">
  <span>3 files</span>
  <Button size="sm">Send</Button>
</Cluster>`}}}},J=["TagsThatWrap","PushApart"];var a,n,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Tags that wrap",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: ""
      },
      source: {
        code: "<Cluster gap={2}>\\n  <Badge>Draft</Badge>\\n  <Badge>Shared</Badge>\\n  <Badge>Reviewed</Badge>\\n</Cluster>"
      }
    }
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var p,m,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Push apart",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Push the main button to the far end while the rest stay at the start."
      },
      source: {
        code: "<Cluster justify=\\"between\\" className=\\"w-full\\">\\n  <span>3 files</span>\\n  <Button size=\\"sm\\">Send</Button>\\n</Cluster>"
      }
    }
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};export{r as PushApart,e as TagsThatWrap,J as __namedExportsOrder,I as default};
