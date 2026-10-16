import{j as e}from"./iframe-DSdOWv-_.js";import{af as h,b as g}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const r=g.get("generated-surface"),_={title:"Generated interfaces/GeneratedSurface",component:h,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},n={name:"A finished screen",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Try Pin and Regenerate. Open View spec to see exactly what the assistant sent."},source:{code:`<GeneratedSurface
  source="Orders helper"
  spec={spec}
  pinned={pinned}
  onPinnedChange={setPinned}
  onRegenerate={regenerate}
  onReport={report}
>
  <GenUIRenderer state={state} />
</GeneratedSurface>`}}}},t={name:"When it could not be made",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"The person still gets the answer as text and can try again."},source:{code:`<GeneratedSurface
  source="Orders helper"
  status="failed"
  onRetry={retry}
  fallback={<p>You had 1,240 orders this week, 4.2% more than last week.</p>}
/>`}}}},s={name:"While it is being made",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"The status is announced once. Regenerate is off until the screen is ready."},source:{code:`<GeneratedSurface source="Orders helper" status="streaming" onRegenerate={regenerate}>
  <GenUIRenderer state={state} />
</GeneratedSurface>`}}}},q=["AFinishedScreen","WhenItCouldNotBeMade","WhileItIsBeingMade"];var a,o,d;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "A finished screen",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Try Pin and Regenerate. Open View spec to see exactly what the assistant sent."
      },
      source: {
        code: "<GeneratedSurface\\n  source=\\"Orders helper\\"\\n  spec={spec}\\n  pinned={pinned}\\n  onPinnedChange={setPinned}\\n  onRegenerate={regenerate}\\n  onReport={report}\\n>\\n  <GenUIRenderer state={state} />\\n</GeneratedSurface>"
      }
    }
  }
}`,...(d=(o=n.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var i,c,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "When it could not be made",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The person still gets the answer as text and can try again."
      },
      source: {
        code: "<GeneratedSurface\\n  source=\\"Orders helper\\"\\n  status=\\"failed\\"\\n  onRetry={retry}\\n  fallback={<p>You had 1,240 orders this week, 4.2% more than last week.</p>}\\n/>"
      }
    }
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,l;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "While it is being made",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The status is announced once. Regenerate is off until the screen is ready."
      },
      source: {
        code: "<GeneratedSurface source=\\"Orders helper\\" status=\\"streaming\\" onRegenerate={regenerate}>\\n  <GenUIRenderer state={state} />\\n</GeneratedSurface>"
      }
    }
  }
}`,...(l=(u=s.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};export{n as AFinishedScreen,t as WhenItCouldNotBeMade,s as WhileItIsBeingMade,q as __namedExportsOrder,_ as default};
