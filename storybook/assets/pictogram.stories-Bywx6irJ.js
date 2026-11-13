import{j as e}from"./iframe-D-pZXX8_.js";import{b1 as u,b as h}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const r=h.get("pictogram"),H={title:"Empty and error/Pictogram",component:u,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},o={name:"Sizes",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"The lines get thicker as the picture grows, so it looks balanced at each size."},source:{code:`<Pictogram name="document" size={32} />
<Pictogram name="document" size={48} />
<Pictogram name="document" size={64} />`}}}},t={name:"All names",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:""},source:{code:"{pictogramNames.map((n) => <Pictogram key={n} name={n} size={48} />)}"}}}},a={name:"Takes the text color",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"Set a text color on the area around it and the pictogram follows."},source:{code:'<div className="text-fg-muted"><Pictogram name="shield" size={48} title="Protected" /></div>'}}}},J=["Sizes","AllNames","TakesTheTextColor"];var s,n,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(g=(l=a.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};export{t as AllNames,o as Sizes,a as TakesTheTextColor,J as __namedExportsOrder,H as default};
