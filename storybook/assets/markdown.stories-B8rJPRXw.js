import{j as e}from"./iframe-D-pZXX8_.js";import{aI as w,b as k}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const n=k.get("markdown"),_={title:"Conversation/Markdown",component:w,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},r={name:"A rich reply",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Shows a heading, bold and italic text, a link, a source number, a table, a quote, a list, a divider and code."},source:{code:`const RICH = \`## Quarterly summary

Revenue grew **12%** …\`;

<div className="max-w-xl space-y-4 text-body-lg leading-7">
  <Markdown>{RICH}</Markdown>
</div>`}}}},a={name:"Nested lists",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Indent each level. Numbered and bulleted lists can mix. Three levels is the most."},source:{code:`const NESTED = \`Plan for the release:

1. Prepare the build
   - Update the changelog
   - Bump versions
     1. Core package
     2. Docs site
2. Ship it
   - Tag the commit
- Notify the team\`;

<div className="max-w-xl space-y-4 text-body-lg leading-7">
  <Markdown>{NESTED}</Markdown>
</div>`}}}},t={name:"Code that is still being written",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"The end of the code has not arrived yet. It still shows as code, not as stray symbols."},source:{code:`const STREAMING = "Here is a small helper:\\n\\n\`\`\`ts\\nexport function clamp(...) {\\n  return Math.min(...);";

<div className="max-w-xl space-y-4 text-body-lg leading-7">
  <Markdown>{STREAMING}</Markdown>
</div>`}}}},s={name:"A risky link becomes plain text",render:()=>e.jsx(e.Fragment,{children:n.examples[3].render()}),parameters:{docs:{description:{story:"Links that could run code are not clickable. Only their words stay."},source:{code:`<div className="max-w-xl space-y-4 text-body-lg leading-7">
  <Markdown>{"Open [the safe page](https://example.com) or [this one](javascript:alert(1))."}</Markdown>
</div>`}}}},z=["ARichReply","NestedLists","CodeThatIsStillBeingWritten","ARiskyLinkBecomesPlainText"];var o,i,d;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "A rich reply",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Shows a heading, bold and italic text, a link, a source number, a table, a quote, a list, a divider and code."
      },
      source: {
        code: "const RICH = \`## Quarterly summary\\n\\nRevenue grew **12%** …\`;\\n\\n<div className=\\"max-w-xl space-y-4 text-body-lg leading-7\\">\\n  <Markdown>{RICH}</Markdown>\\n</div>"
      }
    }
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,m,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Nested lists",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Indent each level. Numbered and bulleted lists can mix. Three levels is the most."
      },
      source: {
        code: "const NESTED = \`Plan for the release:\\n\\n1. Prepare the build\\n   - Update the changelog\\n   - Bump versions\\n     1. Core package\\n     2. Docs site\\n2. Ship it\\n   - Tag the commit\\n- Notify the team\`;\\n\\n<div className=\\"max-w-xl space-y-4 text-body-lg leading-7\\">\\n  <Markdown>{NESTED}</Markdown>\\n</div>"
      }
    }
  }
}`,...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,h,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Code that is still being written",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The end of the code has not arrived yet. It still shows as code, not as stray symbols."
      },
      source: {
        code: "const STREAMING = \\"Here is a small helper:\\\\n\\\\n\`\`\`ts\\\\nexport function clamp(...) {\\\\n  return Math.min(...);\\";\\n\\n<div className=\\"max-w-xl space-y-4 text-body-lg leading-7\\">\\n  <Markdown>{STREAMING}</Markdown>\\n</div>"
      }
    }
  }
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var x,y,g;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "A risky link becomes plain text",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Links that could run code are not clickable. Only their words stay."
      },
      source: {
        code: "<div className=\\"max-w-xl space-y-4 text-body-lg leading-7\\">\\n  <Markdown>{\\"Open [the safe page](https://example.com) or [this one](javascript:alert(1)).\\"}</Markdown>\\n</div>"
      }
    }
  }
}`,...(g=(y=s.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};export{r as ARichReply,s as ARiskyLinkBecomesPlainText,t as CodeThatIsStillBeingWritten,a as NestedLists,z as __namedExportsOrder,_ as default};
