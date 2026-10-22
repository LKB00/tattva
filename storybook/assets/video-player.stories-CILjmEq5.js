import{j as e}from"./iframe-C8v_uZy_.js";import{cg as u,b as f}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const a=f.get("video-player"),K={title:"Video/VideoPlayer",component:u,tags:["autodocs"],parameters:{docs:{description:{component:a.summary+" "+a.description}}}},r={name:"Generated take with frame actions",render:()=>e.jsx(e.Fragment,{children:a.examples[0].render()}),parameters:{docs:{description:{story:"No file is needed: the player draws a stand-in scene and simulates time. Press Play, pause anywhere, then step frames with the buttons, or with comma and period while focus is in the player. The paused-frame actions return the time and frame number."},source:{code:`<VideoPlayer
  label="Take 3, harbour at dawn"
  subtitle="8 seconds, 24 frames a second"
  duration={8}
  fps={24}
  aiGenerated
  provenance={{
    madeWith: "Video model, draft quality",
    date: "3 October 2026",
    editedByPerson: false,
    actions: ["Made from your prompt and one start frame"],
    why: "The file carries an invisible watermark and Content Credentials. Both can be lost if the clip is re-uploaded or re-encoded.",
  }}
  cues={cues}
  transcript={transcript}
  frameActions={[
    { id: "start", label: "Use as start frame" },
    { id: "extend", label: "Extend from here" },
    { id: "save", label: "Save frame" },
  ]}
  onFrameAction={(id, seconds, frame) => useFrame(id, seconds, frame)}
/>

// With a real file, the length comes from the file:
<VideoPlayer label="Take 3, harbour at dawn" src="/takes/3.mp4" poster="/takes/3.jpg" fps={24}
  captions={[{ src: "/takes/3.vtt", lang: "en", label: "English" }]} />`}}}},n={name:"Shapes: 9:16 and 1:1",render:()=>e.jsx(e.Fragment,{children:a.examples[1].render()}),parameters:{docs:{description:{story:"The frame keeps its shape before anything loads. A 9:16 clip is capped in width. A clip with no sound says so on the mute button. Loop starts on when loop is set, and the person can turn it off."},source:{code:`<VideoPlayer label="Kite on the hill, vertical" scene="kite" ratio="9:16"
  duration={6} fps={24} hasAudio={false} aiGenerated />
<VideoPlayer label="Harbour loop, square" ratio="1:1" duration={4} loop muted aiGenerated />`}}}},t={name:"Generating, error and loading",render:()=>e.jsx(e.Fragment,{children:a.examples[2].render()}),parameters:{docs:{description:{story:"While generating, the first frame is dimmed under one calm working edge and nothing can play. Say why someone is waiting, never a countdown. When it finishes, screen readers hear that it is ready. An error says whether credits came back."},source:{code:`<VideoPlayer label="Take 4, harbour at dusk" duration={8} fps={24} aiGenerated
  state="generating" statusNote="Second in the queue, busy period" />
<VideoPlayer label="Take 2, harbour at dawn" duration={8} state="error"
  statusNote="Credits for this take were returned." onRetry={retry} />
<VideoPlayer label="Take 1, harbour at dawn" duration={8} state="loading" />`}}}},M=["GeneratedTakeWithFrameActions","Shapes916And11","GeneratingErrorAndLoading"];var o,s,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Generated take with frame actions",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "No file is needed: the player draws a stand-in scene and simulates time. Press Play, pause anywhere, then step frames with the buttons, or with comma and period while focus is in the player. The paused-frame actions return the time and frame number."
      },
      source: {
        code: "<VideoPlayer\\n  label=\\"Take 3, harbour at dawn\\"\\n  subtitle=\\"8 seconds, 24 frames a second\\"\\n  duration={8}\\n  fps={24}\\n  aiGenerated\\n  provenance={{\\n    madeWith: \\"Video model, draft quality\\",\\n    date: \\"3 October 2026\\",\\n    editedByPerson: false,\\n    actions: [\\"Made from your prompt and one start frame\\"],\\n    why: \\"The file carries an invisible watermark and Content Credentials. Both can be lost if the clip is re-uploaded or re-encoded.\\",\\n  }}\\n  cues={cues}\\n  transcript={transcript}\\n  frameActions={[\\n    { id: \\"start\\", label: \\"Use as start frame\\" },\\n    { id: \\"extend\\", label: \\"Extend from here\\" },\\n    { id: \\"save\\", label: \\"Save frame\\" },\\n  ]}\\n  onFrameAction={(id, seconds, frame) => useFrame(id, seconds, frame)}\\n/>\\n\\n// With a real file, the length comes from the file:\\n<VideoPlayer label=\\"Take 3, harbour at dawn\\" src=\\"/takes/3.mp4\\" poster=\\"/takes/3.jpg\\" fps={24}\\n  captions={[{ src: \\"/takes/3.vtt\\", lang: \\"en\\", label: \\"English\\" }]} />"
      }
    }
  }
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var d,l,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Shapes: 9:16 and 1:1",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The frame keeps its shape before anything loads. A 9:16 clip is capped in width. A clip with no sound says so on the mute button. Loop starts on when loop is set, and the person can turn it off."
      },
      source: {
        code: "<VideoPlayer label=\\"Kite on the hill, vertical\\" scene=\\"kite\\" ratio=\\"9:16\\"\\n  duration={6} fps={24} hasAudio={false} aiGenerated />\\n<VideoPlayer label=\\"Harbour loop, square\\" ratio=\\"1:1\\" duration={4} loop muted aiGenerated />"
      }
    }
  }
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,p,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Generating, error and loading",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "While generating, the first frame is dimmed under one calm working edge and nothing can play. Say why someone is waiting, never a countdown. When it finishes, screen readers hear that it is ready. An error says whether credits came back."
      },
      source: {
        code: "<VideoPlayer label=\\"Take 4, harbour at dusk\\" duration={8} fps={24} aiGenerated\\n  state=\\"generating\\" statusNote=\\"Second in the queue, busy period\\" />\\n<VideoPlayer label=\\"Take 2, harbour at dawn\\" duration={8} state=\\"error\\"\\n  statusNote=\\"Credits for this take were returned.\\" onRetry={retry} />\\n<VideoPlayer label=\\"Take 1, harbour at dawn\\" duration={8} state=\\"loading\\" />"
      }
    }
  }
}`,...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};export{r as GeneratedTakeWithFrameActions,t as GeneratingErrorAndLoading,n as Shapes916And11,M as __namedExportsOrder,K as default};
