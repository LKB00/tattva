import{j as e}from"./iframe-C8v_uZy_.js";import{c7 as y,b as k}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const s=k.get("transcript-sync"),U={title:"Voice and audio/TranscriptSync",component:y,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},t={name:"Support call with its recording",render:()=>e.jsx(e.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"Pass audio and the part wires in its own player. Press Play and the current line follows; press any line to jump. The assistant was cut off at 1:06, so the rest of that line is marked Not spoken."},source:{code:`<TranscriptSync
  audio={{ title: "Call with Maya Okafor", subtitle: "Support call, 3 October, 14:02", duration: 192, peaks, markers }}
  speakers={{
    maya: { label: "Maya Okafor" },
    assistant: { label: "Support assistant", ai: true },
    dev: { label: "Dev Raman" },
  }}
  lines={[
    { id: "l1", speaker: "assistant", start: 0, clock: "14:02:10", text: "Hello, this is the Halden Home support assistant. I am an AI. How can I help today?" },
    { id: "l2", speaker: "maya", start: 7, clock: "14:02:17", text: "Hi. My kettle order was meant to arrive on Monday and it still has not come." },
    // ...
    { id: "l8", speaker: "assistant", start: 66, text: "The courier now expects Thursday. I can also send a new kettle today...", status: "interrupted", spokenUpTo: 71 },
    // ...
  ]}
/>`}}}},r={name:"With your own player",render:()=>e.jsx(e.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"Keep the time yourself when the player lives elsewhere on the screen. Pass current, and seek your player in onSeek."},source:{code:`const [t, setT] = useState(0);
const [seekTo, setSeekTo] = useState<number | undefined>();

<AudioPlayer title="Call with Maya Okafor" duration={192} peaks={peaks}
  current={seekTo} onTimeChange={(s) => { setT(s); setSeekTo(undefined); }} />
<TranscriptSync lines={lines} speakers={speakers} current={t}
  onSeek={(s) => { setSeekTo(s); setT(s); }} />`}}}},n={name:"Loading and empty",render:()=>e.jsx(e.Fragment,{children:s.examples[2].render()}),parameters:{docs:{description:{story:"loading shows placeholder lines while the transcript is made. With no lines, it says so in words."},source:{code:`<TranscriptSync loading lines={[]} speakers={speakers} label="Transcript, being made" />
<TranscriptSync lines={[]} speakers={speakers} emptyText="This call was too short to transcribe." />`}}}},Y=["SupportCallWithItsRecording","WithYourOwnPlayer","LoadingAndEmpty"];var a,o,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Support call with its recording",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Pass audio and the part wires in its own player. Press Play and the current line follows; press any line to jump. The assistant was cut off at 1:06, so the rest of that line is marked Not spoken."
      },
      source: {
        code: "<TranscriptSync\\n  audio={{ title: \\"Call with Maya Okafor\\", subtitle: \\"Support call, 3 October, 14:02\\", duration: 192, peaks, markers }}\\n  speakers={{\\n    maya: { label: \\"Maya Okafor\\" },\\n    assistant: { label: \\"Support assistant\\", ai: true },\\n    dev: { label: \\"Dev Raman\\" },\\n  }}\\n  lines={[\\n    { id: \\"l1\\", speaker: \\"assistant\\", start: 0, clock: \\"14:02:10\\", text: \\"Hello, this is the Halden Home support assistant. I am an AI. How can I help today?\\" },\\n    { id: \\"l2\\", speaker: \\"maya\\", start: 7, clock: \\"14:02:17\\", text: \\"Hi. My kettle order was meant to arrive on Monday and it still has not come.\\" },\\n    // ...\\n    { id: \\"l8\\", speaker: \\"assistant\\", start: 66, text: \\"The courier now expects Thursday. I can also send a new kettle today...\\", status: \\"interrupted\\", spokenUpTo: 71 },\\n    // ...\\n  ]}\\n/>"
      }
    }
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var p,l,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "With your own player",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Keep the time yourself when the player lives elsewhere on the screen. Pass current, and seek your player in onSeek."
      },
      source: {
        code: "const [t, setT] = useState(0);\\nconst [seekTo, setSeekTo] = useState<number | undefined>();\\n\\n<AudioPlayer title=\\"Call with Maya Okafor\\" duration={192} peaks={peaks}\\n  current={seekTo} onTimeChange={(s) => { setT(s); setSeekTo(undefined); }} />\\n<TranscriptSync lines={lines} speakers={speakers} current={t}\\n  onSeek={(s) => { setSeekTo(s); setT(s); }} />"
      }
    }
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,m,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Loading and empty",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "loading shows placeholder lines while the transcript is made. With no lines, it says so in words."
      },
      source: {
        code: "<TranscriptSync loading lines={[]} speakers={speakers} label=\\"Transcript, being made\\" />\\n<TranscriptSync lines={[]} speakers={speakers} emptyText=\\"This call was too short to transcribe.\\" />"
      }
    }
  }
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};export{n as LoadingAndEmpty,t as SupportCallWithItsRecording,r as WithYourOwnPlayer,Y as __namedExportsOrder,U as default};
