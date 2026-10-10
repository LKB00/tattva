import{j as e}from"./iframe-J6_2PHET.js";import{aV as w,b as g}from"./registry-DJg46al6.js";import{a}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const t=g.get("question-set"),z={title:"Asking and showing work/QuestionSet",component:w,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},r={name:"Three questions with a number and a date",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Each question has options and a Something else choice. The amount takes a number with a rupee sign. The date takes a date. After submit the parent swaps the card for a Receipt."},source:a("QuestionSet")}}},s={name:"With facts already known",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Pass known to list what the agent already has. It shows above the tabs so the person does not type it again."},source:a("QuestionSet")}}},o={name:"An answer sent back",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"The answers start filled in, with an amount that is too high. Press Continue: the parent reports the problem through errors, and the card jumps to that question and shows the message."},source:a("QuestionSet")}}},G=["ThreeQuestionsWithANumberAndADate","WithFactsAlreadyKnown","AnAnswerSentBack"];var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Three questions with a number and a date",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Each question has options and a Something else choice. The amount takes a number with a rupee sign. The date takes a date. After submit the parent swaps the card for a Receipt."
      },
      source: proSource("QuestionSet")
    }
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "With facts already known",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Pass known to list what the agent already has. It shows above the tabs so the person does not type it again."
      },
      source: proSource("QuestionSet")
    }
  }
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var h,u,l;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "An answer sent back",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The answers start filled in, with an amount that is too high. Press Continue: the parent reports the problem through errors, and the card jumps to that question and shows the message."
      },
      source: proSource("QuestionSet")
    }
  }
}`,...(l=(u=o.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};export{o as AnAnswerSentBack,r as ThreeQuestionsWithANumberAndADate,s as WithFactsAlreadyKnown,G as __namedExportsOrder,z as default};
