import{j as t}from"./iframe-DSdOWv-_.js";import{b as v}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import{E as w}from"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const e=v.get("empty-state"),K={title:"Empty and error/EmptyState",component:w,tags:["autodocs"],parameters:{docs:{description:{component:e.summary+" "+e.description}}}},r={name:"First use",render:()=>t.jsx(t.Fragment,{children:e.examples[0].render()}),parameters:{docs:{description:{story:"A truly empty area invites the first step. The title is positive and the button does what it says."},source:{code:`<EmptyState
  variant="first-use"
  title="Start by adding a document"
  action={<Button>Add a document</Button>}
  secondary={<Button variant="ghost">Learn how documents work</Button>}
>
  Documents give the assistant something to read.
</EmptyState>`}}}},a={name:"No results, left-aligned",render:()=>t.jsx(t.Fragment,{children:e.examples[1].render()}),parameters:{docs:{description:{story:"A filtered list is not the same as an empty one. Say the filters caused it and offer to clear them. Left-align the text in small areas."},source:{code:'<EmptyState variant="no-results" layout="start" action={<Button variant="secondary">Clear filters</Button>} />'}}}},s={name:"Permission",render:()=>t.jsx(t.Fragment,{children:e.examples[2].render()}),parameters:{docs:{description:{story:"A person has to act here, so this version adds an amber tag with an icon and words, next to a line that says why."},source:{code:'<EmptyState variant="permission" action={<Button>Request access</Button>} />'}}}},n={name:"Compact, no art",render:()=>t.jsx(t.Fragment,{children:e.examples[3].render()}),parameters:{docs:{description:{story:"Crowded places such as a table or a menu skip the drawing."},source:{code:`<EmptyState variant="cleared" compact layout="start" title="No open tasks" headingLevel={3}>
  New tasks will show up as they arrive.
</EmptyState>`}}}},M=["FirstUse","NoResultsLeftAligned","Permission","CompactNoArt"];var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "First use",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A truly empty area invites the first step. The title is positive and the button does what it says."
      },
      source: {
        code: "<EmptyState\\n  variant=\\"first-use\\"\\n  title=\\"Start by adding a document\\"\\n  action={<Button>Add a document</Button>}\\n  secondary={<Button variant=\\"ghost\\">Learn how documents work</Button>}\\n>\\n  Documents give the assistant something to read.\\n</EmptyState>"
      }
    }
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var c,d,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "No results, left-aligned",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A filtered list is not the same as an empty one. Say the filters caused it and offer to clear them. Left-align the text in small areas."
      },
      source: {
        code: "<EmptyState variant=\\"no-results\\" layout=\\"start\\" action={<Button variant=\\"secondary\\">Clear filters</Button>} />"
      }
    }
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,l,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Permission",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A person has to act here, so this version adds an amber tag with an icon and words, next to a line that says why."
      },
      source: {
        code: "<EmptyState variant=\\"permission\\" action={<Button>Request access</Button>} />"
      }
    }
  }
}`,...(y=(l=s.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};var h,g,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Compact, no art",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Crowded places such as a table or a menu skip the drawing."
      },
      source: {
        code: "<EmptyState variant=\\"cleared\\" compact layout=\\"start\\" title=\\"No open tasks\\" headingLevel={3}>\\n  New tasks will show up as they arrive.\\n</EmptyState>"
      }
    }
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};export{n as CompactNoArt,r as FirstUse,a as NoResultsLeftAligned,s as Permission,M as __namedExportsOrder,K as default};
