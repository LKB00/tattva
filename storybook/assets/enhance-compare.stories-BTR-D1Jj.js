import{j as e}from"./iframe-C8v_uZy_.js";import{a9 as g,b as u}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const n=u.get("enhance-compare"),M={title:"Voice and audio/EnhanceCompare",component:g,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},t={name:"Clean up an interview",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Press Clean up. While it works the original stays playable. When it is ready, play and press B or the switch: the playhead stays where it was. Move the strength or a check box and Apply appears, because the After you hear no longer matches the settings."},source:{code:`const [strength, setStrength] = useState(60);
const [listening, setListening] = useState<"before" | "after">("after");
const [status, setStatus] = useState<EnhanceStatus>("idle");

<EnhanceCompare
  title="Episode 14, interview with Noor Haddad"
  duration={74}
  strength={strength}
  onStrengthChange={setStrength}
  listening={listening}
  onListeningChange={setListening}
  status={status}
  onProcess={cleanUp}
  costNote="Free on your plan"
  keepParts={[
    { id: "laugh", label: "Keep laughter", on: true },
    { id: "room", label: "Keep room sound", on: false },
    { id: "music", label: "Keep background music", on: false },
  ]}
  onKeepPartChange={setPart}
  beforePeaks={original}
  afterPeaks={cleaned}
  beforeSrc="/audio/ep14.mp3"
  afterSrc="/audio/ep14-clean.mp3"
/>`}}}},r={name:"Ready, comparing",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"A short voice memo already cleaned up, listening to Before. The After version carries the AI label; the original does not. The heading can be changed to match the job."},source:{code:`<EnhanceCompare
  title="Voice memo, kitchen"
  heading="Reduce noise"
  duration={41}
  strength={strength}
  onStrengthChange={setStrength}
  listening={listening}
  onListeningChange={setListening}
  status="ready"
  onProcess={apply}
  beforePeaks={original}
  afterPeaks={cleaned}
/>`}}}},a={name:"Failed",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"The clean-up did not finish. The panel says the recording is unchanged and whether you were charged, and Try again starts it once more (in this demo it then works)."},source:{code:`<EnhanceCompare
  title="Episode 14, interview with Noor Haddad"
  duration={74}
  status="failed"
  errorText="The clean-up stopped part way. Your recording is unchanged, and you were not charged."
  onProcess={cleanUp}
  {...rest}
/>`}}}},Y=["CleanUpAnInterview","ReadyComparing","Failed"];var s,o,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Clean up an interview",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press Clean up. While it works the original stays playable. When it is ready, play and press B or the switch: the playhead stays where it was. Move the strength or a check box and Apply appears, because the After you hear no longer matches the settings."
      },
      source: {
        code: "const [strength, setStrength] = useState(60);\\nconst [listening, setListening] = useState<\\"before\\" | \\"after\\">(\\"after\\");\\nconst [status, setStatus] = useState<EnhanceStatus>(\\"idle\\");\\n\\n<EnhanceCompare\\n  title=\\"Episode 14, interview with Noor Haddad\\"\\n  duration={74}\\n  strength={strength}\\n  onStrengthChange={setStrength}\\n  listening={listening}\\n  onListeningChange={setListening}\\n  status={status}\\n  onProcess={cleanUp}\\n  costNote=\\"Free on your plan\\"\\n  keepParts={[\\n    { id: \\"laugh\\", label: \\"Keep laughter\\", on: true },\\n    { id: \\"room\\", label: \\"Keep room sound\\", on: false },\\n    { id: \\"music\\", label: \\"Keep background music\\", on: false },\\n  ]}\\n  onKeepPartChange={setPart}\\n  beforePeaks={original}\\n  afterPeaks={cleaned}\\n  beforeSrc=\\"/audio/ep14.mp3\\"\\n  afterSrc=\\"/audio/ep14-clean.mp3\\"\\n/>"
      }
    }
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var d,c,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Ready, comparing",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A short voice memo already cleaned up, listening to Before. The After version carries the AI label; the original does not. The heading can be changed to match the job."
      },
      source: {
        code: "<EnhanceCompare\\n  title=\\"Voice memo, kitchen\\"\\n  heading=\\"Reduce noise\\"\\n  duration={41}\\n  strength={strength}\\n  onStrengthChange={setStrength}\\n  listening={listening}\\n  onListeningChange={setListening}\\n  status=\\"ready\\"\\n  onProcess={apply}\\n  beforePeaks={original}\\n  afterPeaks={cleaned}\\n/>"
      }
    }
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var h,l,m;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Failed",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The clean-up did not finish. The panel says the recording is unchanged and whether you were charged, and Try again starts it once more (in this demo it then works)."
      },
      source: {
        code: "<EnhanceCompare\\n  title=\\"Episode 14, interview with Noor Haddad\\"\\n  duration={74}\\n  status=\\"failed\\"\\n  errorText=\\"The clean-up stopped part way. Your recording is unchanged, and you were not charged.\\"\\n  onProcess={cleanUp}\\n  {...rest}\\n/>"
      }
    }
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};export{t as CleanUpAnInterview,a as Failed,r as ReadyComparing,Y as __namedExportsOrder,M as default};
