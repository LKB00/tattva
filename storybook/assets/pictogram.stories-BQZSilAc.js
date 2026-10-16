import{j as e}from"./iframe-DSdOWv-_.js";import{aU as u,b as h}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const r=h.get("pictogram"),G={title:"Empty and error/Pictogram",component:u,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},o={name:"Sizes",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"The lines get thicker as the picture grows, so it looks balanced at each size."},source:{code:`<Pictogram name="document" size={32} />
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
