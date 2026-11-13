import{j as e}from"./iframe-D-pZXX8_.js";import{b as k}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import{T as v}from"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const t=k.get("takeover-bar"),_={title:"Assistants/TakeoverBar",component:v,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},o={name:"Take over, then give it back",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Press Take over to pause the assistant. Resume or Hand back lets it continue. The second button shows the watch state."},source:{code:`const [state, setState] = useState<TakeoverState>("agent-working");
<TakeoverBar
  state={state}
  step="Entering your card number on the checkout page"
  onTakeOver={() => setState("you-control")}
  onResume={() => setState("agent-working")}
  onHandBack={() => setState("agent-working")}
/>`}}}},r={name:"You have control",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"The assistant is paused and not doing anything. This is the state to show after a person takes over."},source:{code:'<TakeoverBar state="you-control" onResume={() => {}} onHandBack={() => {}} />'}}}},a={name:"A step you need to watch",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"Use this for sensitive pages such as payment. It is the only state in amber, because you have to act."},source:{code:'<TakeoverBar state="supervise" step="Entering your card number on the checkout page" onTakeOver={() => {}} onResume={() => {}} />'}}}},q=["TakeOverThenGiveItBack","YouHaveControl","AStepYouNeedToWatch"];var n,s,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Take over, then give it back",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press Take over to pause the assistant. Resume or Hand back lets it continue. The second button shows the watch state."
      },
      source: {
        code: "const [state, setState] = useState<TakeoverState>(\\"agent-working\\");\\n<TakeoverBar\\n  state={state}\\n  step=\\"Entering your card number on the checkout page\\"\\n  onTakeOver={() => setState(\\"you-control\\")}\\n  onResume={() => setState(\\"agent-working\\")}\\n  onHandBack={() => setState(\\"agent-working\\")}\\n/>"
      }
    }
  }
}`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var i,p,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "You have control",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The assistant is paused and not doing anything. This is the state to show after a person takes over."
      },
      source: {
        code: "<TakeoverBar state=\\"you-control\\" onResume={() => {}} onHandBack={() => {}} />"
      }
    }
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,u,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "A step you need to watch",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Use this for sensitive pages such as payment. It is the only state in amber, because you have to act."
      },
      source: {
        code: "<TakeoverBar state=\\"supervise\\" step=\\"Entering your card number on the checkout page\\" onTakeOver={() => {}} onResume={() => {}} />"
      }
    }
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};export{a as AStepYouNeedToWatch,o as TakeOverThenGiveItBack,r as YouHaveControl,q as __namedExportsOrder,_ as default};
