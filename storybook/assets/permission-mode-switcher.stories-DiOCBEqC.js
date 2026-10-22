import{j as o}from"./iframe-C8v_uZy_.js";import{aW as c,b as p}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const r=p.get("permission-mode-switcher"),U={title:"Assistants/PermissionModeSwitcher",component:c,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},e={name:"The five modes",render:()=>o.jsx(o.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"The five default modes. The riskiest one shows a warning."},source:{code:`const [mode, setMode] = useState("manual");

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
