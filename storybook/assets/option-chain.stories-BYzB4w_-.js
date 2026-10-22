import{j as e}from"./iframe-C8v_uZy_.js";import{aR as u,b as k}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const r=k.get("option-chain"),q={title:"Markets and trading/OptionChain",component:u,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},o={name:"Pick a price",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"With onPick the price cells are buttons. The chosen one is marked and written out under the table."},source:{code:`function Example() {
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
