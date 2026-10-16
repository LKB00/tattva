import{j as e}from"./iframe-DSdOWv-_.js";import{b as f}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import{C as h}from"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const o=f.get("callout"),_={title:"Empty and error/Callout",component:h,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},n={name:"Informational",render:()=>e.jsx(e.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"The default mood. Use it for neutral notes that ask nothing of the reader."},source:{code:'<Callout title="Draft saved">Your changes are saved and will sync when you are back online.</Callout>'}}}},t={name:"All tones",render:()=>e.jsx(e.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"Success, warning and danger look alike apart from color. Screen readers announce danger more urgently."},source:{code:`<div className="space-y-3">
  <Callout tone="success" title="Export complete">The file is ready to download.</Callout>
  <Callout tone="warning" title="Large file">Uploads over 20 MB may take a minute.</Callout>
  <Callout tone="danger" title="Upload failed">The connection dropped before the file finished.</Callout>
</div>`}}}},r={name:"With an action",render:()=>e.jsx(e.Fragment,{children:o.examples[2].render()}),parameters:{docs:{description:{story:"Add a button at the end of the box."},source:{code:`<Callout tone="warning" title="Connection unstable" action={<Button size="sm" variant="secondary">Retry</Button>}>
  Responses may be delayed.
</Callout>`}}}},O=["Informational","AllTones","WithAnAction"];var a,s,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Informational",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The default mood. Use it for neutral notes that ask nothing of the reader."
      },
      source: {
        code: "<Callout title=\\"Draft saved\\">Your changes are saved and will sync when you are back online.</Callout>"
      }
    }
  }
}`,...(l=(s=n.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var i,d,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "All tones",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Success, warning and danger look alike apart from color. Screen readers announce danger more urgently."
      },
      source: {
        code: "<div className=\\"space-y-3\\">\\n  <Callout tone=\\"success\\" title=\\"Export complete\\">The file is ready to download.</Callout>\\n  <Callout tone=\\"warning\\" title=\\"Large file\\">Uploads over 20 MB may take a minute.</Callout>\\n  <Callout tone=\\"danger\\" title=\\"Upload failed\\">The connection dropped before the file finished.</Callout>\\n</div>"
      }
    }
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "With an action",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Add a button at the end of the box."
      },
      source: {
        code: "<Callout tone=\\"warning\\" title=\\"Connection unstable\\" action={<Button size=\\"sm\\" variant=\\"secondary\\">Retry</Button>}>\\n  Responses may be delayed.\\n</Callout>"
      }
    }
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};export{t as AllTones,n as Informational,r as WithAnAction,O as __namedExportsOrder,_ as default};
