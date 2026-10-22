import{j as o}from"./iframe-C8v_uZy_.js";import{q as p,b as d}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const r=d.get("camera-move-picker"),A={title:"Video/CameraMovePicker",component:p,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},e={name:"Pick one move",render:()=>o.jsx(o.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Every move with its name. Hover or Tab onto a tile to see the subject move once."},source:{code:"<CameraMovePicker value={value} onChange={setValue} />"}}}},t={name:"Combine two, with strength and limits",render:()=>o.jsx(o.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Up to two moves at once. Orbit, crane and handheld are off for this model with the reason written below. Strength shows once a moving choice is made."},source:{code:`<CameraMovePicker label="Camera moves" value={value} onChange={setValue} max={2}
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
