import{j as r}from"./iframe-DSdOWv-_.js";import{b as c}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import{K as d}from"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const n=c.get("key-hint"),w={title:"Controls/KeyHint",component:d,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"Single keys",render:()=>r.jsx(r.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Put the label next to the action it triggers."},source:{code:'<p className="flex items-center gap-2 text-body leading-5">Press <KeyHint>Esc</KeyHint> to close</p>'}}}},t={name:"Combination",render:()=>r.jsx(r.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Use one label per key."},source:{code:'<p className="flex items-center gap-1 text-body leading-5"><KeyHint>Ctrl</KeyHint> + <KeyHint>Enter</KeyHint><span className="ml-2 text-fg-muted">Send</span></p>'}}}},z=["SingleKeys","Combination"];var o,s,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Single keys",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Put the label next to the action it triggers."
      },
      source: {
        code: "<p className=\\"flex items-center gap-2 text-body leading-5\\">Press <KeyHint>Esc</KeyHint> to close</p>"
      }
    }
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Combination",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Use one label per key."
      },
      source: {
        code: "<p className=\\"flex items-center gap-1 text-body leading-5\\"><KeyHint>Ctrl</KeyHint> + <KeyHint>Enter</KeyHint><span className=\\"ml-2 text-fg-muted\\">Send</span></p>"
      }
    }
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as Combination,e as SingleKeys,z as __namedExportsOrder,w as default};
