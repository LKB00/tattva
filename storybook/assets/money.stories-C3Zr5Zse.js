import{j as e}from"./iframe-D-pZXX8_.js";import{aU as f,b as M}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const r=M.get("money"),H={title:"Asking and showing work/Money",component:f,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},o={name:"Rupees",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Formatted with the en-IN locale, so groups follow the lakh pattern."},source:{code:'<p className="text-fg">Refund of <Money value={234000} /> and a fee of <Money value={2340.5} />.</p>'}}}},n={name:"Compact",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Lakh and crore for rupees. Other currencies use K, M and so on."},source:{code:'<p className="text-fg"><Money value={120000} compact /> · <Money value={34000000} compact /> · <Money value={1250} currency="USD" locale="en-US" compact /></p>'}}}},a={name:"Signed, with direction",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"The arrow and the sign carry the meaning. The colour is extra."},source:{code:'<p className="flex gap-4 text-fg"><Money value={5400} direction /> <Money value={-1200} direction /> <Money value={0} direction showSign /></p>'}}}},t={name:"Calculated note",render:()=>e.jsx(e.Fragment,{children:r.examples[3].render()}),parameters:{docs:{description:{story:"A dotted underline for sighted people, and the phrase Calculated by code for screen readers."},source:{code:'<p className="text-fg">Total <Money value={234000} calculated /> and <Mono>27 Oct 2026</Mono></p>'}}}},J=["Rupees","Compact","SignedWithDirection","CalculatedNote"];var s,c,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Rupees",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Formatted with the en-IN locale, so groups follow the lakh pattern."
      },
      source: {
        code: "<p className=\\"text-fg\\">Refund of <Money value={234000} /> and a fee of <Money value={2340.5} />.</p>"
      }
    }
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,i,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Compact",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Lakh and crore for rupees. Other currencies use K, M and so on."
      },
      source: {
        code: "<p className=\\"text-fg\\"><Money value={120000} compact /> · <Money value={34000000} compact /> · <Money value={1250} currency=\\"USD\\" locale=\\"en-US\\" compact /></p>"
      }
    }
  }
}`,...(m=(i=n.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var l,u,h;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Signed, with direction",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The arrow and the sign carry the meaning. The colour is extra."
      },
      source: {
        code: "<p className=\\"flex gap-4 text-fg\\"><Money value={5400} direction /> <Money value={-1200} direction /> <Money value={0} direction showSign /></p>"
      }
    }
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var y,g,x;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Calculated note",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A dotted underline for sighted people, and the phrase Calculated by code for screen readers."
      },
      source: {
        code: "<p className=\\"text-fg\\">Total <Money value={234000} calculated /> and <Mono>27 Oct 2026</Mono></p>"
      }
    }
  }
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};export{t as CalculatedNote,n as Compact,o as Rupees,a as SignedWithDirection,J as __namedExportsOrder,H as default};
