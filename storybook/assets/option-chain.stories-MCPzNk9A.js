import{j as e}from"./iframe-D-pZXX8_.js";import{aW as u,b as k}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const r=k.get("option-chain"),q={title:"Markets and trading/OptionChain",component:u,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},o={name:"Pick a price",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"With onPick the price cells are buttons. The chosen one is marked and written out under the table."},source:{code:`function Example() {
  const [pick, setPick] = useState<ChainPick | null>(null);
  return (
    <OptionChain ariaLabel="NIFTY option chain" expiryLabel="Expiry 30 Oct" spot={24342} rows={rows}
      selected={pick ? { side: pick.side, strike: pick.strike } : undefined} onPick={setPick} />
  );
}`}}}},n={name:"More columns",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Choose columns and their order. Puts mirror the order so Price sits next to the strike on both sides. A missing value shows a dash."},source:{code:'<OptionChain ariaLabel="NIFTY option chain" spot={24342} rows={rows} columns={["oi", "oiChange", "iv", "delta", "ltp"]} />'}}}},i={name:"On a phone width",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"In a 360px box the table scrolls sideways in its own region. maxHeight keeps the header in view when rows scroll."},source:{code:`<div className="w-90">
  <OptionChain ariaLabel="NIFTY option chain" spot={24342} rows={rows} maxHeight={260} onPick={() => {}} />
</div>`}}}},z=["PickAPrice","MoreColumns","OnAPhoneWidth"];var s,t,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Pick a price",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With onPick the price cells are buttons. The chosen one is marked and written out under the table."
      },
      source: {
        code: "function Example() {\\n  const [pick, setPick] = useState<ChainPick | null>(null);\\n  return (\\n    <OptionChain ariaLabel=\\"NIFTY option chain\\" expiryLabel=\\"Expiry 30 Oct\\" spot={24342} rows={rows}\\n      selected={pick ? { side: pick.side, strike: pick.strike } : undefined} onPick={setPick} />\\n  );\\n}"
      }
    }
  }
}`,...(a=(t=o.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};var c,p,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "More columns",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Choose columns and their order. Puts mirror the order so Price sits next to the strike on both sides. A missing value shows a dash."
      },
      source: {
        code: "<OptionChain ariaLabel=\\"NIFTY option chain\\" spot={24342} rows={rows} columns={[\\"oi\\", \\"oiChange\\", \\"iv\\", \\"delta\\", \\"ltp\\"]} />"
      }
    }
  }
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,h,l;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "On a phone width",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "In a 360px box the table scrolls sideways in its own region. maxHeight keeps the header in view when rows scroll."
      },
      source: {
        code: "<div className=\\"w-90\\">\\n  <OptionChain ariaLabel=\\"NIFTY option chain\\" spot={24342} rows={rows} maxHeight={260} onPick={() => {}} />\\n</div>"
      }
    }
  }
}`,...(l=(h=i.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};export{n as MoreColumns,i as OnAPhoneWidth,o as PickAPrice,z as __namedExportsOrder,q as default};
