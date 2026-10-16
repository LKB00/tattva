import{j as e}from"./iframe-DSdOWv-_.js";import{aK as h,b as k}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const n=k.get("model-picker"),Y={title:"Conversation/ModelPicker",component:h,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},o={name:"Modes with thinking time",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"An Auto option, two fixed options and a Standard or Extended switch."},source:{code:`<ModelPicker
  models={[
    { id: "auto", name: "Auto", description: "Chooses a model for each question.", badge: "Auto", auto: true },
    { id: "fast", name: "Fast", description: "Quick answers for everyday questions." },
    { id: "thinking", name: "Thinking", description: "Works through harder problems before it answers." },
  ]}
  effortOptions={[{ value: "standard", label: "Standard" }, { value: "extended", label: "Extended" }]}
/>`}}}},r={name:"Auto picks for you",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Auto is picked and Thinking answered. The button says so and the list repeats it."},source:{code:'<ModelPicker models={models} defaultValue="auto" routedId="thinking" />'}}}},t={name:"Usage limit reached",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"Thinking is turned off, the reason is shown and the replacement is named. Fast can still be picked."},source:{code:`<ModelPicker
  models={models}
  defaultValue="fast"
  limit={{ reason: "Weekly limit reached for Thinking.", limitedIds: ["thinking"], fallbackId: "fast" }}
/>`}}}},_=["ModesWithThinkingTime","AutoPicksForYou","UsageLimitReached"];var s,i,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Modes with thinking time",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "An Auto option, two fixed options and a Standard or Extended switch."
      },
      source: {
        code: "<ModelPicker\\n  models={[\\n    { id: \\"auto\\", name: \\"Auto\\", description: \\"Chooses a model for each question.\\", badge: \\"Auto\\", auto: true },\\n    { id: \\"fast\\", name: \\"Fast\\", description: \\"Quick answers for everyday questions.\\" },\\n    { id: \\"thinking\\", name: \\"Thinking\\", description: \\"Works through harder problems before it answers.\\" },\\n  ]}\\n  effortOptions={[{ value: \\"standard\\", label: \\"Standard\\" }, { value: \\"extended\\", label: \\"Extended\\" }]}\\n/>"
      }
    }
  }
}`,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var d,m,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Auto picks for you",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Auto is picked and Thinking answered. The button says so and the list repeats it."
      },
      source: {
        code: "<ModelPicker models={models} defaultValue=\\"auto\\" routedId=\\"thinking\\" />"
      }
    }
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,l,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Usage limit reached",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Thinking is turned off, the reason is shown and the replacement is named. Fast can still be picked."
      },
      source: {
        code: "<ModelPicker\\n  models={models}\\n  defaultValue=\\"fast\\"\\n  limit={{ reason: \\"Weekly limit reached for Thinking.\\", limitedIds: [\\"thinking\\"], fallbackId: \\"fast\\" }}\\n/>"
      }
    }
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};export{r as AutoPicksForYou,o as ModesWithThinkingTime,t as UsageLimitReached,_ as __namedExportsOrder,Y as default};
