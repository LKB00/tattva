import{j as r}from"./iframe-C8v_uZy_.js";import{bB as d,b as c}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const o=c.get("spinner"),q={title:"Empty and error/Spinner",component:d,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"Sizes",render:()=>r.jsx(r.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Four sizes, from small to large."},source:{code:`<div className="flex items-center gap-4">
  <Spinner size={14} />
  <Spinner />
  <Spinner size={24} />
  <Spinner size={32} />
</div>`}}}},n={name:"Inside a button",render:()=>r.jsx(r.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"Place it before a button's label to show something is happening. The label should say what."},source:{code:`<Button variant="secondary" disabled leading={<Spinner size={14} label="Saving" />}>
  Saving
</Button>`}}}},C=["Sizes","InsideAButton"];var s,t,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Sizes",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Four sizes, from small to large."
      },
      source: {
        code: "<div className=\\"flex items-center gap-4\\">\\n  <Spinner size={14} />\\n  <Spinner />\\n  <Spinner size={24} />\\n  <Spinner size={32} />\\n</div>"
      }
    }
  }
}`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Inside a button",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Place it before a button's label to show something is happening. The label should say what."
      },
      source: {
        code: "<Button variant=\\"secondary\\" disabled leading={<Spinner size={14} label=\\"Saving\\" />}>\\n  Saving\\n</Button>"
      }
    }
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};export{n as InsideAButton,e as Sizes,C as __namedExportsOrder,q as default};
