import{j as e}from"./iframe-DSdOWv-_.js";import{b as v}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import{S as w}from"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const a=v.get("stat-tile"),I={title:"Numbers/StatTile",component:w,tags:["autodocs"],parameters:{docs:{description:{component:a.summary+" "+a.description}}}},t={name:"A row of shop numbers",render:()=>e.jsx(e.Fragment,{children:a.examples[0].render()}),parameters:{docs:{description:{story:"Seven tiles for a shop dashboard. For wait time, sales cost and refunds, lower is better. The happy-customer tile shows its range and sample size."},source:{code:`<div className="grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-3">
  <StatTile label="Typical wait" value="28 min" goodDirection="down" delta={{ text: "-4.1%", direction: "down", versus: "vs previous 7 days" }} spark={<Sparkline decorative label="Typical wait" data={[830, 812, 845, 820, 790, 805, 812]} />} />
  <StatTile label="Longest waits" value="77 min" goodDirection="down" delta={{ text: "+6.0%", direction: "up", versus: "vs previous 7 days" }} spark={<Sparkline decorative label="Longest waits" data={[2050, 2100, 2200, 2180, 2300, 2250, 2310]} />} />
  <StatTile label="Time to answer the phone" value="41 s" goodDirection="down" delta={{ text: "-2.8%", direction: "down", versus: "vs previous 7 days" }} spark={<Sparkline decorative label="Time to answer the phone" data={[440, 430, 420, 425, 415, 412, 410]} />} />
  <StatTile label="Orders" value="18.4K" goodDirection="neutral" delta={{ text: "+9.2%", direction: "up", versus: "vs previous 7 days" }} spark={<Sparkline decorative label="Orders" data={[15.2, 16.1, 15.8, 17.0, 17.6, 18.0, 18.4]} />} />
  <StatTile label="Refunds paid" value="$1,240" goodDirection="down" delta={{ text: "+5.1%", direction: "up", versus: "vs previous 7 days" }} spark={<Sparkline decorative label="Refunds paid" data={[980, 1020, 1100, 1130, 1180, 1210, 1240]} />} />
  <StatTile label="Refund rate" value="0.8%" goodDirection="down" delta={{ text: "-0.2 pts", direction: "down", versus: "vs previous 7 days" }} spark={<Sparkline decorative label="Refund rate" data={[0.6, 0.7, 0.6, 0.9, 1.1, 1.0, 0.8]} />} />
  <StatTile label="Happy customers" value="92.5%" goodDirection="up" detail="Likely between 88.1% and 95.4%, from 200 customers" delta={{ text: "+1.5 pts", direction: "up", versus: "vs last survey" }} />
</div>`}}}},r={name:"A limit and a call to act",render:()=>e.jsx(e.Fragment,{children:a.examples[1].render()}),parameters:{docs:{description:{story:"The tick marks the limit on a thin scale. The amber chip and amber fill are for when a person has to review."},source:{code:`<div className="grid w-full gap-3 sm:grid-cols-2">
  <StatTile label="Longest waits" value="77 min" goodDirection="down" delta={{ text: "+6.0%", direction: "up", versus: "vs previous 7 days" }} threshold={{ value: 77, max: 100, at: 90, label: "Limit 90 min" }} />
  <StatTile label="Refund rate" value="2.4%" goodDirection="down" needsAction actionText="Needs review" delta={{ text: "+1.6 pts", direction: "up", versus: "vs previous 7 days" }} threshold={{ value: 2.4, max: 4, at: 2, label: "Limit 2%" }} />
</div>`}}}},s={name:"A headline number",render:()=>e.jsx(e.Fragment,{children:a.examples[2].render()}),parameters:{docs:{description:{story:"Use the larger style for the one tile that leads a page."},source:{code:`<div className="w-full max-w-xs">
  <StatTile serif label="Happy customers" value="92.5%" detail="Likely between 88.1% and 95.4%, from 200 customers" />
