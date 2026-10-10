import{j as e}from"./iframe-J6_2PHET.js";import{ab as f,b as x}from"./registry-DJg46al6.js";import{a}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const n=x.get("glance-panel"),N={title:"Asking and showing work/GlancePanel",component:f,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},r={name:"A refund case",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"A Countdown headline, four facts with one edited, the rule cited with a link, and the journey with one step happening now."},source:a("GlancePanel")}}},t={name:"Steps only",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Every section is optional. With only steps, the panel is a small progress view. Use headings to rename the section."},source:a("GlancePanel")}}},s={name:"Two columns beside a message list",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"On a wide screen the chat takes the main column and the panel sits on the right. ScrollEdge keeps the chat soft under the edges."},source:a("GlancePanel")}}},o={name:"GlanceSheet opened from a status line",render:()=>e.jsx(e.Fragment,{children:n.examples[3].render()}),parameters:{docs:{description:{story:"On a phone the page header shows a StatusLine as a button. Pressing it opens the same panel in a bottom sheet. Focus returns to the button on close."},source:a("GlancePanel")}}},Q=["ARefundCase","StepsOnly","TwoColumnsBesideAMessageList","GlanceSheetOpenedFromAStatusLine"];var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "A refund case",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A Countdown headline, four facts with one edited, the rule cited with a link, and the journey with one step happening now."
      },
      source: proSource("GlancePanel")
    }
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,d,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Steps only",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Every section is optional. With only steps, the panel is a small progress view. Use headings to rename the section."
      },
      source: proSource("GlancePanel")
    }
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var h,u,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Two columns beside a message list",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "On a wide screen the chat takes the main column and the panel sits on the right. ScrollEdge keeps the chat soft under the edges."
      },
      source: proSource("GlancePanel")
    }
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var w,S,y;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "GlanceSheet opened from a status line",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "On a phone the page header shows a StatusLine as a button. Pressing it opens the same panel in a bottom sheet. Focus returns to the button on close."
      },
      source: proSource("GlancePanel")
    }
  }
}`,...(y=(S=o.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};export{r as ARefundCase,o as GlanceSheetOpenedFromAStatusLine,t as StepsOnly,s as TwoColumnsBesideAMessageList,Q as __namedExportsOrder,N as default};
