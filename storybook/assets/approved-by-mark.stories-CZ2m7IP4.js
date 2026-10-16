import{j as e}from"./iframe-DSdOWv-_.js";import{j as u,b as h}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const r=h.get("approved-by-mark"),C={title:"Assistants/ApprovedByMark",component:u,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},o={name:"The four kinds",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Each kind has its own icon and words. 'Nobody asked' is shown plainly so auto mode is never hidden."},source:{code:`<ApprovedByMark by="you" />
<ApprovedByMark by="check" />
<ApprovedByMark by="rule" />
<ApprovedByMark by="none" />`}}}},s={name:"Naming the saved rule",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Add detail to say which rule allowed it. It shows in the tooltip and is read out by screen readers."},source:{code:'<ApprovedByMark by="rule" detail="Rule: emails to team@example.com" />'}}}},n={name:"Your own words",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"Replace the words for one kind with labels."},source:{code:'<ApprovedByMark by="you" labels={{ you: "Approved by Sam" }} />'}}}},D=["TheFourKinds","NamingTheSavedRule","YourOwnWords"];var a,d,t;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "The four kinds",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Each kind has its own icon and words. 'Nobody asked' is shown plainly so auto mode is never hidden."
      },
      source: {
        code: "<ApprovedByMark by=\\"you\\" />\\n<ApprovedByMark by=\\"check\\" />\\n<ApprovedByMark by=\\"rule\\" />\\n<ApprovedByMark by=\\"none\\" />"
      }
    }
  }
}`,...(t=(d=o.parameters)==null?void 0:d.docs)==null?void 0:t.source}}};var p,i,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Naming the saved rule",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Add detail to say which rule allowed it. It shows in the tooltip and is read out by screen readers."
      },
      source: {
        code: "<ApprovedByMark by=\\"rule\\" detail=\\"Rule: emails to team@example.com\\" />"
      }
    }
  }
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var c,l,y;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Your own words",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Replace the words for one kind with labels."
      },
      source: {
        code: "<ApprovedByMark by=\\"you\\" labels={{ you: \\"Approved by Sam\\" }} />"
      }
    }
  }
}`,...(y=(l=n.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};export{s as NamingTheSavedRule,o as TheFourKinds,n as YourOwnWords,D as __namedExportsOrder,C as default};
