import{j as e}from"./iframe-D-pZXX8_.js";import{b as h}from"./registry-47hxkx94.js";import{a as x}from"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const r=h.get("ai-mark"),D={title:"Trust/AIMark",component:x,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},s={name:"Sizes",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Five sizes. The first three match small, medium and large text. The last two are for use on their own."},source:{code:`<div className="flex items-end gap-4 text-fg">
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
