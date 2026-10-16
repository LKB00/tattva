import{j as e}from"./iframe-DSdOWv-_.js";import{b4 as u,b as y}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const o=y.get("re-entry-recap"),q={title:"Assistants/ReEntryRecap",component:u,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},r={name:"After two hours away",render:()=>e.jsx(e.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Press a Needs you button or Show full log. Press the header to fold the card."},source:{code:`<ReEntryRecap
  awayFor="2 hours"
  finished={["Found 6 flights under $400", "Saved your passport details to the form"]}
  needsYou={[{ id: "n1", text: "Choose which hotel to book for Friday", actionLabel: "Choose", onAction: openHotels }]}
  changes={[{ label: "files edited", count: 4 }, { label: "pages visited", count: 31 }]}
  onShowLog={openLog}
/>`}}}},n={name:"Nothing needs you",render:()=>e.jsx(e.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"A calm recap when everything went well."},source:{code:'<ReEntryRecap awayFor="30 minutes" finished={["Backed up 214 photos"]} changes={[{ label: "photos copied", count: 214 }]} />'}}}},t={name:"Folded",render:()=>e.jsx(e.Fragment,{children:o.examples[2].render()}),parameters:{docs:{description:{story:"Start folded when the person has seen similar recaps before."},source:{code:'<ReEntryRecap awayFor="1 day" defaultOpen={false} finished={["Sent the weekly update"]} />'}}}},z=["AfterTwoHoursAway","NothingNeedsYou","Folded"];var s,a,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "After two hours away",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press a Needs you button or Show full log. Press the header to fold the card."
      },
      source: {
        code: "<ReEntryRecap\\n  awayFor=\\"2 hours\\"\\n  finished={[\\"Found 6 flights under $400\\", \\"Saved your passport details to the form\\"]}\\n  needsYou={[{ id: \\"n1\\", text: \\"Choose which hotel to book for Friday\\", actionLabel: \\"Choose\\", onAction: openHotels }]}\\n  changes={[{ label: \\"files edited\\", count: 4 }, { label: \\"pages visited\\", count: 31 }]}\\n  onShowLog={openLog}\\n/>"
      }
    }
  }
}`,...(d=(a=r.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var i,p,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Nothing needs you",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A calm recap when everything went well."
      },
      source: {
        code: "<ReEntryRecap awayFor=\\"30 minutes\\" finished={[\\"Backed up 214 photos\\"]} changes={[{ label: \\"photos copied\\", count: 214 }]} />"
      }
    }
  }
}`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,l,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Folded",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Start folded when the person has seen similar recaps before."
      },
      source: {
        code: "<ReEntryRecap awayFor=\\"1 day\\" defaultOpen={false} finished={[\\"Sent the weekly update\\"]} />"
      }
    }
  }
}`,...(h=(l=t.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};export{r as AfterTwoHoursAway,t as Folded,n as NothingNeedsYou,z as __namedExportsOrder,q as default};
