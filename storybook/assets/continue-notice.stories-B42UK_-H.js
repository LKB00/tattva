import{j as t}from"./iframe-DSdOWv-_.js";import{S as a,b as d}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const n=d.get("continue-notice"),k={title:"Conversation/ContinueNotice",component:a,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"Hit the length limit",render:()=>t.jsx(t.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Press Continue to carry on from where it stopped."},source:{code:'<ContinueNotice reason="length" onContinue={continueReply} />'}}}},o={name:"Stopped, and lost",render:()=>t.jsx(t.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"The person pressed Stop; the connection dropped."},source:{code:`<ContinueNotice reason="stopped" onContinue={continueReply} />
<ContinueNotice reason="lost" onContinue={retry} />`}}}},q=["HitTheLengthLimit","StoppedAndLost"];var r,i,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Hit the length limit",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press Continue to carry on from where it stopped."
      },
      source: {
        code: "<ContinueNotice reason=\\"length\\" onContinue={continueReply} />"
      }
    }
  }
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var p,c,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Stopped, and lost",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The person pressed Stop; the connection dropped."
      },
      source: {
        code: "<ContinueNotice reason=\\"stopped\\" onContinue={continueReply} />\\n<ContinueNotice reason=\\"lost\\" onContinue={retry} />"
      }
    }
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};export{e as HitTheLengthLimit,o as StoppedAndLost,q as __namedExportsOrder,k as default};
