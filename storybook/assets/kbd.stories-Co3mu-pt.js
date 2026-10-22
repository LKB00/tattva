import{j as t}from"./iframe-C8v_uZy_.js";import{b as d}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import{K as c}from"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const o=d.get("kbd"),z={title:"Controls/Kbd",component:c,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"Single keys",render:()=>t.jsx(t.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Put the label next to the action it triggers."},source:{code:'<p className="flex items-center gap-2 text-body leading-5">Press <Kbd>Esc</Kbd> to close</p>'}}}},r={name:"Combination",render:()=>t.jsx(t.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"Use one label per key."},source:{code:'<p className="flex items-center gap-1 text-body leading-5"><Kbd>Ctrl</Kbd> + <Kbd>Enter</Kbd><span className="ml-2 text-fg-muted">Send</span></p>'}}}},A=["SingleKeys","Combination"];var s,n,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Single keys",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Put the label next to the action it triggers."
      },
      source: {
        code: "<p className=\\"flex items-center gap-2 text-body leading-5\\">Press <Kbd>Esc</Kbd> to close</p>"
      }
    }
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Combination",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Use one label per key."
      },
      source: {
        code: "<p className=\\"flex items-center gap-1 text-body leading-5\\"><Kbd>Ctrl</Kbd> + <Kbd>Enter</Kbd><span className=\\"ml-2 text-fg-muted\\">Send</span></p>"
      }
    }
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};export{r as Combination,e as SingleKeys,A as __namedExportsOrder,z as default};
