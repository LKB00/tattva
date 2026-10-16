import{j as e}from"./iframe-DSdOWv-_.js";import{bb as k,b as w}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const s=w.get("risk-limits"),H={title:"Markets and trading/RiskLimits",component:k,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},r={name:"Normal",render:()=>e.jsx(e.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"Two limits well below their maximum. Money uses a format function."},source:{code:`<RiskLimits limits={[
  { id: "loss", label: "Daily loss", used: 4200, max: 20000, format: (n) => "₹" + n.toLocaleString("en-IN") },
  { id: "orders", label: "Orders today", used: 6, max: 25, unit: "orders" },
]} note="Exits are never blocked." />`}}}},n={name:"Near the limit",render:()=>e.jsx(e.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"At 80 percent or more a limit says Near the limit with an icon. The meter stays plain."},source:{code:'<RiskLimits limits={[{ id: "loss", label: "Daily loss", used: 17000, max: 20000, format: (n) => "₹" + n.toLocaleString("en-IN") }]} />'}}}},a={name:"Reached and paused",render:()=>e.jsx(e.Fragment,{children:s.examples[2].render()}),parameters:{docs:{description:{story:"At 100 percent it says Limit reached with a lock. Paused shows in words on each limit and the kill switch is gone."},source:{code:`<RiskLimits paused pausedReason="Trading is paused: daily loss limit reached."
  limits={[{ id: "loss", label: "Daily loss", used: 20000, max: 20000, format: (n) => "₹" + n.toLocaleString("en-IN") }]}
  note="Exits are never blocked." onKill={() => {}} />`}}}},o={name:"Kill switch flow",render:()=>e.jsx(e.Fragment,{children:s.examples[3].render()}),parameters:{docs:{description:{story:"Press Stop all trading. It asks in place, and focus lands on Keep trading. Choosing Stop trading pauses."},source:{code:`function Example() {
  const [paused, setPaused] = useState(false);
  return (
    <RiskLimits paused={paused} pausedReason={paused ? "You stopped trading." : undefined} onKill={() => setPaused(true)} note="Exits are never blocked."
      limits={[{ id: "orders", label: "Orders today", used: 6, max: 25, unit: "orders" }]} />
  );
}`}}}},J=["Normal","NearTheLimit","ReachedAndPaused","KillSwitchFlow"];var t,i,d;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Normal",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Two limits well below their maximum. Money uses a format function."
      },
      source: {
        code: "<RiskLimits limits={[\\n  { id: \\"loss\\", label: \\"Daily loss\\", used: 4200, max: 20000, format: (n) => \\"₹\\" + n.toLocaleString(\\"en-IN\\") },\\n  { id: \\"orders\\", label: \\"Orders today\\", used: 6, max: 25, unit: \\"orders\\" },\\n]} note=\\"Exits are never blocked.\\" />"
      }
    }
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,l,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Near the limit",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "At 80 percent or more a limit says Near the limit with an icon. The meter stays plain."
      },
      source: {
        code: "<RiskLimits limits={[{ id: \\"loss\\", label: \\"Daily loss\\", used: 17000, max: 20000, format: (n) => \\"₹\\" + n.toLocaleString(\\"en-IN\\") }]} />"
      }
    }
  }
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,u,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Reached and paused",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "At 100 percent it says Limit reached with a lock. Paused shows in words on each limit and the kill switch is gone."
      },
      source: {
        code: "<RiskLimits paused pausedReason=\\"Trading is paused: daily loss limit reached.\\"\\n  limits={[{ id: \\"loss\\", label: \\"Daily loss\\", used: 20000, max: 20000, format: (n) => \\"₹\\" + n.toLocaleString(\\"en-IN\\") }]}\\n  note=\\"Exits are never blocked.\\" onKill={() => {}} />"
      }
    }
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var x,g,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Kill switch flow",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press Stop all trading. It asks in place, and focus lands on Keep trading. Choosing Stop trading pauses."
      },
      source: {
        code: "function Example() {\\n  const [paused, setPaused] = useState(false);\\n  return (\\n    <RiskLimits paused={paused} pausedReason={paused ? \\"You stopped trading.\\" : undefined} onKill={() => setPaused(true)} note=\\"Exits are never blocked.\\"\\n      limits={[{ id: \\"orders\\", label: \\"Orders today\\", used: 6, max: 25, unit: \\"orders\\" }]} />\\n  );\\n}"
      }
    }
  }
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};export{o as KillSwitchFlow,n as NearTheLimit,r as Normal,a as ReachedAndPaused,J as __namedExportsOrder,H as default};
