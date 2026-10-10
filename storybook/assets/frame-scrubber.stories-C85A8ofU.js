import{j as t}from"./iframe-J6_2PHET.js";import{a6 as c,b as d}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const o=d.get("frame-scrubber"),N={title:"Video/FrameScrubber",component:c,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"Frame-accurate, with a drawn preview",render:()=>t.jsx(t.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"With fps the scrubber snaps to whole frames. Focus it, then use the arrows for 1 second and comma or period for one frame. Point or drag to see the frame preview."},source:{code:`const [t, setT] = useState(3.25);

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
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{e as FrameAccurateWithADrawnPreview,r as LongerClipAndNotReadyYet,Y as __namedExportsOrder,N as default};
