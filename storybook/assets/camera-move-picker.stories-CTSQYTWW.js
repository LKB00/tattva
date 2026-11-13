import{j as o}from"./iframe-D-pZXX8_.js";import{s as p,b as d}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const r=d.get("camera-move-picker"),A={title:"Video/CameraMovePicker",component:p,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},e={name:"Pick one move",render:()=>o.jsx(o.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Every move with its name. Hover or Tab onto a tile to see the subject move once."},source:{code:"<CameraMovePicker value={value} onChange={setValue} />"}}}},t={name:"Combine two, with strength and limits",render:()=>o.jsx(o.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Up to two moves at once. Orbit, crane and handheld are off for this model with the reason written below. Strength shows once a moving choice is made."},source:{code:`<CameraMovePicker label="Camera moves" value={value} onChange={setValue} max={2}
  strength={strength} onStrengthChange={setStrength}
  supported={["static", "pushIn", "pullOut", "panLeft", "panRight", "tiltUp", "tiltDown", "tracking"]}
  unsupportedReason="Not available with Reel Fast" />`}}}},D=["PickOneMove","CombineTwoWithStrengthAndLimits"];var n,a,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Pick one move",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Every move with its name. Hover or Tab onto a tile to see the subject move once."
      },
      source: {
        code: "<CameraMovePicker value={value} onChange={setValue} />"
      }
    }
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var i,m,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Combine two, with strength and limits",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Up to two moves at once. Orbit, crane and handheld are off for this model with the reason written below. Strength shows once a moving choice is made."
      },
      source: {
        code: "<CameraMovePicker label=\\"Camera moves\\" value={value} onChange={setValue} max={2}\\n  strength={strength} onStrengthChange={setStrength}\\n  supported={[\\"static\\", \\"pushIn\\", \\"pullOut\\", \\"panLeft\\", \\"panRight\\", \\"tiltUp\\", \\"tiltDown\\", \\"tracking\\"]}\\n  unsupportedReason=\\"Not available with Reel Fast\\" />"
      }
    }
  }
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};export{t as CombineTwoWithStrengthAndLimits,e as PickOneMove,D as __namedExportsOrder,A as default};
