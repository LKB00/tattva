import{j as e}from"./iframe-C8v_uZy_.js";import{b as u}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import{I as y}from"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const s=u.get("illustration"),C={title:"Empty and error/Illustration",component:y,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},r={name:"Three sizes",render:()=>e.jsx(e.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"Line thickness grows with size, so the drawing looks balanced at each size."},source:{code:`<Illustration name="no-results" size={64} />
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
