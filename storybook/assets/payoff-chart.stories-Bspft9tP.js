import{j as e}from"./iframe-C8v_uZy_.js";import{aV as h,b as g}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const r=g.get("payoff-chart"),U={title:"Markets and trading/PayoffChart",component:h,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},o={name:"A long call",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"You pay 5 for the right to buy at 100. The most you lose is what you paid. The profit has no top. The dashed line is today's price."},source:{code:`<ChartFrame
  title="Long call, strike 100"
  subtitle="Profit or loss at expiry, dollars per share"
  summary="You lose at most 5. You break even at 105. Above that the profit keeps growing."
  table={payoffTable({ legs: LONG_CALL, spotRange: [80, 130] })}
>
  <PayoffChart legs={LONG_CALL} spotRange={[80, 130]} spot={98} ariaLabel="Long call, result at expiry" />
</ChartFrame>`}}}},t={name:"A bull call spread",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Built from two legs. Selling the higher call caps the profit, so it says a number instead of Unlimited."},source:{code:'<PayoffChart legs={BULL_SPREAD} spotRange={[85, 125]} spot={102} ariaLabel="Bull call spread, result at expiry" />'}}}},a={name:"An iron condor",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"Four legs. Profit only between the two inner strikes, with two break-even prices and both ends capped."},source:{code:'<PayoffChart legs={CONDOR} spotRange={[80, 120]} spot={100} ariaLabel="Iron condor, result at expiry" />'}}}},M=["ALongCall","ABullCallSpread","AnIronCondor"];var s,n,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "A long call",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "You pay 5 for the right to buy at 100. The most you lose is what you paid. The profit has no top. The dashed line is today's price."
      },
      source: {
        code: "<ChartFrame\\n  title=\\"Long call, strike 100\\"\\n  subtitle=\\"Profit or loss at expiry, dollars per share\\"\\n  summary=\\"You lose at most 5. You break even at 105. Above that the profit keeps growing.\\"\\n  table={payoffTable({ legs: LONG_CALL, spotRange: [80, 130] })}\\n>\\n  <PayoffChart legs={LONG_CALL} spotRange={[80, 130]} spot={98} ariaLabel=\\"Long call, result at expiry\\" />\\n</ChartFrame>"
      }
    }
  }
}`,...(i=(n=o.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var p,l,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "A bull call spread",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Built from two legs. Selling the higher call caps the profit, so it says a number instead of Unlimited."
      },
      source: {
        code: "<PayoffChart legs={BULL_SPREAD} spotRange={[85, 125]} spot={102} ariaLabel=\\"Bull call spread, result at expiry\\" />"
      }
    }
  }
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,m,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "An iron condor",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Four legs. Profit only between the two inner strikes, with two break-even prices and both ends capped."
      },
      source: {
        code: "<PayoffChart legs={CONDOR} spotRange={[80, 120]} spot={100} ariaLabel=\\"Iron condor, result at expiry\\" />"
      }
    }
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};export{t as ABullCallSpread,o as ALongCall,a as AnIronCondor,M as __namedExportsOrder,U as default};
