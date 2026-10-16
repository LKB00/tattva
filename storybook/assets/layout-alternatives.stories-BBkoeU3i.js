import{j as e}from"./iframe-DSdOWv-_.js";import{au as h,b as y}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const t=y.get("layout-alternatives"),B={title:"Slides/LayoutAlternatives",component:h,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},o={name:"Preview, apply and undo",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Hover or Tab through the layouts: the slide on the left shows each one as a preview and the deck does not change. Enter or a click applies; Undo takes it back. Switch to Shorten to fit to ask again with one more option."},source:{code:`<LayoutAlternatives slideName="slide 3"
  current={{ thumbnail: <SlideDrawing slide={slide} /> }}
  options={options} state={state} loadingCount={waiting}
  previewId={previewId} onPreview={setPreviewId}
  onApply={(id) => { applyLayout(id); setAppliedId(id); setPreviewId(null); }}
  appliedId={appliedId} onUndo={undoLayout}
  textMode={textMode} onTextModeChange={(m) => { setTextMode(m); askAgain(m); }}
  onMore={() => askAgain(textMode)} cost="About 2 credits" />

// options: [{ id: "chart-full", label: "Full-width chart",
//   note: "Points move to speaker notes", thumbnail: <SlideDrawing … /> }, …]`}}}},n={name:"Loading, some ready, failed and no good layouts",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Placeholders hold the space while layouts are made. A failed request keeps the slide as it is and offers Try again. When nothing is good enough the part says so and offers Edit text."},source:{code:`<LayoutAlternatives state="partial" options={firstOne} loadingCount={2} … />

<LayoutAlternatives state="failed" options={[]} onRetry={retry} … />

<LayoutAlternatives state="none" options={[]} onEditText={openEditor}
  noneReason="This slide has a 9-row table. Every other layout would cut rows
    or shrink the text below a readable size." … />`}}}},a={name:"In a bottom sheet on a phone",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"Tap a layout to preview it on the slide, then press Apply layout. Closing the sheet drops the preview."},source:{code:`<Sheet open={open} onClose={() => { setPreviewId(null); setOpen(false); }} title="Layouts for slide 3">
  <LayoutAlternatives current={{ thumbnail: <SlideDrawing slide={slide} /> }}
    options={options} state="ready" textMode="keep"
    previewId={previewId} onPreview={setPreviewId}
    onApply={applyLayout} appliedId={appliedId} onUndo={undoLayout} />
</Sheet>`}}}},G=["PreviewApplyAndUndo","LoadingSomeReadyFailedAndNoGoodLayouts","InABottomSheetOnAPhone"];var r,s,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Preview, apply and undo",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Hover or Tab through the layouts: the slide on the left shows each one as a preview and the deck does not change. Enter or a click applies; Undo takes it back. Switch to Shorten to fit to ask again with one more option."
      },
      source: {
        code: "<LayoutAlternatives slideName=\\"slide 3\\"\\n  current={{ thumbnail: <SlideDrawing slide={slide} /> }}\\n  options={options} state={state} loadingCount={waiting}\\n  previewId={previewId} onPreview={setPreviewId}\\n  onApply={(id) => { applyLayout(id); setAppliedId(id); setPreviewId(null); }}\\n  appliedId={appliedId} onUndo={undoLayout}\\n  textMode={textMode} onTextModeChange={(m) => { setTextMode(m); askAgain(m); }}\\n  onMore={() => askAgain(textMode)} cost=\\"About 2 credits\\" />\\n\\n// options: [{ id: \\"chart-full\\", label: \\"Full-width chart\\",\\n//   note: \\"Points move to speaker notes\\", thumbnail: <SlideDrawing … /> }, …]"
      }
    }
  }
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var d,p,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Loading, some ready, failed and no good layouts",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Placeholders hold the space while layouts are made. A failed request keeps the slide as it is and offers Try again. When nothing is good enough the part says so and offers Edit text."
      },
      source: {
        code: "<LayoutAlternatives state=\\"partial\\" options={firstOne} loadingCount={2} … />\\n\\n<LayoutAlternatives state=\\"failed\\" options={[]} onRetry={retry} … />\\n\\n<LayoutAlternatives state=\\"none\\" options={[]} onEditText={openEditor}\\n  noneReason=\\"This slide has a 9-row table. Every other layout would cut rows\\n    or shrink the text below a readable size.\\" … />"
      }
    }
  }
}`,...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,m,c;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "In a bottom sheet on a phone",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Tap a layout to preview it on the slide, then press Apply layout. Closing the sheet drops the preview."
      },
      source: {
        code: "<Sheet open={open} onClose={() => { setPreviewId(null); setOpen(false); }} title=\\"Layouts for slide 3\\">\\n  <LayoutAlternatives current={{ thumbnail: <SlideDrawing slide={slide} /> }}\\n    options={options} state=\\"ready\\" textMode=\\"keep\\"\\n    previewId={previewId} onPreview={setPreviewId}\\n    onApply={applyLayout} appliedId={appliedId} onUndo={undoLayout} />\\n</Sheet>"
      }
    }
  }
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};export{a as InABottomSheetOnAPhone,n as LoadingSomeReadyFailedAndNoGoodLayouts,o as PreviewApplyAndUndo,G as __namedExportsOrder,B as default};
