import{j as e}from"./iframe-C8v_uZy_.js";import{s as v,b as x}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const n=x.get("canvas-panel"),k={title:"Creating/CanvasPanel",component:v,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},t={name:"Versioned document",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"With more than one version, Previous and Next appear and turn off at the ends."},source:{code:`const [v, setV] = useState(2);

<div className="h-75 max-w-xl">
  <CanvasPanel title="Launch announcement.md" version={v} versions={3} onVersionChange={setV} onRegenerate={() => {}} onClose={() => {}}>
    <p className="text-body leading-5">Draft text for version {v}.</p>
  </CanvasPanel>
</div>`}}}},a={name:"Title only",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"With no versions, Regenerate or Close, the top bar shows only the title."},source:{code:`<div className="h-50 max-w-xl">
  <CanvasPanel title="Release notes">
    <p className="text-body leading-5">Static content.</p>
  </CanvasPanel>
</div>`}}}},o={name:"Your own buttons",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"Your buttons sit after Regenerate and before Close."},source:{code:`<div className="h-50 max-w-xl">
  <CanvasPanel title="Summary.md" actions={<Button size="sm" variant="secondary">Export</Button>}>
    <p className="text-body leading-5">Panel body.</p>
  </CanvasPanel>
</div>`}}}},q=["VersionedDocument","TitleOnly","YourOwnButtons"];var r,s,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Versioned document",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With more than one version, Previous and Next appear and turn off at the ends."
      },
      source: {
        code: "const [v, setV] = useState(2);\\n\\n<div className=\\"h-75 max-w-xl\\">\\n  <CanvasPanel title=\\"Launch announcement.md\\" version={v} versions={3} onVersionChange={setV} onRegenerate={() => {}} onClose={() => {}}>\\n    <p className=\\"text-body leading-5\\">Draft text for version {v}.</p>\\n  </CanvasPanel>\\n</div>"
      }
    }
  }
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var m,d,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Title only",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With no versions, Regenerate or Close, the top bar shows only the title."
      },
      source: {
        code: "<div className=\\"h-50 max-w-xl\\">\\n  <CanvasPanel title=\\"Release notes\\">\\n    <p className=\\"text-body leading-5\\">Static content.</p>\\n  </CanvasPanel>\\n</div>"
      }
    }
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,l,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Your own buttons",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Your buttons sit after Regenerate and before Close."
      },
      source: {
        code: "<div className=\\"h-50 max-w-xl\\">\\n  <CanvasPanel title=\\"Summary.md\\" actions={<Button size=\\"sm\\" variant=\\"secondary\\">Export</Button>}>\\n    <p className=\\"text-body leading-5\\">Panel body.</p>\\n  </CanvasPanel>\\n</div>"
      }
    }
  }
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};export{a as TitleOnly,t as VersionedDocument,o as YourOwnButtons,q as __namedExportsOrder,k as default};
