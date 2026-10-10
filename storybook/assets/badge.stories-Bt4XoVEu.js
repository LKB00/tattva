import{j as e}from"./iframe-J6_2PHET.js";import{b as u}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import{B}from"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const n=u.get("badge"),O={title:"Controls/Badge",component:B,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},r={name:"Tones",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Neutral is the default. Accent is the lime highlight. The other colors match their meaning."},source:{code:`<div className="flex flex-wrap items-center gap-2">
  <Badge>Neutral</Badge>
  <Badge tone="accent">Accent</Badge>
  <Badge tone="success">Success</Badge>
  <Badge tone="warning">Warning</Badge>
  <Badge tone="danger">Danger</Badge>
  <Badge tone="info">Info</Badge>
</div>`}}}},a={name:"With an icon",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"An icon and text sit side by side."},source:{code:'<Badge tone="info"><SparkleIcon width={10} height={10} />Beta</Badge>'}}}},o={name:"Not sure, and a goal reached",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:'Unsure is a calm neutral for "not fully sure" or "partly done". It is not a warning. Celebrate is for one thing only: a goal fully reached.'},source:{code:`<div className="flex flex-wrap items-center gap-2">
  <Badge tone="unsure">Medium confidence</Badge>
  <Badge tone="unsure">Partly refunded</Badge>
  <Badge tone="celebrate">Refunded in full</Badge>
</div>`}}}},q=["Tones","WithAnIcon","NotSureAndAGoalReached"];var t,d,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Tones",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Neutral is the default. Accent is the lime highlight. The other colors match their meaning."
      },
      source: {
        code: "<div className=\\"flex flex-wrap items-center gap-2\\">\\n  <Badge>Neutral</Badge>\\n  <Badge tone=\\"accent\\">Accent</Badge>\\n  <Badge tone=\\"success\\">Success</Badge>\\n  <Badge tone=\\"warning\\">Warning</Badge>\\n  <Badge tone=\\"danger\\">Danger</Badge>\\n  <Badge tone=\\"info\\">Info</Badge>\\n</div>"
      }
    }
  }
}`,...(s=(d=r.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var i,c,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "With an icon",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "An icon and text sit side by side."
      },
      source: {
        code: "<Badge tone=\\"info\\"><SparkleIcon width={10} height={10} />Beta</Badge>"
      }
    }
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var g,p,l;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Not sure, and a goal reached",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Unsure is a calm neutral for \\"not fully sure\\" or \\"partly done\\". It is not a warning. Celebrate is for one thing only: a goal fully reached."
      },
      source: {
        code: "<div className=\\"flex flex-wrap items-center gap-2\\">\\n  <Badge tone=\\"unsure\\">Medium confidence</Badge>\\n  <Badge tone=\\"unsure\\">Partly refunded</Badge>\\n  <Badge tone=\\"celebrate\\">Refunded in full</Badge>\\n</div>"
      }
    }
  }
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};export{o as NotSureAndAGoalReached,r as Tones,a as WithAnIcon,q as __namedExportsOrder,O as default};
