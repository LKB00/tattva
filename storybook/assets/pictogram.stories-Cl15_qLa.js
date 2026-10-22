import{j as e}from"./iframe-C8v_uZy_.js";import{aX as u,b as h}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const r=h.get("pictogram"),G={title:"Empty and error/Pictogram",component:u,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},o={name:"Sizes",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"The lines get thicker as the picture grows, so it looks balanced at each size."},source:{code:`<Pictogram name="document" size={32} />
<Pictogram name="document" size={48} />
<Pictogram name="document" size={64} />`}}}},t={name:"All names",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:""},source:{code:"{pictogramNames.map((n) => <Pictogram key={n} name={n} size={48} />)}"}}}},a={name:"Takes the text color",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"Set a text color on the area around it and the pictogram follows."},source:{code:'<div className="text-fg-muted"><Pictogram name="shield" size={48} title="Protected" /></div>'}}}},H=["Sizes","AllNames","TakesTheTextColor"];var s,n,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Sizes",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The lines get thicker as the picture grows, so it looks balanced at each size."
      },
      source: {
        code: "<Pictogram name=\\"document\\" size={32} />\\n<Pictogram name=\\"document\\" size={48} />\\n<Pictogram name=\\"document\\" size={64} />"
      }
    }
  }
}`,...(m=(n=o.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var i,c,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "All names",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: ""
      },
      source: {
        code: "{pictogramNames.map((n) => <Pictogram key={n} name={n} size={48} />)}"
      }
    }
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,l,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Takes the text color",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Set a text color on the area around it and the pictogram follows."
      },
      source: {
        code: "<div className=\\"text-fg-muted\\"><Pictogram name=\\"shield\\" size={48} title=\\"Protected\\" /></div>"
      }
    }
  }
}`,...(g=(l=a.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};export{t as AllNames,o as Sizes,a as TakesTheTextColor,H as __namedExportsOrder,G as default};
