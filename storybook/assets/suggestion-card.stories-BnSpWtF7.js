import{j as r}from"./iframe-D-pZXX8_.js";import{bV as p,b as m}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const s=m.get("suggestion-card"),R={title:"Creating/SuggestionCard",component:p,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},e={name:"Try it",render:()=>r.jsx(r.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"Accept or dismiss to see the result. The card shows one suggestion, like when you click an underlined phrase."},source:{code:`<SuggestionCard category="clarity" original="in order to be able to" suggestion="to"
  explanation="Shorter phrasing says the same thing."
  onAccept={() => accept()} onDismiss={() => dismiss()} />`}}}},o={name:"The types",render:()=>r.jsx(r.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"Each type has its own icon and word, so none depends on color."},source:{code:`<div className="grid gap-3 sm:grid-cols-2">
  <SuggestionCard category="correctness" original="their going" suggestion="they're going" explanation="Use the contraction of they are." />
  <SuggestionCard category="tone" original="Gimme the file" suggestion="Could you send the file?" explanation="This reads as more polite." />
</div>`}}}},V=["TryIt","TheTypes"];var t,n,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Try it",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Accept or dismiss to see the result. The card shows one suggestion, like when you click an underlined phrase."
      },
      source: {
        code: "<SuggestionCard category=\\"clarity\\" original=\\"in order to be able to\\" suggestion=\\"to\\"\\n  explanation=\\"Shorter phrasing says the same thing.\\"\\n  onAccept={() => accept()} onDismiss={() => dismiss()} />"
      }
    }
  }
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var a,c,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "The types",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Each type has its own icon and word, so none depends on color."
      },
      source: {
        code: "<div className=\\"grid gap-3 sm:grid-cols-2\\">\\n  <SuggestionCard category=\\"correctness\\" original=\\"their going\\" suggestion=\\"they're going\\" explanation=\\"Use the contraction of they are.\\" />\\n  <SuggestionCard category=\\"tone\\" original=\\"Gimme the file\\" suggestion=\\"Could you send the file?\\" explanation=\\"This reads as more polite.\\" />\\n</div>"
      }
    }
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};export{o as TheTypes,e as TryIt,V as __namedExportsOrder,R as default};
