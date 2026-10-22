import{j as e}from"./iframe-C8v_uZy_.js";import{a0 as u,b as g}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const n=g.get("deck-change-review"),U={title:"Slides/DeckChangeReview",component:u,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},s={name:"Keep or undo each slide",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:'Four slides changed by "Make it more visual". Keep or Undo each one; the header counts what is left. Done only applies once every slide has a decision, then saves one version.'},source:{code:`<DeckChangeReview request="Make it more visual" changes={changes} status={status}
  onChange={(slideId, state) => setState(slideId, state)}
  onKeepAll={() => setAll("kept")} onRejectAll={() => setAll("rejected")}
  onDone={saveAsOneVersion} onOpenHistory={openHistory} />

// changes: [{ slideId: "s3", slideNumber: 3, title: "Pricing",
//   summary: "Made the chart full width and moved the points to speaker notes",
//   before: <SlideDrawing … />, after: <SlideDrawing … />, state: "proposed" }, …]`}}}},o={name:"One slide at a time on a phone",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:'layout="pager" (or auto on a narrow screen) shows one slide with Previous and Next and a Before and After switch.'},source:{code:`<DeckChangeReview request="Make it more visual" changes={changes} status={status}
  layout="pager" onChange={setState} onKeepAll={keepAll} onRejectAll={undoAll} onDone={save} />`}}}},t={name:"Needs review, all reviewed, saving and saved",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"Amber only while a slide still needs a decision. The toggle view shows one picture with a Before and After switch."},source:{code:`<DeckChangeReview request="Tighten the wording on the results slides" changes={changes}
  view="toggle" status="applying" … />

<DeckChangeReview … status="applied" onOpenHistory={openHistory} />`}}}},V=["KeepOrUndoEachSlide","OneSlideAtATimeOnAPhone","NeedsReviewAllReviewedSavingAndSaved"];var r,a,i;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Keep or undo each slide",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Four slides changed by \\"Make it more visual\\". Keep or Undo each one; the header counts what is left. Done only applies once every slide has a decision, then saves one version."
      },
      source: {
        code: "<DeckChangeReview request=\\"Make it more visual\\" changes={changes} status={status}\\n  onChange={(slideId, state) => setState(slideId, state)}\\n  onKeepAll={() => setAll(\\"kept\\")} onRejectAll={() => setAll(\\"rejected\\")}\\n  onDone={saveAsOneVersion} onOpenHistory={openHistory} />\\n\\n// changes: [{ slideId: \\"s3\\", slideNumber: 3, title: \\"Pricing\\",\\n//   summary: \\"Made the chart full width and moved the points to speaker notes\\",\\n//   before: <SlideDrawing … />, after: <SlideDrawing … />, state: \\"proposed\\" }, …]"
      }
    }
  }
}`,...(i=(a=s.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var d,l,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "One slide at a time on a phone",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "layout=\\"pager\\" (or auto on a narrow screen) shows one slide with Previous and Next and a Before and After switch."
      },
      source: {
        code: "<DeckChangeReview request=\\"Make it more visual\\" changes={changes} status={status}\\n  layout=\\"pager\\" onChange={setState} onKeepAll={keepAll} onRejectAll={undoAll} onDone={save} />"
      }
    }
  }
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,m,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Needs review, all reviewed, saving and saved",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Amber only while a slide still needs a decision. The toggle view shows one picture with a Before and After switch."
      },
      source: {
        code: "<DeckChangeReview request=\\"Tighten the wording on the results slides\\" changes={changes}\\n  view=\\"toggle\\" status=\\"applying\\" … />\\n\\n<DeckChangeReview … status=\\"applied\\" onOpenHistory={openHistory} />"
      }
    }
  }
}`,...(h=(m=t.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};export{s as KeepOrUndoEachSlide,t as NeedsReviewAllReviewedSavingAndSaved,o as OneSlideAtATimeOnAPhone,V as __namedExportsOrder,U as default};
