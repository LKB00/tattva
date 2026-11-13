import{j as n}from"./iframe-D-pZXX8_.js";import{b8 as l,b as m}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const r=m.get("prompt-index"),O={title:"Asking and showing work/PromptIndex",component:l,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},e={name:"List in a side panel",render:()=>n.jsx(n.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"The plain list. Use it inside a side panel or your own sheet. The current question is marked."},source:{code:`function Example() {
  const [current, setCurrent] = useState("q3");
  return (
    <div className="w-72 rounded-card border border-line bg-surface p-2">
      <PromptIndex items={questions} currentId={current} onJump={setCurrent} />
    </div>
  );
}`}}}},t={name:"Rail on a long thread",render:()=>n.jsx(n.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Hover, tab into or tap the marks on the right to open the list. Picking a question scrolls the thread and moves focus to that message. Scrolling updates the current mark. On a phone a Questions button takes the rail's place."},source:{code:`function Example() {
  const thread = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState("q1");
  const jump = (id: string) => {
    const el = thread.current?.querySelector<HTMLElement>(\`[data-q="\${id}"]\`);
    el?.scrollIntoView({ block: "start" });
    el?.focus({ preventScroll: true });
    setCurrent(id);
  };
  // Marks the last question whose top has scrolled past the top of the thread.
  const trackCurrent = () => {
    const box = thread.current;
    if (!box) return;
    let seen = questions[0].id;
    for (const q of questions) {
      const el = box.querySelector<HTMLElement>(\`[data-q="\${q.id}"]\`);
      if (el && el.offsetTop - box.offsetTop <= box.scrollTop + 24) seen = q.id;
    }
    setCurrent(seen);
  };
  return (
    <div className="relative w-full max-w-lg">
      <div ref={thread} onScroll={trackCurrent} tabIndex={0} aria-label="Conversation" className="h-80 overflow-y-auto rounded-card border border-line bg-surface py-4 pr-10 pl-4">
        {questions.map((q, i) => (
          <div key={q.id} className="mb-6 flex flex-col gap-3">
            <p data-q={q.id} tabIndex={-1} className="self-end rounded-card bg-sunken px-3 py-2 text-body text-fg">{q.text}</p>
            <p className="text-body text-fg">{answers[i]}</p>
          </div>
        ))}
      </div>
      <PromptIndex variant="rail" items={questions} currentId={current} onJump={jump}
        className="absolute top-3 right-1 bottom-3 max-sm:top-auto max-sm:right-3 max-sm:bottom-3" />
    </div>
  );
}`}}}},J=["ListInASidePanel","RailOnALongThread"];var o,s,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "List in a side panel",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The plain list. Use it inside a side panel or your own sheet. The current question is marked."
      },
      source: {
        code: "function Example() {\\n  const [current, setCurrent] = useState(\\"q3\\");\\n  return (\\n    <div className=\\"w-72 rounded-card border border-line bg-surface p-2\\">\\n      <PromptIndex items={questions} currentId={current} onJump={setCurrent} />\\n    </div>\\n  );\\n}"
      }
    }
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var i,d,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Rail on a long thread",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Hover, tab into or tap the marks on the right to open the list. Picking a question scrolls the thread and moves focus to that message. Scrolling updates the current mark. On a phone a Questions button takes the rail's place."
      },
      source: {
        code: "function Example() {\\n  const thread = useRef<HTMLDivElement>(null);\\n  const [current, setCurrent] = useState(\\"q1\\");\\n  const jump = (id: string) => {\\n    const el = thread.current?.querySelector<HTMLElement>(\`[data-q=\\"\${id}\\"]\`);\\n    el?.scrollIntoView({ block: \\"start\\" });\\n    el?.focus({ preventScroll: true });\\n    setCurrent(id);\\n  };\\n  // Marks the last question whose top has scrolled past the top of the thread.\\n  const trackCurrent = () => {\\n    const box = thread.current;\\n    if (!box) return;\\n    let seen = questions[0].id;\\n    for (const q of questions) {\\n      const el = box.querySelector<HTMLElement>(\`[data-q=\\"\${q.id}\\"]\`);\\n      if (el && el.offsetTop - box.offsetTop <= box.scrollTop + 24) seen = q.id;\\n    }\\n    setCurrent(seen);\\n  };\\n  return (\\n    <div className=\\"relative w-full max-w-lg\\">\\n      <div ref={thread} onScroll={trackCurrent} tabIndex={0} aria-label=\\"Conversation\\" className=\\"h-80 overflow-y-auto rounded-card border border-line bg-surface py-4 pr-10 pl-4\\">\\n        {questions.map((q, i) => (\\n          <div key={q.id} className=\\"mb-6 flex flex-col gap-3\\">\\n            <p data-q={q.id} tabIndex={-1} className=\\"self-end rounded-card bg-sunken px-3 py-2 text-body text-fg\\">{q.text}</p>\\n            <p className=\\"text-body text-fg\\">{answers[i]}</p>\\n          </div>\\n        ))}\\n      </div>\\n      <PromptIndex variant=\\"rail\\" items={questions} currentId={current} onJump={jump}\\n        className=\\"absolute top-3 right-1 bottom-3 max-sm:top-auto max-sm:right-3 max-sm:bottom-3\\" />\\n    </div>\\n  );\\n}"
      }
    }
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};export{e as ListInASidePanel,t as RailOnALongThread,J as __namedExportsOrder,O as default};
