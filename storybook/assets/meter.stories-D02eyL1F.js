import{j as e}from"./iframe-C8v_uZy_.js";import{b as h}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import{M as x}from"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const t=h.get("meter"),B={title:"Numbers/Meter",component:x,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},r={name:"Plain",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"A dark fill, as wide as the amount used out of the limit."},source:{code:'<Meter label="Space used" value={40} valueText="40% of the space" />'}}}},a={name:"Past the warning point",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"At 85 with a warning point of 80 percent, the fill turns amber. The words beside it say why."},source:{code:`<div className="w-64 space-y-1">
  <Meter label="Space used" value={85} warnAt={0.8} valueText="85% of the space" />
  <p className="text-small leading-4 text-attention-fg">85% used. Start a new chat soon.</p>
</div>`}}}},n={name:"A limit other than 100",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"Set a limit when the amount is not a percent."},source:{code:'<Meter label="Credits used" value={30} max={120} valueText="30 of 120 credits" />'}}}},D=["Plain","PastTheWarningPoint","ALimitOtherThan100"];var s,o,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Plain",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A dark fill, as wide as the amount used out of the limit."
      },
      source: {
        code: "<Meter label=\\"Space used\\" value={40} valueText=\\"40% of the space\\" />"
      }
    }
  }
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var m,p,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Past the warning point",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "At 85 with a warning point of 80 percent, the fill turns amber. The words beside it say why."
      },
      source: {
        code: "<div className=\\"w-64 space-y-1\\">\\n  <Meter label=\\"Space used\\" value={85} warnAt={0.8} valueText=\\"85% of the space\\" />\\n  <p className=\\"text-small leading-4 text-attention-fg\\">85% used. Start a new chat soon.</p>\\n</div>"
      }
    }
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,l,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "A limit other than 100",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Set a limit when the amount is not a percent."
      },
      source: {
        code: "<Meter label=\\"Credits used\\" value={30} max={120} valueText=\\"30 of 120 credits\\" />"
      }
    }
  }
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};export{n as ALimitOtherThan100,a as PastTheWarningPoint,r as Plain,D as __namedExportsOrder,B as default};
