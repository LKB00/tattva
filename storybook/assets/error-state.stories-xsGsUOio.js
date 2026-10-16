import{j as t}from"./iframe-DSdOWv-_.js";import{a7 as d,b as c}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const o=c.get("error-state"),_={title:"Empty and error/ErrorState",component:d,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},r={name:"With retry",render:()=>t.jsx(t.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Say whether the person's work is safe and offer a next step."},source:{code:'<ErrorState message="We could not load your conversation. Your draft is safe." onRetry={() => {}} />'}}}},e={name:"Custom title, no retry",render:()=>t.jsx(t.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"Leave out Try again when trying again will not help."},source:{code:'<ErrorState title="File not supported" message="Upload a PDF or a plain text file instead." />'}}}},I=["WithRetry","CustomTitleNoRetry"];var a,s,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "With retry",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Say whether the person's work is safe and offer a next step."
      },
      source: {
        code: "<ErrorState message=\\"We could not load your conversation. Your draft is safe.\\" onRetry={() => {}} />"
      }
    }
  }
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var i,p,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Custom title, no retry",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Leave out Try again when trying again will not help."
      },
      source: {
        code: "<ErrorState title=\\"File not supported\\" message=\\"Upload a PDF or a plain text file instead.\\" />"
      }
    }
  }
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};export{e as CustomTitleNoRetry,r as WithRetry,I as __namedExportsOrder,_ as default};
