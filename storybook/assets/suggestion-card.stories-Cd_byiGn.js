import{j as r}from"./iframe-DSdOWv-_.js";import{bI as p,b as m}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const s=m.get("suggestion-card"),R={title:"Creating/SuggestionCard",component:p,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},e={name:"Try it",render:()=>r.jsx(r.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"Accept or dismiss to see the result. The card shows one suggestion, like when you click an underlined phrase."},source:{code:`<SuggestionCard category="clarity" original="in order to be able to" suggestion="to"
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
