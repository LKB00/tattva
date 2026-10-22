import{j as e}from"./iframe-C8v_uZy_.js";import{b as h}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import{B as g}from"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const t=h.get("budget-control"),$={title:"Assistants/BudgetControl",component:g,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},s={name:"Limits for a trip search",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Change a number and the bar updates. Spend is close to its limit and steps have reached theirs."},source:{code:`<BudgetControl
  limits={[
    { id: "time", label: "Time", used: 12, cap: 30, unit: "minutes" },
    { id: "spend", label: "Spend", used: 4.2, cap: 5, unit: "$" },
    { id: "steps", label: "Steps", used: 50, cap: 50, unit: "steps" },
  ]}
  onCapChange={(id, cap) => save(id, cap)}
/>`}}}},n={name:"Plenty of room",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Nothing is close to a limit, so no warning shows."},source:{code:'<BudgetControl limits={[{ id: "time", label: "Time", used: 3, cap: 30, unit: "minutes" }, { id: "steps", label: "Steps", used: 5, cap: 50, unit: "steps" }]} />'}}}},r={name:"Spend in credits, stop without asking",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"Use any unit. Here the choice starts on Stop."},source:{code:'<BudgetControl defaultLimitAction="stop" limits={[{ id: "spend", label: "Spend", used: 20, cap: 100, unit: "credits" }]} />'}}}},q=["LimitsForATripSearch","PlentyOfRoom","SpendInCreditsStopWithoutAsking"];var o,i,a;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Limits for a trip search",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Change a number and the bar updates. Spend is close to its limit and steps have reached theirs."
      },
      source: {
        code: "<BudgetControl\\n  limits={[\\n    { id: \\"time\\", label: \\"Time\\", used: 12, cap: 30, unit: \\"minutes\\" },\\n    { id: \\"spend\\", label: \\"Spend\\", used: 4.2, cap: 5, unit: \\"$\\" },\\n    { id: \\"steps\\", label: \\"Steps\\", used: 50, cap: 50, unit: \\"steps\\" },\\n  ]}\\n  onCapChange={(id, cap) => save(id, cap)}\\n/>"
      }
    }
  }
}`,...(a=(i=s.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var p,d,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Plenty of room",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Nothing is close to a limit, so no warning shows."
      },
      source: {
        code: "<BudgetControl limits={[{ id: \\"time\\", label: \\"Time\\", used: 3, cap: 30, unit: \\"minutes\\" }, { id: \\"steps\\", label: \\"Steps\\", used: 5, cap: 50, unit: \\"steps\\" }]} />"
      }
    }
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,u,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Spend in credits, stop without asking",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Use any unit. Here the choice starts on Stop."
      },
      source: {
        code: "<BudgetControl defaultLimitAction=\\"stop\\" limits={[{ id: \\"spend\\", label: \\"Spend\\", used: 20, cap: 100, unit: \\"credits\\" }]} />"
      }
    }
  }
}`,...(l=(u=r.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};export{s as LimitsForATripSearch,n as PlentyOfRoom,r as SpendInCreditsStopWithoutAsking,q as __namedExportsOrder,$ as default};
