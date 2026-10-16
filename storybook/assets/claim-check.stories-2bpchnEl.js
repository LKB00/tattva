import{j as o}from"./iframe-DSdOWv-_.js";import{E as c,b as p}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const s=p.get("claim-check"),_={title:"Trust/ClaimCheck",component:c,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},e={name:"Two claims flagged",render:()=>o.jsx(o.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"Press a marked claim to see why it was flagged. Take it out or ask for a source."},source:{code:`<ClaimCheck
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
