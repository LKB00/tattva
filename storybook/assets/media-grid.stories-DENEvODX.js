import{j as e}from"./iframe-D-pZXX8_.js";import{aK as u,b as g}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const r=g.get("media-grid"),z={title:"Creating/MediaGrid",component:u,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},o={name:"Gallery",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Every image has the same shape, so rows stay even."},source:{code:'<MediaGrid label="Trip photos" columns={3} items={items} />'}}}},s={name:"Selectable",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Each image has a checkbox button. A check mark shows what is chosen, not only a ring. The count line announces changes."},source:{code:'<MediaGrid label="Choose photos" columns={3} ratio="1:1" selectable items={items} />'}}}},a={name:"Empty",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"With no images, the grid shows an empty message. You can replace it."},source:{code:'<MediaGrid label="Uploads" items={[]} />'}}}},B=["Gallery","Selectable","Empty"];var t,n,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Gallery",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Every image has the same shape, so rows stay even."
      },
      source: {
        code: "<MediaGrid label=\\"Trip photos\\" columns={3} items={items} />"
      }
    }
  }
}`,...(i=(n=o.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var m,c,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Selectable",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Each image has a checkbox button. A check mark shows what is chosen, not only a ring. The count line announces changes."
      },
      source: {
        code: "<MediaGrid label=\\"Choose photos\\" columns={3} ratio=\\"1:1\\" selectable items={items} />"
      }
    }
  }
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,l,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Empty",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With no images, the grid shows an empty message. You can replace it."
      },
      source: {
        code: "<MediaGrid label=\\"Uploads\\" items={[]} />"
      }
    }
  }
}`,...(h=(l=a.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};export{a as Empty,o as Gallery,s as Selectable,B as __namedExportsOrder,z as default};
