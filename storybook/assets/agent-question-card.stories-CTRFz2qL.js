import{j as e}from"./iframe-J6_2PHET.js";import{b as C}from"./registry-DJg46al6.js";import{a as t}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import{A as f}from"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=C.get("agent-question-card"),L={title:"Assistants/AgentQuestionCard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},o={name:"Choose an approach",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Tap a choice. The card collapses to a summary and Change reopens it."},source:t("AgentQuestionCard")}}},n={name:"Missing information",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Two choices and a box for any other answer."},source:t("AgentQuestionCard")}}},s={name:"A sign-in is needed",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"The card never asks for a password in text. You sign in in the other window, then tell the assistant."},source:t("AgentQuestionCard")}}},a={name:"Confirm a risky step",render:()=>e.jsx(e.Fragment,{children:r.examples[3].render()}),parameters:{docs:{description:{story:"Say what will happen and make both answers easy to reach."},source:t("AgentQuestionCard")}}},U=["ChooseAnApproach","MissingInformation","ASignInIsNeeded","ConfirmARiskyStep"];var i,p,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Choose an approach",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Tap a choice. The card collapses to a summary and Change reopens it."
      },
      source: proSource("AgentQuestionCard")
    }
  }
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,d,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Missing information",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Two choices and a box for any other answer."
      },
      source: proSource("AgentQuestionCard")
    }
  }
}`,...(h=(d=n.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var u,g,l;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "A sign-in is needed",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The card never asks for a password in text. You sign in in the other window, then tell the assistant."
      },
      source: proSource("AgentQuestionCard")
    }
  }
}`,...(l=(g=s.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var y,A,x;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Confirm a risky step",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Say what will happen and make both answers easy to reach."
      },
      source: proSource("AgentQuestionCard")
    }
  }
}`,...(x=(A=a.parameters)==null?void 0:A.docs)==null?void 0:x.source}}};export{s as ASignInIsNeeded,o as ChooseAnApproach,a as ConfirmARiskyStep,n as MissingInformation,U as __namedExportsOrder,L as default};
