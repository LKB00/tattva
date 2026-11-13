import{j as o}from"./iframe-D-pZXX8_.js";import{a$ as c,b as p}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const r=p.get("permission-mode-switcher"),U={title:"Assistants/PermissionModeSwitcher",component:c,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},e={name:"The five modes",render:()=>o.jsx(o.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"The five default modes. The riskiest one shows a warning."},source:{code:`const [mode, setMode] = useState("manual");

<PermissionModeSwitcher value={mode} onChange={setMode} shortcut="Shift+Tab" />`}}}},s={name:"Locked by your admin",render:()=>o.jsx(o.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"A locked mode is switched off and says why."},source:{code:`<PermissionModeSwitcher
  defaultValue="manual"
  modes={[
    { id: "manual", label: "Manual", description: "Asks before every change.", risk: "low" },
    { id: "auto", label: "Auto", description: "A second check reviews each step.", risk: "medium", lockedReason: "Disabled by your admin" },
    { id: "bypass", label: "Bypass", description: "Never asks first.", risk: "high", warning: "Use only in a safe, separate space.", lockedReason: "Disabled by your admin" },
  ]}
/>`}}}},V=["TheFiveModes","LockedByYourAdmin"];var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "The five modes",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The five default modes. The riskiest one shows a warning."
      },
      source: {
        code: "const [mode, setMode] = useState(\\"manual\\");\\n\\n<PermissionModeSwitcher value={mode} onChange={setMode} shortcut=\\"Shift+Tab\\" />"
      }
    }
  }
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var t,d,m;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Locked by your admin",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A locked mode is switched off and says why."
      },
      source: {
        code: "<PermissionModeSwitcher\\n  defaultValue=\\"manual\\"\\n  modes={[\\n    { id: \\"manual\\", label: \\"Manual\\", description: \\"Asks before every change.\\", risk: \\"low\\" },\\n    { id: \\"auto\\", label: \\"Auto\\", description: \\"A second check reviews each step.\\", risk: \\"medium\\", lockedReason: \\"Disabled by your admin\\" },\\n    { id: \\"bypass\\", label: \\"Bypass\\", description: \\"Never asks first.\\", risk: \\"high\\", warning: \\"Use only in a safe, separate space.\\", lockedReason: \\"Disabled by your admin\\" },\\n  ]}\\n/>"
      }
    }
  }
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};export{s as LockedByYourAdmin,e as TheFiveModes,V as __namedExportsOrder,U as default};
