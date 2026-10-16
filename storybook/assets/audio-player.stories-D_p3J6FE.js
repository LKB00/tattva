import{j as e}from"./iframe-DSdOWv-_.js";import{m as h,b as y}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const a=y.get("audio-player"),F={title:"Voice and audio/AudioPlayer",component:h,tags:["autodocs"],parameters:{docs:{description:{component:a.summary+" "+a.description}}}},r={name:"Call recording",render:()=>e.jsx(e.Fragment,{children:a.examples[0].render()}),parameters:{docs:{description:{story:"No file is needed for a preview: the player simulates playback from duration. Press Play, then try the arrow keys on the waveform, or Space and K anywhere in the player."},source:{code:`<AudioPlayer
  title="Call with Maya Okafor"
  subtitle="Support call, 3 October, 14:02"
  duration={192}
  peaks={peaks}
  markers={[
    { at: 41, label: "Tool call: look up order 4471" },
    { at: 96, label: "Caller interrupted the assistant" },
    { at: 158, label: "Transfer to a person, check the reason", tone: "review" },
  ]}
  onDownload={download}
/>

// With a real file, the length comes from the file:
<AudioPlayer title="Call with Maya Okafor" src="/recordings/4471.mp3" peaks={peaks} />`}}}},t={name:"Made by AI",render:()=>e.jsx(e.Fragment,{children:a.examples[1].render()}),parameters:{docs:{description:{story:"aiGenerated adds the AI label beside the title; the player itself stays neutral. The second clip is still being made: it can play now and the end is drawn dashed."},source:{code:`<AudioPlayer
  title="Welcome message, Iris voice"
  duration={38}
  peaks={peaks}
  aiGenerated
  aiNote="Made with the Iris voice from your script on 3 October."
  onDownload={download}
  downloadNote="3 downloads left this month"
/>
<AudioPlayer
  title="Harbour Lights, take 2"
  duration={180}
  peaks={songPeaks}
  aiGenerated
  state="streaming"
  madeUpTo={124}
/>`}}}},n={name:"Loading, buffering, error, unavailable and compact",render:()=>e.jsx(e.Fragment,{children:a.examples[2].render()}),parameters:{docs:{description:{story:"Pass state for what the app knows and the player cannot see. Buffering shows a spinner after a short wait once playing. The compact rows are for lists of takes; starting one pauses the other."},source:{code:`<AudioPlayer title="Weekly summary, read aloud" duration={0} state="loading" />
<AudioPlayer title="Call with Ana Lindqvist" duration={88} peaks={peaks} state="buffering" />
<AudioPlayer title="Voicemail from Tom Becker" duration={42} state="error"
  errorText="This recording could not be loaded. Check your connection." onRetry={retry} />
<AudioPlayer title="Call with Rui Santos, 2 June" duration={130} state="unavailable"
  unavailableReason="Recordings are kept for 90 days. The transcript is still there." />

<AudioPlayer compact title="Take 1, warm and slow" duration={14} aiGenerated />
<AudioPlayer compact title="Take 2, brighter" duration={12} aiGenerated />`}}}},V=["CallRecording","MadeByAI","LoadingBufferingErrorUnavailableAndCompact"];var o,i,s;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Call recording",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "No file is needed for a preview: the player simulates playback from duration. Press Play, then try the arrow keys on the waveform, or Space and K anywhere in the player."
      },
      source: {
        code: "<AudioPlayer\\n  title=\\"Call with Maya Okafor\\"\\n  subtitle=\\"Support call, 3 October, 14:02\\"\\n  duration={192}\\n  peaks={peaks}\\n  markers={[\\n    { at: 41, label: \\"Tool call: look up order 4471\\" },\\n    { at: 96, label: \\"Caller interrupted the assistant\\" },\\n    { at: 158, label: \\"Transfer to a person, check the reason\\", tone: \\"review\\" },\\n  ]}\\n  onDownload={download}\\n/>\\n\\n// With a real file, the length comes from the file:\\n<AudioPlayer title=\\"Call with Maya Okafor\\" src=\\"/recordings/4471.mp3\\" peaks={peaks} />"
      }
    }
  }
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var l,d,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Made by AI",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "aiGenerated adds the AI label beside the title; the player itself stays neutral. The second clip is still being made: it can play now and the end is drawn dashed."
      },
      source: {
        code: "<AudioPlayer\\n  title=\\"Welcome message, Iris voice\\"\\n  duration={38}\\n  peaks={peaks}\\n  aiGenerated\\n  aiNote=\\"Made with the Iris voice from your script on 3 October.\\"\\n  onDownload={download}\\n  downloadNote=\\"3 downloads left this month\\"\\n/>\\n<AudioPlayer\\n  title=\\"Harbour Lights, take 2\\"\\n  duration={180}\\n  peaks={songPeaks}\\n  aiGenerated\\n  state=\\"streaming\\"\\n  madeUpTo={124}\\n/>"
      }
    }
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,m,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Loading, buffering, error, unavailable and compact",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Pass state for what the app knows and the player cannot see. Buffering shows a spinner after a short wait once playing. The compact rows are for lists of takes; starting one pauses the other."
      },
      source: {
        code: "<AudioPlayer title=\\"Weekly summary, read aloud\\" duration={0} state=\\"loading\\" />\\n<AudioPlayer title=\\"Call with Ana Lindqvist\\" duration={88} peaks={peaks} state=\\"buffering\\" />\\n<AudioPlayer title=\\"Voicemail from Tom Becker\\" duration={42} state=\\"error\\"\\n  errorText=\\"This recording could not be loaded. Check your connection.\\" onRetry={retry} />\\n<AudioPlayer title=\\"Call with Rui Santos, 2 June\\" duration={130} state=\\"unavailable\\"\\n  unavailableReason=\\"Recordings are kept for 90 days. The transcript is still there.\\" />\\n\\n<AudioPlayer compact title=\\"Take 1, warm and slow\\" duration={14} aiGenerated />\\n<AudioPlayer compact title=\\"Take 2, brighter\\" duration={12} aiGenerated />"
      }
    }
  }
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};export{r as CallRecording,n as LoadingBufferingErrorUnavailableAndCompact,t as MadeByAI,V as __namedExportsOrder,F as default};
