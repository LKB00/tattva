import{j as e}from"./iframe-J6_2PHET.js";import{b as h}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import{a as x}from"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=h.get("ai-mark"),D={title:"Trust/AIMark",component:x,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},s={name:"Sizes",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Five sizes. The first three match small, medium and large text. The last two are for use on their own."},source:{code:`<div className="flex items-end gap-4 text-fg">
  <AIMark size={16} /><AIMark size={18} /><AIMark size={22} /><AIMark size={24} /><AIMark size={32} />
</div>`}}}},a={name:"Paired with text",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"The mark sits beside words that say what will happen. A screen reader reads only the words."},source:{code:'<Button variant="secondary"><AIMark size={16} />Summarize this page</Button>'}}}},t={name:"Named image",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"When the mark stands alone, give it a title so screen readers can say what it means."},source:{code:`<span className="inline-flex size-8 items-center justify-center rounded-full bg-lime text-on-lime">
  <AIMark size={18} title="AI-generated" />
</span>`}}}},G=["Sizes","PairedWithText","NamedImage"];var n,i,o;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Sizes",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Five sizes. The first three match small, medium and large text. The last two are for use on their own."
      },
      source: {
        code: "<div className=\\"flex items-end gap-4 text-fg\\">\\n  <AIMark size={16} /><AIMark size={18} /><AIMark size={22} /><AIMark size={24} /><AIMark size={32} />\\n</div>"
      }
    }
  }
}`,...(o=(i=s.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var m,d,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Paired with text",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The mark sits beside words that say what will happen. A screen reader reads only the words."
      },
      source: {
        code: "<Button variant=\\"secondary\\"><AIMark size={16} />Summarize this page</Button>"
      }
    }
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,l,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Named image",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "When the mark stands alone, give it a title so screen readers can say what it means."
      },
      source: {
        code: "<span className=\\"inline-flex size-8 items-center justify-center rounded-full bg-lime text-on-lime\\">\\n  <AIMark size={18} title=\\"AI-generated\\" />\\n</span>"
      }
    }
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};export{t as NamedImage,a as PairedWithText,s as Sizes,G as __namedExportsOrder,D as default};
