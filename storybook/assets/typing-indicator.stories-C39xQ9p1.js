import{j as t}from"./iframe-C8v_uZy_.js";import{ca as c,b as d}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const s=d.get("typing-indicator"),_={title:"Conversation/TypingIndicator",component:c,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},e={name:"Default",render:()=>t.jsx(t.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:'The default label is "Assistant is thinking".'},source:{code:"<TypingIndicator />"}}}},r={name:"Where the reply will appear",render:()=>t.jsx(t.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"Placed at the start of the coming reply, under the person's message, so nothing jumps when text arrives."},source:{code:`<div className="w-full max-w-md space-y-4">
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
