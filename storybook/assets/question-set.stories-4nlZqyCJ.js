import{j as e}from"./iframe-DSdOWv-_.js";import{b1 as h,b as w}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const n=w.get("question-set"),H={title:"Asking and showing work/QuestionSet",component:h,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},t={name:"Three questions with a number and a date",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Each question has options and a Something else choice. The amount takes a number with a rupee sign. The date takes a date. After submit the parent swaps the card for a Receipt."},source:{code:`const questions = [
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
}`}}}},s={name:"With facts already known",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Pass known to list what the agent already has. It shows above the tabs so the person does not type it again."},source:{code:`// "questions" is the same list as the first example; here only the last two are used.
function Example() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  return (
    <QuestionSet title="Two things I could not find" questions={questions.slice(1)} answers={answers}
      onAnswer={(id, v) => setAnswers((a) => ({ ...a, [id]: v }))} onSubmit={() => {}}
      known={[{ label: "Order", value: "#48213" }, { label: "Item", value: "Kettle" }, { label: "Reason", value: "Arrived damaged" }]} />
  );
}`}}}},r={name:"An answer sent back",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"The answers start filled in, with an amount that is too high. Press Continue: the parent reports the problem through errors, and the card jumps to that question and shows the message."},source:{code:`// "questions" is the same list as the first example.
function Example() {
  const [answers, setAnswers] = useState<Record<string, string>>({ why: "damaged", amount: "99999", date: "yesterday" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  return (
    <QuestionSet title="Check your answers" questions={questions} answers={answers} errors={errors}
      onAnswer={(id, v) => { setAnswers((a) => ({ ...a, [id]: v })); setErrors((e) => ({ ...e, [id]: "" })); }}
      onSubmit={() => setErrors(Number(answers.amount) > 5000 ? { amount: "That is more than the order total of ₹2,340. Check the amount." } : {})} />
  );
}`}}}},J=["ThreeQuestionsWithANumberAndADate","WithFactsAlreadyKnown","AnAnswerSentBack"];var a,o,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Three questions with a number and a date",
  render: () => <>{doc.examples[0].render()}</>,
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var d,u,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "With facts already known",
  render: () => <>{doc.examples[1].render()}</>,
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
}`,...(l=(u=s.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var m,c,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "An answer sent back",
  render: () => <>{doc.examples[2].render()}</>,
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
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};export{r as AnAnswerSentBack,t as ThreeQuestionsWithANumberAndADate,s as WithFactsAlreadyKnown,J as __namedExportsOrder,H as default};
