import{j as e}from"./iframe-C8v_uZy_.js";import{b as k}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import{T as v}from"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const t=k.get("takeover-bar"),_={title:"Assistants/TakeoverBar",component:v,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},o={name:"Take over, then give it back",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Press Take over to pause the assistant. Resume or Hand back lets it continue. The second button shows the watch state."},source:{code:`const [state, setState] = useState<TakeoverState>("agent-working");
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
