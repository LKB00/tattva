import{j as o}from"./iframe-DSdOWv-_.js";import{c0 as u,b as g}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const e=g.get("tooltip"),G={title:"Navigation and overlays/Tooltip",component:u,tags:["autodocs"],parameters:{docs:{description:{component:e.summary+" "+e.description}}}},t={name:"On an icon button",render:()=>o.jsx(o.Fragment,{children:e.examples[0].render()}),parameters:{docs:{description:{story:"The tooltip repeats the button name for sighted mouse users. The button keeps its own label."},source:{code:`<Tooltip content="Copy reply">
  <IconButton label="Copy reply"><CopyIcon width={16} height={16} /></IconButton>
</Tooltip>`}}}},n={name:"Long delay, below the trigger",render:()=>o.jsx(o.Fragment,{children:e.examples[1].render()}),parameters:{docs:{description:{story:"A longer delay keeps tips from flashing as the pointer crosses a toolbar. side places the tip below."},source:{code:`<Tooltip content="Runs the whole plan again" side="bottom" delay={1000}>
  <Button variant="secondary">Run again</Button>
</Tooltip>`}}}},r={name:"Beside a toolbar",render:()=>o.jsx(o.Fragment,{children:e.examples[2].render()}),parameters:{docs:{description:{story:"Use left or right when there is no room above or below, for example in a vertical toolbar."},source:{code:`<div className="flex gap-2">
  <Tooltip content="Share" side="right">
    <IconButton label="Share"><ShareIcon width={16} height={16} /></IconButton>
  </Tooltip>
  <Tooltip content="Download" side="right">
    <IconButton label="Download"><DownloadIcon width={16} height={16} /></IconButton>
  </Tooltip>
</div>`}}}},H=["OnAnIconButton","LongDelayBelowTheTrigger","BesideAToolbar"];var a,s,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "On an icon button",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The tooltip repeats the button name for sighted mouse users. The button keeps its own label."
      },
      source: {
        code: "<Tooltip content=\\"Copy reply\\">\\n  <IconButton label=\\"Copy reply\\"><CopyIcon width={16} height={16} /></IconButton>\\n</Tooltip>"
      }
    }
  }
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var p,l,c;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Long delay, below the trigger",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A longer delay keeps tips from flashing as the pointer crosses a toolbar. side places the tip below."
      },
      source: {
        code: "<Tooltip content=\\"Runs the whole plan again\\" side=\\"bottom\\" delay={1000}>\\n  <Button variant=\\"secondary\\">Run again</Button>\\n</Tooltip>"
      }
    }
  }
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,m,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Beside a toolbar",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Use left or right when there is no room above or below, for example in a vertical toolbar."
      },
      source: {
        code: "<div className=\\"flex gap-2\\">\\n  <Tooltip content=\\"Share\\" side=\\"right\\">\\n    <IconButton label=\\"Share\\"><ShareIcon width={16} height={16} /></IconButton>\\n  </Tooltip>\\n  <Tooltip content=\\"Download\\" side=\\"right\\">\\n    <IconButton label=\\"Download\\"><DownloadIcon width={16} height={16} /></IconButton>\\n  </Tooltip>\\n</div>"
      }
    }
  }
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};export{r as BesideAToolbar,n as LongDelayBelowTheTrigger,t as OnAnIconButton,H as __namedExportsOrder,G as default};
