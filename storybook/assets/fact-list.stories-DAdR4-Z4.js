import{j as e}from"./iframe-D-pZXX8_.js";import{ah as g,b as f}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const r=f.get("fact-list"),H={title:"Generated interfaces/FactList",component:g,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},a={name:"Facts about a booking",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Label on the left, value on the right."},source:{code:`<FactList facts={[
  { label: "Check-in", value: "From 3pm" },
  { label: "Check-out", value: "By 11am" },
  { label: "Plan", value: <Badge tone="success">Free cancellation</Badge> },
]} />`}}}},o={name:"Two columns, and arriving",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Two columns on wide screens; placeholders while the facts stream in."},source:{code:`<FactList columns={2} facts={specs} />
<FactList loading loadingRows={3} facts={[]} />`}}}},t={name:"Stacked",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"Label above value, for a narrow side panel."},source:{code:'<FactList layout="stacked" facts={facts} />'}}}},J=["FactsAboutABooking","TwoColumnsAndArriving","Stacked"];var n,s,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Facts about a booking",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Label on the left, value on the right."
      },
      source: {
        code: "<FactList facts={[\\n  { label: \\"Check-in\\", value: \\"From 3pm\\" },\\n  { label: \\"Check-out\\", value: \\"By 11am\\" },\\n  { label: \\"Plan\\", value: <Badge tone=\\"success\\">Free cancellation</Badge> },\\n]} />"
      }
    }
  }
}`,...(c=(s=a.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var i,m,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Two columns, and arriving",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Two columns on wide screens; placeholders while the facts stream in."
      },
      source: {
        code: "<FactList columns={2} facts={specs} />\\n<FactList loading loadingRows={3} facts={[]} />"
      }
    }
  }
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var l,p,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Stacked",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Label above value, for a narrow side panel."
      },
      source: {
        code: "<FactList layout=\\"stacked\\" facts={facts} />"
      }
    }
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};export{a as FactsAboutABooking,t as Stacked,o as TwoColumnsAndArriving,J as __namedExportsOrder,H as default};
