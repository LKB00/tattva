import{j as o}from"./iframe-D-pZXX8_.js";import{K as c,b as p}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const s=p.get("claim-check"),_={title:"Trust/ClaimCheck",component:c,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},e={name:"Two claims flagged",render:()=>o.jsx(o.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"Press a marked claim to see why it was flagged. Take it out or ask for a source."},source:{code:`<ClaimCheck
  segments={[
    "Orders slowed after Tuesday's update. ",
    { id: "c1", text: "The tax check adds about 0.5 s to every order", status: "unsupported", note: "No source measures it." },
    ", and ",
    { id: "c2", text: "most shoppers left before paying", status: "disputed", note: "Order times shows checkouts went up." },
    ".",
  ]}
  onAskSource={askForSource}
  onRemove={removeClaim}
/>`}}}},r={name:"Nothing flagged",render:()=>o.jsx(o.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"With no claims flagged, it is just the reply. No summary line shows."},source:{code:'<ClaimCheck segments={["Your order shipped on Monday and arrives Friday."]} />'}}}},I=["TwoClaimsFlagged","NothingFlagged"];var t,a,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Two claims flagged",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press a marked claim to see why it was flagged. Take it out or ask for a source."
      },
      source: {
        code: "<ClaimCheck\\n  segments={[\\n    \\"Orders slowed after Tuesday's update. \\",\\n    { id: \\"c1\\", text: \\"The tax check adds about 0.5 s to every order\\", status: \\"unsupported\\", note: \\"No source measures it.\\" },\\n    \\", and \\",\\n    { id: \\"c2\\", text: \\"most shoppers left before paying\\", status: \\"disputed\\", note: \\"Order times shows checkouts went up.\\" },\\n    \\".\\",\\n  ]}\\n  onAskSource={askForSource}\\n  onRemove={removeClaim}\\n/>"
      }
    }
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var i,m,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Nothing flagged",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With no claims flagged, it is just the reply. No summary line shows."
      },
      source: {
        code: "<ClaimCheck segments={[\\"Your order shipped on Monday and arrives Friday.\\"]} />"
      }
    }
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};export{r as NothingFlagged,e as TwoClaimsFlagged,I as __namedExportsOrder,_ as default};
