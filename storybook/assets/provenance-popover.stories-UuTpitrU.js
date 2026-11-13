import{j as o}from"./iframe-D-pZXX8_.js";import{b9 as p,b as c}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const t=c.get("provenance-popover"),G={title:"Trust/ProvenancePopover",component:p,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},e={name:"Every detail filled in",render:()=>o.jsx(o.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Every detail filled in. Click, tap, or press Enter or Space on the label to open it."},source:{code:`<ProvenancePopover
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
