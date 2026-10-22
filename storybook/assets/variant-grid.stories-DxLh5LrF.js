import{j as e}from"./iframe-C8v_uZy_.js";import{cb as b,b as g}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const n=g.get("variant-grid"),L={title:"Creating/VariantGrid",component:b,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},a={name:"Four options, one picked",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Each option has a name for screen readers. Tab to the picked tile, then use the arrow keys, Home and End."},source:{code:`const [sel, setSel] = useState("a");

<VariantGrid
  selectedId={sel}
  onSelect={setSel}
  variants={[
    { id: "a", label: "Variant A", node: <div className="size-full bg-fg" /> },
    { id: "b", label: "Variant B", node: <div className="size-full bg-lime" /> },
    { id: "c", label: "Variant C", node: <div className="size-full bg-sunken" /> },
    { id: "d", label: "Variant D", node: <div className="size-full bg-line-strong" /> },
  ]}
/>`}}}},r={name:"More options on the way",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Two options are ready and two slots are held, so the grid keeps its size."},source:{code:`<VariantGrid
  selectedId="a"
  onSelect={() => {}}
  loadingCount={2}
  variants={[
    { id: "a", label: "Variant A", node: <div className="size-full bg-fg" /> },
    { id: "b", label: "Variant B", node: <div className="size-full bg-lime" /> },
  ]}
/>`}}}},s={name:"Nothing picked yet",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"Leave the pick empty until the person chooses."},source:{code:`<VariantGrid
  onSelect={() => {}}
  variants={[
    { id: "a", label: "Variant A", node: <div className="size-full bg-fg" /> },
    { id: "b", label: "Variant B", node: <div className="size-full bg-lime" /> },
  ]}
/>`}}}},W=["FourOptionsOnePicked","MoreOptionsOnTheWay","NothingPickedYet"];var i,o,t;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Four options, one picked",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Each option has a name for screen readers. Tab to the picked tile, then use the arrow keys, Home and End."
      },
      source: {
        code: "const [sel, setSel] = useState(\\"a\\");\\n\\n<VariantGrid\\n  selectedId={sel}\\n  onSelect={setSel}\\n  variants={[\\n    { id: \\"a\\", label: \\"Variant A\\", node: <div className=\\"size-full bg-fg\\" /> },\\n    { id: \\"b\\", label: \\"Variant B\\", node: <div className=\\"size-full bg-lime\\" /> },\\n    { id: \\"c\\", label: \\"Variant C\\", node: <div className=\\"size-full bg-sunken\\" /> },\\n    { id: \\"d\\", label: \\"Variant D\\", node: <div className=\\"size-full bg-line-strong\\" /> },\\n  ]}\\n/>"
      }
    }
  }
}`,...(t=(o=a.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var d,l,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "More options on the way",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Two options are ready and two slots are held, so the grid keeps its size."
      },
      source: {
        code: "<VariantGrid\\n  selectedId=\\"a\\"\\n  onSelect={() => {}}\\n  loadingCount={2}\\n  variants={[\\n    { id: \\"a\\", label: \\"Variant A\\", node: <div className=\\"size-full bg-fg\\" /> },\\n    { id: \\"b\\", label: \\"Variant B\\", node: <div className=\\"size-full bg-lime\\" /> },\\n  ]}\\n/>"
      }
    }
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,p,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Nothing picked yet",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Leave the pick empty until the person chooses."
      },
      source: {
        code: "<VariantGrid\\n  onSelect={() => {}}\\n  variants={[\\n    { id: \\"a\\", label: \\"Variant A\\", node: <div className=\\"size-full bg-fg\\" /> },\\n    { id: \\"b\\", label: \\"Variant B\\", node: <div className=\\"size-full bg-lime\\" /> },\\n  ]}\\n/>"
      }
    }
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};export{a as FourOptionsOnePicked,r as MoreOptionsOnTheWay,s as NothingPickedYet,W as __namedExportsOrder,L as default};
