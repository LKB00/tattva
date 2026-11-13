import{j as e}from"./iframe-D-pZXX8_.js";import{b3 as h,b as S}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const n=S.get("price"),K={title:"Markets and trading/Price",component:h,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},r={name:"Simulated feed",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"A random walk every 1.2 seconds. Press Start to see the tint and the arrow."},source:{code:`function PriceFeedDemo() {
  const [running, setRunning] = useState(false);
  const [value, setValue] = useState(2480.5);
  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setValue((v) => Math.round((v + (Math.random() - 0.5) * 12) * 100) / 100), 1200);
    return () => clearInterval(id);
  }, [running]);
  return (
    <div className="flex items-center gap-4">
      <Price value={value} label="Sample price" className="text-title-sm leading-8 text-fg" />
      <Button variant="secondary" size="sm" onClick={() => setRunning(!running)}>{running ? "Stop feed" : "Start feed"}</Button>
    </div>
  );
}`}}}},t={name:"Static",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"No change yet, so there is no arrow and no tint. It never flashes on first render."},source:{code:'<p className="text-title-xs leading-7 text-fg"><Price value={2480.5} label="Sample price" /></p>'}}}},a={name:"Announce on",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"Screen readers hear the new value in a polite message, at most once every 5 seconds."},source:{code:`function PriceAnnounceDemo() {
  const [value, setValue] = useState(1312.4);
  return (
    <div className="flex items-center gap-4">
      <Price value={value} announce label="Sample price" className="text-title-xs leading-7 text-fg" />
      <Button variant="secondary" size="sm" onClick={() => setValue(Math.round((value + (Math.random() - 0.4) * 20) * 100) / 100)}>Change price</Button>
    </div>
  );
}`}}}},s={name:"Dollars, no arrow",render:()=>e.jsx(e.Fragment,{children:n.examples[3].render()}),parameters:{docs:{description:{story:"Another currency and locale, with the arrow and the tint turned off."},source:{code:'<p className="text-title-xs leading-7 text-fg"><Price value={182.3} currency="USD" locale="en-US" showDirection={false} flash={false} /></p>'}}}},L=["SimulatedFeed","Static","AnnounceOn","DollarsNoArrow"];var o,c,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Simulated feed",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A random walk every 1.2 seconds. Press Start to see the tint and the arrow."
      },
      source: {
        code: "function PriceFeedDemo() {\\n  const [running, setRunning] = useState(false);\\n  const [value, setValue] = useState(2480.5);\\n  useEffect(() => {\\n    if (!running) return;\\n    const id = setInterval(() => setValue((v) => Math.round((v + (Math.random() - 0.5) * 12) * 100) / 100), 1200);\\n    return () => clearInterval(id);\\n  }, [running]);\\n  return (\\n    <div className=\\"flex items-center gap-4\\">\\n      <Price value={value} label=\\"Sample price\\" className=\\"text-title-sm leading-8 text-fg\\" />\\n      <Button variant=\\"secondary\\" size=\\"sm\\" onClick={() => setRunning(!running)}>{running ? \\"Stop feed\\" : \\"Start feed\\"}</Button>\\n    </div>\\n  );\\n}"
      }
    }
  }
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var l,d,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Static",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "No change yet, so there is no arrow and no tint. It never flashes on first render."
      },
      source: {
        code: "<p className=\\"text-title-xs leading-7 text-fg\\"><Price value={2480.5} label=\\"Sample price\\" /></p>"
      }
    }
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Announce on",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Screen readers hear the new value in a polite message, at most once every 5 seconds."
      },
      source: {
        code: "function PriceAnnounceDemo() {\\n  const [value, setValue] = useState(1312.4);\\n  return (\\n    <div className=\\"flex items-center gap-4\\">\\n      <Price value={value} announce label=\\"Sample price\\" className=\\"text-title-xs leading-7 text-fg\\" />\\n      <Button variant=\\"secondary\\" size=\\"sm\\" onClick={() => setValue(Math.round((value + (Math.random() - 0.4) * 20) * 100) / 100)}>Change price</Button>\\n    </div>\\n  );\\n}"
      }
    }
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,v,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Dollars, no arrow",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Another currency and locale, with the arrow and the tint turned off."
      },
      source: {
        code: "<p className=\\"text-title-xs leading-7 text-fg\\"><Price value={182.3} currency=\\"USD\\" locale=\\"en-US\\" showDirection={false} flash={false} /></p>"
      }
    }
  }
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};export{a as AnnounceOn,s as DollarsNoArrow,r as SimulatedFeed,t as Static,L as __namedExportsOrder,K as default};
