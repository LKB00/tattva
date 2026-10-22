import{j as t}from"./iframe-C8v_uZy_.js";import{aN as S,b as h}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const e=h.get("mic-button"),P={title:"Voice and audio/MicButton",component:S,tags:["autodocs"],parameters:{docs:{description:{component:e.summary+" "+e.description}}}},o={name:"Dictate into a message box",render:()=>t.jsx(t.Fragment,{children:e.examples[0].render()}),parameters:{docs:{description:{story:"Tap once to start and once to stop. The button waits for permission, records, then writes the words into the box. The person still sends it."},source:{code:`const [state, setState] = useState<MicState>("idle");
const level = useMicLevel(state === "recording"); // your analyser, 0 to 1

<div className="flex items-end gap-2 rounded-field border border-line bg-surface p-2">
  <textarea value={text} onChange={(e) => setText(e.target.value)} rows={2} />
  <MicButton
    state={state}
    level={level}
    label="Dictate"
    onStart={async () => { setState("requesting"); setState(await startRecorder() ? "recording" : "blocked"); }}
    onStop={async () => { setState("processing"); setText(await transcribe()); setState("idle"); }}
  />
</div>`}}}},n={name:"Hold to talk, with lock and cancel",render:()=>t.jsx(t.Fragment,{children:e.examples[1].render()}),parameters:{docs:{description:{story:"Press and hold. Slide up to lock and keep recording hands-free, or slide away and let go to cancel. On a keyboard, hold Space, or press Enter to start and again to stop."},source:{code:`<MicButton
  state={state}
  mode="hold"
  level={level}
  size="lg"
  label="Hold to talk"
  showLabel
  onStart={() => setState("recording")}
  onStop={finish}
  onLock={() => setState("locked")}
  onCancel={() => { discard(); setState("idle"); }}
/>`}}}},a={name:"Every state",render:()=>t.jsx(t.Fragment,{children:e.examples[2].render()}),parameters:{docs:{description:{story:"Each state shows its own word. Blocked carries the amber dot because the person has to act; press it to see the help it opens."},source:{code:`<MicButton state="idle" showLabel label="Dictate" onStart={start} onStop={stop} />
<MicButton state="requesting" onStart={start} onStop={stop} />
<MicButton state="recording" level={0.6} onStart={start} onStop={stop} />
<MicButton state="locked" onStart={start} onStop={stop} onCancel={cancel} />
<MicButton state="processing" onStart={start} onStop={stop} />
<MicButton state="blocked" onHelp={openMicHelp} onStart={start} onStop={stop} />
<MicButton state="unavailable" onStart={start} onStop={stop} />`}}}},W=["DictateIntoAMessageBox","HoldToTalkWithLockAndCancel","EveryState"];var s,r,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Dictate into a message box",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Tap once to start and once to stop. The button waits for permission, records, then writes the words into the box. The person still sends it."
      },
      source: {
        code: "const [state, setState] = useState<MicState>(\\"idle\\");\\nconst level = useMicLevel(state === \\"recording\\"); // your analyser, 0 to 1\\n\\n<div className=\\"flex items-end gap-2 rounded-field border border-line bg-surface p-2\\">\\n  <textarea value={text} onChange={(e) => setText(e.target.value)} rows={2} />\\n  <MicButton\\n    state={state}\\n    level={level}\\n    label=\\"Dictate\\"\\n    onStart={async () => { setState(\\"requesting\\"); setState(await startRecorder() ? \\"recording\\" : \\"blocked\\"); }}\\n    onStop={async () => { setState(\\"processing\\"); setText(await transcribe()); setState(\\"idle\\"); }}\\n  />\\n</div>"
      }
    }
  }
}`,...(c=(r=o.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var i,d,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Hold to talk, with lock and cancel",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press and hold. Slide up to lock and keep recording hands-free, or slide away and let go to cancel. On a keyboard, hold Space, or press Enter to start and again to stop."
      },
      source: {
        code: "<MicButton\\n  state={state}\\n  mode=\\"hold\\"\\n  level={level}\\n  size=\\"lg\\"\\n  label=\\"Hold to talk\\"\\n  showLabel\\n  onStart={() => setState(\\"recording\\")}\\n  onStop={finish}\\n  onLock={() => setState(\\"locked\\")}\\n  onCancel={() => { discard(); setState(\\"idle\\"); }}\\n/>"
      }
    }
  }
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Every state",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Each state shows its own word. Blocked carries the amber dot because the person has to act; press it to see the help it opens."
      },
      source: {
        code: "<MicButton state=\\"idle\\" showLabel label=\\"Dictate\\" onStart={start} onStop={stop} />\\n<MicButton state=\\"requesting\\" onStart={start} onStop={stop} />\\n<MicButton state=\\"recording\\" level={0.6} onStart={start} onStop={stop} />\\n<MicButton state=\\"locked\\" onStart={start} onStop={stop} onCancel={cancel} />\\n<MicButton state=\\"processing\\" onStart={start} onStop={stop} />\\n<MicButton state=\\"blocked\\" onHelp={openMicHelp} onStart={start} onStop={stop} />\\n<MicButton state=\\"unavailable\\" onStart={start} onStop={stop} />"
      }
    }
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};export{o as DictateIntoAMessageBox,a as EveryState,n as HoldToTalkWithLockAndCancel,W as __namedExportsOrder,P as default};
