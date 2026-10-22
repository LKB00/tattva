import{j as e}from"./iframe-C8v_uZy_.js";import{ab as x,b as f}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const n=f.get("export-sheet"),J={title:"Slides/ExportSheet",component:x,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},o={name:"Export with checks",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Open it, switch format and watch the checks change. PowerPoint fails the first time at slide 6, to show Try again. Go to slide 4 closes the sheet and jumps there."},source:{code:`<ExportSheet
  open={open}
  onClose={() => setOpen(false)}
  deckTitle="Q3 churn review"
  format={format}
  onFormatChange={(f) => { setFormat(f); runChecks(f); }}
  state={state}               // "choosing" | "checking" | "exporting" | "done" | "failed"
  includes={["8 slides, 16:9", "Speaker notes on 6 slides"]}
  includeNotes={notes}
  onIncludeNotesChange={setNotes}
  checks={[
    { id: "ai", severity: "fix", message: "3 AI changes on slides 4, 6 and 7 have not been reviewed.", slideId: "s4", slideLabel: "slide 4" },
    { id: "font", severity: "info", message: "2 fonts will be replaced: Fieldwork becomes Arial, Lumen Serif becomes Georgia." },
  ]}
  onJumpTo={goToSlide}
  progress={{ done, total: 8 }}
  fileName="q3-churn-review.pptx"
  fileSize="3.8 MB"
  onExport={startExport}
  onStopExport={stopExport}
  onDownload={download}
/>`}}}},t={name:"Every state",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Drawn inline so each state is easy to compare: checking, things to fix, nothing to fix, exporting, done and failed."},source:{code:`<ExportSheet inline state="exporting" format="pptx" progress={{ done: 5, total: 8 }} ... />
<ExportSheet inline state="failed" format="pptx" error="The export service did not answer. Nothing was sent." onExport={retry} ... />`}}}},r={name:"A view-only link",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"The link format ends with the link and Copy link instead of a file."},source:{code:`<ExportSheet inline deckTitle="Q3 churn review" format="link" state="done"
  fileName="decks.northwind.app/v/q3-churn-review" onFormatChange={setFormat} onCopyLink={copy} onExport={createLink} onClose={close} />`}}}},M=["ExportWithChecks","EveryState","AViewOnlyLink"];var s,i,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Export with checks",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Open it, switch format and watch the checks change. PowerPoint fails the first time at slide 6, to show Try again. Go to slide 4 closes the sheet and jumps there."
      },
      source: {
        code: "<ExportSheet\\n  open={open}\\n  onClose={() => setOpen(false)}\\n  deckTitle=\\"Q3 churn review\\"\\n  format={format}\\n  onFormatChange={(f) => { setFormat(f); runChecks(f); }}\\n  state={state}               // \\"choosing\\" | \\"checking\\" | \\"exporting\\" | \\"done\\" | \\"failed\\"\\n  includes={[\\"8 slides, 16:9\\", \\"Speaker notes on 6 slides\\"]}\\n  includeNotes={notes}\\n  onIncludeNotesChange={setNotes}\\n  checks={[\\n    { id: \\"ai\\", severity: \\"fix\\", message: \\"3 AI changes on slides 4, 6 and 7 have not been reviewed.\\", slideId: \\"s4\\", slideLabel: \\"slide 4\\" },\\n    { id: \\"font\\", severity: \\"info\\", message: \\"2 fonts will be replaced: Fieldwork becomes Arial, Lumen Serif becomes Georgia.\\" },\\n  ]}\\n  onJumpTo={goToSlide}\\n  progress={{ done, total: 8 }}\\n  fileName=\\"q3-churn-review.pptx\\"\\n  fileSize=\\"3.8 MB\\"\\n  onExport={startExport}\\n  onStopExport={stopExport}\\n  onDownload={download}\\n/>"
      }
    }
  }
}`,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var p,d,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Every state",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Drawn inline so each state is easy to compare: checking, things to fix, nothing to fix, exporting, done and failed."
      },
      source: {
        code: "<ExportSheet inline state=\\"exporting\\" format=\\"pptx\\" progress={{ done: 5, total: 8 }} ... />\\n<ExportSheet inline state=\\"failed\\" format=\\"pptx\\" error=\\"The export service did not answer. Nothing was sent.\\" onExport={retry} ... />"
      }
    }
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,l,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "A view-only link",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The link format ends with the link and Copy link instead of a file."
      },
      source: {
        code: "<ExportSheet inline deckTitle=\\"Q3 churn review\\" format=\\"link\\" state=\\"done\\"\\n  fileName=\\"decks.northwind.app/v/q3-churn-review\\" onFormatChange={setFormat} onCopyLink={copy} onExport={createLink} onClose={close} />"
      }
    }
  }
}`,...(h=(l=r.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};export{r as AViewOnlyLink,t as EveryState,o as ExportWithChecks,M as __namedExportsOrder,J as default};
