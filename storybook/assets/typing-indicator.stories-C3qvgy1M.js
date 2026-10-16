import{j as t}from"./iframe-DSdOWv-_.js";import{c5 as c,b as d}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const s=d.get("typing-indicator"),_={title:"Conversation/TypingIndicator",component:c,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},e={name:"Default",render:()=>t.jsx(t.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:'The default label is "Assistant is thinking".'},source:{code:"<TypingIndicator />"}}}},r={name:"Where the reply will appear",render:()=>t.jsx(t.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"Placed at the start of the coming reply, under the person's message, so nothing jumps when text arrives."},source:{code:`<div className="w-full max-w-md space-y-4">
  <Message role="user">Can you check my order?</Message>
  <TypingIndicator label="The assistant is writing" />
</div>`}}}},O=["Default","WhereTheReplyWillAppear"];var n,o,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Default",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The default label is \\"Assistant is thinking\\"."
      },
      source: {
        code: "<TypingIndicator />"
      }
    }
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var i,p,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Where the reply will appear",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Placed at the start of the coming reply, under the person's message, so nothing jumps when text arrives."
      },
      source: {
        code: "<div className=\\"w-full max-w-md space-y-4\\">\\n  <Message role=\\"user\\">Can you check my order?</Message>\\n  <TypingIndicator label=\\"The assistant is writing\\" />\\n</div>"
      }
    }
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};export{e as Default,r as WhereTheReplyWillAppear,O as __namedExportsOrder,_ as default};
