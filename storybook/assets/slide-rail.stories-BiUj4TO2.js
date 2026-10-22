import{j as e}from"./iframe-C8v_uZy_.js";import{bu as h,b as S}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const t=S.get("slide-rail"),Q={title:"Slides/SlideRail",component:h,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},n={name:"A deck being built",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Every state at once. Slide 5 is being written, slide 6 failed and can be tried again on its own, slide 3 needs review, and slide 4 was built before its outline changed. Try Shift with an arrow to choose several slides, Alt with an arrow to move one, and Delete then Undo."},source:{code:`const [current, setCurrent] = useState("s1");
const [selected, setSelected] = useState(["s1"]);

<SlideRail
  slides={[
    { id: "s1", title: "Spring range review", status: "edited", aiMade: true, thumbnail: <TitleSlide /> },
    { id: "s3", title: "Orders by month", status: "review", aiMade: true, thumbnail: <ChartSlide />,
      error: "A number on this slide has no source." },
    { id: "s4", title: "What chefs told us", status: "stale", aiMade: true, thumbnail: <QuoteSlide /> },
    { id: "s5", title: "Pricing", status: "generating", aiMade: true, thumbnail: <PricingSlide /> },
    { id: "s6", title: "Customer photos", status: "failed", error: "The image could not be made. Your text is safe." },
    { id: "s7", title: "Next steps", status: "pending" },
  ]}
  currentId={current} onCurrentChange={setCurrent}
  selectedIds={selected} onSelectionChange={setSelected}
  onReorder={(from, to) => moveSlide(from, to)}
  onRetry={(id) => retrySlide(id)}
  onInsertAfter={(id) => addSlideAfter(id)}
  onDuplicate={(ids) => duplicateSlides(ids)}
  onDelete={(ids) => deleteSlides(ids)}
  onUndo={() => undoLast()}
/>`}}}},r={name:"Sideways strip for phones",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:'orientation="auto" does this by itself below 600px. Left and Right move between slides. Actions sit in the bar under the strip, so nothing depends on drag or hover.'},source:{code:`<SlideRail orientation="horizontal" slides={slides} currentId={current}
  onCurrentChange={setCurrent} selectedIds={selected} onSelectionChange={setSelected}
  onReorder={moveSlide} onRetry={retrySlide} onDuplicate={duplicateSlides}
  onDelete={deleteSlides} onUndo={undoLast} />`}}}},i={name:"Read only, for reviewers",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"Pass only onCurrentChange and the rail is a plain list to move around in: no selection, no reorder and no actions."},source:{code:`<SlideRail label="Shared deck" orientation="vertical" slides={slides}
  currentId={current} onCurrentChange={setCurrent} />`}}}},W=["ADeckBeingBuilt","SidewaysStripForPhones","ReadOnlyForReviewers"];var s,o,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "A deck being built",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Every state at once. Slide 5 is being written, slide 6 failed and can be tried again on its own, slide 3 needs review, and slide 4 was built before its outline changed. Try Shift with an arrow to choose several slides, Alt with an arrow to move one, and Delete then Undo."
      },
      source: {
        code: "const [current, setCurrent] = useState(\\"s1\\");\\nconst [selected, setSelected] = useState([\\"s1\\"]);\\n\\n<SlideRail\\n  slides={[\\n    { id: \\"s1\\", title: \\"Spring range review\\", status: \\"edited\\", aiMade: true, thumbnail: <TitleSlide /> },\\n    { id: \\"s3\\", title: \\"Orders by month\\", status: \\"review\\", aiMade: true, thumbnail: <ChartSlide />,\\n      error: \\"A number on this slide has no source.\\" },\\n    { id: \\"s4\\", title: \\"What chefs told us\\", status: \\"stale\\", aiMade: true, thumbnail: <QuoteSlide /> },\\n    { id: \\"s5\\", title: \\"Pricing\\", status: \\"generating\\", aiMade: true, thumbnail: <PricingSlide /> },\\n    { id: \\"s6\\", title: \\"Customer photos\\", status: \\"failed\\", error: \\"The image could not be made. Your text is safe.\\" },\\n    { id: \\"s7\\", title: \\"Next steps\\", status: \\"pending\\" },\\n  ]}\\n  currentId={current} onCurrentChange={setCurrent}\\n  selectedIds={selected} onSelectionChange={setSelected}\\n  onReorder={(from, to) => moveSlide(from, to)}\\n  onRetry={(id) => retrySlide(id)}\\n  onInsertAfter={(id) => addSlideAfter(id)}\\n  onDuplicate={(ids) => duplicateSlides(ids)}\\n  onDelete={(ids) => deleteSlides(ids)}\\n  onUndo={() => undoLast()}\\n/>"
      }
    }
  }
}`,...(d=(o=n.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var a,l,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Sideways strip for phones",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "orientation=\\"auto\\" does this by itself below 600px. Left and Right move between slides. Actions sit in the bar under the strip, so nothing depends on drag or hover."
      },
      source: {
        code: "<SlideRail orientation=\\"horizontal\\" slides={slides} currentId={current}\\n  onCurrentChange={setCurrent} selectedIds={selected} onSelectionChange={setSelected}\\n  onReorder={moveSlide} onRetry={retrySlide} onDuplicate={duplicateSlides}\\n  onDelete={deleteSlides} onUndo={undoLast} />"
      }
    }
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var u,m,p;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Read only, for reviewers",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Pass only onCurrentChange and the rail is a plain list to move around in: no selection, no reorder and no actions."
      },
      source: {
        code: "<SlideRail label=\\"Shared deck\\" orientation=\\"vertical\\" slides={slides}\\n  currentId={current} onCurrentChange={setCurrent} />"
      }
    }
  }
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{n as ADeckBeingBuilt,i as ReadOnlyForReviewers,r as SidewaysStripForPhones,W as __namedExportsOrder,Q as default};
