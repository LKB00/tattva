import{j as e}from"./iframe-C8v_uZy_.js";import{ce as l,b as w}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const r=w.get("version-history"),W={title:"Creating/VersionHistory",component:l,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},n={name:"List with preview",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Press Preview on any older version. The banner offers Exit preview and Restore. Restore makes that version the current one."},source:{code:`const [previewId, setPreviewId] = useState<string | null>(null);
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
