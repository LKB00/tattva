import{j as e}from"./iframe-D-pZXX8_.js";import{bU as h,b as l}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const t=l.get("suggestion-bar"),z={title:"Creating/SuggestionBar",component:h,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},r={name:"Try each button",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Try each button. Regenerate and Fine-tune show a short wait. Keep and Discard finish it."},source:{code:`const [status, setStatus] = useState<SuggestionBarStatus>("ready");

<SuggestionBar status={status} retryCost="Uses 1 AI response"
  onKeep={() => setStatus("committed")} onInsertBelow={() => setStatus("committed")}
  onDiscard={() => setStatus("discarded")}
  onRegenerate={() => setStatus("generating")}
  onRefine={(text) => setStatus("generating")}>
  Our quarterly numbers beat the forecast, driven by steady renewals and two large new accounts.
</SuggestionBar>`}}}},s={name:"Replace a selection",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Use Replace as the main button when the draft takes the place of selected text."},source:{code:'<SuggestionBar primaryLabel="Replace">A shorter version of the paragraph.</SuggestionBar>'}}}},n={name:"While the draft is written",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"The buttons are hidden while the draft is written. Discard stays."},source:{code:'<SuggestionBar status="generating" />'}}}},G=["TryEachButton","ReplaceASelection","WhileTheDraftIsWritten"];var a,o,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Try each button",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Try each button. Regenerate and Fine-tune show a short wait. Keep and Discard finish it."
      },
      source: {
        code: "const [status, setStatus] = useState<SuggestionBarStatus>(\\"ready\\");\\n\\n<SuggestionBar status={status} retryCost=\\"Uses 1 AI response\\"\\n  onKeep={() => setStatus(\\"committed\\")} onInsertBelow={() => setStatus(\\"committed\\")}\\n  onDiscard={() => setStatus(\\"discarded\\")}\\n  onRegenerate={() => setStatus(\\"generating\\")}\\n  onRefine={(text) => setStatus(\\"generating\\")}>\\n  Our quarterly numbers beat the forecast, driven by steady renewals and two large new accounts.\\n</SuggestionBar>"
      }
    }
  }
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var c,d,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Replace a selection",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Use Replace as the main button when the draft takes the place of selected text."
      },
      source: {
        code: "<SuggestionBar primaryLabel=\\"Replace\\">A shorter version of the paragraph.</SuggestionBar>"
      }
    }
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,u,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "While the draft is written",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The buttons are hidden while the draft is written. Discard stays."
      },
      source: {
        code: "<SuggestionBar status=\\"generating\\" />"
      }
    }
  }
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};export{s as ReplaceASelection,r as TryEachButton,n as WhileTheDraftIsWritten,G as __namedExportsOrder,z as default};
