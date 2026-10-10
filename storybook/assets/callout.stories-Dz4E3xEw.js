import{j as e}from"./iframe-J6_2PHET.js";import{b as f}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import{C as h}from"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const o=f.get("callout"),_={title:"Empty and error/Callout",component:h,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},n={name:"Informational",render:()=>e.jsx(e.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"The default mood. Use it for neutral notes that ask nothing of the reader."},source:{code:'<Callout title="Draft saved">Your changes are saved and will sync when you are back online.</Callout>'}}}},t={name:"All tones",render:()=>e.jsx(e.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"Success, warning and danger look alike apart from color. Screen readers announce danger more urgently."},source:{code:`<div className="space-y-3">
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
