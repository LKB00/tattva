import{j as o}from"./iframe-C8v_uZy_.js";import{c8 as m,b as l}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const r=l.get("tray-row"),C={title:"Conversation/TrayRow",component:m,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},e={name:"Plain rows",render:()=>o.jsx(o.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Icons are optional. The hint at the end shows on hover or when the row is reached by keyboard."},source:{code:`<ul className="w-full max-w-sm space-y-0.5">
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
