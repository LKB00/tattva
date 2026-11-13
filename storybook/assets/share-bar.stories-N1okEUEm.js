import{j as e}from"./iframe-D-pZXX8_.js";import{bw as u,b}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const a=b.get("share-bar"),R={title:"Numbers/ShareBar",component:u,tags:["autodocs"],parameters:{docs:{description:{component:a.summary+" "+a.description}}}},r={name:"Spend by kind of tool",render:()=>e.jsx(e.Fragment,{children:a.examples[0].render()}),parameters:{docs:{description:{story:"Each part gets a chart colour; the list gives the percentage and the amount."},source:{code:'<ShareBar ariaLabel="AI spend by kind of tool, October" formatValue={(n) => `$${n.toLocaleString("en-US")}`}\n  data={[{ label: "API usage", value: 1620 }, { label: "Chat assistants", value: 1360 }, { label: "Coding assistants", value: 960 }, { label: "Other tools", value: 300 }]} />'}}}},t={name:"One part in focus",render:()=>e.jsx(e.Fragment,{children:a.examples[1].render()}),parameters:{docs:{description:{story:"highlight draws one part in colour and the rest in the neutral, when the story is about that part."},source:{code:'<ShareBar highlight="API usage" ariaLabel="AI spend by kind of tool, October" data={spend} formatValue={usd} />'}}}},o={name:"Loading and empty",render:()=>e.jsx(e.Fragment,{children:a.examples[2].render()}),parameters:{docs:{description:{story:"Placeholders hold the space while the numbers arrive; an empty total says so in words."},source:{code:`<ShareBar loading ariaLabel="Spend by kind of tool" data={[]} />
<ShareBar ariaLabel="Spend by kind of tool" data={[]} emptyText="No spend this month yet." />`}}}},q=["SpendByKindOfTool","OnePartInFocus","LoadingAndEmpty"];var n,s,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Spend by kind of tool",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Each part gets a chart colour; the list gives the percentage and the amount."
      },
      source: {
        code: "<ShareBar ariaLabel=\\"AI spend by kind of tool, October\\" formatValue={(n) => \`$\${n.toLocaleString(\\"en-US\\")}\`}\\n  data={[{ label: \\"API usage\\", value: 1620 }, { label: \\"Chat assistants\\", value: 1360 }, { label: \\"Coding assistants\\", value: 960 }, { label: \\"Other tools\\", value: 300 }]} />"
      }
    }
  }
}`,...(d=(s=r.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var i,p,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "One part in focus",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "highlight draws one part in colour and the rest in the neutral, when the story is about that part."
      },
      source: {
        code: "<ShareBar highlight=\\"API usage\\" ariaLabel=\\"AI spend by kind of tool, October\\" data={spend} formatValue={usd} />"
      }
    }
  }
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var m,c,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Loading and empty",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Placeholders hold the space while the numbers arrive; an empty total says so in words."
      },
      source: {
        code: "<ShareBar loading ariaLabel=\\"Spend by kind of tool\\" data={[]} />\\n<ShareBar ariaLabel=\\"Spend by kind of tool\\" data={[]} emptyText=\\"No spend this month yet.\\" />"
      }
    }
  }
}`,...(h=(c=o.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};export{o as LoadingAndEmpty,t as OnePartInFocus,r as SpendByKindOfTool,q as __namedExportsOrder,R as default};
