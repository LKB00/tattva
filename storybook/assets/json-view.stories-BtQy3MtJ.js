import{j as e}from"./iframe-D-pZXX8_.js";import{az as h,b as g}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const t=g.get("json-view"),R={title:"Asking and showing work/JsonView",component:h,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},r={name:"Tool input",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"The top level is open. The filters object shows its key count until you open it."},source:{code:'<JsonView label="Search input" value={{ query: "refund policy", limit: 5, filters: { region: "EU", since: "2026-01-01" }, exact: false }} />'}}}},o={name:"Tool output with a long string",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Two levels start open. The note is longer than 80 characters, so it is cut short with Show all."},source:{code:'<JsonView label="Search result" value={searchOutput} defaultExpandDepth={2} maxStringLength={80} />'}}}},s={name:"All closed",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"With defaultExpandDepth set to 0 only the summary row shows. Use it where space is tight."},source:{code:'<JsonView label="Search result" value={searchOutput} defaultExpandDepth={0} />'}}}},B=["ToolInput","ToolOutputWithALongString","AllClosed"];var n,a,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Tool input",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The top level is open. The filters object shows its key count until you open it."
      },
      source: {
        code: "<JsonView label=\\"Search input\\" value={{ query: \\"refund policy\\", limit: 5, filters: { region: \\"EU\\", since: \\"2026-01-01\\" }, exact: false }} />"
      }
    }
  }
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var p,l,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Tool output with a long string",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Two levels start open. The note is longer than 80 characters, so it is cut short with Show all."
      },
      source: {
        code: "<JsonView label=\\"Search result\\" value={searchOutput} defaultExpandDepth={2} maxStringLength={80} />"
      }
    }
  }
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,d,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "All closed",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With defaultExpandDepth set to 0 only the summary row shows. Use it where space is tight."
      },
      source: {
        code: "<JsonView label=\\"Search result\\" value={searchOutput} defaultExpandDepth={0} />"
      }
    }
  }
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};export{s as AllClosed,r as ToolInput,o as ToolOutputWithALongString,B as __namedExportsOrder,R as default};
