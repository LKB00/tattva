import{j as e}from"./iframe-DSdOWv-_.js";import{bz as h,b as u}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const r=u.get("stack"),G={title:"Full screens and layout/Stack",component:h,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},a={name:"Normal space",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"The default space between items."},source:{code:`<Stack gap={4}>
  <p>First</p>
  <p>Second</p>
  <p>Third</p>
</Stack>`}}}},t={name:"Tighter space",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"The same space shrinks a little in a tight area. This is a proposal."},source:{code:`<div data-density="compact">
  <Stack gap={4}>
    <p>First</p>
    <p>Second</p>
  </Stack>
</div>`}}}},s={name:"As a list",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"Use a list element when the items are a list."},source:{code:`<Stack as="ul" gap={2}>
  <li>Search</li>
  <li>Read</li>
</Stack>`}}}},H=["NormalSpace","TighterSpace","AsAList"];var n,o,p;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Normal space",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The default space between items."
      },
      source: {
        code: "<Stack gap={4}>\\n  <p>First</p>\\n  <p>Second</p>\\n  <p>Third</p>\\n</Stack>"
      }
    }
  }
}`,...(p=(o=a.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var i,c,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Tighter space",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The same space shrinks a little in a tight area. This is a proposal."
      },
      source: {
        code: "<div data-density=\\"compact\\">\\n  <Stack gap={4}>\\n    <p>First</p>\\n    <p>Second</p>\\n  </Stack>\\n</div>"
      }
    }
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,l,S;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "As a list",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Use a list element when the items are a list."
      },
      source: {
        code: "<Stack as=\\"ul\\" gap={2}>\\n  <li>Search</li>\\n  <li>Read</li>\\n</Stack>"
      }
    }
  }
}`,...(S=(l=s.parameters)==null?void 0:l.docs)==null?void 0:S.source}}};export{s as AsAList,a as NormalSpace,t as TighterSpace,H as __namedExportsOrder,G as default};
