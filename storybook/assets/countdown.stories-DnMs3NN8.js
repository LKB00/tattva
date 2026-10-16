import{j as e}from"./iframe-DSdOWv-_.js";import{U as y,b as h}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const r=h.get("countdown"),z={title:"Asking and showing work/Countdown",component:y,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},a={name:"With a time bar",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"A start date adds the bar. The bar has the words 10 of 30 days used for screen readers."},source:{code:'<Countdown className="w-full max-w-sm" deadline="2026-10-27" today="2026-10-07" start="2026-09-27" label="They must reply by" />'}}}},s={name:"Past the deadline",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"The missed label comes with an icon. The amber treatment shows only because needsAction is passed."},source:{code:'<Countdown className="w-full max-w-sm" deadline="2026-10-04" today="2026-10-07" start="2026-09-04" label="They had to reply by" needsAction />'}}}},t={name:"Due today",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"On the day itself it reads Due today. Without needsAction it stays in plain ink."},source:{code:'<Countdown className="w-full max-w-sm" deadline="2026-10-07" today="2026-10-07" label="Reply due" />'}}}},G=["WithATimeBar","PastTheDeadline","DueToday"];var o,n,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "With a time bar",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A start date adds the bar. The bar has the words 10 of 30 days used for screen readers."
      },
      source: {
        code: "<Countdown className=\\"w-full max-w-sm\\" deadline=\\"2026-10-27\\" today=\\"2026-10-07\\" start=\\"2026-09-27\\" label=\\"They must reply by\\" />"
      }
    }
  }
}`,...(d=(n=a.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var i,m,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Past the deadline",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The missed label comes with an icon. The amber treatment shows only because needsAction is passed."
      },
      source: {
        code: "<Countdown className=\\"w-full max-w-sm\\" deadline=\\"2026-10-04\\" today=\\"2026-10-07\\" start=\\"2026-09-04\\" label=\\"They had to reply by\\" needsAction />"
      }
    }
  }
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,l,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Due today",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "On the day itself it reads Due today. Without needsAction it stays in plain ink."
      },
      source: {
        code: "<Countdown className=\\"w-full max-w-sm\\" deadline=\\"2026-10-07\\" today=\\"2026-10-07\\" label=\\"Reply due\\" />"
      }
    }
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};export{t as DueToday,s as PastTheDeadline,a as WithATimeBar,G as __namedExportsOrder,z as default};
