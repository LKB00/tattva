import{j as e}from"./iframe-C8v_uZy_.js";import{b4 as q,b as k}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const n=k.get("question-set"),J={title:"Asking and showing work/QuestionSet",component:q,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},s={name:"An agent's clarifying questions",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"One question at a time with options, as agent tools ask them. The suggested option is marked Recommended and listed first. The trust question takes several answers. Every question offers You decide, the optional one offers Skip, and Use the defaults ends the questions. Number keys pick an option. Before the final button, a last look lists every answer with a Change link."},source:{code:`const questions = [
  { id: "kind", label: "Kind", question: "What are you building?", recommended: "chat", options: [
    { value: "chat", label: "Chat assistant", description: "People ask, it answers with sources" },
    { value: "agent", label: "Agent console", description: "It plans, acts and asks before big steps" },
  ] },
  { id: "trust", label: "Trust", question: "What helps people trust the answers? Pick any.", multiple: true, recommended: "sources", options: [
    { value: "sources", label: "Sources" }, { value: "feedback", label: "Feedback" }, { value: "approvals", label: "Approvals" },
  ] },
  { id: "mode", label: "Look", question: "Light, dark or both?", required: false, recommended: "both", options: [
    { value: "both", label: "Both, following the device" }, { value: "dark", label: "Dark only" },
  ] },
];

function Example() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  return (
    <QuestionSet title="Three quick questions" questions={questions} answers={answers}
      onAnswer={(id, v) => setAnswers((a) => ({ ...a, [id]: v }))}
      allowAgentDecides allowSkip review onUseDefaults={useDefaults}
      onSubmit={() => send({ ...answers, trust: answerValues(answers.trust) })} submitLabel="Start building" />
  );
}`}}}},t={name:"Three questions with a number and a date",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Each question has options and a Something else choice. The amount takes a number with a rupee sign. The date takes a date. After submit the parent swaps the card for a Receipt."},source:{code:`const questions = [
  { id: "why", label: "Reason", question: "Why are you asking for a refund?", options: [
    { value: "damaged", label: "It arrived damaged", description: "Broken, torn or not working" },
    { value: "wrong", label: "Wrong item", description: "Not what you ordered" },
  ], input: { kind: "text", placeholder: "Tell us in a few words" } },
  { id: "amount", label: "Amount", question: "How much did you pay?", options: [
    { value: "2340", label: "₹2,340" },
    { value: "1200", label: "₹1,200" },
  ], input: { kind: "number", prefix: "₹" } },
  { id: "date", label: "Date", question: "When did it arrive?", options: [
    { value: "today", label: "Today" },
    { value: "yesterday", label: "Yesterday" },
  ], input: { kind: "date" } },
];

