import{j as e}from"./iframe-D-pZXX8_.js";import{c7 as g,b as T}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const t=T.get("ticker-tape"),z={title:"Markets and trading/TickerTape",component:g,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},r={name:"Default",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Scrolls at 40 pixels per second. Hover it or tab into it to stop it."},source:{code:'<TickerTape label="Market ticker" items={ITEMS} />'}}}},s={name:"Paused by the page",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Controlled with paused and onPausedChange. The button and the page stay in step."},source:{code:`function TickerControlledDemo() {
  const [paused, setPaused] = useState(true);
  return (
    <div className="grid gap-2">
      <TickerTape label="Market ticker" items={ITEMS} paused={paused} onPausedChange={setPaused} />
      <p className="text-small leading-4 text-fg-muted">{paused ? "Paused by the page." : "Moving."}</p>
    </div>
  );
}`}}}},a={name:"With reduced motion",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"Turn on reduced motion in your system settings and this strip stops moving. It becomes a list you can scroll sideways."},source:{code:'<TickerTape label="Market ticker" items={ITEMS} speed={60} />'}}}},A=["Default","PausedByThePage","WithReducedMotion"];var o,n,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Default",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Scrolls at 40 pixels per second. Hover it or tab into it to stop it."
      },
      source: {
        code: "<TickerTape label=\\"Market ticker\\" items={ITEMS} />"
      }
    }
  }
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var d,p,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Paused by the page",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Controlled with paused and onPausedChange. The button and the page stay in step."
      },
      source: {
        code: "function TickerControlledDemo() {\\n  const [paused, setPaused] = useState(true);\\n  return (\\n    <div className=\\"grid gap-2\\">\\n      <TickerTape label=\\"Market ticker\\" items={ITEMS} paused={paused} onPausedChange={setPaused} />\\n      <p className=\\"text-small leading-4 text-fg-muted\\">{paused ? \\"Paused by the page.\\" : \\"Moving.\\"}</p>\\n    </div>\\n  );\\n}"
      }
    }
  }
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,u,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "With reduced motion",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Turn on reduced motion in your system settings and this strip stops moving. It becomes a list you can scroll sideways."
      },
      source: {
        code: "<TickerTape label=\\"Market ticker\\" items={ITEMS} speed={60} />"
      }
    }
  }
}`,...(l=(u=a.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};export{r as Default,s as PausedByThePage,a as WithReducedMotion,A as __namedExportsOrder,z as default};
