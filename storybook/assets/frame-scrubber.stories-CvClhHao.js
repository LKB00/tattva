import{j as t}from"./iframe-C8v_uZy_.js";import{ah as c,b as d}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const o=d.get("frame-scrubber"),N={title:"Video/FrameScrubber",component:c,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"Frame-accurate, with a drawn preview",render:()=>t.jsx(t.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"With fps the scrubber snaps to whole frames. Focus it, then use the arrows for 1 second and comma or period for one frame. Point or drag to see the frame preview."},source:{code:`const [t, setT] = useState(3.25);

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
