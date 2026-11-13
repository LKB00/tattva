import{j as e}from"./iframe-D-pZXX8_.js";import{W as x,b as h}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const r=h.get("context-meter"),D={title:"Numbers/ContextMeter",component:x,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},t={name:"Normal",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Far from the limit, there is no warning and no button."},source:{code:"<ContextMeter percent={68} onSummarize={() => {}} />"}}}},o={name:"Near the limit",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Near the limit, the bar warns and Summarize appears."},source:{code:"<ContextMeter percent={91} onSummarize={() => {}} />"}}}},n={name:"After summarizing",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"Leave a marker once the conversation has been shortened."},source:{code:'<ContextMeter percent={34} compactionNote="Earlier messages were summarized." />'}}}},G=["Normal","NearTheLimit","AfterSummarizing"];var a,m,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Normal",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Far from the limit, there is no warning and no button."
      },
      source: {
        code: "<ContextMeter percent={68} onSummarize={() => {}} />"
      }
    }
  }
}`,...(s=(m=t.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};var i,c,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Near the limit",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Near the limit, the bar warns and Summarize appears."
      },
      source: {
        code: "<ContextMeter percent={91} onSummarize={() => {}} />"
      }
    }
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,u,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "After summarizing",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Leave a marker once the conversation has been shortened."
      },
      source: {
        code: "<ContextMeter percent={34} compactionNote=\\"Earlier messages were summarized.\\" />"
      }
    }
  }
}`,...(l=(u=n.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};export{n as AfterSummarizing,o as NearTheLimit,t as Normal,G as __namedExportsOrder,D as default};
