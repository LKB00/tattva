import{j as e}from"./iframe-J6_2PHET.js";import{S as x,b as T}from"./registry-DJg46al6.js";import{a as t}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=T.get("data-table"),K={title:"Numbers/DataTable",component:x,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},o={name:"Wait times by shop",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Number columns line up on the right. Values are already formatted."},source:t("DataTable")}}},a={name:"A long table with fixed headings",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"For long tables, headings stay in view while the rows scroll."},source:t("DataTable")}}},n={name:"Cards on a phone",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"Set responsive to stack and each row becomes a card when the table is narrow, with the column name before each value. Nothing scrolls sideways. This frame is narrow on purpose, so you see the phone layout here."},source:t("DataTable")}}},s={name:"Sortable, dense, with up and down",render:()=>e.jsx(e.Fragment,{children:r.examples[3].render()}),parameters:{docs:{description:{story:"A watchlist. Headings sort (none, then ascending, then descending). The change column gets an arrow and a colour. Pressing a row name chooses that row."},source:t("DataTable")}}},M=["WaitTimesByShop","ALongTableWithFixedHeadings","CardsOnAPhone","SortableDenseWithUpAndDown"];var i,c,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Wait times by shop",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Number columns line up on the right. Values are already formatted."
      },
      source: proSource("DataTable")
    }
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "A long table with fixed headings",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "For long tables, headings stay in view while the rows scroll."
      },
      source: proSource("DataTable")
    }
  }
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var h,u,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Cards on a phone",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Set responsive to stack and each row becomes a card when the table is narrow, with the column name before each value. Nothing scrolls sideways. This frame is narrow on purpose, so you see the phone layout here."
      },
      source: proSource("DataTable")
    }
  }
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,w,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Sortable, dense, with up and down",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A watchlist. Headings sort (none, then ascending, then descending). The change column gets an arrow and a colour. Pressing a row name chooses that row."
      },
      source: proSource("DataTable")
    }
  }
}`,...(y=(w=s.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};export{a as ALongTableWithFixedHeadings,n as CardsOnAPhone,s as SortableDenseWithUpAndDown,o as WaitTimesByShop,M as __namedExportsOrder,K as default};
