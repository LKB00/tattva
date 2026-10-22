import{j as e}from"./iframe-C8v_uZy_.js";import{u as l,b as y}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const o=y.get("catch-up-summary"),R={title:"Assistants/CatchUpSummary",component:l,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},r={name:"After two hours away",render:()=>e.jsx(e.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Press a Needs you button or Show full log. Press the header to fold the card."},source:{code:`<CatchUpSummary
  awayFor="2 hours"
  finished={["Found 6 flights under $400", "Saved your passport details to the form"]}
  needsYou={[{ id: "n1", text: "Choose which hotel to book for Friday", actionLabel: "Choose", onAction: openHotels }]}
  changes={[{ label: "files edited", count: 4 }, { label: "pages visited", count: 31 }]}
  onShowLog={openLog}
/>`}}}},t={name:"Nothing needs you",render:()=>e.jsx(e.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"A calm recap when everything went well."},source:{code:'<CatchUpSummary awayFor="30 minutes" finished={["Backed up 214 photos"]} changes={[{ label: "photos copied", count: 214 }]} />'}}}},n={name:"Folded",render:()=>e.jsx(e.Fragment,{children:o.examples[2].render()}),parameters:{docs:{description:{story:"Start folded when the person has seen similar recaps before."},source:{code:'<CatchUpSummary awayFor="1 day" defaultOpen={false} finished={["Sent the weekly update"]} />'}}}},q=["AfterTwoHoursAway","NothingNeedsYou","Folded"];var s,a,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "After two hours away",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press a Needs you button or Show full log. Press the header to fold the card."
      },
      source: {
        code: "<CatchUpSummary\\n  awayFor=\\"2 hours\\"\\n  finished={[\\"Found 6 flights under $400\\", \\"Saved your passport details to the form\\"]}\\n  needsYou={[{ id: \\"n1\\", text: \\"Choose which hotel to book for Friday\\", actionLabel: \\"Choose\\", onAction: openHotels }]}\\n  changes={[{ label: \\"files edited\\", count: 4 }, { label: \\"pages visited\\", count: 31 }]}\\n  onShowLog={openLog}\\n/>"
      }
    }
  }
}`,...(d=(a=r.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var i,p,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Nothing needs you",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A calm recap when everything went well."
      },
      source: {
        code: "<CatchUpSummary awayFor=\\"30 minutes\\" finished={[\\"Backed up 214 photos\\"]} changes={[{ label: \\"photos copied\\", count: 214 }]} />"
      }
    }
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,h,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Folded",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Start folded when the person has seen similar recaps before."
      },
      source: {
        code: "<CatchUpSummary awayFor=\\"1 day\\" defaultOpen={false} finished={[\\"Sent the weekly update\\"]} />"
      }
    }
  }
}`,...(u=(h=n.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};export{r as AfterTwoHoursAway,n as Folded,t as NothingNeedsYou,q as __namedExportsOrder,R as default};
