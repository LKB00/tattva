import{j as e}from"./iframe-C8v_uZy_.js";import{B as h,b as g}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const n=g.get("background-run-chip"),z={title:"Assistants/BackgroundRunChip",component:h,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},r={name:"Four runs in a row",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Press a chip to open its details. The run that needs you is amber."},source:{code:'<BackgroundRunChip name="Invoices" status="needs-input" statusText="Needs you" elapsed="12 min" onClick={() => openDetails("invoices")} />'}}}},s={name:"Working",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"The icon spins and stays still if motion is turned off."},source:{code:'<BackgroundRunChip name="Trip plan" status="working" statusText="Booking hotels" elapsed="4 min" />'}}}},o={name:"A long name on a small screen",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"Long names are cut with an ellipsis and the chip never grows wider than its row."},source:{code:'<BackgroundRunChip name="Compare every flight and hotel for the summer trip" status="needs-input" elapsed="1 h" />'}}}},G=["FourRunsInARow","Working","ALongNameOnASmallScreen"];var t,a,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Four runs in a row",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press a chip to open its details. The run that needs you is amber."
      },
      source: {
        code: "<BackgroundRunChip name=\\"Invoices\\" status=\\"needs-input\\" statusText=\\"Needs you\\" elapsed=\\"12 min\\" onClick={() => openDetails(\\"invoices\\")} />"
      }
    }
  }
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var p,m,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Working",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The icon spins and stays still if motion is turned off."
      },
      source: {
        code: "<BackgroundRunChip name=\\"Trip plan\\" status=\\"working\\" statusText=\\"Booking hotels\\" elapsed=\\"4 min\\" />"
      }
    }
  }
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,u,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "A long name on a small screen",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Long names are cut with an ellipsis and the chip never grows wider than its row."
      },
      source: {
        code: "<BackgroundRunChip name=\\"Compare every flight and hotel for the summer trip\\" status=\\"needs-input\\" elapsed=\\"1 h\\" />"
      }
    }
  }
}`,...(l=(u=o.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};export{o as ALongNameOnASmallScreen,r as FourRunsInARow,s as Working,G as __namedExportsOrder,z as default};
