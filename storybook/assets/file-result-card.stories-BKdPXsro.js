import{j as t}from"./iframe-D-pZXX8_.js";import{al as n,b as i}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const r=i.get("file-result-card"),Q={title:"Conversation/FileResultCard",component:n,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},e={name:"Files the AI made",render:()=>t.jsx(t.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"A document, a spreadsheet still being made, and one that failed."},source:{code:`<FileResultCard name="Q3 support report.docx" detail="6 pages" onOpen={open} onDownload={download} />
<FileResultCard name="Refunds by region.xlsx" status="making" />
<FileResultCard name="Board slides.pptx" status="failed" onRetry={retry} />`}}}},T=["FilesTheAIMade"];var o,a,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Files the AI made",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A document, a spreadsheet still being made, and one that failed."
      },
      source: {
        code: "<FileResultCard name=\\"Q3 support report.docx\\" detail=\\"6 pages\\" onOpen={open} onDownload={download} />\\n<FileResultCard name=\\"Refunds by region.xlsx\\" status=\\"making\\" />\\n<FileResultCard name=\\"Board slides.pptx\\" status=\\"failed\\" onRetry={retry} />"
      }
    }
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};export{e as FilesTheAIMade,T as __namedExportsOrder,Q as default};
