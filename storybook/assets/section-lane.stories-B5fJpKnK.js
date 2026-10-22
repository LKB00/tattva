import{j as e}from"./iframe-C8v_uZy_.js";import{bk as h,b as u}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const t=u.get("section-lane"),Y={title:"Voice and audio/SectionLane",component:h,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},n={name:"Edit a song",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Select a section, then Regenerate, Extend after or move it. Each edit adds to the amber bar and the section after a changed one goes out of date. Generate makes them all at once; the sections then show new takes to compare."},source:{code:`<SectionLane title="Harbour Light" sections={sections} duration={124} peaks={peaks}
  position={position} onSeek={setPosition}
  selectedId={selected} onSelect={setSelected}
  onReorder={reorder} onRegenerate={stageRegenerate} onExtend={addAfter}
  onOpenAlternates={openTakes}
  pendingChanges={pending} generateCost="about 20 credits" onGenerate={generate} />

const sections = [
  { id: "intro", name: "Intro", start: 0, end: 12, origin: "ai", state: "original" },
  { id: "v1", name: "Verse 1", start: 12, end: 40, origin: "ai", state: "original", lyrics: "Lanterns on the water line…" },
  { id: "ch1", name: "Chorus", start: 40, end: 62, origin: "ai", state: "original" },
  { id: "v2", name: "Verse 2", start: 62, end: 88, origin: "person", state: "original" },
  …
];`}}}},r={name:"Every section state",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Up to date, edited and not generated, out of date, generating, new takes to compare, and did not work. The failed Outro is selected, so it offers Try again."},source:{code:`<SectionLane title="Paper Boats" sections={[
  { id: "a", name: "Intro", start: 0, end: 10, origin: "upload", state: "original" },
  { id: "b", name: "Verse 1", start: 10, end: 34, origin: "ai", state: "edited" },
  { id: "c", name: "Pre-chorus", start: 34, end: 46, origin: "ai", state: "stale", note: "Out of date: Verse 1 changed key." },
  { id: "d", name: "Chorus", start: 46, end: 68, origin: "ai", state: "generating" },
  { id: "e", name: "Bridge", start: 68, end: 84, origin: "ai", state: "has-alternates", alternates: 3 },
  { id: "f", name: "Outro", start: 84, end: 98, origin: "ai", state: "failed", note: "The model timed out. You were not charged." },
]} duration={98} selectedId="f" onSelect={setSelected} onRetry={retry}
  pendingChanges={2} generateCost="about 12 credits" onGenerate={generate} />`}}}},a={name:"Narrow, cannot afford Generate",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"At phone width the lane scrolls sideways inside the card. generateBlocked turns Generate off and says why."},source:{code:`<SectionLane title="Harbour Light" sections={sections} duration={124} peaks={peaks}
  selectedId={selected} onSelect={setSelected} onRegenerate={stage} onExtend={addAfter}
  pendingChanges={1} onGenerate={generate} generateBlocked="Not enough credits" />`}}}},_=["EditASong","EverySectionState","NarrowCannotAffordGenerate"];var o,s,i;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Edit a song",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Select a section, then Regenerate, Extend after or move it. Each edit adds to the amber bar and the section after a changed one goes out of date. Generate makes them all at once; the sections then show new takes to compare."
      },
      source: {
        code: "<SectionLane title=\\"Harbour Light\\" sections={sections} duration={124} peaks={peaks}\\n  position={position} onSeek={setPosition}\\n  selectedId={selected} onSelect={setSelected}\\n  onReorder={reorder} onRegenerate={stageRegenerate} onExtend={addAfter}\\n  onOpenAlternates={openTakes}\\n  pendingChanges={pending} generateCost=\\"about 20 credits\\" onGenerate={generate} />\\n\\nconst sections = [\\n  { id: \\"intro\\", name: \\"Intro\\", start: 0, end: 12, origin: \\"ai\\", state: \\"original\\" },\\n  { id: \\"v1\\", name: \\"Verse 1\\", start: 12, end: 40, origin: \\"ai\\", state: \\"original\\", lyrics: \\"Lanterns on the water line…\\" },\\n  { id: \\"ch1\\", name: \\"Chorus\\", start: 40, end: 62, origin: \\"ai\\", state: \\"original\\" },\\n  { id: \\"v2\\", name: \\"Verse 2\\", start: 62, end: 88, origin: \\"person\\", state: \\"original\\" },\\n  …\\n];"
      }
    }
  }
}`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var d,c,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Every section state",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Up to date, edited and not generated, out of date, generating, new takes to compare, and did not work. The failed Outro is selected, so it offers Try again."
      },
      source: {
        code: "<SectionLane title=\\"Paper Boats\\" sections={[\\n  { id: \\"a\\", name: \\"Intro\\", start: 0, end: 10, origin: \\"upload\\", state: \\"original\\" },\\n  { id: \\"b\\", name: \\"Verse 1\\", start: 10, end: 34, origin: \\"ai\\", state: \\"edited\\" },\\n  { id: \\"c\\", name: \\"Pre-chorus\\", start: 34, end: 46, origin: \\"ai\\", state: \\"stale\\", note: \\"Out of date: Verse 1 changed key.\\" },\\n  { id: \\"d\\", name: \\"Chorus\\", start: 46, end: 68, origin: \\"ai\\", state: \\"generating\\" },\\n  { id: \\"e\\", name: \\"Bridge\\", start: 68, end: 84, origin: \\"ai\\", state: \\"has-alternates\\", alternates: 3 },\\n  { id: \\"f\\", name: \\"Outro\\", start: 84, end: 98, origin: \\"ai\\", state: \\"failed\\", note: \\"The model timed out. You were not charged.\\" },\\n]} duration={98} selectedId=\\"f\\" onSelect={setSelected} onRetry={retry}\\n  pendingChanges={2} generateCost=\\"about 12 credits\\" onGenerate={generate} />"
      }
    }
  }
}`,...(g=(c=r.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var m,p,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Narrow, cannot afford Generate",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "At phone width the lane scrolls sideways inside the card. generateBlocked turns Generate off and says why."
      },
      source: {
        code: "<SectionLane title=\\"Harbour Light\\" sections={sections} duration={124} peaks={peaks}\\n  selectedId={selected} onSelect={setSelected} onRegenerate={stage} onExtend={addAfter}\\n  pendingChanges={1} onGenerate={generate} generateBlocked=\\"Not enough credits\\" />"
      }
    }
  }
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};export{n as EditASong,r as EverySectionState,a as NarrowCannotAffordGenerate,_ as __namedExportsOrder,Y as default};
