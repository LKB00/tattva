import{j as e}from"./iframe-C8v_uZy_.js";import{Y as h,b as x}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const s=x.get("data-freshness"),q={title:"Markets and trading/DataFreshness",component:h,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},a={name:"Each status",render:()=>e.jsx(e.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"Live has a pulsing dot. The others have an icon and their own words."},source:{code:'<div className="flex flex-wrap gap-2"><DataFreshness status="live" /> <DataFreshness status="delayed" delayMinutes={15} /> <DataFreshness status="stale" asOf="2026-10-07T09:57:00Z" now="2026-10-07T10:00:00Z" /> <DataFreshness status="simulated" /> <DataFreshness status="closed" /></div>'}}}},t={name:"Worked out from the time",render:()=>e.jsx(e.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"No status is passed. With a fixed now, 4 seconds is live and 3 minutes is stale."},source:{code:'<div className="flex flex-wrap gap-2"><DataFreshness asOf="2026-10-07T09:59:56Z" now="2026-10-07T10:00:00Z" /> <DataFreshness asOf="2026-10-07T09:57:00Z" now="2026-10-07T10:00:00Z" /></div>'}}}},r={name:"With a price",render:()=>e.jsx(e.Fragment,{children:s.examples[2].render()}),parameters:{docs:{description:{story:"Put it next to the number it describes."},source:{code:'<div className="flex items-center gap-3"><Price value={2874.15} label="Reliance price" className="text-title-xs leading-7 text-fg" /> <DataFreshness status="delayed" delayMinutes={15} /></div>'}}}},z=["EachStatus","WorkedOutFromTheTime","WithAPrice"];var n,o,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Each status",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Live has a pulsing dot. The others have an icon and their own words."
      },
      source: {
        code: "<div className=\\"flex flex-wrap gap-2\\"><DataFreshness status=\\"live\\" /> <DataFreshness status=\\"delayed\\" delayMinutes={15} /> <DataFreshness status=\\"stale\\" asOf=\\"2026-10-07T09:57:00Z\\" now=\\"2026-10-07T10:00:00Z\\" /> <DataFreshness status=\\"simulated\\" /> <DataFreshness status=\\"closed\\" /></div>"
      }
    }
  }
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var d,c,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Worked out from the time",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "No status is passed. With a fixed now, 4 seconds is live and 3 minutes is stale."
      },
      source: {
        code: "<div className=\\"flex flex-wrap gap-2\\"><DataFreshness asOf=\\"2026-10-07T09:59:56Z\\" now=\\"2026-10-07T10:00:00Z\\" /> <DataFreshness asOf=\\"2026-10-07T09:57:00Z\\" now=\\"2026-10-07T10:00:00Z\\" /></div>"
      }
    }
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,l,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "With a price",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Put it next to the number it describes."
      },
      source: {
        code: "<div className=\\"flex items-center gap-3\\"><Price value={2874.15} label=\\"Reliance price\\" className=\\"text-title-xs leading-7 text-fg\\" /> <DataFreshness status=\\"delayed\\" delayMinutes={15} /></div>"
      }
    }
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};export{a as EachStatus,r as WithAPrice,t as WorkedOutFromTheTime,z as __namedExportsOrder,q as default};
