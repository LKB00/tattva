import{j as t}from"./iframe-D-pZXX8_.js";import{aH as p,b as c}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const s=c.get("live-log"),H={title:"Asking and showing work/LiveLog",component:p,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},e={name:"Lines arriving, with pause",render:()=>t.jsx(t.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:'A new line arrives every 0.9 seconds. Press Pause to hold them; new ones wait behind the "N new lines" button. Scroll up to stop following.'},source:{code:`function Example() {
  const [lines, setLines] = useState<LiveLogLine[]>([]);
  const [paused, setPaused] = useState(false);
  const [run, setRun] = useState(0);
  useEffect(() => {
    let i = 0;
    const t = window.setInterval(() => {
      if (i >= script.length) { window.clearInterval(t); return; }
      const s = script[i];
      const sec = String(i).padStart(2, "0");
      setLines((prev) => [...prev, { ...s, id: \`\${run}-\${i}\`, time: \`10:42:\${sec}\` }]);
      i += 1;
    }, 900);
    return () => window.clearInterval(t);
  }, [run]);
  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <LiveLog label="Test run" lines={lines} paused={paused} onPauseChange={setPaused} maxHeight={48} />
      <Button variant="secondary" size="sm" className="self-start" onClick={() => { setLines([]); setPaused(false); setRun((r) => r + 1); }}>
        Run again
      </Button>
    </div>
  );
}`}}}},n={name:"Wrapped lines with levels",render:()=>t.jsx(t.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"With wrap, long lines break instead of scrolling sideways. Warnings and errors carry an icon and a word."},source:{code:`<LiveLog label="Report export" wrap maxHeight={40} lines={[
  { id: "b1", time: "14:03:10", text: "Fetching https://example.com/reports/quarterly/2026/q3/summary.json?include=regions,teams,targets" },
  { id: "b2", time: "14:03:11", text: "Response 200 in 412 ms" },
  { id: "b3", time: "14:03:11", level: "warn", text: "Field 'region' is empty in 3 of 120 rows. Those rows are skipped." },
  { id: "b4", time: "14:03:12", text: "Wrote 117 rows to quarterly.csv" },
  { id: "b5", time: "14:03:12", level: "error", text: "Could not upload quarterly.csv: the shared folder is read only" },
]} />`}}}},B=["LinesArrivingWithPause","WrappedLinesWithLevels"];var r,i,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Lines arriving, with pause",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A new line arrives every 0.9 seconds. Press Pause to hold them; new ones wait behind the \\"N new lines\\" button. Scroll up to stop following."
      },
      source: {
        code: "function Example() {\\n  const [lines, setLines] = useState<LiveLogLine[]>([]);\\n  const [paused, setPaused] = useState(false);\\n  const [run, setRun] = useState(0);\\n  useEffect(() => {\\n    let i = 0;\\n    const t = window.setInterval(() => {\\n      if (i >= script.length) { window.clearInterval(t); return; }\\n      const s = script[i];\\n      const sec = String(i).padStart(2, \\"0\\");\\n      setLines((prev) => [...prev, { ...s, id: \`\${run}-\${i}\`, time: \`10:42:\${sec}\` }]);\\n      i += 1;\\n    }, 900);\\n    return () => window.clearInterval(t);\\n  }, [run]);\\n  return (\\n    <div className=\\"flex w-full max-w-lg flex-col gap-3\\">\\n      <LiveLog label=\\"Test run\\" lines={lines} paused={paused} onPauseChange={setPaused} maxHeight={48} />\\n      <Button variant=\\"secondary\\" size=\\"sm\\" className=\\"self-start\\" onClick={() => { setLines([]); setPaused(false); setRun((r) => r + 1); }}>\\n        Run again\\n      </Button>\\n    </div>\\n  );\\n}"
      }
    }
  }
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var a,l,d;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Wrapped lines with levels",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With wrap, long lines break instead of scrolling sideways. Warnings and errors carry an icon and a word."
      },
      source: {
        code: "<LiveLog label=\\"Report export\\" wrap maxHeight={40} lines={[\\n  { id: \\"b1\\", time: \\"14:03:10\\", text: \\"Fetching https://example.com/reports/quarterly/2026/q3/summary.json?include=regions,teams,targets\\" },\\n  { id: \\"b2\\", time: \\"14:03:11\\", text: \\"Response 200 in 412 ms\\" },\\n  { id: \\"b3\\", time: \\"14:03:11\\", level: \\"warn\\", text: \\"Field 'region' is empty in 3 of 120 rows. Those rows are skipped.\\" },\\n  { id: \\"b4\\", time: \\"14:03:12\\", text: \\"Wrote 117 rows to quarterly.csv\\" },\\n  { id: \\"b5\\", time: \\"14:03:12\\", level: \\"error\\", text: \\"Could not upload quarterly.csv: the shared folder is read only\\" },\\n]} />"
      }
    }
  }
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};export{e as LinesArrivingWithPause,n as WrappedLinesWithLevels,B as __namedExportsOrder,H as default};
