import{j as i}from"./iframe-DSdOWv-_.js";import{_ as c,b as l}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const o=l.get("diagram-figure"),k={title:"Numbers/DiagramFigure",component:c,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},r={name:"A simple diagram",render:()=>i.jsx(i.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:""},source:{code:`<DiagramFigure label="Three stages. Description follows." caption="Stages" description="Plan, run, review." source={"plan -> run -> review"}>
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
