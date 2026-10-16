import{j as o}from"./iframe-DSdOWv-_.js";import{p as c,b as d}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const r=d.get("camera-move-picker"),A={title:"Video/CameraMovePicker",component:c,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},e={name:"Pick one move",render:()=>o.jsx(o.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Every move with its name. Hover or Tab onto a tile to see the subject move once."},source:{code:"<CameraMovePicker value={value} onChange={setValue} />"}}}},t={name:"Combine two, with strength and limits",render:()=>o.jsx(o.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Up to two moves at once. Orbit, crane and handheld are off for this model with the reason written below. Strength shows once a moving choice is made."},source:{code:`<CameraMovePicker label="Camera moves" value={value} onChange={setValue} max={2}
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
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var i,m,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as CombineTwoWithStrengthAndLimits,e as PickOneMove,D as __namedExportsOrder,A as default};
