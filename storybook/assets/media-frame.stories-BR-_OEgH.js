import{j as e}from"./iframe-DSdOWv-_.js";import{aA as v,b as F}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const a=F.get("media-frame"),O={title:"Creating/MediaFrame",component:v,tags:["autodocs"],parameters:{docs:{description:{component:a.summary+" "+a.description}}}},r={name:"Ratios",render:()=>e.jsx(e.Fragment,{children:a.examples[0].render()}),parameters:{docs:{description:{story:"Pick the shape that fits the content. The frame crops the image to fill it."},source:{code:`<div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
  <MediaFrame src={sampleImage(30)} alt="Harbor at low tide" ratio="1:1" caption="1:1" />
  <MediaFrame src={sampleImage(90)} alt="Terraced hillside" ratio="4:3" caption="4:3" />
  <MediaFrame src={sampleImage(160)} alt="Quiet street" ratio="16:9" caption="16:9" />
  <MediaFrame src={sampleImage(210)} alt="Lake under cloud" ratio="3:2" caption="3:2" />
</div>`}}}},o={name:"Loading and failed",render:()=>e.jsx(e.Fragment,{children:a.examples[1].render()}),parameters:{docs:{description:{story:"With a main color, the placeholder uses it. Without one, it shimmers. The error message offers Retry."},source:{code:`<div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
  <MediaFrame src="" alt="Loading with a known color" status="loading" dominantColor="var(--lime-soft)" caption="Known color" />
  <MediaFrame src="" alt="Loading with an unknown color" status="loading" caption="Unknown color" />
  <MediaFrame src="" alt="Failed image" status="error" onRetry={() => {}} caption="Error" />
</div>`}}}},t={name:"Made by AI, with details",render:()=>e.jsx(e.Fragment,{children:a.examples[2].render()}),parameters:{docs:{description:{story:"The label is written on the image. With details added, it opens a panel with more."},source:{code:`<div className="w-full max-w-sm">
  <MediaFrame
    src={sampleImage(270)}
    alt="Greenhouse interior with rows of seedlings"
    ratio="3:2"
    aiGenerated
    provenance={{ madeWith: "Image maker", date: "12 May", editedByPerson: false }}
    caption="Generated for the spring newsletter"
  />
</div>`}}}},i={name:"Decorative",render:()=>e.jsx(e.Fragment,{children:a.examples[3].render()}),parameters:{docs:{description:{story:"Decorative images have an empty description, so screen readers skip them."},source:{code:'<div className="w-full max-w-xs"><MediaFrame src={sampleImage(330)} alt="" decorative ratio="16:9" /></div>'}}}},q=["Ratios","LoadingAndFailed","MadeByAIWithDetails","Decorative"];var n,s,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Ratios",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Pick the shape that fits the content. The frame crops the image to fill it."
      },
      source: {
        code: "<div className=\\"grid w-full grid-cols-2 gap-3 sm:grid-cols-4\\">\\n  <MediaFrame src={sampleImage(30)} alt=\\"Harbor at low tide\\" ratio=\\"1:1\\" caption=\\"1:1\\" />\\n  <MediaFrame src={sampleImage(90)} alt=\\"Terraced hillside\\" ratio=\\"4:3\\" caption=\\"4:3\\" />\\n  <MediaFrame src={sampleImage(160)} alt=\\"Quiet street\\" ratio=\\"16:9\\" caption=\\"16:9\\" />\\n  <MediaFrame src={sampleImage(210)} alt=\\"Lake under cloud\\" ratio=\\"3:2\\" caption=\\"3:2\\" />\\n</div>"
      }
    }
  }
}`,...(d=(s=r.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var m,c,l;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Loading and failed",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With a main color, the placeholder uses it. Without one, it shimmers. The error message offers Retry."
      },
      source: {
        code: "<div className=\\"grid w-full grid-cols-1 gap-3 sm:grid-cols-3\\">\\n  <MediaFrame src=\\"\\" alt=\\"Loading with a known color\\" status=\\"loading\\" dominantColor=\\"var(--lime-soft)\\" caption=\\"Known color\\" />\\n  <MediaFrame src=\\"\\" alt=\\"Loading with an unknown color\\" status=\\"loading\\" caption=\\"Unknown color\\" />\\n  <MediaFrame src=\\"\\" alt=\\"Failed image\\" status=\\"error\\" onRetry={() => {}} caption=\\"Error\\" />\\n</div>"
      }
    }
  }
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,g,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Made by AI, with details",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The label is written on the image. With details added, it opens a panel with more."
      },
      source: {
        code: "<div className=\\"w-full max-w-sm\\">\\n  <MediaFrame\\n    src={sampleImage(270)}\\n    alt=\\"Greenhouse interior with rows of seedlings\\"\\n    ratio=\\"3:2\\"\\n    aiGenerated\\n    provenance={{ madeWith: \\"Image maker\\", date: \\"12 May\\", editedByPerson: false }}\\n    caption=\\"Generated for the spring newsletter\\"\\n  />\\n</div>"
      }
    }
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var u,w,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Decorative",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Decorative images have an empty description, so screen readers skip them."
      },
      source: {
        code: "<div className=\\"w-full max-w-xs\\"><MediaFrame src={sampleImage(330)} alt=\\"\\" decorative ratio=\\"16:9\\" /></div>"
      }
    }
  }
}`,...(f=(w=i.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};export{i as Decorative,o as LoadingAndFailed,t as MadeByAIWithDetails,r as Ratios,q as __namedExportsOrder,O as default};
