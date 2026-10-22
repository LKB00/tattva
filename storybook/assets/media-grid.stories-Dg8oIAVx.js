import{j as e}from"./iframe-C8v_uZy_.js";import{aF as u,b as g}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const r=g.get("media-grid"),B={title:"Creating/MediaGrid",component:u,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},o={name:"Gallery",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Every image has the same shape, so rows stay even."},source:{code:'<MediaGrid label="Trip photos" columns={3} items={items} />'}}}},s={name:"Selectable",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Each image has a checkbox button. A check mark shows what is chosen, not only a ring. The count line announces changes."},source:{code:'<MediaGrid label="Choose photos" columns={3} ratio="1:1" selectable items={items} />'}}}},a={name:"Empty",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"With no images, the grid shows an empty message. You can replace it."},source:{code:'<MediaGrid label="Uploads" items={[]} />'}}}},D=["Gallery","Selectable","Empty"];var t,n,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(h=(l=a.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};export{a as Empty,o as Gallery,s as Selectable,D as __namedExportsOrder,B as default};
