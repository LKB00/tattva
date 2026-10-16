import{j as t}from"./iframe-DSdOWv-_.js";import{ca as p,b as d}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const o=d.get("version-pager"),O={title:"Conversation/VersionPager",component:p,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},r={name:"Default",render:()=>t.jsx(t.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Starts on the latest version."},source:{code:"<VersionPager total={3} />"}}}},e={name:"Edited, with a branch button",render:()=>t.jsx(t.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"Use it when your product can start a new chat from this version."},source:{code:'<VersionPager total={2} edited branchAction={<Button size="sm" variant="ghost">Branch from here</Button>} />'}}}},R=["Default","EditedWithABranchButton"];var n,a,s;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Default",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Starts on the latest version."
      },
      source: {
        code: "<VersionPager total={3} />"
      }
    }
  }
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var i,m,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Edited, with a branch button",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Use it when your product can start a new chat from this version."
      },
      source: {
        code: "<VersionPager total={2} edited branchAction={<Button size=\\"sm\\" variant=\\"ghost\\">Branch from here</Button>} />"
      }
    }
  }
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};export{r as Default,e as EditedWithABranchButton,R as __namedExportsOrder,O as default};
