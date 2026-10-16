import{j as e}from"./iframe-DSdOWv-_.js";import{aB as u,b as g}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const r=g.get("media-grid"),z={title:"Creating/MediaGrid",component:u,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},o={name:"Gallery",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Every image has the same shape, so rows stay even."},source:{code:'<MediaGrid label="Trip photos" columns={3} items={items} />'}}}},s={name:"Selectable",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Each image has a checkbox button. A check mark shows what is chosen, not only a ring. The count line announces changes."},source:{code:'<MediaGrid label="Choose photos" columns={3} ratio="1:1" selectable items={items} />'}}}},a={name:"Empty",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"With no images, the grid shows an empty message. You can replace it."},source:{code:'<MediaGrid label="Uploads" items={[]} />'}}}},D=["Gallery","Selectable","Empty"];var t,n,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(h=(l=a.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};export{a as Empty,o as Gallery,s as Selectable,D as __namedExportsOrder,z as default};
