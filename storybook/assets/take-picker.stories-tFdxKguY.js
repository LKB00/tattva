import{j as e}from"./iframe-C8v_uZy_.js";import{bU as h,b as u}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const t=u.get("take-picker"),I={title:"Voice and audio/TakePicker",component:h,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},a={name:"Three song takes, pick one",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Every take is done and none is kept yet, so the amber line asks for a pick. Press Play on Take 1, then Play on Take 2: it carries on from the same moment. Make 2 more shows the making, still-making-the-end and ready states, and the cost sits beside the button."},source:{code:`const [kept, setKept] = useState<string[]>([]);

<TakePicker
  title="Takes for Rainy Platform"
  prompt="Gentle lo-fi song about waiting for a late train, about 2 and a half minutes"
  takes={[
    { id: "t1", label: "Take 1", status: "ready", duration: 148, peaks, differs: ["Slower, 84 BPM", "Soft female vocal", "Piano lead"] },
    { id: "t2", label: "Take 2", status: "ready", duration: 136, peaks, differs: ["92 BPM", "Low male vocal", "Brushed drums"] },
    { id: "t3", label: "Take 3", status: "ready", duration: 141, peaks, differs: ["92 BPM", "Two voices", "Guitar lead, no drums"] },
  ]}
  kept={kept}
  onKeptChange={setKept}
  onMore={makeTwoMore}
  moreCost="about 10 credits"
/>`}}}},n={name:"Takes for one section, with a failed take",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"With section set, Play runs from a few seconds before the chorus to a few seconds after it, so the joins can be heard, and the chorus is marked as AI-made on each waveform. Take 3 failed and says why; Try again keeps its slot while it is made again."},source:{code:`<TakePicker
  title="New chorus for Harbour Lights"
  prompt="Chorus, lines 2 and 4 rewritten"
  takes={[
    { id: "c1", label: "Chorus take 1", status: "ready", duration: 184, peaks, differs: ["Same melody", "Fuller drums"] },
    { id: "c2", label: "Chorus take 2", status: "ready", duration: 184, peaks, differs: ["Higher melody", "Harmony on the last line"] },
    { id: "c3", label: "Chorus take 3", status: "failed", error: "The model stopped before the end of the chorus. You were not charged." },
  ]}
  kept={kept}
  onKeptChange={setKept}
  onRetryTake={retry}
  section={{ start: 62, end: 88, label: "the chorus (1:02 to 1:28)" }}
  context={4}
  note="Keeping a take makes a new version of the whole song. The old chorus stays in history."
/>`}}}},s={name:"Making, partly ready, and keeping several",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"While every take is still being made, each slot keeps its height and says which take it is making. Partly ready: a finished take can be played while the next is still making its end; nothing is amber yet because the person cannot act on all of them. With multiple, Keep works like a check box."},source:{code:`<TakePicker title="Takes for Morning Ferry" kept={[]} onKeptChange={setKept}
  takes={[{ id: "g1", label: "Take 1", status: "pending" }, { id: "g2", label: "Take 2", status: "pending" }]}
  onMore={makeMore} moreCost="about 4 credits" />

<TakePicker title="Takes for Field Notes" kept={[]} onKeptChange={setKept}
  takes={[
    { id: "p1", label: "Take 1", status: "ready", duration: 15, peaks },
    { id: "p2", label: "Take 2", status: "streaming", duration: 15, madeUpTo: 9, peaks },
    { id: "p3", label: "Take 3", status: "pending" },
  ]} />

<TakePicker title="Sound effects for the shop door" multiple kept={kept} onKeptChange={setKept}
  note="Keep as many as you want. The rest stay in history." takes={bells} />`}}}},U=["ThreeSongTakesPickOne","TakesForOneSectionWithAFailedTake","MakingPartlyReadyAndKeepingSeveral"];var r,o,i;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Three song takes, pick one",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Every take is done and none is kept yet, so the amber line asks for a pick. Press Play on Take 1, then Play on Take 2: it carries on from the same moment. Make 2 more shows the making, still-making-the-end and ready states, and the cost sits beside the button."
      },
      source: {
        code: "const [kept, setKept] = useState<string[]>([]);\\n\\n<TakePicker\\n  title=\\"Takes for Rainy Platform\\"\\n  prompt=\\"Gentle lo-fi song about waiting for a late train, about 2 and a half minutes\\"\\n  takes={[\\n    { id: \\"t1\\", label: \\"Take 1\\", status: \\"ready\\", duration: 148, peaks, differs: [\\"Slower, 84 BPM\\", \\"Soft female vocal\\", \\"Piano lead\\"] },\\n    { id: \\"t2\\", label: \\"Take 2\\", status: \\"ready\\", duration: 136, peaks, differs: [\\"92 BPM\\", \\"Low male vocal\\", \\"Brushed drums\\"] },\\n    { id: \\"t3\\", label: \\"Take 3\\", status: \\"ready\\", duration: 141, peaks, differs: [\\"92 BPM\\", \\"Two voices\\", \\"Guitar lead, no drums\\"] },\\n  ]}\\n  kept={kept}\\n  onKeptChange={setKept}\\n  onMore={makeTwoMore}\\n  moreCost=\\"about 10 credits\\"\\n/>"
      }
    }
  }
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var d,l,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Takes for one section, with a failed take",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With section set, Play runs from a few seconds before the chorus to a few seconds after it, so the joins can be heard, and the chorus is marked as AI-made on each waveform. Take 3 failed and says why; Try again keeps its slot while it is made again."
      },
      source: {
        code: "<TakePicker\\n  title=\\"New chorus for Harbour Lights\\"\\n  prompt=\\"Chorus, lines 2 and 4 rewritten\\"\\n  takes={[\\n    { id: \\"c1\\", label: \\"Chorus take 1\\", status: \\"ready\\", duration: 184, peaks, differs: [\\"Same melody\\", \\"Fuller drums\\"] },\\n    { id: \\"c2\\", label: \\"Chorus take 2\\", status: \\"ready\\", duration: 184, peaks, differs: [\\"Higher melody\\", \\"Harmony on the last line\\"] },\\n    { id: \\"c3\\", label: \\"Chorus take 3\\", status: \\"failed\\", error: \\"The model stopped before the end of the chorus. You were not charged.\\" },\\n  ]}\\n  kept={kept}\\n  onKeptChange={setKept}\\n  onRetryTake={retry}\\n  section={{ start: 62, end: 88, label: \\"the chorus (1:02 to 1:28)\\" }}\\n  context={4}\\n  note=\\"Keeping a take makes a new version of the whole song. The old chorus stays in history.\\"\\n/>"
      }
    }
  }
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var k,c,m;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Making, partly ready, and keeping several",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "While every take is still being made, each slot keeps its height and says which take it is making. Partly ready: a finished take can be played while the next is still making its end; nothing is amber yet because the person cannot act on all of them. With multiple, Keep works like a check box."
      },
      source: {
        code: "<TakePicker title=\\"Takes for Morning Ferry\\" kept={[]} onKeptChange={setKept}\\n  takes={[{ id: \\"g1\\", label: \\"Take 1\\", status: \\"pending\\" }, { id: \\"g2\\", label: \\"Take 2\\", status: \\"pending\\" }]}\\n  onMore={makeMore} moreCost=\\"about 4 credits\\" />\\n\\n<TakePicker title=\\"Takes for Field Notes\\" kept={[]} onKeptChange={setKept}\\n  takes={[\\n    { id: \\"p1\\", label: \\"Take 1\\", status: \\"ready\\", duration: 15, peaks },\\n    { id: \\"p2\\", label: \\"Take 2\\", status: \\"streaming\\", duration: 15, madeUpTo: 9, peaks },\\n    { id: \\"p3\\", label: \\"Take 3\\", status: \\"pending\\" },\\n  ]} />\\n\\n<TakePicker title=\\"Sound effects for the shop door\\" multiple kept={kept} onKeptChange={setKept}\\n  note=\\"Keep as many as you want. The rest stay in history.\\" takes={bells} />"
      }
    }
  }
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};export{s as MakingPartlyReadyAndKeepingSeveral,n as TakesForOneSectionWithAFailedTake,a as ThreeSongTakesPickOne,U as __namedExportsOrder,I as default};
