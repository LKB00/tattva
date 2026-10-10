import{j as r}from"./iframe-J6_2PHET.js";import{bk as d,b as c}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const o=c.get("spinner"),q={title:"Empty and error/Spinner",component:d,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"Sizes",render:()=>r.jsx(r.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Four sizes, from small to large."},source:{code:`<div className="flex items-center gap-4">
  <Spinner size={14} />
  <Spinner />
  <Spinner size={24} />
  <Spinner size={32} />
</div>`}}}},n={name:"Inside a button",render:()=>r.jsx(r.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"Place it before a button's label to show something is happening. The label should say what."},source:{code:`<Button variant="secondary" disabled leading={<Spinner size={14} label="Saving" />}>
  Saving
</Button>`}}}},C=["Sizes","InsideAButton"];var s,t,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Sizes",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Four sizes, from small to large."
      },
      source: {
        code: "<div className=\\"flex items-center gap-4\\">\\n  <Spinner size={14} />\\n  <Spinner />\\n  <Spinner size={24} />\\n  <Spinner size={32} />\\n</div>"
      }
    }
  }
}`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Inside a button",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Place it before a button's label to show something is happening. The label should say what."
      },
      source: {
        code: "<Button variant=\\"secondary\\" disabled leading={<Spinner size={14} label=\\"Saving\\" />}>\\n  Saving\\n</Button>"
      }
    }
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};export{n as InsideAButton,e as Sizes,C as __namedExportsOrder,q as default};
