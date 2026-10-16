import{j as e}from"./iframe-DSdOWv-_.js";import{ag as G,b as F}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const r=F.get("generation-progress"),$={title:"Creating/GenerationProgress",component:G,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},n={name:"Try each state",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Switch the state to see each one. The percent bar shows only while making it, with a percent."},source:{code:`<GenerationProgress status="generating" percent={42} eta="About 30 seconds left"
  onCancel={() => {}} />`}}}},t={name:"Progress not known",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Leave out the percent when progress is not known."},source:{code:'<GenerationProgress status="generating" eta="This can take a few minutes" onCancel={() => {}} />'}}}},s={name:"Waiting in line",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"Shows your place in line and no bar."},source:{code:'<GenerationProgress status="queued" queuePosition={3} onCancel={() => {}} />'}}}},o={name:"Failed",render:()=>e.jsx(e.Fragment,{children:r.examples[3].render()}),parameters:{docs:{description:{story:"Failed shows the message in words and offers Retry."},source:{code:'<GenerationProgress status="failed" error="Something went wrong. Please try again." onRetry={() => {}} />'}}}},a={name:"Audio: listen before it is finished",render:()=>e.jsx(e.Fragment,{children:r.examples[4].render()}),parameters:{docs:{description:{story:"Streaming means the start can be played while the rest is still being made. Listen now never plays on its own; the person presses it. The credits note sits next to Cancel."},source:{code:`<GenerationProgress status="streaming" percent={64} eta="About 40 seconds left" previewShape="audio"
  previewLabel="Song, about 2 minutes" onListen={() => {}} onCancel={() => {}}
  refundNote="Credits for started work are not returned." />`}}}},i={name:"Audio: queued and cancelled",render:()=>e.jsx(e.Fragment,{children:r.examples[5].render()}),parameters:{docs:{description:{story:"previewShape audio swaps the 16:9 block for a flat waveform with a label. After Cancel the note says what happened to the credits, and Start again is offered."},source:{code:`<GenerationProgress status="queued" queuePosition={2} eta="A couple of minutes" previewShape="audio"
  previewLabel="Voice-over, about 45 seconds" onCancel={() => {}} refundNote="Cancelling now returns your 40 credits." />
<GenerationProgress status="cancelled" previewShape="audio" onRetry={() => {}}
  refundNote="Your 40 credits were returned." />`}}}},ee=["TryEachState","ProgressNotKnown","WaitingInLine","Failed","AudioListenBeforeItIsFinished","AudioQueuedAndCancelled"];var d,c,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Try each state",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Switch the state to see each one. The percent bar shows only while making it, with a percent."
      },
      source: {
        code: "<GenerationProgress status=\\"generating\\" percent={42} eta=\\"About 30 seconds left\\"\\n  onCancel={() => {}} />"
      }
    }
  }
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,m,l;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Progress not known",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Leave out the percent when progress is not known."
      },
      source: {
        code: "<GenerationProgress status=\\"generating\\" eta=\\"This can take a few minutes\\" onCancel={() => {}} />"
      }
    }
  }
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var g,h,w;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Waiting in line",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Shows your place in line and no bar."
      },
      source: {
        code: "<GenerationProgress status=\\"queued\\" queuePosition={3} onCancel={() => {}} />"
      }
    }
  }
}`,...(w=(h=s.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var f,y,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Failed",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Failed shows the message in words and offers Retry."
      },
      source: {
        code: "<GenerationProgress status=\\"failed\\" error=\\"Something went wrong. Please try again.\\" onRetry={() => {}} />"
      }
    }
  }
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var S,P,x;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Audio: listen before it is finished",
  render: () => <>{doc.examples[4].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Streaming means the start can be played while the rest is still being made. Listen now never plays on its own; the person presses it. The credits note sits next to Cancel."
      },
      source: {
        code: "<GenerationProgress status=\\"streaming\\" percent={64} eta=\\"About 40 seconds left\\" previewShape=\\"audio\\"\\n  previewLabel=\\"Song, about 2 minutes\\" onListen={() => {}} onCancel={() => {}}\\n  refundNote=\\"Credits for started work are not returned.\\" />"
      }
    }
  }
}`,...(x=(P=a.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var C,v,A;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Audio: queued and cancelled",
  render: () => <>{doc.examples[5].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "previewShape audio swaps the 16:9 block for a flat waveform with a label. After Cancel the note says what happened to the credits, and Start again is offered."
      },
      source: {
        code: "<GenerationProgress status=\\"queued\\" queuePosition={2} eta=\\"A couple of minutes\\" previewShape=\\"audio\\"\\n  previewLabel=\\"Voice-over, about 45 seconds\\" onCancel={() => {}} refundNote=\\"Cancelling now returns your 40 credits.\\" />\\n<GenerationProgress status=\\"cancelled\\" previewShape=\\"audio\\" onRetry={() => {}}\\n  refundNote=\\"Your 40 credits were returned.\\" />"
      }
    }
  }
}`,...(A=(v=i.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};export{a as AudioListenBeforeItIsFinished,i as AudioQueuedAndCancelled,o as Failed,t as ProgressNotKnown,n as TryEachState,s as WaitingInLine,ee as __namedExportsOrder,$ as default};
