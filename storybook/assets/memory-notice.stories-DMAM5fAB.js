import{j as t}from"./iframe-DSdOWv-_.js";import{aD as p,b as d}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const r=d.get("memory-notice"),R={title:"Trust/MemoryNotice",component:p,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},e={name:"With actions",render:()=>t.jsx(t.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Undo and close both hide the notice here."},source:{code:'<MemoryNotice saved="You prefer metric units." onManage={() => {}} onUndo={() => setShown(false)} onDismiss={() => setShown(false)} />'}}}},o={name:"Information only",render:()=>t.jsx(t.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"With no buttons, the notice only says what was saved."},source:{code:'<MemoryNotice title="Saved to this project" saved="The beta ships on the first Monday of November." />'}}}},k=["WithActions","InformationOnly"];var n,s,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "With actions",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Undo and close both hide the notice here."
      },
      source: {
        code: "<MemoryNotice saved=\\"You prefer metric units.\\" onManage={() => {}} onUndo={() => setShown(false)} onDismiss={() => setShown(false)} />"
      }
    }
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var a,m,c;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Information only",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With no buttons, the notice only says what was saved."
      },
      source: {
        code: "<MemoryNotice title=\\"Saved to this project\\" saved=\\"The beta ships on the first Monday of November.\\" />"
      }
    }
  }
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};export{o as InformationOnly,e as WithActions,k as __namedExportsOrder,R as default};
