import{j as e}from"./iframe-DSdOWv-_.js";import{a3 as c,b as f}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const t=f.get("draft-preview"),Y={title:"Asking and showing work/DraftPreview",component:c,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},o={name:"Email style with headers",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"The headers sit above the body. Only the first four lines show until the person presses the button."},source:{code:`<DraftPreview
  className="w-full max-w-md"
  headers={[
    { label: "To", value: "support@aerohome.example" },
    { label: "From", value: "meera@example.com" },
    { label: "Subject", value: "Refund request for Aero 12 blender" },
  ]}
  wordCount={102}
  footer="Sent from your email. Nothing goes out without your tap."
>
  {\`Hello Priya, I bought the Aero 12 blender on 2 September and it stopped working after four days. The motor hums but the blades do not turn. I have attached the invoice and a short video. Under the Consumer Protection Act I am asking for a full refund of ₹2,340 to my original payment method. Please reply by 27 October 2026. If I do not hear back by then I will raise the matter with the consumer helpline. I would much prefer to settle this directly, so please tell me what you need from me. Thank you for your time, Meera Shah\`}
</DraftPreview>`}}}},r={name:"Short and plain",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"A text that fits in the preview lines shows in full, and no expand button is drawn."},source:{code:`<DraftPreview className="w-full max-w-md">
  Thanks for the update. I will wait for your reply until 27 October.
</DraftPreview>`}}}},n={name:"Controlled open state",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"Your code keeps the open value, so it can, for example, keep Approve off until the draft has been opened."},source:{code:`function Example() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <DraftPreview
        headers={[
          { label: "To", value: "support@aerohome.example" },
          { label: "From", value: "meera@example.com" },
          { label: "Subject", value: "Refund request for Aero 12 blender" },
        ]}
        wordCount={102} open={open} onOpenChange={setOpen}
      >
        {\`Hello Priya, I bought the Aero 12 blender on 2 September and it stopped working after four days. The motor hums but the blades do not turn. I have attached the invoice and a short video. Under the Consumer Protection Act I am asking for a full refund of ₹2,340 to my original payment method. Please reply by 27 October 2026. If I do not hear back by then I will raise the matter with the consumer helpline. I would much prefer to settle this directly, so please tell me what you need from me. Thank you for your time, Meera Shah\`}
      </DraftPreview>
      <Button disabled={!open} onClick={() => {}}>Approve and send</Button>
      <p className="text-small leading-4 text-fg-muted">{open ? "Read in full. You can approve now." : "Approve stays off until the draft is opened."}</p>
    </div>
  );
}`}}}},W=["EmailStyleWithHeaders","ShortAndPlain","ControlledOpenState"];var a,s,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Email style with headers",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The headers sit above the body. Only the first four lines show until the person presses the button."
      },
      source: {
        code: "<DraftPreview\\n  className=\\"w-full max-w-md\\"\\n  headers={[\\n    { label: \\"To\\", value: \\"support@aerohome.example\\" },\\n    { label: \\"From\\", value: \\"meera@example.com\\" },\\n    { label: \\"Subject\\", value: \\"Refund request for Aero 12 blender\\" },\\n  ]}\\n  wordCount={102}\\n  footer=\\"Sent from your email. Nothing goes out without your tap.\\"\\n>\\n  {\`Hello Priya, I bought the Aero 12 blender on 2 September and it stopped working after four days. The motor hums but the blades do not turn. I have attached the invoice and a short video. Under the Consumer Protection Act I am asking for a full refund of ₹2,340 to my original payment method. Please reply by 27 October 2026. If I do not hear back by then I will raise the matter with the consumer helpline. I would much prefer to settle this directly, so please tell me what you need from me. Thank you for your time, Meera Shah\`}\\n</DraftPreview>"
      }
    }
  }
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var i,d,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Short and plain",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A text that fits in the preview lines shows in full, and no expand button is drawn."
      },
      source: {
        code: "<DraftPreview className=\\"w-full max-w-md\\">\\n  Thanks for the update. I will wait for your reply until 27 October.\\n</DraftPreview>"
      }
    }
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,u,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Controlled open state",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Your code keeps the open value, so it can, for example, keep Approve off until the draft has been opened."
      },
      source: {
        code: "function Example() {\\n  const [open, setOpen] = useState(false);\\n  return (\\n    <div className=\\"flex w-full max-w-md flex-col gap-3\\">\\n      <DraftPreview\\n        headers={[\\n          { label: \\"To\\", value: \\"support@aerohome.example\\" },\\n          { label: \\"From\\", value: \\"meera@example.com\\" },\\n          { label: \\"Subject\\", value: \\"Refund request for Aero 12 blender\\" },\\n        ]}\\n        wordCount={102} open={open} onOpenChange={setOpen}\\n      >\\n        {\`Hello Priya, I bought the Aero 12 blender on 2 September and it stopped working after four days. The motor hums but the blades do not turn. I have attached the invoice and a short video. Under the Consumer Protection Act I am asking for a full refund of ₹2,340 to my original payment method. Please reply by 27 October 2026. If I do not hear back by then I will raise the matter with the consumer helpline. I would much prefer to settle this directly, so please tell me what you need from me. Thank you for your time, Meera Shah\`}\\n      </DraftPreview>\\n      <Button disabled={!open} onClick={() => {}}>Approve and send</Button>\\n      <p className=\\"text-small leading-4 text-fg-muted\\">{open ? \\"Read in full. You can approve now.\\" : \\"Approve stays off until the draft is opened.\\"}</p>\\n    </div>\\n  );\\n}"
      }
    }
  }
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};export{n as ControlledOpenState,o as EmailStyleWithHeaders,r as ShortAndPlain,W as __namedExportsOrder,Y as default};
