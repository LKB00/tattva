import{j as t}from"./iframe-J6_2PHET.js";import{aC as S,b as h}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const e=h.get("mic-button"),P={title:"Voice and audio/MicButton",component:S,tags:["autodocs"],parameters:{docs:{description:{component:e.summary+" "+e.description}}}},o={name:"Dictate into a message box",render:()=>t.jsx(t.Fragment,{children:e.examples[0].render()}),parameters:{docs:{description:{story:"Tap once to start and once to stop. The button waits for permission, records, then writes the words into the box. The person still sends it."},source:{code:`const [state, setState] = useState<MicState>("idle");
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
