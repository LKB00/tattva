import{j as r}from"./iframe-C8v_uZy_.js";import{l as d,b as c}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const n=c.get("attachment-chip"),S={title:"Conversation/AttachmentChip",component:d,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"Ready, uploading and failed",render:()=>r.jsx(r.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"All three states together. Retry on the failed one makes it ready."},source:{code:`<AttachmentChip name="q3-planning.pdf" size="2.4 MB" onRemove={() => {}} />
<AttachmentChip name="board-deck.pptx" size="18 MB" status="uploading" progress={45} onRemove={() => {}} />
<AttachmentChip name="site-photo.png" kind="image" status="error"
  errorMessage="Upload failed. Check your connection." onRetry={retry} onRemove={remove} />`}}}},t={name:"Your own thumbnail",render:()=>r.jsx(r.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Use any picture, such as a preview of the image."},source:{code:`<AttachmentChip name="mockup.png" kind="image" size="1.1 MB"
  thumbnail={<div className="size-full bg-lime-soft" />} />`}}}},T=["ReadyUploadingAndFailed","YourOwnThumbnail"];var o,a,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Ready, uploading and failed",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "All three states together. Retry on the failed one makes it ready."
      },
      source: {
        code: "<AttachmentChip name=\\"q3-planning.pdf\\" size=\\"2.4 MB\\" onRemove={() => {}} />\\n<AttachmentChip name=\\"board-deck.pptx\\" size=\\"18 MB\\" status=\\"uploading\\" progress={45} onRemove={() => {}} />\\n<AttachmentChip name=\\"site-photo.png\\" kind=\\"image\\" status=\\"error\\"\\n  errorMessage=\\"Upload failed. Check your connection.\\" onRetry={retry} onRemove={remove} />"
      }
    }
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Your own thumbnail",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Use any picture, such as a preview of the image."
      },
      source: {
        code: "<AttachmentChip name=\\"mockup.png\\" kind=\\"image\\" size=\\"1.1 MB\\"\\n  thumbnail={<div className=\\"size-full bg-lime-soft\\" />} />"
      }
    }
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{e as ReadyUploadingAndFailed,t as YourOwnThumbnail,T as __namedExportsOrder,S as default};
