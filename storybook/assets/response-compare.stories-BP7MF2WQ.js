import{j as r}from"./iframe-DSdOWv-_.js";import{b8 as c,b as d}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const s=d.get("response-compare"),_={title:"Conversation/ResponseCompare",component:c,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},e={name:"Pick the better reply",render:()=>r.jsx(r.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"Press Choose this reply under one, or About the same."},source:{code:`<ResponseCompare
  replies={[
    { id: "a", label: "Reply A", content: <p>Your refund of ₹3,499 was sent on 12 October…</p> },
    { id: "b", label: "Reply B", content: <p>Refunds usually take a while…</p> },
  ]}
  onChoose={(id) => saveChoice(id)}
/>`}}}},o={name:"Without About the same",render:()=>r.jsx(r.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"Turn it off when a choice is required."},source:{code:"<ResponseCompare allowSame={false} replies={replies} onChoose={choose} />"}}}},I=["PickTheBetterReply","WithoutAboutTheSame"];var t,n,p;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Pick the better reply",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press Choose this reply under one, or About the same."
      },
      source: {
        code: "<ResponseCompare\\n  replies={[\\n    { id: \\"a\\", label: \\"Reply A\\", content: <p>Your refund of ₹3,499 was sent on 12 October…</p> },\\n    { id: \\"b\\", label: \\"Reply B\\", content: <p>Refunds usually take a while…</p> },\\n  ]}\\n  onChoose={(id) => saveChoice(id)}\\n/>"
      }
    }
  }
}`,...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var a,i,m;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Without About the same",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Turn it off when a choice is required."
      },
      source: {
        code: "<ResponseCompare allowSame={false} replies={replies} onChoose={choose} />"
      }
    }
  }
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as PickTheBetterReply,o as WithoutAboutTheSame,I as __namedExportsOrder,_ as default};
