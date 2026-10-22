import{j as r}from"./iframe-C8v_uZy_.js";import{bN as p,b as m}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const s=m.get("suggestion-card"),R={title:"Creating/SuggestionCard",component:p,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},e={name:"Try it",render:()=>r.jsx(r.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"Accept or dismiss to see the result. The card shows one suggestion, like when you click an underlined phrase."},source:{code:`<SuggestionCard category="clarity" original="in order to be able to" suggestion="to"
  explanation="Shorter phrasing says the same thing."
  onAccept={() => accept()} onDismiss={() => dismiss()} />`}}}},o={name:"The types",render:()=>r.jsx(r.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"Each type has its own icon and word, so none depends on color."},source:{code:`<div className="grid gap-3 sm:grid-cols-2">
  <SuggestionCard category="correctness" original="their going" suggestion="they're going" explanation="Use the contraction of they are." />
  <SuggestionCard category="tone" original="Gimme the file" suggestion="Could you send the file?" explanation="This reads as more polite." />
</div>`}}}},q=["TryIt","TheTypes"];var t,n,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};export{o as TheTypes,e as TryIt,q as __namedExportsOrder,R as default};
