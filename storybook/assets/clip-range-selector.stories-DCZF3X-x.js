import{j as t}from"./iframe-D-pZXX8_.js";import{L as l,b as c}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const a=c.get("clip-range-selector"),L={title:"Video/ClipRangeSelector",component:l,tags:["autodocs"],parameters:{docs:{description:{component:a.summary+" "+a.description}}}},e={name:"Extend from part of an upload",render:()=>t.jsx(t.Fragment,{children:a.examples[0].render()}),parameters:{docs:{description:{story:"Up to 10 seconds of a 24-second clip. Drag a handle or the window, use the keys (an arrow is one frame, Shift with an arrow is one second), type the times, or play the clip and press Set start or Set end at the playhead."},source:{code:`const [range, setRange] = useState<[number, number]>([9, 15]);
const [time, setTime] = useState(11);

<VideoPlayer label="Uploaded clip, kite on the hill" scene="kite" duration={24} fps={24}
  current={time} onTimeChange={setTime} hasAudio={false} />
<ClipRangeSelector
  label="Part to extend from"
  durationSec={24}
  fps={24}
  maxSpanSec={10}
  minSpanSec={1}
  range={range}
  onRangeChange={setRange}
  playhead={time}
  renderThumbnail={(s) => <VideoScene scene="kite" time={s} duration={24} />}
/>`}}}},n={name:"Processing, applied and too long",render:()=>t.jsx(t.Fragment,{children:a.examples[1].render()}),parameters:{docs:{description:{story:"While the AI works the range is locked and says why. Applied says where the result went. The last one was passed 19 seconds with a 10-second limit, so it keeps the start, moves the end and says so. Without thumbnails the strip is plain."},source:{code:`<ClipRangeSelector label="Part to re-do" durationSec={8} fps={24} maxSpanSec={5}
  range={[2, 6.5]} onRangeChange={setRange} status="processing"
  statusNote="Re-doing 2.0 to 6.5 seconds. The range is locked until it finishes." />
<ClipRangeSelector label="Part to re-do" durationSec={8} fps={24} maxSpanSec={5}
  range={[0, 4.5]} onRangeChange={setRange} status="applied"
  statusNote="Applied. Saved as version 3; version 2 is still in the history." />
<ClipRangeSelector label="Part to edit" durationSec={24} maxSpanSec={10}
  range={[1, 20]} onRangeChange={setRange} />`}}}},O=["ExtendFromPartOfAnUpload","ProcessingAppliedAndTooLong"];var o,s,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Extend from part of an upload",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Up to 10 seconds of a 24-second clip. Drag a handle or the window, use the keys (an arrow is one frame, Shift with an arrow is one second), type the times, or play the clip and press Set start or Set end at the playhead."
      },
      source: {
        code: "const [range, setRange] = useState<[number, number]>([9, 15]);\\nconst [time, setTime] = useState(11);\\n\\n<VideoPlayer label=\\"Uploaded clip, kite on the hill\\" scene=\\"kite\\" duration={24} fps={24}\\n  current={time} onTimeChange={setTime} hasAudio={false} />\\n<ClipRangeSelector\\n  label=\\"Part to extend from\\"\\n  durationSec={24}\\n  fps={24}\\n  maxSpanSec={10}\\n  minSpanSec={1}\\n  range={range}\\n  onRangeChange={setRange}\\n  playhead={time}\\n  renderThumbnail={(s) => <VideoScene scene=\\"kite\\" time={s} duration={24} />}\\n/>"
      }
    }
  }
}`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var i,p,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Processing, applied and too long",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "While the AI works the range is locked and says why. Applied says where the result went. The last one was passed 19 seconds with a 10-second limit, so it keeps the start, moves the end and says so. Without thumbnails the strip is plain."
      },
      source: {
        code: "<ClipRangeSelector label=\\"Part to re-do\\" durationSec={8} fps={24} maxSpanSec={5}\\n  range={[2, 6.5]} onRangeChange={setRange} status=\\"processing\\"\\n  statusNote=\\"Re-doing 2.0 to 6.5 seconds. The range is locked until it finishes.\\" />\\n<ClipRangeSelector label=\\"Part to re-do\\" durationSec={8} fps={24} maxSpanSec={5}\\n  range={[0, 4.5]} onRangeChange={setRange} status=\\"applied\\"\\n  statusNote=\\"Applied. Saved as version 3; version 2 is still in the history.\\" />\\n<ClipRangeSelector label=\\"Part to edit\\" durationSec={24} maxSpanSec={10}\\n  range={[1, 20]} onRangeChange={setRange} />"
      }
    }
  }
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};export{e as ExtendFromPartOfAnUpload,n as ProcessingAppliedAndTooLong,O as __namedExportsOrder,L as default};
