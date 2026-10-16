import{j as e}from"./iframe-DSdOWv-_.js";import{bH as h,b as l}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const t=l.get("suggestion-bar"),H={title:"Creating/SuggestionBar",component:h,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},r={name:"Try each button",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Try each button. Regenerate and Fine-tune show a short wait. Keep and Discard finish it."},source:{code:`const [status, setStatus] = useState<SuggestionBarStatus>("ready");

<SuggestionBar status={status} retryCost="Uses 1 AI response"
  onKeep={() => setStatus("committed")} onInsertBelow={() => setStatus("committed")}
  onDiscard={() => setStatus("discarded")}
  onRegenerate={() => setStatus("generating")}
  onRefine={(text) => setStatus("generating")}>
  Our quarterly numbers beat the forecast, driven by steady renewals and two large new accounts.
</SuggestionBar>`}}}},s={name:"Replace a selection",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Use Replace as the main button when the draft takes the place of selected text."},source:{code:'<SuggestionBar primaryLabel="Replace">A shorter version of the paragraph.</SuggestionBar>'}}}},n={name:"While the draft is written",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"The buttons are hidden while the draft is written. Discard stays."},source:{code:'<SuggestionBar status="generating" />'}}}},z=["TryEachButton","ReplaceASelection","WhileTheDraftIsWritten"];var a,o,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};export{s as ReplaceASelection,r as TryEachButton,n as WhileTheDraftIsWritten,z as __namedExportsOrder,H as default};
