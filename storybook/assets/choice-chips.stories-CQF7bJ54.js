import{j as e}from"./iframe-D-pZXX8_.js";import{H as h,b as g}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const s=g.get("choice-chips"),H={title:"Conversation/ChoiceChips",component:h,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},n={name:"One answer, with a suggestion",render:()=>e.jsx(e.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"The suggested answer is listed first and says so. Nothing is picked until the person picks."},source:{code:`const [room, setRoom] = useState<string | string[]>("");

<ChoiceChips label="Which room do you want?" recommended="double" value={room} onChange={setRoom}
  options={[{ value: "double", label: "Double" }, { value: "twin", label: "Twin" }, { value: "suite", label: "Suite" }]} />`}}}},a={name:"Several answers",render:()=>e.jsx(e.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"With multiple, each chip is a checkbox and the value is a list."},source:{code:`const [nights, setNights] = useState<string | string[]>(["sat"]);

<ChoiceChips multiple label="Which nights?" value={nights} onChange={setNights}
  options={[{ value: "fri", label: "Friday" }, { value: "sat", label: "Saturday" }, { value: "sun", label: "Sunday" }]} />`}}}},t={name:"Inside an answer",render:()=>e.jsx(e.Fragment,{children:s.examples[2].render()}),parameters:{docs:{description:{story:"The message asks the question in words, so the chips' own label is hidden but still read."},source:{code:`<Message role="assistant">
  <p>I found hotels in three areas. Where would you like to stay?</p>
  <ChoiceChips hideLabel label="Area to stay in" value={area} onChange={setArea}
    options={[{ value: "marais", label: "Le Marais" }, { value: "montmartre", label: "Montmartre" }, { value: "left", label: "Left Bank" }]} />
</Message>`}}}},z=["OneAnswerWithASuggestion","SeveralAnswers","InsideAnAnswer"];var r,o,i;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "One answer, with a suggestion",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The suggested answer is listed first and says so. Nothing is picked until the person picks."
      },
      source: {
        code: "const [room, setRoom] = useState<string | string[]>(\\"\\");\\n\\n<ChoiceChips label=\\"Which room do you want?\\" recommended=\\"double\\" value={room} onChange={setRoom}\\n  options={[{ value: \\"double\\", label: \\"Double\\" }, { value: \\"twin\\", label: \\"Twin\\" }, { value: \\"suite\\", label: \\"Suite\\" }]} />"
      }
    }
  }
}`,...(i=(o=n.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var l,d,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Several answers",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With multiple, each chip is a checkbox and the value is a list."
      },
      source: {
        code: "const [nights, setNights] = useState<string | string[]>([\\"sat\\"]);\\n\\n<ChoiceChips multiple label=\\"Which nights?\\" value={nights} onChange={setNights}\\n  options={[{ value: \\"fri\\", label: \\"Friday\\" }, { value: \\"sat\\", label: \\"Saturday\\" }, { value: \\"sun\\", label: \\"Sunday\\" }]} />"
      }
    }
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,p,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Inside an answer",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The message asks the question in words, so the chips' own label is hidden but still read."
      },
      source: {
        code: "<Message role=\\"assistant\\">\\n  <p>I found hotels in three areas. Where would you like to stay?</p>\\n  <ChoiceChips hideLabel label=\\"Area to stay in\\" value={area} onChange={setArea}\\n    options={[{ value: \\"marais\\", label: \\"Le Marais\\" }, { value: \\"montmartre\\", label: \\"Montmartre\\" }, { value: \\"left\\", label: \\"Left Bank\\" }]} />\\n</Message>"
      }
    }
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};export{t as InsideAnAnswer,n as OneAnswerWithASuggestion,a as SeveralAnswers,z as __namedExportsOrder,H as default};
