import{j as o}from"./iframe-DSdOWv-_.js";import{bk as s,b as p}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const r=p.get("share-panel"),_={title:"Conversation/SharePanel",component:s,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},e={name:"Share a chat",render:()=>o.jsx(o.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Change who can open it, copy the link, or stop sharing."},source:{code:`<SharePanel
  title="Lisbon trip plan"
  access={access}
  onAccessChange={setAccess}
  link="https://example.com/share/7KQ4M9XP"
  onStopSharing={stopSharing}
/>`}}}},v=["ShareAChat"];var t,n,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Share a chat",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Change who can open it, copy the link, or stop sharing."
      },
      source: {
        code: "<SharePanel\\n  title=\\"Lisbon trip plan\\"\\n  access={access}\\n  onAccessChange={setAccess}\\n  link=\\"https://example.com/share/7KQ4M9XP\\"\\n  onStopSharing={stopSharing}\\n/>"
      }
    }
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};export{e as ShareAChat,v as __namedExportsOrder,_ as default};
