import{j as e}from"./iframe-C8v_uZy_.js";import{bM as h,b as l}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const t=l.get("suggestion-bar"),M={title:"Creating/SuggestionBar",component:h,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},r={name:"Try each button",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Try each button. Regenerate and Fine-tune show a short wait. Keep and Discard finish it."},source:{code:`const [status, setStatus] = useState<SuggestionBarStatus>("ready");

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
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};export{s as ReplaceASelection,r as TryEachButton,n as WhileTheDraftIsWritten,z as __namedExportsOrder,M as default};
