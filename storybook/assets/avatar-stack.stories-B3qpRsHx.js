import{j as e}from"./iframe-C8v_uZy_.js";import{o as u,b as S}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const a=S.get("avatar-stack"),q={title:"Controls/AvatarStack",component:u,tags:["autodocs"],parameters:{docs:{description:{component:a.summary+" "+a.description}}}},t={name:"Three people and the rest",render:()=>e.jsx(e.Fragment,{children:a.examples[0].render()}),parameters:{docs:{description:{story:"The default: three avatars, a plus, and how many others."},source:{code:`<AvatarStack
  people={[{ name: "Lokesh" }, { name: "Mira" }, { name: "Asha" }]}
  total={1248}
/>`}}}},r={name:"Short numbers and a custom word",render:()=>e.jsx(e.Fragment,{children:a.examples[1].render()}),parameters:{docs:{description:{story:"Use compact for big counts, and name what is being counted."},source:{code:`<AvatarStack
  people={[{ name: "Ravi" }, { name: "Noor" }, { name: "Sam" }]}
  total={23400}
  compact
  label="voted"
/>`}}}},n={name:"With the assistant, small",render:()=>e.jsx(e.Fragment,{children:a.examples[2].render()}),parameters:{docs:{description:{story:"In a shared chat the assistant can be one of the faces. Small fits beside a title or in a list row."},source:{code:`<AvatarStack
  size="sm"
  people={[{ name: "Assistant", kind: "ai" }, { name: "Lokesh" }, { name: "Mira" }]}
  total={7}
  label="in this chat"
/>`}}}},B=["ThreePeopleAndTheRest","ShortNumbersAndACustomWord","WithTheAssistantSmall"];var o,s,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Three people and the rest",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The default: three avatars, a plus, and how many others."
      },
      source: {
        code: "<AvatarStack\\n  people={[{ name: \\"Lokesh\\" }, { name: \\"Mira\\" }, { name: \\"Asha\\" }]}\\n  total={1248}\\n/>"
      }
    }
  }
}`,...(m=(s=t.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Short numbers and a custom word",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Use compact for big counts, and name what is being counted."
      },
      source: {
        code: "<AvatarStack\\n  people={[{ name: \\"Ravi\\" }, { name: \\"Noor\\" }, { name: \\"Sam\\" }]}\\n  total={23400}\\n  compact\\n  label=\\"voted\\"\\n/>"
      }
    }
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,l,h;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "With the assistant, small",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "In a shared chat the assistant can be one of the faces. Small fits beside a title or in a list row."
      },
      source: {
        code: "<AvatarStack\\n  size=\\"sm\\"\\n  people={[{ name: \\"Assistant\\", kind: \\"ai\\" }, { name: \\"Lokesh\\" }, { name: \\"Mira\\" }]}\\n  total={7}\\n  label=\\"in this chat\\"\\n/>"
      }
    }
  }
}`,...(h=(l=n.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};export{r as ShortNumbersAndACustomWord,t as ThreePeopleAndTheRest,n as WithTheAssistantSmall,B as __namedExportsOrder,q as default};
