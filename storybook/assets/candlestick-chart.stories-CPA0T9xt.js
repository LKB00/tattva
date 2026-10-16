import{j as e}from"./iframe-DSdOWv-_.js";import{q as h,b as y}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const a=y.get("candlestick-chart"),O={title:"Markets and trading/CandlestickChart",component:h,tags:["autodocs"],parameters:{docs:{description:{component:a.summary+" "+a.description}}}},r={name:"Forty days with volume and a table",render:()=>e.jsx(e.Fragment,{children:a.examples[0].render()}),parameters:{docs:{description:{story:"The usual setup. The frame adds a title, a summary and a View as table button."},source:{code:`<ChartFrame
  title="Acme price, 40 days"
  subtitle="Price in dollars, one candle per day"
  summary="The price drifted within a narrow range. Hollow candles closed up, filled candles closed down."
  table={candlestickTable(CANDLES_40, price)}
  source="Source: demo data"
>
  <CandlestickChart data={CANDLES_40} volume formatValue={price} ariaLabel="Acme daily price, 40 days" />
</ChartFrame>`}}}},t={name:"A short day",render:()=>e.jsx(e.Fragment,{children:a.examples[1].render()}),parameters:{docs:{description:{story:"With few candles each one is wider and every label fits. No volume strip."},source:{code:`<div className="w-full">
  <CandlestickChart data={CANDLES_12} height={220} formatValue={price} ariaLabel="Acme price by half hour" />
</div>`}}}},n={name:"A candle that is still forming",render:()=>e.jsx(e.Fragment,{children:a.examples[2].render()}),parameters:{docs:{description:{story:"Press Start. The last candle updates in place and has a dashed outline. A new candle is added every few seconds."},source:{code:"<StreamingCandlesDemo />"}}}},R=["FortyDaysWithVolumeAndATable","AShortDay","ACandleThatIsStillForming"];var s,o,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Forty days with volume and a table",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The usual setup. The frame adds a title, a summary and a View as table button."
      },
      source: {
        code: "<ChartFrame\\n  title=\\"Acme price, 40 days\\"\\n  subtitle=\\"Price in dollars, one candle per day\\"\\n  summary=\\"The price drifted within a narrow range. Hollow candles closed up, filled candles closed down.\\"\\n  table={candlestickTable(CANDLES_40, price)}\\n  source=\\"Source: demo data\\"\\n>\\n  <CandlestickChart data={CANDLES_40} volume formatValue={price} ariaLabel=\\"Acme daily price, 40 days\\" />\\n</ChartFrame>"
      }
    }
  }
}`,...(d=(o=r.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var i,c,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "A short day",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With few candles each one is wider and every label fits. No volume strip."
      },
      source: {
        code: "<div className=\\"w-full\\">\\n  <CandlestickChart data={CANDLES_12} height={220} formatValue={price} ariaLabel=\\"Acme price by half hour\\" />\\n</div>"
      }
    }
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,p,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "A candle that is still forming",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press Start. The last candle updates in place and has a dashed outline. A new candle is added every few seconds."
      },
      source: {
        code: "<StreamingCandlesDemo />"
      }
    }
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};export{n as ACandleThatIsStillForming,t as AShortDay,r as FortyDaysWithVolumeAndATable,R as __namedExportsOrder,O as default};