</div>`}}}},q=["ARowOfShopNumbers","ALimitAndACallToAct","AHeadlineNumber"];var i,o,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "A row of shop numbers",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Seven tiles for a shop dashboard. For wait time, sales cost and refunds, lower is better. The happy-customer tile shows its range and sample size."
      },
      source: {
        code: "<div className=\\"grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-3\\">\\n  <StatTile label=\\"Typical wait\\" value=\\"28 min\\" goodDirection=\\"down\\" delta={{ text: \\"-4.1%\\", direction: \\"down\\", versus: \\"vs previous 7 days\\" }} spark={<Sparkline decorative label=\\"Typical wait\\" data={[830, 812, 845, 820, 790, 805, 812]} />} />\\n  <StatTile label=\\"Longest waits\\" value=\\"77 min\\" goodDirection=\\"down\\" delta={{ text: \\"+6.0%\\", direction: \\"up\\", versus: \\"vs previous 7 days\\" }} spark={<Sparkline decorative label=\\"Longest waits\\" data={[2050, 2100, 2200, 2180, 2300, 2250, 2310]} />} />\\n  <StatTile label=\\"Time to answer the phone\\" value=\\"41 s\\" goodDirection=\\"down\\" delta={{ text: \\"-2.8%\\", direction: \\"down\\", versus: \\"vs previous 7 days\\" }} spark={<Sparkline decorative label=\\"Time to answer the phone\\" data={[440, 430, 420, 425, 415, 412, 410]} />} />\\n  <StatTile label=\\"Orders\\" value=\\"18.4K\\" goodDirection=\\"neutral\\" delta={{ text: \\"+9.2%\\", direction: \\"up\\", versus: \\"vs previous 7 days\\" }} spark={<Sparkline decorative label=\\"Orders\\" data={[15.2, 16.1, 15.8, 17.0, 17.6, 18.0, 18.4]} />} />\\n  <StatTile label=\\"Refunds paid\\" value=\\"$1,240\\" goodDirection=\\"down\\" delta={{ text: \\"+5.1%\\", direction: \\"up\\", versus: \\"vs previous 7 days\\" }} spark={<Sparkline decorative label=\\"Refunds paid\\" data={[980, 1020, 1100, 1130, 1180, 1210, 1240]} />} />\\n  <StatTile label=\\"Refund rate\\" value=\\"0.8%\\" goodDirection=\\"down\\" delta={{ text: \\"-0.2 pts\\", direction: \\"down\\", versus: \\"vs previous 7 days\\" }} spark={<Sparkline decorative label=\\"Refund rate\\" data={[0.6, 0.7, 0.6, 0.9, 1.1, 1.0, 0.8]} />} />\\n  <StatTile label=\\"Happy customers\\" value=\\"92.5%\\" goodDirection=\\"up\\" detail=\\"Likely between 88.1% and 95.4%, from 200 customers\\" delta={{ text: \\"+1.5 pts\\", direction: \\"up\\", versus: \\"vs last survey\\" }} />\\n</div>"
      }
    }
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "A limit and a call to act",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The tick marks the limit on a thin scale. The amber chip and amber fill are for when a person has to review."
      },
      source: {
        code: "<div className=\\"grid w-full gap-3 sm:grid-cols-2\\">\\n  <StatTile label=\\"Longest waits\\" value=\\"77 min\\" goodDirection=\\"down\\" delta={{ text: \\"+6.0%\\", direction: \\"up\\", versus: \\"vs previous 7 days\\" }} threshold={{ value: 77, max: 100, at: 90, label: \\"Limit 90 min\\" }} />\\n  <StatTile label=\\"Refund rate\\" value=\\"2.4%\\" goodDirection=\\"down\\" needsAction actionText=\\"Needs review\\" delta={{ text: \\"+1.6 pts\\", direction: \\"up\\", versus: \\"vs previous 7 days\\" }} threshold={{ value: 2.4, max: 4, at: 2, label: \\"Limit 2%\\" }} />\\n</div>"
      }
    }
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,m,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "A headline number",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Use the larger style for the one tile that leads a page."
      },
      source: {
        code: "<div className=\\"w-full max-w-xs\\">\\n  <StatTile serif label=\\"Happy customers\\" value=\\"92.5%\\" detail=\\"Likely between 88.1% and 95.4%, from 200 customers\\" />\\n</div>"
      }
    }
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};export{s as AHeadlineNumber,r as ALimitAndACallToAct,t as ARowOfShopNumbers,q as __namedExportsOrder,I as default};
