import{j as e}from"./iframe-J6_2PHET.js";import{c2 as w,b as f}from"./registry-DJg46al6.js";import{a}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=f.get("voice-panel"),Q={title:"Voice and audio/VoicePanel",component:w,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},o={name:"Every state",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Pick a state, or use the buttons: Mute, Hold then Resume, Interrupt while speaking (or Esc), and End. Keys work while focus is inside the panel."},source:a("VoicePanel")}}},t={name:"Push to talk",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Hold the button, or hold Space, while you talk. Slide off the button before letting go to cancel. Switch to Hands-free to listen all the time."},source:a("VoicePanel")}}},n={name:"Mic blocked, on hold, camera stopped",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"Mic blocked is amber with Allow microphone and Type instead, because the person must act. On hold dims the orb. The camera notice is calm and waits for a press."},source:a("VoicePanel")}}},s={name:"Older VoicePanel props",render:()=>e.jsx(e.Fragment,{children:r.examples[3].render()}),parameters:{docs:{description:{story:"Code written for the first VoicePanel keeps working: state, captions, muted, onMutedChange and onEnd."},source:a("VoicePanel")}}},U=["EveryState","PushToTalk","MicBlockedOnHoldCameraStopped","OlderVoicePanelProps"];var i,c,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Every state",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Pick a state, or use the buttons: Mute, Hold then Resume, Interrupt while speaking (or Esc), and End. Keys work while focus is inside the panel."
      },
      source: proSource("VoicePanel")
    }
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,m,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Push to talk",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Hold the button, or hold Space, while you talk. Slide off the button before letting go to cancel. Switch to Hands-free to listen all the time."
      },
      source: proSource("VoicePanel")
    }
  }
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,h,P;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Mic blocked, on hold, camera stopped",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Mic blocked is amber with Allow microphone and Type instead, because the person must act. On hold dims the orb. The camera notice is calm and waits for a press."
      },
      source: proSource("VoicePanel")
    }
  }
}`,...(P=(h=n.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};var k,b,g;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Older VoicePanel props",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Code written for the first VoicePanel keeps working: state, captions, muted, onMutedChange and onEnd."
      },
      source: proSource("VoicePanel")
    }
  }
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};export{o as EveryState,n as MicBlockedOnHoldCameraStopped,s as OlderVoicePanelProps,t as PushToTalk,U as __namedExportsOrder,Q as default};
