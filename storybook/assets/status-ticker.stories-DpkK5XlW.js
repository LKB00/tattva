import{j as n}from"./iframe-J6_2PHET.js";import{bq as p,b as m}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=m.get("status-ticker"),E={title:"Asking and showing work/StatusTicker",component:p,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},e={name:"Steps from the app",render:()=>n.jsx(n.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Press Next step to move the run on, the way an app would when a real step starts. After the last step it settles on a still final line."},source:{code:`const run = ["Reading 3 files", "Checking the return rule", "Writing the draft", "Running tests"];
const [i, setI] = useState(0);
const done = i >= run.length;

<StatusTicker current={done ? "Done in 12s" : run[i]} steps={run} done={done} label="Assistant status" />
<Button size="sm" variant="secondary" onClick={() => setI((n) => Math.min(n + 1, run.length))} disabled={done}>Next step</Button>
<Button size="sm" variant="ghost" onClick={() => setI(0)}>Start again</Button>`}}}},t={name:"In a row with other content",render:()=>n.jsx(n.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"The reserve text holds the width, so the count beside the ticker does not move when the line changes to the shorter final text."},source:{code:`<div className="flex items-center gap-3 rounded-card border border-line bg-surface px-3 py-2">
  <StatusTicker current={done ? "Done in 8s" : "Searching the web"} reserve="Searching the web" done={done} label="Search status" />
  <span className="text-body leading-5 text-fg-subtle">3 sources</span>
</div>
<Button size="sm" variant="secondary" onClick={() => setDone((d) => !d)}>{done ? "Run again" : "Finish"}</Button>`}}}},M=["StepsFromTheApp","InARowWithOtherContent"];var s,o,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Steps from the app",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press Next step to move the run on, the way an app would when a real step starts. After the last step it settles on a still final line."
      },
      source: {
        code: "const run = [\\"Reading 3 files\\", \\"Checking the return rule\\", \\"Writing the draft\\", \\"Running tests\\"];\\nconst [i, setI] = useState(0);\\nconst done = i >= run.length;\\n\\n<StatusTicker current={done ? \\"Done in 12s\\" : run[i]} steps={run} done={done} label=\\"Assistant status\\" />\\n<Button size=\\"sm\\" variant=\\"secondary\\" onClick={() => setI((n) => Math.min(n + 1, run.length))} disabled={done}>Next step</Button>\\n<Button size=\\"sm\\" variant=\\"ghost\\" onClick={() => setI(0)}>Start again</Button>"
      }
    }
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var i,d,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "In a row with other content",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The reserve text holds the width, so the count beside the ticker does not move when the line changes to the shorter final text."
      },
      source: {
        code: "<div className=\\"flex items-center gap-3 rounded-card border border-line bg-surface px-3 py-2\\">\\n  <StatusTicker current={done ? \\"Done in 8s\\" : \\"Searching the web\\"} reserve=\\"Searching the web\\" done={done} label=\\"Search status\\" />\\n  <span className=\\"text-body leading-5 text-fg-subtle\\">3 sources</span>\\n</div>\\n<Button size=\\"sm\\" variant=\\"secondary\\" onClick={() => setDone((d) => !d)}>{done ? \\"Run again\\" : \\"Finish\\"}</Button>"
      }
    }
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};export{t as InARowWithOtherContent,e as StepsFromTheApp,M as __namedExportsOrder,E as default};
