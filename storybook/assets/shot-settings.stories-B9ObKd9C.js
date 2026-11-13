import{j as e}from"./iframe-D-pZXX8_.js";import{bA as h,b as g}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const t=g.get("shot-settings"),T={title:"Video/ShotSettings",component:h,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},n={name:"Settings with cost and a camera move",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Switch to Reel Lite: 8 s, 10 s, 21:9 and some camera moves become unavailable with the reason written out, and the chosen 8 s is marked instead of being changed."},source:{code:`<ShotSettings value={value} onChange={setValue} onGenerate={generate}
  models={models} lengths={lengthsFor(value.model)} aspects={aspectsFor(value.model)}
  costPerOutput={costFor(value)} balance={1240} busy={busy}>
  <CameraMovePicker value={camera} onChange={setCamera}
    moves={["static", "pushIn", "pullOut", "panLeft", "panRight", "orbit"]}
    supported={value.model === "lite" ? ["static", "pushIn", "pullOut"] : undefined}
    unsupportedReason="Reel Lite only pushes in or pulls out" />
</ShotSettings>

// lengthsFor("lite") marks 8 s and 10 s:
// { value: "8", label: "8 s", unavailable: "Reel Lite makes clips up to 6 seconds" }`}}}},s={name:"When Generate has to wait",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"A chosen length the model cannot make, not enough credits, and generating. Each says in words what to do."},source:{code:`<ShotSettings value={{ model: "lite", length: "8", aspect: "9:16", quality: "final", outputs: 2 }}
  lengths={lengthsFor("lite")} aspects={aspectsFor("lite")} models={models}
  costPerOutput={20} balance={1240} onChange={setValue} onGenerate={generate} />

<ShotSettings ... costPerOutput={200} balance={300} />   // 4 takes × 200 = 800, 300 left
<ShotSettings ... busy />`}}}},a={name:"Without a balance",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"Leave out balance when credits are shown elsewhere. maxOutputs limits the takes per press."},source:{code:`<ShotSettings title="Final render" value={value} onChange={setValue} onGenerate={generate}
  models={models.slice(1)} lengths={lengthsFor(value.model)} aspects={aspectsFor(value.model)}
  costPerOutput={costFor(value)} maxOutputs={2} />`}}}},_=["SettingsWithCostAndACameraMove","WhenGenerateHasToWait","WithoutABalance"];var o,r,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Settings with cost and a camera move",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Switch to Reel Lite: 8 s, 10 s, 21:9 and some camera moves become unavailable with the reason written out, and the chosen 8 s is marked instead of being changed."
      },
      source: {
        code: "<ShotSettings value={value} onChange={setValue} onGenerate={generate}\\n  models={models} lengths={lengthsFor(value.model)} aspects={aspectsFor(value.model)}\\n  costPerOutput={costFor(value)} balance={1240} busy={busy}>\\n  <CameraMovePicker value={camera} onChange={setCamera}\\n    moves={[\\"static\\", \\"pushIn\\", \\"pullOut\\", \\"panLeft\\", \\"panRight\\", \\"orbit\\"]}\\n    supported={value.model === \\"lite\\" ? [\\"static\\", \\"pushIn\\", \\"pullOut\\"] : undefined}\\n    unsupportedReason=\\"Reel Lite only pushes in or pulls out\\" />\\n</ShotSettings>\\n\\n// lengthsFor(\\"lite\\") marks 8 s and 10 s:\\n// { value: \\"8\\", label: \\"8 s\\", unavailable: \\"Reel Lite makes clips up to 6 seconds\\" }"
      }
    }
  }
}`,...(l=(r=n.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};var i,c,u;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "When Generate has to wait",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A chosen length the model cannot make, not enough credits, and generating. Each says in words what to do."
      },
      source: {
        code: "<ShotSettings value={{ model: \\"lite\\", length: \\"8\\", aspect: \\"9:16\\", quality: \\"final\\", outputs: 2 }}\\n  lengths={lengthsFor(\\"lite\\")} aspects={aspectsFor(\\"lite\\")} models={models}\\n  costPerOutput={20} balance={1240} onChange={setValue} onGenerate={generate} />\\n\\n<ShotSettings ... costPerOutput={200} balance={300} />   // 4 takes × 200 = 800, 300 left\\n<ShotSettings ... busy />"
      }
    }
  }
}`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,p,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Without a balance",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Leave out balance when credits are shown elsewhere. maxOutputs limits the takes per press."
      },
      source: {
        code: "<ShotSettings title=\\"Final render\\" value={value} onChange={setValue} onGenerate={generate}\\n  models={models.slice(1)} lengths={lengthsFor(value.model)} aspects={aspectsFor(value.model)}\\n  costPerOutput={costFor(value)} maxOutputs={2} />"
      }
    }
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};export{n as SettingsWithCostAndACameraMove,s as WhenGenerateHasToWait,a as WithoutABalance,_ as __namedExportsOrder,T as default};
