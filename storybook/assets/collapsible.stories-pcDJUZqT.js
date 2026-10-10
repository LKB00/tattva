import{j as o}from"./iframe-J6_2PHET.js";import{H as m,b as i}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const a=i.get("collapsible"),I={title:"Controls/Collapsible",component:m,tags:["autodocs"],parameters:{docs:{description:{component:a.summary+" "+a.description}}}},e={name:"Closed by default",render:()=>o.jsx(o.Fragment,{children:a.examples[0].render()}),parameters:{docs:{description:{story:"The heading can hold more than words, like a count or a badge."},source:{code:`<Collapsible header={<span className="text-body leading-5 font-medium">Advanced options</span>}>
  <p className="mt-2 pl-6 text-body leading-5 text-fg-muted">These settings apply to new chats only.</p>
</Collapsible>`}}}},t={name:"Open by default",render:()=>o.jsx(o.Fragment,{children:a.examples[1].render()}),parameters:{docs:{description:{story:"Start it open when the content is the main reason people came."},source:{code:`<Collapsible defaultOpen header={<span className="text-body leading-5 font-medium">Details</span>}>
  <p className="mt-2 pl-6 text-body leading-5 text-fg-muted">Created on 4 March by the workspace owner.</p>
</Collapsible>`}}}},R=["ClosedByDefault","OpenByDefault"];var n,r,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Closed by default",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The heading can hold more than words, like a count or a badge."
      },
      source: {
        code: "<Collapsible header={<span className=\\"text-body leading-5 font-medium\\">Advanced options</span>}>\\n  <p className=\\"mt-2 pl-6 text-body leading-5 text-fg-muted\\">These settings apply to new chats only.</p>\\n</Collapsible>"
      }
    }
  }
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var p,d,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Open by default",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Start it open when the content is the main reason people came."
      },
      source: {
        code: "<Collapsible defaultOpen header={<span className=\\"text-body leading-5 font-medium\\">Details</span>}>\\n  <p className=\\"mt-2 pl-6 text-body leading-5 text-fg-muted\\">Created on 4 March by the workspace owner.</p>\\n</Collapsible>"
      }
    }
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};export{e as ClosedByDefault,t as OpenByDefault,R as __namedExportsOrder,I as default};
