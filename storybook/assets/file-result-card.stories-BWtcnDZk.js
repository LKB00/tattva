import{j as t}from"./iframe-C8v_uZy_.js";import{ag as n,b as i}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const r=i.get("file-result-card"),Q={title:"Conversation/FileResultCard",component:n,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},e={name:"Files the AI made",render:()=>t.jsx(t.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"A document, a spreadsheet still being made, and one that failed."},source:{code:`<FileResultCard name="Q3 support report.docx" detail="6 pages" onOpen={open} onDownload={download} />
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
