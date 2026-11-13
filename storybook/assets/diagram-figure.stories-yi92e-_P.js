import{j as i}from"./iframe-D-pZXX8_.js";import{a6 as c,b as l}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const o=l.get("diagram-figure"),k={title:"Numbers/DiagramFigure",component:c,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},r={name:"A simple diagram",render:()=>i.jsx(i.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:""},source:{code:`<DiagramFigure label="Three stages. Description follows." caption="Stages" description="Plan, run, review." source={"plan -> run -> review"}>
  <svg …/>
</DiagramFigure>`}}}},e={name:"With a written version",render:()=>i.jsx(i.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:""},source:{code:'<DiagramFigure label="Result. Description follows." caption="Result" alternative={<ol><li>Plan</li><li>Run</li></ol>}>…</DiagramFigure>'}}}},q=["ASimpleDiagram","WithAWrittenVersion"];var a,t,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "A simple diagram",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: ""
      },
      source: {
        code: "<DiagramFigure label=\\"Three stages. Description follows.\\" caption=\\"Stages\\" description=\\"Plan, run, review.\\" source={\\"plan -> run -> review\\"}>\\n  <svg …/>\\n</DiagramFigure>"
      }
    }
  }
}`,...(n=(t=r.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var s,m,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "With a written version",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: ""
      },
      source: {
        code: "<DiagramFigure label=\\"Result. Description follows.\\" caption=\\"Result\\" alternative={<ol><li>Plan</li><li>Run</li></ol>}>…</DiagramFigure>"
      }
    }
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{r as ASimpleDiagram,e as WithAWrittenVersion,q as __namedExportsOrder,k as default};
