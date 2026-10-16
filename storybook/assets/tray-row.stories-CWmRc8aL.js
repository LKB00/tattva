import{j as o}from"./iframe-DSdOWv-_.js";import{c3 as m,b as l}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const r=l.get("tray-row"),C={title:"Conversation/TrayRow",component:m,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},e={name:"Plain rows",render:()=>o.jsx(o.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Icons are optional. The hint at the end shows on hover or when the row is reached by keyboard."},source:{code:`<ul className="w-full max-w-sm space-y-0.5">
  <TrayRow icon={<FileIcon width={14} height={14} />} title="Meeting notes" detail="Edited today" trailing="Open" />
  <TrayRow icon={<FileIcon width={14} height={14} />} title="Roadmap draft" detail="Edited yesterday" trailing="Open" />
</ul>`}}}},t={name:"Needs attention",render:()=>o.jsx(o.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Mark the row where a person has to decide something. The detail should say what."},source:{code:`<ul className="w-full max-w-sm space-y-0.5">
  <TrayRow attention title="Weekly digest" detail="Waiting for your approval" trailing="Review" />
  <TrayRow icon={<FileIcon width={14} height={14} />} title="Invoice batch" detail="Sent" />
</ul>`}}}},q=["PlainRows","NeedsAttention"];var n,a,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Plain rows",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Icons are optional. The hint at the end shows on hover or when the row is reached by keyboard."
      },
      source: {
        code: "<ul className=\\"w-full max-w-sm space-y-0.5\\">\\n  <TrayRow icon={<FileIcon width={14} height={14} />} title=\\"Meeting notes\\" detail=\\"Edited today\\" trailing=\\"Open\\" />\\n  <TrayRow icon={<FileIcon width={14} height={14} />} title=\\"Roadmap draft\\" detail=\\"Edited yesterday\\" trailing=\\"Open\\" />\\n</ul>"
      }
    }
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var s,d,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Needs attention",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Mark the row where a person has to decide something. The detail should say what."
      },
      source: {
        code: "<ul className=\\"w-full max-w-sm space-y-0.5\\">\\n  <TrayRow attention title=\\"Weekly digest\\" detail=\\"Waiting for your approval\\" trailing=\\"Review\\" />\\n  <TrayRow icon={<FileIcon width={14} height={14} />} title=\\"Invoice batch\\" detail=\\"Sent\\" />\\n</ul>"
      }
    }
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};export{t as NeedsAttention,e as PlainRows,q as __namedExportsOrder,C as default};
