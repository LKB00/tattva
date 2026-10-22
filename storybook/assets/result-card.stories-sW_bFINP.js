import{j as e}from"./iframe-C8v_uZy_.js";import{bb as h,b as g}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const r=g.get("result-card"),G={title:"Generated interfaces/ResultCard",component:h,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},a={name:"Hotels in a row",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Three results with the same fields, laid out with CardRow."},source:{code:`<CardRow label="Hotels in Paris">
  {hotels.map((h) => (
    <ResultCard key={h.id} title={h.name} subtitle={h.area} image={h.image}
      facts={[{ label: "Rating", value: h.rating }, { label: "Check-in", value: h.checkIn }]}
      price={{ value: h.price, currency: "EUR", note: "a night" }}
      action={{ label: "View rooms", onClick: () => open(h) }} />
  ))}
</CardRow>`}}}},t={name:"While the answer streams",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Cards arrive one by one. Placeholders hold the space and the actions wait until the answer is complete."},source:{code:`<ResultCard {...hotel} streaming={isStreaming} action={{ label: "View rooms", onClick }} />
<ResultCard title="" loading />`}}}},o={name:"Without a picture",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"A plan, with a tag and a price."},source:{code:`<ResultCard title="Team plan" subtitle="For up to 10 people" tag={{ label: "Most picked", tone: "accent" }}
  facts={[{ label: "Storage", value: "1 TB" }, { label: "Support", value: "Same day" }]}
  price={{ value: 24, currency: "USD", note: "a person a month" }} action={{ label: "Choose", onClick }} />`}}}},O=["HotelsInARow","WhileTheAnswerStreams","WithoutAPicture"];var n,s,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Hotels in a row",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Three results with the same fields, laid out with CardRow."
      },
      source: {
        code: "<CardRow label=\\"Hotels in Paris\\">\\n  {hotels.map((h) => (\\n    <ResultCard key={h.id} title={h.name} subtitle={h.area} image={h.image}\\n      facts={[{ label: \\"Rating\\", value: h.rating }, { label: \\"Check-in\\", value: h.checkIn }]}\\n      price={{ value: h.price, currency: \\"EUR\\", note: \\"a night\\" }}\\n      action={{ label: \\"View rooms\\", onClick: () => open(h) }} />\\n  ))}\\n</CardRow>"
      }
    }
  }
}`,...(i=(s=a.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var l,c,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "While the answer streams",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Cards arrive one by one. Placeholders hold the space and the actions wait until the answer is complete."
      },
      source: {
        code: "<ResultCard {...hotel} streaming={isStreaming} action={{ label: \\"View rooms\\", onClick }} />\\n<ResultCard title=\\"\\" loading />"
      }
    }
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,d,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Without a picture",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A plan, with a tag and a price."
      },
      source: {
        code: "<ResultCard title=\\"Team plan\\" subtitle=\\"For up to 10 people\\" tag={{ label: \\"Most picked\\", tone: \\"accent\\" }}\\n  facts={[{ label: \\"Storage\\", value: \\"1 TB\\" }, { label: \\"Support\\", value: \\"Same day\\" }]}\\n  price={{ value: 24, currency: \\"USD\\", note: \\"a person a month\\" }} action={{ label: \\"Choose\\", onClick }} />"
      }
    }
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};export{a as HotelsInARow,t as WhileTheAnswerStreams,o as WithoutAPicture,O as __namedExportsOrder,G as default};
