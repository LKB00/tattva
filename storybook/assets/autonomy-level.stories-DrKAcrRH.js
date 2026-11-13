import{j as e}from"./iframe-D-pZXX8_.js";import{b as h}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import{A as v}from"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const r=h.get("autonomy-level"),q={title:"Assistants/AutonomyLevel",component:v,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},t={name:"Three levels of detail",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Pick a view and the list below changes."},source:{code:`const [view, setView] = useState<Altitude>("summary");
<AutonomyLevel value={view} onChange={setView} />`}}}},o={name:"Start on Steps",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Leave it uncontrolled and set where it starts."},source:{code:'<AutonomyLevel defaultValue="steps" />'}}}},s={name:"Your own hints",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"Replace the hint for any view."},source:{code:'<AutonomyLevel hints={{ summary: "Just the result of your trip search." }} />'}}}},z=["ThreeLevelsOfDetail","StartOnSteps","YourOwnHints"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Three levels of detail",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Pick a view and the list below changes."
      },
      source: {
        code: "const [view, setView] = useState<Altitude>(\\"summary\\");\\n<AutonomyLevel value={view} onChange={setView} />"
      }
    }
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Start on Steps",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Leave it uncontrolled and set where it starts."
      },
      source: {
        code: "<AutonomyLevel defaultValue=\\"steps\\" />"
      }
    }
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,l,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Your own hints",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Replace the hint for any view."
      },
      source: {
        code: "<AutonomyLevel hints={{ summary: \\"Just the result of your trip search.\\" }} />"
      }
    }
  }
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};export{o as StartOnSteps,t as ThreeLevelsOfDetail,s as YourOwnHints,z as __namedExportsOrder,q as default};
