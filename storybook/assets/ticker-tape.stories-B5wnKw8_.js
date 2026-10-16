import{j as e}from"./iframe-DSdOWv-_.js";import{bW as g,b as T}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const t=T.get("ticker-tape"),z={title:"Markets and trading/TickerTape",component:g,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},r={name:"Default",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Scrolls at 40 pixels per second. Hover it or tab into it to stop it."},source:{code:'<TickerTape label="Market ticker" items={ITEMS} />'}}}},s={name:"Paused by the page",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Controlled with paused and onPausedChange. The button and the page stay in step."},source:{code:`function TickerControlledDemo() {
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
