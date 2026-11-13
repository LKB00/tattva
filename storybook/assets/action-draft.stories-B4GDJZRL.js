import{j as e}from"./iframe-D-pZXX8_.js";import{A as h,b as f}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const t=f.get("action-draft"),O={title:"Markets and trading/ActionDraft",component:h,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},r={name:"Draft with an edited field",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Press Edit on Quantity, change it and press Done. The Edited tag appears. Enter 0 to see Confirm lock."},source:{code:`function Example() {
  const [qty, setQty] = useState("10");
  return (
    <ActionDraft status="draft" title={\`Buy \${qty} RELIANCE at market\`} summary="Drafted from your message. Check it before you confirm."
      fields={[{ id: "qty", label: "Quantity", value: qty, kind: "number", editable: true, unit: "shares" }, { id: "type", label: "Order type", value: "Market" }]}
      onFieldChange={(_, v) => setQty(v)} rows={[{ label: "Margin needed", value: "29,455.00" }, { label: "Charges", value: "41.20" }]}
      onConfirm={() => {}} onDiscard={() => {}} />
  );
}`}}}},n={name:"Working, then done",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"After Confirm the fields are read only and the steps advance. A live region announces the change. Restart plays it again."},source:{code:`<ActionDraft status="working" title="Buy 10 RELIANCE at market" fields={fields} onFieldChange={() => {}}
  steps={[
    { id: "a", label: "Check your limits", state: "done" },
    { id: "b", label: "Send the order", state: "running" },
    { id: "c", label: "Wait for the exchange", state: "pending" },
  ]} onConfirm={() => {}} onDiscard={() => {}} />`}}}},a={name:"Failed",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"The error is in words in an alert, with the step that failed. Nothing is hidden behind colour."},source:{code:`<ActionDraft status="failed" title="Buy 10 RELIANCE at market" fields={fields} onFieldChange={() => {}}
  steps={[{ id: "a", label: "Check your limits", state: "done" }, { id: "b", label: "Send the order", state: "failed", detail: "The broker did not answer." }]}
  error="The order was not placed. Nothing was bought. You can start again." onConfirm={() => {}} onDiscard={() => {}} />`}}}},P=["DraftWithAnEditedField","WorkingThenDone","Failed"];var o,i,s;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Draft with an edited field",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press Edit on Quantity, change it and press Done. The Edited tag appears. Enter 0 to see Confirm lock."
      },
      source: {
        code: "function Example() {\\n  const [qty, setQty] = useState(\\"10\\");\\n  return (\\n    <ActionDraft status=\\"draft\\" title={\`Buy \${qty} RELIANCE at market\`} summary=\\"Drafted from your message. Check it before you confirm.\\"\\n      fields={[{ id: \\"qty\\", label: \\"Quantity\\", value: qty, kind: \\"number\\", editable: true, unit: \\"shares\\" }, { id: \\"type\\", label: \\"Order type\\", value: \\"Market\\" }]}\\n      onFieldChange={(_, v) => setQty(v)} rows={[{ label: \\"Margin needed\\", value: \\"29,455.00\\" }, { label: \\"Charges\\", value: \\"41.20\\" }]}\\n      onConfirm={() => {}} onDiscard={() => {}} />\\n  );\\n}"
      }
    }
  }
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var d,l,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Working, then done",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "After Confirm the fields are read only and the steps advance. A live region announces the change. Restart plays it again."
      },
      source: {
        code: "<ActionDraft status=\\"working\\" title=\\"Buy 10 RELIANCE at market\\" fields={fields} onFieldChange={() => {}}\\n  steps={[\\n    { id: \\"a\\", label: \\"Check your limits\\", state: \\"done\\" },\\n    { id: \\"b\\", label: \\"Send the order\\", state: \\"running\\" },\\n    { id: \\"c\\", label: \\"Wait for the exchange\\", state: \\"pending\\" },\\n  ]} onConfirm={() => {}} onDiscard={() => {}} />"
      }
    }
  }
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,p,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Failed",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The error is in words in an alert, with the step that failed. Nothing is hidden behind colour."
      },
      source: {
        code: "<ActionDraft status=\\"failed\\" title=\\"Buy 10 RELIANCE at market\\" fields={fields} onFieldChange={() => {}}\\n  steps={[{ id: \\"a\\", label: \\"Check your limits\\", state: \\"done\\" }, { id: \\"b\\", label: \\"Send the order\\", state: \\"failed\\", detail: \\"The broker did not answer.\\" }]}\\n  error=\\"The order was not placed. Nothing was bought. You can start again.\\" onConfirm={() => {}} onDiscard={() => {}} />"
      }
    }
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};export{r as DraftWithAnEditedField,a as Failed,n as WorkingThenDone,P as __namedExportsOrder,O as default};
