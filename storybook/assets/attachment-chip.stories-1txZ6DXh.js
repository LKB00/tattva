import{j as r}from"./iframe-D-pZXX8_.js";import{l as d,b as c}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const n=c.get("attachment-chip"),S={title:"Conversation/AttachmentChip",component:d,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"Ready, uploading and failed",render:()=>r.jsx(r.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"All three states together. Retry on the failed one makes it ready."},source:{code:`<AttachmentChip name="q3-planning.pdf" size="2.4 MB" onRemove={() => {}} />
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
