import{j as e}from"./iframe-J6_2PHET.js";import{b as h}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import{M as x}from"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=h.get("meter-bar"),z={title:"Numbers/MeterBar",component:x,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},t={name:"Plain",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"A dark fill, as wide as the amount used out of the limit."},source:{code:'<MeterBar label="Space used" value={40} valueText="40% of the space" />'}}}},a={name:"Past the warning point",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"At 85 with a warning point of 80 percent, the fill turns amber. The words beside it say why."},source:{code:`<div className="w-64 space-y-1">
  <MeterBar label="Space used" value={85} warnAt={0.8} valueText="85% of the space" />
  <p className="text-small leading-4 text-attention-fg">85% used. Start a new chat soon.</p>
</div>`}}}},n={name:"A limit other than 100",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"Set a limit when the amount is not a percent."},source:{code:'<MeterBar label="Credits used" value={30} max={120} valueText="30 of 120 credits" />'}}}},D=["Plain","PastTheWarningPoint","ALimitOtherThan100"];var s,o,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Plain",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A dark fill, as wide as the amount used out of the limit."
      },
      source: {
        code: "<MeterBar label=\\"Space used\\" value={40} valueText=\\"40% of the space\\" />"
      }
    }
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var m,p,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Past the warning point",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "At 85 with a warning point of 80 percent, the fill turns amber. The words beside it say why."
      },
      source: {
        code: "<div className=\\"w-64 space-y-1\\">\\n  <MeterBar label=\\"Space used\\" value={85} warnAt={0.8} valueText=\\"85% of the space\\" />\\n  <p className=\\"text-small leading-4 text-attention-fg\\">85% used. Start a new chat soon.</p>\\n</div>"
      }
    }
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,l,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "A limit other than 100",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Set a limit when the amount is not a percent."
      },
      source: {
        code: "<MeterBar label=\\"Credits used\\" value={30} max={120} valueText=\\"30 of 120 credits\\" />"
      }
    }
  }
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};export{n as ALimitOtherThan100,a as PastTheWarningPoint,t as Plain,D as __namedExportsOrder,z as default};
