import{j as e}from"./iframe-J6_2PHET.js";import{ax as l,b}from"./registry-DJg46al6.js";import{a as s}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=b.get("menu"),G={title:"Navigation and overlays/Menu",component:l,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},t={name:"Icon-only trigger",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"triggerLabel gives the icon button its name. The menu opens below and lines up with the start of the button."},source:s("Menu")}}},n={name:"Label, separator, shortcuts and a danger item",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"A group label names the section. A separator sets the dangerous action apart. The disabled item is announced but cannot be chosen."},source:s("Menu")}}},o={name:"Text and icon trigger, aligned to the end",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"Use align end when the button sits at the right edge, so the menu grows to the left."},source:s("Menu")}}},H=["IconOnlyTrigger","LabelSeparatorShortcutsAndADangerItem","TextAndIconTriggerAlignedToTheEnd"];var a,i,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Icon-only trigger",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "triggerLabel gives the icon button its name. The menu opens below and lines up with the start of the button."
      },
      source: proSource("Menu")
    }
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,p,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Label, separator, shortcuts and a danger item",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A group label names the section. A separator sets the dangerous action apart. The disabled item is announced but cannot be chosen."
      },
      source: proSource("Menu")
    }
  }
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,g,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Text and icon trigger, aligned to the end",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Use align end when the button sits at the right edge, so the menu grows to the left."
      },
      source: proSource("Menu")
    }
  }
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};export{t as IconOnlyTrigger,n as LabelSeparatorShortcutsAndADangerItem,o as TextAndIconTriggerAlignedToTheEnd,H as __namedExportsOrder,G as default};
