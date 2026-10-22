import{j as e}from"./iframe-C8v_uZy_.js";import{b as h}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import{U as l}from"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const r=h.get("usage-meter"),q={title:"Numbers/UsageMeter",component:l,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},t={name:"With an estimate",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Shows the cost before the person confirms an action."},source:{code:'<UsageMeter remaining={340} total={500} estimate={12} resetText="Resets Nov 1" />'}}}},s={name:"Running low",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"When credits run low, the meter explains why and shows the upgrade button."},source:{code:'<UsageMeter remaining={40} total={500} resetText="Resets Nov 1" upgrade={<Button size="sm" variant="lime">Upgrade</Button>} />'}}}},n={name:"Cost is more than what is left",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"The warning says so even when usage is moderate."},source:{code:'<UsageMeter remaining={30} total={100} estimate={60} unit="credits" />'}}}},D=["WithAnEstimate","RunningLow","CostIsMoreThanWhatIsLeft"];var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "With an estimate",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Shows the cost before the person confirms an action."
      },
      source: {
        code: "<UsageMeter remaining={340} total={500} estimate={12} resetText=\\"Resets Nov 1\\" />"
      }
    }
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var m,p,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Running low",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "When credits run low, the meter explains why and shows the upgrade button."
      },
      source: {
        code: "<UsageMeter remaining={40} total={500} resetText=\\"Resets Nov 1\\" upgrade={<Button size=\\"sm\\" variant=\\"lime\\">Upgrade</Button>} />"
      }
    }
  }
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,u,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Cost is more than what is left",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The warning says so even when usage is moderate."
      },
      source: {
        code: "<UsageMeter remaining={30} total={100} estimate={60} unit=\\"credits\\" />"
      }
    }
  }
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};export{n as CostIsMoreThanWhatIsLeft,s as RunningLow,t as WithAnEstimate,D as __namedExportsOrder,q as default};
