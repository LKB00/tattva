import{j as e}from"./iframe-DSdOWv-_.js";import{b as h}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import{M as x}from"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const r=h.get("meter-bar"),z={title:"Numbers/MeterBar",component:x,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},t={name:"Plain",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"A dark fill, as wide as the amount used out of the limit."},source:{code:'<MeterBar label="Space used" value={40} valueText="40% of the space" />'}}}},a={name:"Past the warning point",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"At 85 with a warning point of 80 percent, the fill turns amber. The words beside it say why."},source:{code:`<div className="w-64 space-y-1">
  <MeterBar label="Space used" value={85} warnAt={0.8} valueText="85% of the space" />
  <p className="text-small leading-4 text-attention-fg">85% used. Start a new chat soon.</p>
</div>`}}}},n={name:"A limit other than 100",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"Set a limit when the amount is not a percent."},source:{code:'<MeterBar label="Credits used" value={30} max={120} valueText="30 of 120 credits" />'}}}},D=["Plain","PastTheWarningPoint","ALimitOtherThan100"];var s,o,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Plain",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A dark fill, as wide as the amount used out of the limit."
      },
      source: {
        code: "<MeterBar label=\\"Space used\\" value={40} valueText=\\"40% of the space\\" />"
      }
    }
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var m,p,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Past the warning point",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "At 85 with a warning point of 80 percent, the fill turns amber. The words beside it say why."
      },
      source: {
        code: "<div className=\\"w-64 space-y-1\\">\\n  <MeterBar label=\\"Space used\\" value={85} warnAt={0.8} valueText=\\"85% of the space\\" />\\n  <p className=\\"text-small leading-4 text-attention-fg\\">85% used. Start a new chat soon.</p>\\n</div>"
      }
    }
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,l,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "A limit other than 100",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Set a limit when the amount is not a percent."
      },
      source: {
        code: "<MeterBar label=\\"Credits used\\" value={30} max={120} valueText=\\"30 of 120 credits\\" />"
      }
    }
  }
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};export{n as ALimitOtherThan100,a as PastTheWarningPoint,t as Plain,D as __namedExportsOrder,z as default};
