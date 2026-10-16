import{j as e}from"./iframe-DSdOWv-_.js";import{b as g}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import{A as h}from"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const t=g.get("altitude-toggle"),q={title:"Assistants/AltitudeToggle",component:h,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},r={name:"Three levels of detail",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Pick a view and the list below changes."},source:{code:`const [view, setView] = useState<Altitude>("summary");
<AltitudeToggle value={view} onChange={setView} />`}}}},o={name:"Start on Steps",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Leave it uncontrolled and set where it starts."},source:{code:'<AltitudeToggle defaultValue="steps" />'}}}},s={name:"Your own hints",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"Replace the hint for any view."},source:{code:'<AltitudeToggle hints={{ summary: "Just the result of your trip search." }} />'}}}},z=["ThreeLevelsOfDetail","StartOnSteps","YourOwnHints"];var n,a,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Three levels of detail",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Pick a view and the list below changes."
      },
      source: {
        code: "const [view, setView] = useState<Altitude>(\\"summary\\");\\n<AltitudeToggle value={view} onChange={setView} />"
      }
    }
  }
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var m,d,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Start on Steps",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Leave it uncontrolled and set where it starts."
      },
      source: {
        code: "<AltitudeToggle defaultValue=\\"steps\\" />"
      }
    }
  }
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,l,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Your own hints",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Replace the hint for any view."
      },
      source: {
        code: "<AltitudeToggle hints={{ summary: \\"Just the result of your trip search.\\" }} />"
      }
    }
  }
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};export{o as StartOnSteps,r as ThreeLevelsOfDetail,s as YourOwnHints,z as __namedExportsOrder,q as default};
