import{j as o}from"./iframe-D-pZXX8_.js";import{cd as u,b as g}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const e=g.get("tooltip"),G={title:"Navigation and overlays/Tooltip",component:u,tags:["autodocs"],parameters:{docs:{description:{component:e.summary+" "+e.description}}}},t={name:"On an icon button",render:()=>o.jsx(o.Fragment,{children:e.examples[0].render()}),parameters:{docs:{description:{story:"The tooltip repeats the button name for sighted mouse users. The button keeps its own label."},source:{code:`<Tooltip content="Copy reply">
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
