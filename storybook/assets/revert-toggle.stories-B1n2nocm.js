import{j as t}from"./iframe-DSdOWv-_.js";import{ba as m,b as c}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const n=c.get("revert-toggle"),B={title:"Trust/RevertToggle",component:m,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"After an edit",render:()=>t.jsx(t.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Reverting drops the edit here, and the switch goes away."},source:{code:`<RevertToggle
  aiValue="Thank you for waiting. We expect to ship the fix on Friday."
  userValue={edit}
  onRevert={() => setEdit(undefined)}
/>`}}}},r={name:"Starting on the AI version",render:()=>t.jsx(t.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Opens on the AI version even when an edit exists."},source:{code:'<RevertToggle aiValue="Weekly sync, Tuesdays at 10:00." userValue="Weekly sync, Tuesdays at 09:30." defaultValue="ai" />'}}}},C=["AfterAnEdit","StartingOnTheAIVersion"];var o,s,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "After an edit",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Reverting drops the edit here, and the switch goes away."
      },
      source: {
        code: "<RevertToggle\\n  aiValue=\\"Thank you for waiting. We expect to ship the fix on Friday.\\"\\n  userValue={edit}\\n  onRevert={() => setEdit(undefined)}\\n/>"
      }
    }
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var i,d,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Starting on the AI version",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Opens on the AI version even when an edit exists."
      },
      source: {
        code: "<RevertToggle aiValue=\\"Weekly sync, Tuesdays at 10:00.\\" userValue=\\"Weekly sync, Tuesdays at 09:30.\\" defaultValue=\\"ai\\" />"
      }
    }
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};export{e as AfterAnEdit,r as StartingOnTheAIVersion,C as __namedExportsOrder,B as default};
