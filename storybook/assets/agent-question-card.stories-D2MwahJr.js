import{j as e}from"./iframe-C8v_uZy_.js";import{b as x}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import{A}from"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const n=x.get("agent-question-card"),J={title:"Assistants/AgentQuestionCard",component:A,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},o={name:"Choose an approach",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Tap a choice. The card collapses to a summary and Change reopens it."},source:{code:`<AgentQuestionCard
  question="Should I plan the trip around museums or the beach?"
  reason="approach"
  runName="Trip plan"
  options={[
    { id: "m", label: "Museums", description: "Indoor, good for rainy days" },
    { id: "b", label: "Beach", description: "Outdoor, relaxed pace" },
    { id: "x", label: "A mix of both" },
  ]}
  onAnswer={(a) => console.log(a)}
/>`}}}},r={name:"Missing information",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Two choices and a box for any other answer."},source:{code:'<AgentQuestionCard question="How many people are travelling?" reason="information" options={[{ id: "2", label: "2 people" }, { id: "4", label: "4 people" }]} />'}}}},s={name:"A sign-in is needed",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"The card never asks for a password in text. You sign in in the other window, then tell the assistant."},source:{code:'<AgentQuestionCard question="The airline site wants you to sign in before I can see your booking." reason="sign-in" options={[{ id: "done", label: "I have signed in" }]} />'}}}},a={name:"Confirm a risky step",render:()=>e.jsx(e.Fragment,{children:n.examples[3].render()}),parameters:{docs:{description:{story:"Say what will happen and make both answers easy to reach."},source:{code:'<AgentQuestionCard question="I am about to delete 12 old invoices. Is that OK?" reason="risky-step" options={[{ id: "yes", label: "Yes, delete them" }, { id: "no", label: "No, keep them" }]} />'}}}},L=["ChooseAnApproach","MissingInformation","ASignInIsNeeded","ConfirmARiskyStep"];var t,i,d;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Choose an approach",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Tap a choice. The card collapses to a summary and Change reopens it."
      },
      source: {
        code: "<AgentQuestionCard\\n  question=\\"Should I plan the trip around museums or the beach?\\"\\n  reason=\\"approach\\"\\n  runName=\\"Trip plan\\"\\n  options={[\\n    { id: \\"m\\", label: \\"Museums\\", description: \\"Indoor, good for rainy days\\" },\\n    { id: \\"b\\", label: \\"Beach\\", description: \\"Outdoor, relaxed pace\\" },\\n    { id: \\"x\\", label: \\"A mix of both\\" },\\n  ]}\\n  onAnswer={(a) => console.log(a)}\\n/>"
      }
    }
  }
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,c,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Missing information",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Two choices and a box for any other answer."
      },
      source: {
        code: "<AgentQuestionCard question=\\"How many people are travelling?\\" reason=\\"information\\" options={[{ id: \\"2\\", label: \\"2 people\\" }, { id: \\"4\\", label: \\"4 people\\" }]} />"
      }
    }
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,u,h;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "A sign-in is needed",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The card never asks for a password in text. You sign in in the other window, then tell the assistant."
      },
      source: {
        code: "<AgentQuestionCard question=\\"The airline site wants you to sign in before I can see your booking.\\" reason=\\"sign-in\\" options={[{ id: \\"done\\", label: \\"I have signed in\\" }]} />"
      }
    }
  }
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,y,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Confirm a risky step",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Say what will happen and make both answers easy to reach."
      },
      source: {
        code: "<AgentQuestionCard question=\\"I am about to delete 12 old invoices. Is that OK?\\" reason=\\"risky-step\\" options={[{ id: \\"yes\\", label: \\"Yes, delete them\\" }, { id: \\"no\\", label: \\"No, keep them\\" }]} />"
      }
    }
  }
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};export{s as ASignInIsNeeded,o as ChooseAnApproach,a as ConfirmARiskyStep,r as MissingInformation,L as __namedExportsOrder,J as default};
