import{j as o}from"./iframe-DSdOWv-_.js";import{b0 as p,b as c}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const t=c.get("provenance-popover"),G={title:"Trust/ProvenancePopover",component:p,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},e={name:"Every detail filled in",render:()=>o.jsx(o.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Every detail filled in. Click, tap, or press Enter or Space on the label to open it."},source:{code:`<ProvenancePopover
  madeWith="Tattva Writer, model 4"
  date="3 Oct 2026"
  actions={["Drafted the summary", "Shortened the intro"]}
  editedByPerson
  why="You asked for a summary of the meeting notes."
  detailsHref="#details"
/>`}}}},r={name:"Minimal",render:()=>o.jsx(o.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Only a tool and a reason. Use this when that is all you know."},source:{code:'<ProvenancePopover label="Made with AI" madeWith="Image generator" why="Generated from your prompt." />'}}}},H=["EveryDetailFilledIn","Minimal"];var n,a,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Every detail filled in",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Every detail filled in. Click, tap, or press Enter or Space on the label to open it."
      },
      source: {
        code: "<ProvenancePopover\\n  madeWith=\\"Tattva Writer, model 4\\"\\n  date=\\"3 Oct 2026\\"\\n  actions={[\\"Drafted the summary\\", \\"Shortened the intro\\"]}\\n  editedByPerson\\n  why=\\"You asked for a summary of the meeting notes.\\"\\n  detailsHref=\\"#details\\"\\n/>"
      }
    }
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var s,m,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Minimal",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Only a tool and a reason. Use this when that is all you know."
      },
      source: {
        code: "<ProvenancePopover label=\\"Made with AI\\" madeWith=\\"Image generator\\" why=\\"Generated from your prompt.\\" />"
      }
    }
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};export{e as EveryDetailFilledIn,r as Minimal,H as __namedExportsOrder,G as default};
