import{j as e}from"./iframe-DSdOWv-_.js";import{bD as h,b as x}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const t=x.get("stem-mixer"),Y={title:"Voice and audio/StemMixer",component:h,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},s={name:"Mix and pick stems to export",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Four stems, Other muted. Solo one to hear it alone; the rest say they are silent. Tick stems to change what Export takes."},source:{code:`<StemMixer title="Harbour Light stems" status="ready" duration={124} position={34}
  stems={stems} onLevelChange={setLevel} onMuteChange={setMuted}
  onSoloChange={setSoloed} onExportChange={setExported}
  exportNote="WAV · 3 downloads left this month" onExport={exportStems} />

const stems = [
  { id: "vox", name: "Vocals", peaks, level: 80, muted: false, soloed: false, exported: true },
  { id: "drums", name: "Drums", peaks, level: 70, muted: false, soloed: false, exported: true },
  { id: "bass", name: "Bass", peaks, level: 65, muted: false, soloed: false, exported: false },
  { id: "other", name: "Other", peaks, level: 55, muted: true, soloed: false, exported: false },
];`}}}},o={name:"Separation states",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Separating shows placeholder rows and a plain time. Failed says it was not charged and offers Try again. Plan-locked says which plan has stems and that the full song still exports."},source:{code:`<StemMixer status="separating" stems={[]} separatingNote="Splitting into 4 stems. About a minute. You can leave this page." />
<StemMixer status="failed" stems={[]} onRetry={retry} />
<StemMixer status="plan-locked" stems={[]} onSeePlans={openPlans} />`}}}},r={name:"Phone width",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"Rows stack and the waveforms are hidden. Vocals is soloed, so the other rows say they are silent."},source:{code:'<StemMixer title="Stems" status="ready" duration={124} stems={stems} onExport={exportStems} … />'}}}},_=["MixAndPickStemsToExport","SeparationStates","PhoneWidth"];var a,n,i;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Mix and pick stems to export",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Four stems, Other muted. Solo one to hear it alone; the rest say they are silent. Tick stems to change what Export takes."
      },
      source: {
        code: "<StemMixer title=\\"Harbour Light stems\\" status=\\"ready\\" duration={124} position={34}\\n  stems={stems} onLevelChange={setLevel} onMuteChange={setMuted}\\n  onSoloChange={setSoloed} onExportChange={setExported}\\n  exportNote=\\"WAV · 3 downloads left this month\\" onExport={exportStems} />\\n\\nconst stems = [\\n  { id: \\"vox\\", name: \\"Vocals\\", peaks, level: 80, muted: false, soloed: false, exported: true },\\n  { id: \\"drums\\", name: \\"Drums\\", peaks, level: 70, muted: false, soloed: false, exported: true },\\n  { id: \\"bass\\", name: \\"Bass\\", peaks, level: 65, muted: false, soloed: false, exported: false },\\n  { id: \\"other\\", name: \\"Other\\", peaks, level: 55, muted: true, soloed: false, exported: false },\\n];"
      }
    }
  }
}`,...(i=(n=s.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var m,d,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Separation states",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Separating shows placeholder rows and a plain time. Failed says it was not charged and offers Try again. Plan-locked says which plan has stems and that the full song still exports."
      },
      source: {
        code: "<StemMixer status=\\"separating\\" stems={[]} separatingNote=\\"Splitting into 4 stems. About a minute. You can leave this page.\\" />\\n<StemMixer status=\\"failed\\" stems={[]} onRetry={retry} />\\n<StemMixer status=\\"plan-locked\\" stems={[]} onSeePlans={openPlans} />"
      }
    }
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,c,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Phone width",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Rows stack and the waveforms are hidden. Vocals is soloed, so the other rows say they are silent."
      },
      source: {
        code: "<StemMixer title=\\"Stems\\" status=\\"ready\\" duration={124} stems={stems} onExport={exportStems} … />"
      }
    }
  }
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};export{s as MixAndPickStemsToExport,r as PhoneWidth,o as SeparationStates,_ as __namedExportsOrder,Y as default};
