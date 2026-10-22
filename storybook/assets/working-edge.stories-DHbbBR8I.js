import{j as r}from"./iframe-C8v_uZy_.js";import{cn as m,b as p}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const n=p.get("working-edge"),F={title:"Asking and showing work/WorkingEdge",component:m,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"Around a card",render:()=>r.jsx(r.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Press Stop and Start. The ring fades in while the AI works and fades out quickly when it stops. The card does not move."},source:{code:`const [active, setActive] = useState(true);

<WorkingEdge active={active}>
  <div className="rounded-card border border-line bg-surface p-4">
    <p className="text-body leading-5 font-medium text-fg">Refund request</p>
    <p className="mt-1 text-body leading-5 text-fg-muted">Aero Home, Aero 12 blender, ₹2,340.</p>
  </div>
</WorkingEdge>
<Button size="sm" variant="secondary" onClick={() => setActive((a) => !a)}>{active ? "Stop" : "Start"}</Button>`}}}},t={name:"With a StatusTicker inside",render:()=>r.jsx(r.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"The ring shows where the work is and the ticker says what it is. Both follow the same real steps, and the ring stops on the final line."},source:{code:`<WorkingEdge active={!done} radius="xl" label="AI is writing the draft">
  <div className="flex flex-col gap-2 rounded-card border border-line bg-surface p-4">
    <StatusTicker current={done ? "Done in 12s" : run[i]} steps={run} done={done} label="Draft status" />
    <p className="text-body leading-5 text-fg-muted">The draft appears here when it is ready.</p>
  </div>
</WorkingEdge>
<Button size="sm" variant="secondary" onClick={() => setI((n) => Math.min(n + 1, run.length))} disabled={done}>Next step</Button>
<Button size="sm" variant="ghost" onClick={() => setI(0)}>Start again</Button>`}}}},H=["AroundACard","WithAStatusTickerInside"];var o,s,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Around a card",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press Stop and Start. The ring fades in while the AI works and fades out quickly when it stops. The card does not move."
      },
      source: {
        code: "const [active, setActive] = useState(true);\\n\\n<WorkingEdge active={active}>\\n  <div className=\\"rounded-card border border-line bg-surface p-4\\">\\n    <p className=\\"text-body leading-5 font-medium text-fg\\">Refund request</p>\\n    <p className=\\"mt-1 text-body leading-5 text-fg-muted\\">Aero Home, Aero 12 blender, ₹2,340.</p>\\n  </div>\\n</WorkingEdge>\\n<Button size=\\"sm\\" variant=\\"secondary\\" onClick={() => setActive((a) => !a)}>{active ? \\"Stop\\" : \\"Start\\"}</Button>"
      }
    }
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var i,d,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "With a StatusTicker inside",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The ring shows where the work is and the ticker says what it is. Both follow the same real steps, and the ring stops on the final line."
      },
      source: {
        code: "<WorkingEdge active={!done} radius=\\"xl\\" label=\\"AI is writing the draft\\">\\n  <div className=\\"flex flex-col gap-2 rounded-card border border-line bg-surface p-4\\">\\n    <StatusTicker current={done ? \\"Done in 12s\\" : run[i]} steps={run} done={done} label=\\"Draft status\\" />\\n    <p className=\\"text-body leading-5 text-fg-muted\\">The draft appears here when it is ready.</p>\\n  </div>\\n</WorkingEdge>\\n<Button size=\\"sm\\" variant=\\"secondary\\" onClick={() => setI((n) => Math.min(n + 1, run.length))} disabled={done}>Next step</Button>\\n<Button size=\\"sm\\" variant=\\"ghost\\" onClick={() => setI(0)}>Start again</Button>"
      }
    }
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};export{e as AroundACard,t as WithAStatusTickerInside,H as __namedExportsOrder,F as default};
