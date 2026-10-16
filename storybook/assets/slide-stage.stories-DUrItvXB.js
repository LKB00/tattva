import{j as e}from"./iframe-DSdOWv-_.js";import{bq as m,b as S}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const t=S.get("slide-stage"),M={title:"Slides/SlideStage",component:m,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},n={name:"Things to check and what the AI changed",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"A blocking issue (a number with no source) turns the count amber. Open it and choose the issue to move focus to that text on the slide. The caption says what the AI changed, with Undo."},source:{code:`<SlideStage
  label="Slide 3, Orders by month"
  issues={[
    { id: "i1", kind: "noSource", blocking: true, targetId: "figure",
      message: "“Up 15% on August” was written by AI and has no source. Add one or remove it." },
    { id: "i2", kind: "contrast", message: "The grey month labels are faint on a projector." },
  ]}
  aiChange={{
    summary: "Turned your table into a bar chart and highlighted September. Your numbers were not changed.",
    onUndo: undoChange,
  }}
>
  <ChartSlide />
</SlideStage>`}}}},a={name:"Every state",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"AI working wraps the frame in one calm working edge. Previewing shows a neutral banner, and nothing changes until a choice is made elsewhere; Escape exits. Partly built keeps what is ready. Failed says what was kept."},source:{code:`<SlideStage label="Slide 5, Pricing" state="working" workingLabel="AI is shortening the three plans">…</SlideStage>
<SlideStage label="Slide 5, Pricing" state="previewing"
  previewLabel="Previewing layout 2 of 4. Nothing has changed yet." onExitPreview={exitPreview}>…</SlideStage>
<SlideStage label="Slide 5, Pricing" state="partial"
  partialNote="The text is ready. The plan icons could not be made." onRetry={retry}>…</SlideStage>
<SlideStage label="Slide 5, Pricing" state="loading" />
<SlideStage label="Slide 5, Pricing" state="failed"
  errorMessage="This slide timed out. Your outline and the other slides were not changed." onRetry={retry} />
<SlideStage label="Slide 5, Pricing" state="editing"
  issues={[{ id: "o1", kind: "overflow", targetId: "group-plan",
    message: "The Group plan text runs past the bottom. Shorten it or split the slide." }]}>…</SlideStage>`}}}},r={name:"Shapes: 4:5 and 9:16",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"Portrait slides are laid out at their own design size and capped in height, so they stay on screen."},source:{code:`<SlideStage label="Slide 1, Spring range review, 4 by 5" ratio="4:5" maxHeight="28rem">…</SlideStage>
<SlideStage label="Slide 1, Spring range review, 9 by 16" ratio="9:16" maxHeight="28rem">…</SlideStage>`}}}},W=["ThingsToCheckAndWhatTheAIChanged","EveryState","Shapes45And916"];var i,o,s;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Things to check and what the AI changed",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A blocking issue (a number with no source) turns the count amber. Open it and choose the issue to move focus to that text on the slide. The caption says what the AI changed, with Undo."
      },
      source: {
        code: "<SlideStage\\n  label=\\"Slide 3, Orders by month\\"\\n  issues={[\\n    { id: \\"i1\\", kind: \\"noSource\\", blocking: true, targetId: \\"figure\\",\\n      message: \\"“Up 15% on August” was written by AI and has no source. Add one or remove it.\\" },\\n    { id: \\"i2\\", kind: \\"contrast\\", message: \\"The grey month labels are faint on a projector.\\" },\\n  ]}\\n  aiChange={{\\n    summary: \\"Turned your table into a bar chart and highlighted September. Your numbers were not changed.\\",\\n    onUndo: undoChange,\\n  }}\\n>\\n  <ChartSlide />\\n</SlideStage>"
      }
    }
  }
}`,...(s=(o=n.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var d,l,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Every state",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "AI working wraps the frame in one calm working edge. Previewing shows a neutral banner, and nothing changes until a choice is made elsewhere; Escape exits. Partly built keeps what is ready. Failed says what was kept."
      },
      source: {
        code: "<SlideStage label=\\"Slide 5, Pricing\\" state=\\"working\\" workingLabel=\\"AI is shortening the three plans\\">…</SlideStage>\\n<SlideStage label=\\"Slide 5, Pricing\\" state=\\"previewing\\"\\n  previewLabel=\\"Previewing layout 2 of 4. Nothing has changed yet.\\" onExitPreview={exitPreview}>…</SlideStage>\\n<SlideStage label=\\"Slide 5, Pricing\\" state=\\"partial\\"\\n  partialNote=\\"The text is ready. The plan icons could not be made.\\" onRetry={retry}>…</SlideStage>\\n<SlideStage label=\\"Slide 5, Pricing\\" state=\\"loading\\" />\\n<SlideStage label=\\"Slide 5, Pricing\\" state=\\"failed\\"\\n  errorMessage=\\"This slide timed out. Your outline and the other slides were not changed.\\" onRetry={retry} />\\n<SlideStage label=\\"Slide 5, Pricing\\" state=\\"editing\\"\\n  issues={[{ id: \\"o1\\", kind: \\"overflow\\", targetId: \\"group-plan\\",\\n    message: \\"The Group plan text runs past the bottom. Shorten it or split the slide.\\" }]}>…</SlideStage>"
      }
    }
  }
}`,...(g=(l=a.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var h,c,p;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Shapes: 4:5 and 9:16",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Portrait slides are laid out at their own design size and capped in height, so they stay on screen."
      },
      source: {
        code: "<SlideStage label=\\"Slide 1, Spring range review, 4 by 5\\" ratio=\\"4:5\\" maxHeight=\\"28rem\\">…</SlideStage>\\n<SlideStage label=\\"Slide 1, Spring range review, 9 by 16\\" ratio=\\"9:16\\" maxHeight=\\"28rem\\">…</SlideStage>"
      }
    }
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};export{a as EveryState,r as Shapes45And916,n as ThingsToCheckAndWhatTheAIChanged,W as __namedExportsOrder,M as default};
