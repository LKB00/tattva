import{j as o}from"./iframe-C8v_uZy_.js";import{H as c,b as p}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const s=p.get("claim-check"),_={title:"Trust/ClaimCheck",component:c,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},e={name:"Two claims flagged",render:()=>o.jsx(o.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"Press a marked claim to see why it was flagged. Take it out or ask for a source."},source:{code:`<ClaimCheck
  segments={[
    "Orders slowed after Tuesday's update. ",
    { id: "c1", text: "The tax check adds about 0.5 s to every order", status: "unsupported", note: "No source measures it." },
    ", and ",
    { id: "c2", text: "most shoppers left before paying", status: "disputed", note: "Order times shows checkouts went up." },
    ".",
  ]}
  onAskSource={askForSource}
  onRemove={removeClaim}
/>`}}}},r={name:"Nothing flagged",render:()=>o.jsx(o.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"With no claims flagged, it is just the reply. No summary line shows."},source:{code:'<ClaimCheck segments={["Your order shipped on Monday and arrives Friday."]} />'}}}},H=["TwoClaimsFlagged","NothingFlagged"];var t,a,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};export{r as NothingFlagged,e as TwoClaimsFlagged,H as __namedExportsOrder,_ as default};
