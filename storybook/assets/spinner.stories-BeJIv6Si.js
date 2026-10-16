import{j as r}from"./iframe-DSdOWv-_.js";import{bw as d,b as c}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const o=c.get("spinner"),q={title:"Empty and error/Spinner",component:d,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"Sizes",render:()=>r.jsx(r.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Four sizes, from small to large."},source:{code:`<div className="flex items-center gap-4">
  <Spinner size={14} />
  <Spinner />
  <Spinner size={24} />
  <Spinner size={32} />
</div>`}}}},n={name:"Inside a button",render:()=>r.jsx(r.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"Place it before a button's label to show something is happening. The label should say what."},source:{code:`<Button variant="secondary" disabled leading={<Spinner size={14} label="Saving" />}>
  Saving
</Button>`}}}},C=["Sizes","InsideAButton"];var s,t,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Sizes",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Four sizes, from small to large."
      },
      source: {
        code: "<div className=\\"flex items-center gap-4\\">\\n  <Spinner size={14} />\\n  <Spinner />\\n  <Spinner size={24} />\\n  <Spinner size={32} />\\n</div>"
      }
    }
  }
}`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Inside a button",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Place it before a button's label to show something is happening. The label should say what."
      },
      source: {
        code: "<Button variant=\\"secondary\\" disabled leading={<Spinner size={14} label=\\"Saving\\" />}>\\n  Saving\\n</Button>"
      }
    }
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};export{n as InsideAButton,e as Sizes,C as __namedExportsOrder,q as default};
