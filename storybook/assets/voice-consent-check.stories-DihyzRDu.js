import{j as e}from"./iframe-DSdOWv-_.js";import{cd as u,b as k}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const n=k.get("voice-consent-check"),I={title:"Voice and audio/VoiceConsentCheck",component:u,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},o={name:"The whole check",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Agree, check the mic (the first check is noisy here; Check again clears it), read three lines, then checking and verified. Timers stand in for the app."},source:{code:`<VoiceConsentCheck step={step} lines={lines} currentLine={line} consentText={terms}
  recording={recording} level={level} noise={noise} manualReviewHref="/help/manual-review"
  onAgree={() => setStep("micCheck")} onCheckAgain={checkMic} onContinue={() => setStep("reading")}
  onStartLine={startRecording} onStopLine={stopRecordingAndAdvance}
  onCancel={cancel} onDone={close} />`}}}},t={name:"Likeness for video, every step",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:'subject="likeness" changes the copy to cover the camera. Pick any step to see it; this starts on a failed check with two tries left.'},source:{code:`<VoiceConsentCheck subject="likeness" step={step} currentLine={0}
  lines={["Turn your head slowly to the left, then say: green kite, seven stones."]}
  consentText={<p>Your face and voice can appear in clips you make. ...</p>}
  attemptsLeft={2} retryAt="14:20 tomorrow" noise="ok"
  manualReviewHref="/help/manual-review" supportHref="/help"
  onAgree={...} onContinue={...} onStartLine={...} onStopLine={...} onRetry={...} onCancel={...} />`}}}},r={name:"Locked out",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"After too many tries: the exact time to try again, computed by code, plus support and manual review."},source:{code:`<VoiceConsentCheck step="lockedOut" retryAt="14:20 tomorrow" lines={lines} currentLine={0} consentText={terms}
  manualReviewHref="/help/manual-review" supportHref="/help"
  onAgree={() => {}} onStartLine={() => {}} onStopLine={() => {}} onCancel={close} />`}}}},q=["TheWholeCheck","LikenessForVideoEveryStep","LockedOut"];var s,i,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "The whole check",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Agree, check the mic (the first check is noisy here; Check again clears it), read three lines, then checking and verified. Timers stand in for the app."
      },
      source: {
        code: "<VoiceConsentCheck step={step} lines={lines} currentLine={line} consentText={terms}\\n  recording={recording} level={level} noise={noise} manualReviewHref=\\"/help/manual-review\\"\\n  onAgree={() => setStep(\\"micCheck\\")} onCheckAgain={checkMic} onContinue={() => setStep(\\"reading\\")}\\n  onStartLine={startRecording} onStopLine={stopRecordingAndAdvance}\\n  onCancel={cancel} onDone={close} />"
      }
    }
  }
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var a,p,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Likeness for video, every step",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "subject=\\"likeness\\" changes the copy to cover the camera. Pick any step to see it; this starts on a failed check with two tries left."
      },
      source: {
        code: "<VoiceConsentCheck subject=\\"likeness\\" step={step} currentLine={0}\\n  lines={[\\"Turn your head slowly to the left, then say: green kite, seven stones.\\"]}\\n  consentText={<p>Your face and voice can appear in clips you make. ...</p>}\\n  attemptsLeft={2} retryAt=\\"14:20 tomorrow\\" noise=\\"ok\\"\\n  manualReviewHref=\\"/help/manual-review\\" supportHref=\\"/help\\"\\n  onAgree={...} onContinue={...} onStartLine={...} onStopLine={...} onRetry={...} onCancel={...} />"
      }
    }
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,l,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Locked out",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "After too many tries: the exact time to try again, computed by code, plus support and manual review."
      },
      source: {
        code: "<VoiceConsentCheck step=\\"lockedOut\\" retryAt=\\"14:20 tomorrow\\" lines={lines} currentLine={0} consentText={terms}\\n  manualReviewHref=\\"/help/manual-review\\" supportHref=\\"/help\\"\\n  onAgree={() => {}} onStartLine={() => {}} onStopLine={() => {}} onCancel={close} />"
      }
    }
  }
}`,...(h=(l=r.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};export{t as LikenessForVideoEveryStep,r as LockedOut,o as TheWholeCheck,q as __namedExportsOrder,I as default};
