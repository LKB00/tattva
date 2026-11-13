import{j as e}from"./iframe-D-pZXX8_.js";import{cm as l,b as w}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const r=w.get("version-history"),W={title:"Creating/VersionHistory",component:l,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},n={name:"List with preview",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Press Preview on any older version. The banner offers Exit preview and Restore. Restore makes that version the current one."},source:{code:`const [previewId, setPreviewId] = useState<string | null>(null);
const [currentId, setCurrentId] = useState(versions[0].id);

<VersionHistory versions={versions} currentId={currentId} previewId={previewId}
  onPreviewChange={setPreviewId} onRestore={(id) => { setCurrentId(id); setPreviewId(null); }} />`}}}},s={name:"Already previewing",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"The same list already showing a preview, as when someone arrives from a link."},source:{code:`const [previewId, setPreviewId] = useState<string | null>("v2");
const [currentId, setCurrentId] = useState(versions[0].id);

<VersionHistory versions={versions} currentId={currentId} previewId={previewId}
  onPreviewChange={setPreviewId} onRestore={(id) => { setCurrentId(id); setPreviewId(null); }} />`}}}},t={name:"Your own names",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"The list handles previews itself. A name you give replaces the automatic one."},source:{code:`<div className="max-w-md">
  <VersionHistory
    title="Edits"
    versions={[
      { id: "b", name: "Before the rewrite", time: "1 h ago", author: "person", authorName: "Maya" },
      { id: "a", name: "Original", time: "Yesterday", author: "ai" },
    ]}
    onRestore={() => {}}
  />
</div>`}}}},_=["ListWithPreview","AlreadyPreviewing","YourOwnNames"];var o,i,a;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "List with preview",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press Preview on any older version. The banner offers Exit preview and Restore. Restore makes that version the current one."
      },
      source: {
        code: "const [previewId, setPreviewId] = useState<string | null>(null);\\nconst [currentId, setCurrentId] = useState(versions[0].id);\\n\\n<VersionHistory versions={versions} currentId={currentId} previewId={previewId}\\n  onPreviewChange={setPreviewId} onRestore={(id) => { setCurrentId(id); setPreviewId(null); }} />"
      }
    }
  }
}`,...(a=(i=n.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var d,m,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Already previewing",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The same list already showing a preview, as when someone arrives from a link."
      },
      source: {
        code: "const [previewId, setPreviewId] = useState<string | null>(\\"v2\\");\\nconst [currentId, setCurrentId] = useState(versions[0].id);\\n\\n<VersionHistory versions={versions} currentId={currentId} previewId={previewId}\\n  onPreviewChange={setPreviewId} onRestore={(id) => { setCurrentId(id); setPreviewId(null); }} />"
      }
    }
  }
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,u,v;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Your own names",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The list handles previews itself. A name you give replaces the automatic one."
      },
      source: {
        code: "<div className=\\"max-w-md\\">\\n  <VersionHistory\\n    title=\\"Edits\\"\\n    versions={[\\n      { id: \\"b\\", name: \\"Before the rewrite\\", time: \\"1 h ago\\", author: \\"person\\", authorName: \\"Maya\\" },\\n      { id: \\"a\\", name: \\"Original\\", time: \\"Yesterday\\", author: \\"ai\\" },\\n    ]}\\n    onRestore={() => {}}\\n  />\\n</div>"
      }
    }
  }
}`,...(v=(u=t.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};export{s as AlreadyPreviewing,n as ListWithPreview,t as YourOwnNames,_ as __namedExportsOrder,W as default};
