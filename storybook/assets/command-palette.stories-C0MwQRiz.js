import{j as e}from"./iframe-J6_2PHET.js";import{J as g,b as y}from"./registry-DJg46al6.js";import{a}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const t=y.get("command-palette"),z={title:"Navigation and overlays/CommandPalette",component:g,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},r={name:"Grouped commands opened by a button",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Commands under a group name get a heading. Typing narrows the list, matches at the start of a label come first, and a disabled command is shown but skipped by the arrow keys."},source:a("CommandPalette")}}},o={name:"Opened with Ctrl K or Cmd K",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"The palette registers no shortcut. Your app adds one. In an app, attach the listener to the document; here it is on the box so it does not clash with this site's own search."},source:a("CommandPalette")}}},s={name:"No results",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:'When nothing matches, or no commands are passed, the list shows the empty text. Screen readers hear "No results" once someone has typed.'},source:a("CommandPalette")}}},D=["GroupedCommandsOpenedByAButton","OpenedWithCtrlKOrCmdK","NoResults"];var n,m,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Grouped commands opened by a button",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Commands under a group name get a heading. Typing narrows the list, matches at the start of a label come first, and a disabled command is shown but skipped by the arrow keys."
      },
      source: proSource("CommandPalette")
    }
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,i,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Opened with Ctrl K or Cmd K",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The palette registers no shortcut. Your app adds one. In an app, attach the listener to the document; here it is on the box so it does not clash with this site's own search."
      },
      source: proSource("CommandPalette")
    }
  }
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var h,l,u;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "No results",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "When nothing matches, or no commands are passed, the list shows the empty text. Screen readers hear \\"No results\\" once someone has typed."
      },
      source: proSource("CommandPalette")
    }
  }
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};export{r as GroupedCommandsOpenedByAButton,s as NoResults,o as OpenedWithCtrlKOrCmdK,D as __namedExportsOrder,z as default};
