import{j as e}from"./iframe-J6_2PHET.js";import{b as u}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import{I as y}from"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const s=u.get("illustration"),C={title:"Empty and error/Illustration",component:y,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},r={name:"Three sizes",render:()=>e.jsx(e.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"Line thickness grows with size, so the drawing looks balanced at each size."},source:{code:`<Illustration name="no-results" size={64} />
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
