import{j as e}from"./iframe-DSdOWv-_.js";import{b as v}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import{A as x}from"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const r=v.get("ai-label"),J={title:"Trust/AILabel",component:x,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},t={name:"Feature container",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Sits at the upper right of a box, a little away from the edge."},source:{code:`<div className="relative w-full max-w-sm rounded-card border border-line bg-surface p-5 pr-16 text-body leading-5 text-fg">
  Draft reply to the supplier.
  <AILabel level="feature" placed overview="This draft was written from the thread above." details="Nobody has checked it yet." />
</div>`}}}},o={name:"Toggletip sections",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"All four parts filled in. Buttons are plain buttons and links are links. Escape or a click outside closes the note."},source:{code:`<AILabel
  overview="Summarized from 3 documents."
  details="Names and dates were not checked."
  resources={<a href="#sources">How summaries are made</a>}
  actions={<Button size="sm" variant="secondary">Learn more</Button>}
/>`}}}},a={name:"Edited, with revert",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"After an edit, the tag turns into an icon button named Revert to AI version. Pressing it brings the tag back."},source:{code:'<AILabel edited={edited} onRevert={() => setEdited(false)} overview="Written from the three documents you attached." />'}}}},n={name:"Sizes",render:()=>e.jsx(e.Fragment,{children:r.examples[3].render()}),parameters:{docs:{description:{story:"Match the size to the text around it."},source:{code:`<AILabel size={16} />
<AILabel size={18} />
<AILabel size={22} />`}}}},K=["FeatureContainer","ToggletipSections","EditedWithRevert","Sizes"];var s,i,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Feature container",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Sits at the upper right of a box, a little away from the edge."
      },
      source: {
        code: "<div className=\\"relative w-full max-w-sm rounded-card border border-line bg-surface p-5 pr-16 text-body leading-5 text-fg\\">\\n  Draft reply to the supplier.\\n  <AILabel level=\\"feature\\" placed overview=\\"This draft was written from the thread above.\\" details=\\"Nobody has checked it yet.\\" />\\n</div>"
      }
    }
  }
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Toggletip sections",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "All four parts filled in. Buttons are plain buttons and links are links. Escape or a click outside closes the note."
      },
      source: {
        code: "<AILabel\\n  overview=\\"Summarized from 3 documents.\\"\\n  details=\\"Names and dates were not checked.\\"\\n  resources={<a href=\\"#sources\\">How summaries are made</a>}\\n  actions={<Button size=\\"sm\\" variant=\\"secondary\\">Learn more</Button>}\\n/>"
      }
    }
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var l,u,h;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Edited, with revert",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "After an edit, the tag turns into an icon button named Revert to AI version. Pressing it brings the tag back."
      },
      source: {
        code: "<AILabel edited={edited} onRevert={() => setEdited(false)} overview=\\"Written from the three documents you attached.\\" />"
      }
    }
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,f,g;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Sizes",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Match the size to the text around it."
      },
      source: {
        code: "<AILabel size={16} />\\n<AILabel size={18} />\\n<AILabel size={22} />"
      }
    }
  }
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};export{a as EditedWithRevert,t as FeatureContainer,n as Sizes,o as ToggletipSections,K as __namedExportsOrder,J as default};
