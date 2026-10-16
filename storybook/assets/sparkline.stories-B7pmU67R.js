import{j as t}from"./iframe-DSdOWv-_.js";import{bu as l,b as m}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const n=m.get("sparkline"),W={title:"Numbers/Sparkline",component:l,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"Plain, and with lowest and highest points",render:()=>t.jsx(t.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"The latest point has the main chart color. The line stays grey so the latest value stands out."},source:{code:`<Sparkline label="Slowest orders" unit=" min" data={[2050, 2100, 2200, 2180, 2300, 2250, 2310]} />
<Sparkline label="Slowest orders" unit=" min" showMinMax width={160} height={36} data={[2050, 2100, 2200, 2180, 2300, 2250, 2310]} />`}}}},r={name:"Inside a tile",render:()=>t.jsx(t.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Here it is decoration only, so screen readers skip it."},source:{code:`<div className="w-56">
  <StatTile label="Refunds paid" value="$1,240" goodDirection="down" spark={<Sparkline decorative label="Refunds paid" data={[980, 1020, 1100, 1130, 1180, 1210, 1240]} />} />
</div>`}}}},_=["PlainAndWithLowestAndHighestPoints","InsideATile"];var o,s,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Plain, and with lowest and highest points",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The latest point has the main chart color. The line stays grey so the latest value stands out."
      },
      source: {
        code: "<Sparkline label=\\"Slowest orders\\" unit=\\" min\\" data={[2050, 2100, 2200, 2180, 2300, 2250, 2310]} />\\n<Sparkline label=\\"Slowest orders\\" unit=\\" min\\" showMinMax width={160} height={36} data={[2050, 2100, 2200, 2180, 2300, 2250, 2310]} />"
      }
    }
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var i,d,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Inside a tile",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Here it is decoration only, so screen readers skip it."
      },
      source: {
        code: "<div className=\\"w-56\\">\\n  <StatTile label=\\"Refunds paid\\" value=\\"$1,240\\" goodDirection=\\"down\\" spark={<Sparkline decorative label=\\"Refunds paid\\" data={[980, 1020, 1100, 1130, 1180, 1210, 1240]} />} />\\n</div>"
      }
    }
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};export{r as InsideATile,e as PlainAndWithLowestAndHighestPoints,_ as __namedExportsOrder,W as default};
