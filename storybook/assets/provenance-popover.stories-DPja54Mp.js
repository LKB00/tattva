import{j as o}from"./iframe-C8v_uZy_.js";import{b3 as p,b as c}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const t=c.get("provenance-popover"),G={title:"Trust/ProvenancePopover",component:p,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},e={name:"Every detail filled in",render:()=>o.jsx(o.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Every detail filled in. Click, tap, or press Enter or Space on the label to open it."},source:{code:`<ProvenancePopover
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
