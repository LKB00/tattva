import{j as e}from"./iframe-DSdOWv-_.js";import{Y as y,b as h}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const r=h.get("deck-build-progress"),M={title:"Slides/DeckBuildProgress",component:y,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},s={name:"A live build",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Eight slides build one by one. Slide 5 fails and the rest carry on, so the job ends Partly ready. Try Stop part way: it keeps the ready slides and offers to build the rest."},source:{code:`<DeckBuildProgress
  deckTitle="Q3 churn review"
  state={state}               // "queued" | "building" | "partial" | "failed" | "cancelled" | "done"
  slides={slides}             // [{ id, title, status: "waiting" | "building" | "ready" | "failed", kind }]
  currentStep="Making the chart for slide 5"
  background                  // the job keeps running if the person leaves
  onStop={stopAndKeep}
  onRetrySlide={(id) => retry(id)}
  onRetryFailed={retryFailed}
  onResume={buildTheRest}
  onOpen={(slideId) => open(slideId)}
/>`}}}},n={name:"Every state",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Queued, building, partly ready, failed, stopped and ready. Each one is written in words; the colour only repeats it."},source:{code:`<DeckBuildProgress state="partial" slides={slides} onRetryFailed={retryFailed} onOpen={open} />
<DeckBuildProgress state="failed" slides={slides} error="The AI service did not answer. Your outline is saved." onRetryFailed={retry} />
<DeckBuildProgress state="cancelled" slides={slides} onResume={buildTheRest} onOpen={open} />`}}}},t={name:"Compact, on a phone",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"One line, the bar and Stop. The slide list opens on request."},source:{code:`<DeckBuildProgress compact deckTitle="Q3 churn review" state="building" slides={slides}
  currentStep="Laying out three columns for slide 6" onStop={stopAndKeep} onRetrySlide={retry} />`}}}},_=["ALiveBuild","EveryState","CompactOnAPhone"];var o,i,d;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "A live build",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Eight slides build one by one. Slide 5 fails and the rest carry on, so the job ends Partly ready. Try Stop part way: it keeps the ready slides and offers to build the rest."
      },
      source: {
        code: "<DeckBuildProgress\\n  deckTitle=\\"Q3 churn review\\"\\n  state={state}               // \\"queued\\" | \\"building\\" | \\"partial\\" | \\"failed\\" | \\"cancelled\\" | \\"done\\"\\n  slides={slides}             // [{ id, title, status: \\"waiting\\" | \\"building\\" | \\"ready\\" | \\"failed\\", kind }]\\n  currentStep=\\"Making the chart for slide 5\\"\\n  background                  // the job keeps running if the person leaves\\n  onStop={stopAndKeep}\\n  onRetrySlide={(id) => retry(id)}\\n  onRetryFailed={retryFailed}\\n  onResume={buildTheRest}\\n  onOpen={(slideId) => open(slideId)}\\n/>"
      }
    }
  }
}`,...(d=(i=s.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var a,l,p;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Every state",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Queued, building, partly ready, failed, stopped and ready. Each one is written in words; the colour only repeats it."
      },
      source: {
        code: "<DeckBuildProgress state=\\"partial\\" slides={slides} onRetryFailed={retryFailed} onOpen={open} />\\n<DeckBuildProgress state=\\"failed\\" slides={slides} error=\\"The AI service did not answer. Your outline is saved.\\" onRetryFailed={retry} />\\n<DeckBuildProgress state=\\"cancelled\\" slides={slides} onResume={buildTheRest} onOpen={open} />"
      }
    }
  }
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,u,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Compact, on a phone",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "One line, the bar and Stop. The slide list opens on request."
      },
      source: {
        code: "<DeckBuildProgress compact deckTitle=\\"Q3 churn review\\" state=\\"building\\" slides={slides}\\n  currentStep=\\"Laying out three columns for slide 6\\" onStop={stopAndKeep} onRetrySlide={retry} />"
      }
    }
  }
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};export{s as ALiveBuild,t as CompactOnAPhone,n as EveryState,_ as __namedExportsOrder,M as default};
