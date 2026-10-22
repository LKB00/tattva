import{j as e}from"./iframe-C8v_uZy_.js";import{b1 as x,b as h}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const r=h.get("prompt-box"),z={title:"Creating/PromptBox",component:x,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},t={name:"With example ideas",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Click an example to fill the box, then Generate. The demo shows Generating for 1.5 seconds."},source:{code:`const [busy, setBusy] = useState(false);

<div className="max-w-xl">
  <PromptBox
    busy={busy}
    examples={["Product launch banner", "Quiet desk at sunrise"]}
    onGenerate={() => { setBusy(true); setTimeout(() => setBusy(false), 1500); }}
  />
</div>`}}}},o={name:"While it works",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"The button is off, so a second request cannot start. The text can still be edited."},source:{code:`<div className="max-w-xl">
  <PromptBox busy onGenerate={() => {}} />
</div>`}}}},s={name:"Custom placeholder",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"Change the hint text to match what is being made."},source:{code:`<div className="max-w-xl">
  <PromptBox placeholder="Describe the icon you need…" onGenerate={() => {}} />
</div>`}}}},A=["WithExampleIdeas","WhileItWorks","CustomPlaceholder"];var n,a,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "With example ideas",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Click an example to fill the box, then Generate. The demo shows Generating for 1.5 seconds."
      },
      source: {
        code: "const [busy, setBusy] = useState(false);\\n\\n<div className=\\"max-w-xl\\">\\n  <PromptBox\\n    busy={busy}\\n    examples={[\\"Product launch banner\\", \\"Quiet desk at sunrise\\"]}\\n    onGenerate={() => { setBusy(true); setTimeout(() => setBusy(false), 1500); }}\\n  />\\n</div>"
      }
    }
  }
}`,...(m=(a=t.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var i,c,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "While it works",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The button is off, so a second request cannot start. The text can still be edited."
      },
      source: {
        code: "<div className=\\"max-w-xl\\">\\n  <PromptBox busy onGenerate={() => {}} />\\n</div>"
      }
    }
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,l,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Custom placeholder",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Change the hint text to match what is being made."
      },
      source: {
        code: "<div className=\\"max-w-xl\\">\\n  <PromptBox placeholder=\\"Describe the icon you need…\\" onGenerate={() => {}} />\\n</div>"
      }
    }
  }
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};export{s as CustomPlaceholder,o as WhileItWorks,t as WithExampleIdeas,A as __namedExportsOrder,z as default};
