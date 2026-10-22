import{j as e}from"./iframe-C8v_uZy_.js";import{ax as y,b as g}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const t=g.get("latency-breakdown"),z={title:"Voice and audio/LatencyBreakdown",component:y,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},r={name:"One reply",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"The model took most of the time, so it is named first. The reply was over the team's target."},source:{code:`<LatencyBreakdown
  mode="turn"
  totalMs={990}
  targetMs={800}
  stages={[
    { key: "endpointing", ms: 180 },
    { key: "stt", ms: 90 },
    { key: "llm", ms: 520 },
    { key: "tts", ms: 140 },
    { key: "transport", ms: 60 },
  ]}
/>`}}}},n={name:"A whole call with slow turns",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Stages are medians across the call. Two turns went over 800 ms; choose one to play the recording from there."},source:{code:`<LatencyBreakdown
  mode="call"
  stages={medians}
  totalMs={740}
  percentiles={{ p50: 740, p90: 1020, p99: 1840 }}
  targetMs={800}
  turns={turns}
  onTurnSelect={(id) => player.seekToTurn(id)}
/>`}}}},s={name:"Speech-to-speech model, within target",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"With a single speech model there is no separate speech to text or voice stage. No target line turns red."},source:{code:`<LatencyBreakdown mode="turn" totalMs={540} targetMs={800}
  stages={[{ key: "endpointing", ms: 160 }, { key: "s2s", ms: 330 }, { key: "transport", ms: 50 }]} />`}}}},D=["OneReply","AWholeCallWithSlowTurns","SpeechToSpeechModelWithinTarget"];var o,a,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "One reply",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The model took most of the time, so it is named first. The reply was over the team's target."
      },
      source: {
        code: "<LatencyBreakdown\\n  mode=\\"turn\\"\\n  totalMs={990}\\n  targetMs={800}\\n  stages={[\\n    { key: \\"endpointing\\", ms: 180 },\\n    { key: \\"stt\\", ms: 90 },\\n    { key: \\"llm\\", ms: 520 },\\n    { key: \\"tts\\", ms: 140 },\\n    { key: \\"transport\\", ms: 60 },\\n  ]}\\n/>"
      }
    }
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var i,p,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "A whole call with slow turns",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Stages are medians across the call. Two turns went over 800 ms; choose one to play the recording from there."
      },
      source: {
        code: "<LatencyBreakdown\\n  mode=\\"call\\"\\n  stages={medians}\\n  totalMs={740}\\n  percentiles={{ p50: 740, p90: 1020, p99: 1840 }}\\n  targetMs={800}\\n  turns={turns}\\n  onTurnSelect={(id) => player.seekToTurn(id)}\\n/>"
      }
    }
  }
}`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,l,h;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Speech-to-speech model, within target",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With a single speech model there is no separate speech to text or voice stage. No target line turns red."
      },
      source: {
        code: "<LatencyBreakdown mode=\\"turn\\" totalMs={540} targetMs={800}\\n  stages={[{ key: \\"endpointing\\", ms: 160 }, { key: \\"s2s\\", ms: 330 }, { key: \\"transport\\", ms: 50 }]} />"
      }
    }
  }
}`,...(h=(l=s.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};export{n as AWholeCallWithSlowTurns,r as OneReply,s as SpeechToSpeechModelWithinTarget,D as __namedExportsOrder,z as default};
