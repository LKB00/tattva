import{j as e}from"./iframe-D-pZXX8_.js";import{bI as f,b as u}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const t=u.get("speaker-notes"),W={title:"Slides/SpeakerNotes",component:f,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},o={name:"Draft, keep, then edit",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:'Draft notes with AI, then Keep. Type in the box: the label becomes "Edited by you" with a button to put the AI draft back. Drafting again now asks first.'},source:{code:`<SpeakerNotes
  slideLabel="Slide 2: Churn went from 3.1% to 4.4%"
  value={notes}
  state={state}               // "empty" | "generating" | "proposed" | "kept" | "edited" | "failed"
  proposed={draft}
  onChange={(v) => { setNotes(v); if (state === "kept") setState("edited"); }}
  onGenerate={draftNotes}
  onKeep={() => { setNotes(draft); setState("kept"); }}
  onDiscard={() => setState(previousState)}
  onRevert={() => { setNotes(aiVersion); setState("kept"); }}
  imageCredits={["Chart on this slide: made from your file churn-q3.csv"]}
/>`}}}},r={name:"Every state",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Empty, drafting, a draft to review next to the person's own notes, kept, edited and failed."},source:{code:`<SpeakerNotes state="proposed" value={myNotes} proposed={draft} onKeep={keep} onDiscard={discard} ... />
<SpeakerNotes state="failed" value={myNotes} onGenerate={draftNotes} ... />`}}}},s={name:"Folded, on a phone",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"Collapsible notes under the slide, with image credits at the bottom."},source:{code:`<SpeakerNotes collapsible defaultOpen={false} slideLabel="Slide 4: What they told us" value={notes} onChange={setNotes} state="edited"
  onGenerate={draftNotes} imageCredits={["Photo on this slide: made by AI, content credentials attached"]} />`}}}},_=["DraftKeepThenEdit","EveryState","FoldedOnAPhone"];var a,n,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Draft, keep, then edit",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Draft notes with AI, then Keep. Type in the box: the label becomes \\"Edited by you\\" with a button to put the AI draft back. Drafting again now asks first."
      },
      source: {
        code: "<SpeakerNotes\\n  slideLabel=\\"Slide 2: Churn went from 3.1% to 4.4%\\"\\n  value={notes}\\n  state={state}               // \\"empty\\" | \\"generating\\" | \\"proposed\\" | \\"kept\\" | \\"edited\\" | \\"failed\\"\\n  proposed={draft}\\n  onChange={(v) => { setNotes(v); if (state === \\"kept\\") setState(\\"edited\\"); }}\\n  onGenerate={draftNotes}\\n  onKeep={() => { setNotes(draft); setState(\\"kept\\"); }}\\n  onDiscard={() => setState(previousState)}\\n  onRevert={() => { setNotes(aiVersion); setState(\\"kept\\"); }}\\n  imageCredits={[\\"Chart on this slide: made from your file churn-q3.csv\\"]}\\n/>"
      }
    }
  }
}`,...(d=(n=o.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var i,p,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Every state",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Empty, drafting, a draft to review next to the person's own notes, kept, edited and failed."
      },
      source: {
        code: "<SpeakerNotes state=\\"proposed\\" value={myNotes} proposed={draft} onKeep={keep} onDiscard={discard} ... />\\n<SpeakerNotes state=\\"failed\\" value={myNotes} onGenerate={draftNotes} ... />"
      }
    }
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,l,h;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Folded, on a phone",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Collapsible notes under the slide, with image credits at the bottom."
      },
      source: {
        code: "<SpeakerNotes collapsible defaultOpen={false} slideLabel=\\"Slide 4: What they told us\\" value={notes} onChange={setNotes} state=\\"edited\\"\\n  onGenerate={draftNotes} imageCredits={[\\"Photo on this slide: made by AI, content credentials attached\\"]} />"
      }
    }
  }
}`,...(h=(l=s.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};export{o as DraftKeepThenEdit,r as EveryState,s as FoldedOnAPhone,_ as __namedExportsOrder,W as default};
