import{j as e}from"./iframe-D-pZXX8_.js";import{b2 as h,b as u}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const a=u.get("price-change"),q={title:"Markets and trading/PriceChange",component:h,tags:["autodocs"],parameters:{docs:{description:{component:a.summary+" "+a.description}}}},n={name:"Up, down and flat",render:()=>e.jsx(e.Fragment,{children:a.examples[0].render()}),parameters:{docs:{description:{story:"The arrow and the sign show the direction. Zero shows a dash and a label."},source:{code:'<p className="flex flex-wrap gap-4 text-body leading-5"><PriceChange change={32.5} percent={1.14} /> <PriceChange change={-18.4} percent={-0.47} /> <PriceChange change={0} percent={0} flatLabel="No change" /></p>'}}}},r={name:"Percent only",render:()=>e.jsx(e.Fragment,{children:a.examples[1].render()}),parameters:{docs:{description:{story:"Use the percent format when space is tight."},source:{code:'<p className="flex gap-4 text-body leading-5"><PriceChange change={32.5} percent={1.14} format="percent" /> <PriceChange change={-18.4} percent={-0.47} format="percent" /></p>'}}}},o={name:"In a table row",render:()=>e.jsx(e.Fragment,{children:a.examples[2].render()}),parameters:{docs:{description:{story:"A symbol, a price and a change on one row. The column lines up because the figures are tabular."},source:{code:`<div className="grid w-full max-w-sm grid-cols-[1fr_auto_auto] items-baseline gap-x-4 gap-y-2 text-body leading-5 text-fg">
  <span>TCS</span><span className="font-mono tabular-nums">3,921.60</span><PriceChange change={-18.4} format="amount" />
  <span>ITC</span><span className="font-mono tabular-nums">462.30</span><PriceChange change={3.1} format="amount" />
</div>`}}}},z=["UpDownAndFlat","PercentOnly","InATableRow"];var t,s,c;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Up, down and flat",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The arrow and the sign show the direction. Zero shows a dash and a label."
      },
      source: {
        code: "<p className=\\"flex flex-wrap gap-4 text-body leading-5\\"><PriceChange change={32.5} percent={1.14} /> <PriceChange change={-18.4} percent={-0.47} /> <PriceChange change={0} percent={0} flatLabel=\\"No change\\" /></p>"
      }
    }
  }
}`,...(c=(s=n.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var p,m,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Percent only",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Use the percent format when space is tight."
      },
      source: {
        code: "<p className=\\"flex gap-4 text-body leading-5\\"><PriceChange change={32.5} percent={1.14} format=\\"percent\\" /> <PriceChange change={-18.4} percent={-0.47} format=\\"percent\\" /></p>"
      }
    }
  }
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var d,l,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "In a table row",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A symbol, a price and a change on one row. The column lines up because the figures are tabular."
      },
      source: {
        code: "<div className=\\"grid w-full max-w-sm grid-cols-[1fr_auto_auto] items-baseline gap-x-4 gap-y-2 text-body leading-5 text-fg\\">\\n  <span>TCS</span><span className=\\"font-mono tabular-nums\\">3,921.60</span><PriceChange change={-18.4} format=\\"amount\\" />\\n  <span>ITC</span><span className=\\"font-mono tabular-nums\\">462.30</span><PriceChange change={3.1} format=\\"amount\\" />\\n</div>"
      }
    }
  }
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};export{o as InATableRow,r as PercentOnly,n as UpDownAndFlat,z as __namedExportsOrder,q as default};
