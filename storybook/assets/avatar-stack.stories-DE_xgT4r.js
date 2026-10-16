import{j as e}from"./iframe-DSdOWv-_.js";import{n as u,b as S}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const a=S.get("avatar-stack"),q={title:"Controls/AvatarStack",component:u,tags:["autodocs"],parameters:{docs:{description:{component:a.summary+" "+a.description}}}},t={name:"Three people and the rest",render:()=>e.jsx(e.Fragment,{children:a.examples[0].render()}),parameters:{docs:{description:{story:"The default: three avatars, a plus, and how many others."},source:{code:`<AvatarStack
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
