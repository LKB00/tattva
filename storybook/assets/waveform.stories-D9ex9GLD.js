import{j as e}from"./iframe-J6_2PHET.js";import{c4 as h,b as u}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=u.get("waveform"),_={title:"Voice and audio/Waveform",component:h,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},n={name:"Seek control with markers",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"A call recording. Drag, tap or use the arrow keys to seek. Markers show a tool call, an interruption and, as an amber diamond, a transfer someone should review."},source:{code:`const [pos, setPos] = useState(52);

<Waveform
  label="Seek, call with Maya Okafor"
  peaks={peaks}
  duration={192}
  position={pos}
  onSeek={setPos}
  markers={[
    { at: 41, label: "Tool call: look up order 4471" },
    { at: 96, label: "Caller interrupted the assistant" },
    { at: 158, label: "Transfer to a person, check the reason", tone: "review" },
  ]}
/>`}}}},a={name:"Marked stretches in a song",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"The AI-made chorus has a faint AI wash, a dotted top edge and a label. The stale part needs a person to regenerate it, so it is hatched amber. The selection is outlined in ink."},source:{code:`<Waveform
  label="Seek, Harbour Lights take 2"
  peaks={songPeaks}
  duration={180}
  position={pos}
  onSeek={setPos}
  height={72}
  regions={[
    { start: 48, end: 76, kind: "ai", label: "Chorus rewritten by AI" },
    { start: 96, end: 116, kind: "stale", label: "Needs regenerating" },
    { start: 136, end: 160, kind: "selected", label: "Your selection" },
  ]}
/>`}}}},o={name:"Drawing, error, live and plain",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:'peaks={null} while the peaks are worked out. error keeps a plain bar you can still seek. mode="live" shows the latest microphone levels in a neutral colour, with the state written beside it. simple forces the plain bar.'},source:{code:`<Waveform label="Seek, voice note" peaks={null} duration={64} onSeek={seek} />

<Waveform label="Seek, voice note" peaks={peaks} duration={64} position={20} onSeek={seek}
  error="The waveform could not be drawn. You can still play and seek." />

<span>You, speaking</span>
<Waveform mode="live" peaks={levels} duration={6} liveBars={48} height={32} />

<Waveform label="Seek, voice note" peaks={peaks} duration={64} position={40} onSeek={seek} simple height={32} />`}}}},R=["SeekControlWithMarkers","MarkedStretchesInASong","DrawingErrorLiveAndPlain"];var s,t,i;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Seek control with markers",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A call recording. Drag, tap or use the arrow keys to seek. Markers show a tool call, an interruption and, as an amber diamond, a transfer someone should review."
      },
      source: {
        code: "const [pos, setPos] = useState(52);\\n\\n<Waveform\\n  label=\\"Seek, call with Maya Okafor\\"\\n  peaks={peaks}\\n  duration={192}\\n  position={pos}\\n  onSeek={setPos}\\n  markers={[\\n    { at: 41, label: \\"Tool call: look up order 4471\\" },\\n    { at: 96, label: \\"Caller interrupted the assistant\\" },\\n    { at: 158, label: \\"Transfer to a person, check the reason\\", tone: \\"review\\" },\\n  ]}\\n/>"
      }
    }
  }
}`,...(i=(t=n.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var l,p,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Marked stretches in a song",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The AI-made chorus has a faint AI wash, a dotted top edge and a label. The stale part needs a person to regenerate it, so it is hatched amber. The selection is outlined in ink."
      },
      source: {
        code: "<Waveform\\n  label=\\"Seek, Harbour Lights take 2\\"\\n  peaks={songPeaks}\\n  duration={180}\\n  position={pos}\\n  onSeek={setPos}\\n  height={72}\\n  regions={[\\n    { start: 48, end: 76, kind: \\"ai\\", label: \\"Chorus rewritten by AI\\" },\\n    { start: 96, end: 116, kind: \\"stale\\", label: \\"Needs regenerating\\" },\\n    { start: 136, end: 160, kind: \\"selected\\", label: \\"Your selection\\" },\\n  ]}\\n/>"
      }
    }
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,m,k;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Drawing, error, live and plain",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "peaks={null} while the peaks are worked out. error keeps a plain bar you can still seek. mode=\\"live\\" shows the latest microphone levels in a neutral colour, with the state written beside it. simple forces the plain bar."
      },
      source: {
        code: "<Waveform label=\\"Seek, voice note\\" peaks={null} duration={64} onSeek={seek} />\\n\\n<Waveform label=\\"Seek, voice note\\" peaks={peaks} duration={64} position={20} onSeek={seek}\\n  error=\\"The waveform could not be drawn. You can still play and seek.\\" />\\n\\n<span>You, speaking</span>\\n<Waveform mode=\\"live\\" peaks={levels} duration={6} liveBars={48} height={32} />\\n\\n<Waveform label=\\"Seek, voice note\\" peaks={peaks} duration={64} position={40} onSeek={seek} simple height={32} />"
      }
    }
  }
}`,...(k=(m=o.parameters)==null?void 0:m.docs)==null?void 0:k.source}}};export{o as DrawingErrorLiveAndPlain,a as MarkedStretchesInASong,n as SeekControlWithMarkers,R as __namedExportsOrder,_ as default};
