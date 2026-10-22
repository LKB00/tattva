import{j as e}from"./iframe-C8v_uZy_.js";import{cj as g,b as M}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const n=M.get("voice-panel"),G={title:"Voice and audio/VoicePanel",component:g,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},t={name:"Every state",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Pick a state, or use the buttons: Mute, Hold then Resume, Interrupt while speaking (or Esc), and End. Keys work while focus is inside the panel."},source:{code:`<VoiceSession
  state={muted ? "muted" : state}
  muted={muted}
  onMutedChange={setMuted}
  onHold={() => setState("held")}
  onResume={() => setState("listening")}
  onInterrupt={() => setState("interrupted")}
  onEnd={() => setState("ended")}
  onMicRetry={askForMic}
  onTypeInstead={openChat}
  cameraOn={camera}
  onCameraChange={setCamera}
  workingLabel="Checking your order"
  inputLevel={micLevel}
  outputLevel={voiceLevel}
  elapsed="02:14"
  disclosure={<span>Shop assistant · AI · Recorded</span>}
  captions={captions}
/>`}}}},o={name:"Push to talk",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Hold the button, or hold Space, while you talk. Slide off the button before letting go to cancel. Switch to Hands-free to listen all the time."},source:{code:`<VoiceSession
  state={state}
  inputMode={mode}
  onInputModeChange={setMode}
  onTalkStart={() => setState("userSpeaking")}
  onTalkEnd={(cancelled) => cancelled ? setState("ready") : send()}
  muted={muted}
  onMutedChange={setMuted}
  onEnd={end}
  captions={[]}
/>`}}}},s={name:"Mic blocked, on hold, camera stopped",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"Mic blocked is amber with Allow microphone and Type instead, because the person must act. On hold dims the disc. The camera notice is calm and waits for a press."},source:{code:`<VoiceSession state="micBlocked" onMicRetry={askForMic} onTypeInstead={openChat} onEnd={end} captions={[]} />
<VoiceSession state="held" onResume={resume} onEnd={end} media={{ camera: "stoppedBySystem" }} onCameraChange={setCamera} elapsed="11:40" captions={[]} />`}}}},a={name:"Older VoicePanel props",render:()=>e.jsx(e.Fragment,{children:n.examples[3].render()}),parameters:{docs:{description:{story:"Code written for the first VoicePanel keeps working: state, captions, muted, onMutedChange and onEnd."},source:{code:`<VoicePanel
  state={muted ? "muted" : state}
  muted={muted}
  onMutedChange={setMuted}
  onEnd={() => {}}
  captions={[
    { id: "1", speaker: "you", text: "What should I pack for two days in Lisbon?" },
    { id: "2", speaker: "assistant", text: "Pack layers and comfortable shoes. The hills are steep." },
  ]}
/>`}}}},J=["EveryState","PushToTalk","MicBlockedOnHoldCameraStopped","OlderVoicePanelProps"];var r,d,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Every state",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Pick a state, or use the buttons: Mute, Hold then Resume, Interrupt while speaking (or Esc), and End. Keys work while focus is inside the panel."
      },
      source: {
        code: "<VoiceSession\\n  state={muted ? \\"muted\\" : state}\\n  muted={muted}\\n  onMutedChange={setMuted}\\n  onHold={() => setState(\\"held\\")}\\n  onResume={() => setState(\\"listening\\")}\\n  onInterrupt={() => setState(\\"interrupted\\")}\\n  onEnd={() => setState(\\"ended\\")}\\n  onMicRetry={askForMic}\\n  onTypeInstead={openChat}\\n  cameraOn={camera}\\n  onCameraChange={setCamera}\\n  workingLabel=\\"Checking your order\\"\\n  inputLevel={micLevel}\\n  outputLevel={voiceLevel}\\n  elapsed=\\"02:14\\"\\n  disclosure={<span>Shop assistant · AI · Recorded</span>}\\n  captions={captions}\\n/>"
      }
    }
  }
}`,...(i=(d=t.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var c,p,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Push to talk",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Hold the button, or hold Space, while you talk. Slide off the button before letting go to cancel. Switch to Hands-free to listen all the time."
      },
      source: {
        code: "<VoiceSession\\n  state={state}\\n  inputMode={mode}\\n  onInputModeChange={setMode}\\n  onTalkStart={() => setState(\\"userSpeaking\\")}\\n  onTalkEnd={(cancelled) => cancelled ? setState(\\"ready\\") : send()}\\n  muted={muted}\\n  onMutedChange={setMuted}\\n  onEnd={end}\\n  captions={[]}\\n/>"
      }
    }
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,u,h;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Mic blocked, on hold, camera stopped",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Mic blocked is amber with Allow microphone and Type instead, because the person must act. On hold dims the disc. The camera notice is calm and waits for a press."
      },
      source: {
        code: "<VoiceSession state=\\"micBlocked\\" onMicRetry={askForMic} onTypeInstead={openChat} onEnd={end} captions={[]} />\\n<VoiceSession state=\\"held\\" onResume={resume} onEnd={end} media={{ camera: \\"stoppedBySystem\\" }} onCameraChange={setCamera} elapsed=\\"11:40\\" captions={[]} />"
      }
    }
  }
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var k,y,S;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Older VoicePanel props",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Code written for the first VoicePanel keeps working: state, captions, muted, onMutedChange and onEnd."
      },
      source: {
        code: "<VoicePanel\\n  state={muted ? \\"muted\\" : state}\\n  muted={muted}\\n  onMutedChange={setMuted}\\n  onEnd={() => {}}\\n  captions={[\\n    { id: \\"1\\", speaker: \\"you\\", text: \\"What should I pack for two days in Lisbon?\\" },\\n    { id: \\"2\\", speaker: \\"assistant\\", text: \\"Pack layers and comfortable shoes. The hills are steep.\\" },\\n  ]}\\n/>"
      }
    }
  }
}`,...(S=(y=a.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};export{t as EveryState,s as MicBlockedOnHoldCameraStopped,a as OlderVoicePanelProps,o as PushToTalk,J as __namedExportsOrder,G as default};