function Example() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  if (done) {
    return (
      <Receipt title="Answered 3 questions" meta="Just now">
        <ul className="m-0 list-none space-y-1 p-0 text-body leading-5">{questions.map((q) => <li key={q.id}><span className="text-fg-muted">{q.label}: </span>{answers[q.id]}</li>)}</ul>
      </Receipt>
    );
  }
  return (
    <QuestionSet title="Three quick questions" runName="Refund request" questions={questions} answers={answers}
      onAnswer={(id, v) => setAnswers((a) => ({ ...a, [id]: v }))} onSubmit={() => setDone(true)} submitLabel="Send to the agent" />
  );
}`}}}},a={name:"With facts already known",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"Pass known to list what the agent already has. It shows above the tabs so the person does not type it again."},source:{code:`// "questions" is the same list as the first example; here only the last two are used.
function Example() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  return (
    <QuestionSet title="Two things I could not find" questions={questions.slice(1)} answers={answers}
      onAnswer={(id, v) => setAnswers((a) => ({ ...a, [id]: v }))} onSubmit={() => {}}
      known={[{ label: "Order", value: "#48213" }, { label: "Item", value: "Kettle" }, { label: "Reason", value: "Arrived damaged" }]} />
  );
}`}}}},r={name:"An answer sent back",render:()=>e.jsx(e.Fragment,{children:n.examples[3].render()}),parameters:{docs:{description:{story:"The answers start filled in, with an amount that is too high. Press Continue: the parent reports the problem through errors, and the card jumps to that question and shows the message."},source:{code:`// "questions" is the same list as the first example.
function Example() {
  const [answers, setAnswers] = useState<Record<string, string>>({ why: "damaged", amount: "99999", date: "yesterday" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  return (
    <QuestionSet title="Check your answers" questions={questions} answers={answers} errors={errors}
      onAnswer={(id, v) => { setAnswers((a) => ({ ...a, [id]: v })); setErrors((e) => ({ ...e, [id]: "" })); }}
      onSubmit={() => setErrors(Number(answers.amount) > 5000 ? { amount: "That is more than the order total of ₹2,340. Check the amount." } : {})} />
  );
}`}}}},V=["AnAgentSClarifyingQuestions","ThreeQuestionsWithANumberAndADate","WithFactsAlreadyKnown","AnAnswerSentBack"];var o,i,u;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "An agent's clarifying questions",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "One question at a time with options, as agent tools ask them. The suggested option is marked Recommended and listed first. The trust question takes several answers. Every question offers You decide, the optional one offers Skip, and Use the defaults ends the questions. Number keys pick an option. Before the final button, a last look lists every answer with a Change link."
      },
      source: {
        code: "const questions = [\\n  { id: \\"kind\\", label: \\"Kind\\", question: \\"What are you building?\\", recommended: \\"chat\\", options: [\\n    { value: \\"chat\\", label: \\"Chat assistant\\", description: \\"People ask, it answers with sources\\" },\\n    { value: \\"agent\\", label: \\"Agent console\\", description: \\"It plans, acts and asks before big steps\\" },\\n  ] },\\n  { id: \\"trust\\", label: \\"Trust\\", question: \\"What helps people trust the answers? Pick any.\\", multiple: true, recommended: \\"sources\\", options: [\\n    { value: \\"sources\\", label: \\"Sources\\" }, { value: \\"feedback\\", label: \\"Feedback\\" }, { value: \\"approvals\\", label: \\"Approvals\\" },\\n  ] },\\n  { id: \\"mode\\", label: \\"Look\\", question: \\"Light, dark or both?\\", required: false, recommended: \\"both\\", options: [\\n    { value: \\"both\\", label: \\"Both, following the device\\" }, { value: \\"dark\\", label: \\"Dark only\\" },\\n  ] },\\n];\\n\\nfunction Example() {\\n  const [answers, setAnswers] = useState<Record<string, string>>({});\\n  return (\\n    <QuestionSet title=\\"Three quick questions\\" questions={questions} answers={answers}\\n      onAnswer={(id, v) => setAnswers((a) => ({ ...a, [id]: v }))}\\n      allowAgentDecides allowSkip review onUseDefaults={useDefaults}\\n      onSubmit={() => send({ ...answers, trust: answerValues(answers.trust) })} submitLabel=\\"Start building\\" />\\n  );\\n}"
      }
    }
  }
}`,...(u=(i=s.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var d,l,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Three questions with a number and a date",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Each question has options and a Something else choice. The amount takes a number with a rupee sign. The date takes a date. After submit the parent swaps the card for a Receipt."
      },
      source: {
        code: "const questions = [\\n  { id: \\"why\\", label: \\"Reason\\", question: \\"Why are you asking for a refund?\\", options: [\\n    { value: \\"damaged\\", label: \\"It arrived damaged\\", description: \\"Broken, torn or not working\\" },\\n    { value: \\"wrong\\", label: \\"Wrong item\\", description: \\"Not what you ordered\\" },\\n  ], input: { kind: \\"text\\", placeholder: \\"Tell us in a few words\\" } },\\n  { id: \\"amount\\", label: \\"Amount\\", question: \\"How much did you pay?\\", options: [\\n    { value: \\"2340\\", label: \\"₹2,340\\" },\\n    { value: \\"1200\\", label: \\"₹1,200\\" },\\n  ], input: { kind: \\"number\\", prefix: \\"₹\\" } },\\n  { id: \\"date\\", label: \\"Date\\", question: \\"When did it arrive?\\", options: [\\n    { value: \\"today\\", label: \\"Today\\" },\\n    { value: \\"yesterday\\", label: \\"Yesterday\\" },\\n  ], input: { kind: \\"date\\" } },\\n];\\n\\nfunction Example() {\\n  const [answers, setAnswers] = useState<Record<string, string>>({});\\n  const [done, setDone] = useState(false);\\n  if (done) {\\n    return (\\n      <Receipt title=\\"Answered 3 questions\\" meta=\\"Just now\\">\\n        <ul className=\\"m-0 list-none space-y-1 p-0 text-body leading-5\\">{questions.map((q) => <li key={q.id}><span className=\\"text-fg-muted\\">{q.label}: </span>{answers[q.id]}</li>)}</ul>\\n      </Receipt>\\n    );\\n  }\\n  return (\\n    <QuestionSet title=\\"Three quick questions\\" runName=\\"Refund request\\" questions={questions} answers={answers}\\n      onAnswer={(id, v) => setAnswers((a) => ({ ...a, [id]: v }))} onSubmit={() => setDone(true)} submitLabel=\\"Send to the agent\\" />\\n  );\\n}"
      }
    }
  }
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,p,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "With facts already known",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Pass known to list what the agent already has. It shows above the tabs so the person does not type it again."
      },
      source: {
        code: "// \\"questions\\" is the same list as the first example; here only the last two are used.\\nfunction Example() {\\n  const [answers, setAnswers] = useState<Record<string, string>>({});\\n  return (\\n    <QuestionSet title=\\"Two things I could not find\\" questions={questions.slice(1)} answers={answers}\\n      onAnswer={(id, v) => setAnswers((a) => ({ ...a, [id]: v }))} onSubmit={() => {}}\\n      known={[{ label: \\"Order\\", value: \\"#48213\\" }, { label: \\"Item\\", value: \\"Kettle\\" }, { label: \\"Reason\\", value: \\"Arrived damaged\\" }]} />\\n  );\\n}"
      }
    }
  }
}`,...(h=(p=a.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var w,b,g;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "An answer sent back",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The answers start filled in, with an amount that is too high. Press Continue: the parent reports the problem through errors, and the card jumps to that question and shows the message."
      },
      source: {
        code: "// \\"questions\\" is the same list as the first example.\\nfunction Example() {\\n  const [answers, setAnswers] = useState<Record<string, string>>({ why: \\"damaged\\", amount: \\"99999\\", date: \\"yesterday\\" });\\n  const [errors, setErrors] = useState<Record<string, string>>({});\\n  return (\\n    <QuestionSet title=\\"Check your answers\\" questions={questions} answers={answers} errors={errors}\\n      onAnswer={(id, v) => { setAnswers((a) => ({ ...a, [id]: v })); setErrors((e) => ({ ...e, [id]: \\"\\" })); }}\\n      onSubmit={() => setErrors(Number(answers.amount) > 5000 ? { amount: \\"That is more than the order total of ₹2,340. Check the amount.\\" } : {})} />\\n  );\\n}"
      }
    }
  }
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};export{s as AnAgentSClarifyingQuestions,r as AnAnswerSentBack,t as ThreeQuestionsWithANumberAndADate,a as WithFactsAlreadyKnown,V as __namedExportsOrder,J as default};
