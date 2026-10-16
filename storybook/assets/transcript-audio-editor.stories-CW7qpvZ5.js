import{j as e}from"./iframe-DSdOWv-_.js";import{c1 as h,b as u}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const s=u.get("transcript-audio-editor"),L={title:"Voice and audio/TranscriptAudioEditor",component:h,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},o={name:"Edit a podcast intro",render:()=>e.jsx(e.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"Press Play to hear it; the word being played gets a tint. Click a word, Shift-click another, then Remove or Change words. New audio takes a moment, then waits for Keep or Revert. Remove filler words cuts every marked filler at once, and Undo takes back each step."},source:{code:`const [spans, setSpans] = useState<TranscriptEditSpan[]>([]);

<TranscriptAudioEditor
  words={words}
  spans={spans}
  speakers={{ nadia: { label: "Nadia Brooks" }, tomas: { label: "Tomás Ferreira" } }}
  audio={{ title: "The Allotment Hour, episode 12", duration: 24, peaks }}
  voiceName="each speaker's own, consent on file"
  limits={{ maxChars: 250, languages: ["English"] }}
  onRemove={(ids) => setSpans((s) => [...s, { id: newId(), wordIds: ids, state: "removed" }])}
  onRegenerate={(ids, text) => startVoiceJob(ids, text)}   // adds a "regenerating" span
  onKeep={(id) => setState(id, "kept")}
  onRetry={(id) => startVoiceJob(id)}
  onRevert={(id) => setSpans((s) => s.filter((x) => x.id !== id))}
  onUndo={undo}
  undoLabel="Undo: removed 2 words"
/>`}}}},r={name:"Every state",render:()=>e.jsx(e.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"Removed words are struck through and hatched on the waveform. One phrase is making new audio, one is ready and waiting, one was kept and one failed with a reason. Each state is also said in words for screen readers."},source:{code:`<TranscriptAudioEditor words={words} speakers={speakers} peaks={peaks} duration={24}
  position={t} onSeek={setT}
  spans={[
    { id: "s1", wordIds: ["w6"], state: "removed" },
    { id: "s2", wordIds: ["w13", "w14", "w15"], state: "regenerating", newText: "keeping seeds from" },
    { id: "s3", wordIds: ["w19", "w20", "w21", "w22"], state: "kept", newText: "Thanks for having me on." },
    { id: "s5", wordIds: ["w32", "w33", "w34"], state: "regenerated", newText: "the softest, ripest fruit" },
    { id: "s6", wordIds: ["w62", "w63", "w64", "w65"], state: "failed", newText: "A clean plate works too.",
      error: "The voice service is busy. Try again in a minute." },
  ]}
  onRemove={...} onRegenerate={...} onKeep={...} onRetry={...} onRevert={...} onSmooth={...} />`}}}},n={name:"No consented voice",render:()=>e.jsx(e.Fragment,{children:s.examples[2].render()}),parameters:{docs:{description:{story:"Removing words still works, but Change words says in one line why it is off. Select a few words to see it. The limits are said before typing."},source:{code:`<TranscriptAudioEditor words={words} spans={spans} speakers={speakers} peaks={peaks} duration={9}
  voiceAvailable={false}
  voiceUnavailableReason="Nadia Brooks has not recorded a consent statement, so new words cannot be made in her voice."
  limits={{ maxChars: 40, languages: ["English"] }}
  onRemove={remove} onRevert={revert} onRegenerate={regenerate} />`}}}},_=["EditAPodcastIntro","EveryState","NoConsentedVoice"];var t,a,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Edit a podcast intro",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press Play to hear it; the word being played gets a tint. Click a word, Shift-click another, then Remove or Change words. New audio takes a moment, then waits for Keep or Revert. Remove filler words cuts every marked filler at once, and Undo takes back each step."
      },
      source: {
        code: "const [spans, setSpans] = useState<TranscriptEditSpan[]>([]);\\n\\n<TranscriptAudioEditor\\n  words={words}\\n  spans={spans}\\n  speakers={{ nadia: { label: \\"Nadia Brooks\\" }, tomas: { label: \\"Tomás Ferreira\\" } }}\\n  audio={{ title: \\"The Allotment Hour, episode 12\\", duration: 24, peaks }}\\n  voiceName=\\"each speaker's own, consent on file\\"\\n  limits={{ maxChars: 250, languages: [\\"English\\"] }}\\n  onRemove={(ids) => setSpans((s) => [...s, { id: newId(), wordIds: ids, state: \\"removed\\" }])}\\n  onRegenerate={(ids, text) => startVoiceJob(ids, text)}   // adds a \\"regenerating\\" span\\n  onKeep={(id) => setState(id, \\"kept\\")}\\n  onRetry={(id) => startVoiceJob(id)}\\n  onRevert={(id) => setSpans((s) => s.filter((x) => x.id !== id))}\\n  onUndo={undo}\\n  undoLabel=\\"Undo: removed 2 words\\"\\n/>"
      }
    }
  }
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var d,p,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Every state",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Removed words are struck through and hatched on the waveform. One phrase is making new audio, one is ready and waiting, one was kept and one failed with a reason. Each state is also said in words for screen readers."
      },
      source: {
        code: "<TranscriptAudioEditor words={words} speakers={speakers} peaks={peaks} duration={24}\\n  position={t} onSeek={setT}\\n  spans={[\\n    { id: \\"s1\\", wordIds: [\\"w6\\"], state: \\"removed\\" },\\n    { id: \\"s2\\", wordIds: [\\"w13\\", \\"w14\\", \\"w15\\"], state: \\"regenerating\\", newText: \\"keeping seeds from\\" },\\n    { id: \\"s3\\", wordIds: [\\"w19\\", \\"w20\\", \\"w21\\", \\"w22\\"], state: \\"kept\\", newText: \\"Thanks for having me on.\\" },\\n    { id: \\"s5\\", wordIds: [\\"w32\\", \\"w33\\", \\"w34\\"], state: \\"regenerated\\", newText: \\"the softest, ripest fruit\\" },\\n    { id: \\"s6\\", wordIds: [\\"w62\\", \\"w63\\", \\"w64\\", \\"w65\\"], state: \\"failed\\", newText: \\"A clean plate works too.\\",\\n      error: \\"The voice service is busy. Try again in a minute.\\" },\\n  ]}\\n  onRemove={...} onRegenerate={...} onKeep={...} onRetry={...} onRevert={...} onSmooth={...} />"
      }
    }
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,w,l;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "No consented voice",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Removing words still works, but Change words says in one line why it is off. Select a few words to see it. The limits are said before typing."
      },
      source: {
        code: "<TranscriptAudioEditor words={words} spans={spans} speakers={speakers} peaks={peaks} duration={9}\\n  voiceAvailable={false}\\n  voiceUnavailableReason=\\"Nadia Brooks has not recorded a consent statement, so new words cannot be made in her voice.\\"\\n  limits={{ maxChars: 40, languages: [\\"English\\"] }}\\n  onRemove={remove} onRevert={revert} onRegenerate={regenerate} />"
      }
    }
  }
}`,...(l=(w=n.parameters)==null?void 0:w.docs)==null?void 0:l.source}}};export{o as EditAPodcastIntro,r as EveryState,n as NoConsentedVoice,_ as __namedExportsOrder,L as default};
