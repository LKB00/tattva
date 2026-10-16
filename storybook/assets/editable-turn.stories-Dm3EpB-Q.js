import{j as r}from"./iframe-DSdOWv-_.js";import{a5 as i,b as a}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const n=a.get("editable-turn"),F={title:"Conversation/EditableTurn",component:i,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"Edit and send again",render:()=>r.jsx(r.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Press Edit, change the question, and Send. Then use the pager to go back."},source:{code:`<EditableTurn
  versions={versions}
  current={current}
  onChangeVersion={setCurrent}
  onResend={(text) => sendEdit(text)}
  onCopy={copy}
/>`}}}},I=["EditAndSendAgain"];var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Edit and send again",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press Edit, change the question, and Send. Then use the pager to go back."
      },
      source: {
        code: "<EditableTurn\\n  versions={versions}\\n  current={current}\\n  onChangeVersion={setCurrent}\\n  onResend={(text) => sendEdit(text)}\\n  onCopy={copy}\\n/>"
      }
    }
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};export{e as EditAndSendAgain,I as __namedExportsOrder,F as default};
