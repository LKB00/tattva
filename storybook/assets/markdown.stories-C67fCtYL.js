import{j as e}from"./iframe-J6_2PHET.js";import{as as w,b as k}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const n=k.get("markdown"),_={title:"Conversation/Markdown",component:w,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},r={name:"A rich reply",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Shows a heading, bold and italic text, a link, a source number, a table, a quote, a list, a divider and code."},source:{code:`const RICH = \`## Quarterly summary

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
