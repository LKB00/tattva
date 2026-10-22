import{j as e}from"./iframe-C8v_uZy_.js";import{aP as f,b as M}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const r=M.get("money"),G={title:"Asking and showing work/Money",component:f,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},o={name:"Rupees",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Formatted with the en-IN locale, so groups follow the lakh pattern."},source:{code:'<p className="text-fg">Refund of <Money value={234000} /> and a fee of <Money value={2340.5} />.</p>'}}}},n={name:"Compact",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Lakh and crore for rupees. Other currencies use K, M and so on."},source:{code:'<p className="text-fg"><Money value={120000} compact /> · <Money value={34000000} compact /> · <Money value={1250} currency="USD" locale="en-US" compact /></p>'}}}},a={name:"Signed, with direction",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"The arrow and the sign carry the meaning. The colour is extra."},source:{code:'<p className="flex gap-4 text-fg"><Money value={5400} direction /> <Money value={-1200} direction /> <Money value={0} direction showSign /></p>'}}}},t={name:"Calculated note",render:()=>e.jsx(e.Fragment,{children:r.examples[3].render()}),parameters:{docs:{description:{story:"A dotted underline for sighted people, and the phrase Calculated by code for screen readers."},source:{code:'<p className="text-fg">Total <Money value={234000} calculated /> and <Mono>27 Oct 2026</Mono></p>'}}}},H=["Rupees","Compact","SignedWithDirection","CalculatedNote"];var s,c,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};export{t as CalculatedNote,n as Compact,o as Rupees,a as SignedWithDirection,H as __namedExportsOrder,G as default};
