import{j as e}from"./iframe-DSdOWv-_.js";import{b as h}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import{B as g}from"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const t=h.get("budget-control"),$={title:"Assistants/BudgetControl",component:g,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},s={name:"Limits for a trip search",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Change a number and the bar updates. Spend is close to its limit and steps have reached theirs."},source:{code:`<BudgetControl
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
