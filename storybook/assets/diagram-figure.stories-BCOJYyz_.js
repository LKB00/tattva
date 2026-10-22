import{j as i}from"./iframe-C8v_uZy_.js";import{a1 as c,b as l}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const o=l.get("diagram-figure"),k={title:"Numbers/DiagramFigure",component:c,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},r={name:"A simple diagram",render:()=>i.jsx(i.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:""},source:{code:`<DiagramFigure label="Three stages. Description follows." caption="Stages" description="Plan, run, review." source={"plan -> run -> review"}>
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
