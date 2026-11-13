import{j as e}from"./iframe-D-pZXX8_.js";import{b as u}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import{I as y}from"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const s=u.get("illustration"),C={title:"Empty and error/Illustration",component:y,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},r={name:"Three sizes",render:()=>e.jsx(e.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"Line thickness grows with size, so the drawing looks balanced at each size."},source:{code:`<Illustration name="no-results" size={64} />
<Illustration name="no-results" size={96} />
<Illustration name="no-results" size={160} />`}}}},t={name:"All names",render:()=>e.jsx(e.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"Each name has one job. Pick the one that matches what is happening, not the one you like best."},source:{code:`{spotIllustrations.map((s) => (
  <Illustration key={s.name} name={s.name} size={64} />
))}`}}}},n={name:"When the picture says something",render:()=>e.jsx(e.Fragment,{children:s.examples[2].render()}),parameters:{docs:{description:{story:"A title lets screen readers describe the picture. Use it only when the picture says something the nearby words do not."},source:{code:'<Illustration name="offline" size={96} title="Plug disconnected from its socket" />'}}}},D=["ThreeSizes","AllNames","WhenThePictureSaysSomething"];var o,a,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Three sizes",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Line thickness grows with size, so the drawing looks balanced at each size."
      },
      source: {
        code: "<Illustration name=\\"no-results\\" size={64} />\\n<Illustration name=\\"no-results\\" size={96} />\\n<Illustration name=\\"no-results\\" size={160} />"
      }
    }
  }
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var m,c,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "All names",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Each name has one job. Pick the one that matches what is happening, not the one you like best."
      },
      source: {
        code: "{spotIllustrations.map((s) => (\\n  <Illustration key={s.name} name={s.name} size={64} />\\n))}"
      }
    }
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,d,h;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "When the picture says something",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A title lets screen readers describe the picture. Use it only when the picture says something the nearby words do not."
      },
      source: {
        code: "<Illustration name=\\"offline\\" size={96} title=\\"Plug disconnected from its socket\\" />"
      }
    }
  }
}`,...(h=(d=n.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};export{t as AllNames,r as ThreeSizes,n as WhenThePictureSaysSomething,D as __namedExportsOrder,C as default};
