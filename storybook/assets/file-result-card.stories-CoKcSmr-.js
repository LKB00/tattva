import{j as t}from"./iframe-DSdOWv-_.js";import{ac as n,b as i}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const r=i.get("file-result-card"),Q={title:"Conversation/FileResultCard",component:n,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},e={name:"Files the AI made",render:()=>t.jsx(t.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"A document, a spreadsheet still being made, and one that failed."},source:{code:`<FileResultCard name="Q3 support report.docx" detail="6 pages" onOpen={open} onDownload={download} />
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
