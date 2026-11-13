import{j as t}from"./iframe-D-pZXX8_.js";import{am as c,b as d}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const o=d.get("frame-scrubber"),N={title:"Video/FrameScrubber",component:c,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"Frame-accurate, with a drawn preview",render:()=>t.jsx(t.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"With fps the scrubber snaps to whole frames. Focus it, then use the arrows for 1 second and comma or period for one frame. Point or drag to see the frame preview."},source:{code:`const [t, setT] = useState(3.25);

<FrameScrubber
  label="Seek, take 3"
  duration={8}
  fps={24}
  value={t}
  onChange={setT}
  renderThumbnail={(s) => <VideoScene time={s} duration={8} />}
/>
<p>{formatMediaTime(t)} of 0:08, frame {frameAt(t, 24)} of 192</p>`}}}},r={name:"Longer clip, and not ready yet",render:()=>t.jsx(t.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"Without fps it moves in seconds; step sets the arrow-key jump. With no length yet it shows an empty track, says so, and stays focusable."},source:{code:`<FrameScrubber label="Seek, product walkthrough" duration={95} step={5} value={t} onChange={setT} />
<FrameScrubber label="Seek, take 5" duration={0} value={0} onChange={() => {}} disabled />`}}}},Y=["FrameAccurateWithADrawnPreview","LongerClipAndNotReadyYet"];var a,n,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Frame-accurate, with a drawn preview",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With fps the scrubber snaps to whole frames. Focus it, then use the arrows for 1 second and comma or period for one frame. Point or drag to see the frame preview."
      },
      source: {
        code: "const [t, setT] = useState(3.25);\\n\\n<FrameScrubber\\n  label=\\"Seek, take 3\\"\\n  duration={8}\\n  fps={24}\\n  value={t}\\n  onChange={setT}\\n  renderThumbnail={(s) => <VideoScene time={s} duration={8} />}\\n/>\\n<p>{formatMediaTime(t)} of 0:08, frame {frameAt(t, 24)} of 192</p>"
      }
    }
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Longer clip, and not ready yet",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Without fps it moves in seconds; step sets the arrow-key jump. With no length yet it shows an empty track, says so, and stays focusable."
      },
      source: {
        code: "<FrameScrubber label=\\"Seek, product walkthrough\\" duration={95} step={5} value={t} onChange={setT} />\\n<FrameScrubber label=\\"Seek, take 5\\" duration={0} value={0} onChange={() => {}} disabled />"
      }
    }
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};export{e as FrameAccurateWithADrawnPreview,r as LongerClipAndNotReadyYet,Y as __namedExportsOrder,N as default};
