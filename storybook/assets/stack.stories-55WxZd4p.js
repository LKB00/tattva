import{j as e}from"./iframe-J6_2PHET.js";import{bn as h,b as u}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=u.get("stack"),G={title:"Full screens and layout/Stack",component:h,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},a={name:"Normal space",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"The default space between items."},source:{code:`<Stack gap={4}>
  <p>First</p>
  <p>Second</p>
  <p>Third</p>
</Stack>`}}}},t={name:"Tighter space",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"The same space shrinks a little in a tight area. This is a proposal."},source:{code:`<div data-density="compact">
  <Stack gap={4}>
    <p>First</p>
    <p>Second</p>
  </Stack>
</div>`}}}},s={name:"As a list",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"Use a list element when the items are a list."},source:{code:`<Stack as="ul" gap={2}>
  <li>Search</li>
  <li>Read</li>
</Stack>`}}}},H=["NormalSpace","TighterSpace","AsAList"];var n,o,p;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Normal space",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The default space between items."
      },
      source: {
        code: "<Stack gap={4}>\\n  <p>First</p>\\n  <p>Second</p>\\n  <p>Third</p>\\n</Stack>"
      }
    }
  }
}`,...(p=(o=a.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var i,c,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Tighter space",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The same space shrinks a little in a tight area. This is a proposal."
      },
      source: {
        code: "<div data-density=\\"compact\\">\\n  <Stack gap={4}>\\n    <p>First</p>\\n    <p>Second</p>\\n  </Stack>\\n</div>"
      }
    }
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,l,S;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "As a list",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Use a list element when the items are a list."
      },
      source: {
        code: "<Stack as=\\"ul\\" gap={2}>\\n  <li>Search</li>\\n  <li>Read</li>\\n</Stack>"
      }
    }
  }
}`,...(S=(l=s.parameters)==null?void 0:l.docs)==null?void 0:S.source}}};export{s as AsAList,a as NormalSpace,t as TighterSpace,H as __namedExportsOrder,G as default};
