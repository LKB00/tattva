import{j as o}from"./iframe-C8v_uZy_.js";import{c5 as u,b as g}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const e=g.get("tooltip"),G={title:"Navigation and overlays/Tooltip",component:u,tags:["autodocs"],parameters:{docs:{description:{component:e.summary+" "+e.description}}}},t={name:"On an icon button",render:()=>o.jsx(o.Fragment,{children:e.examples[0].render()}),parameters:{docs:{description:{story:"The tooltip repeats the button name for sighted mouse users. The button keeps its own label."},source:{code:`<Tooltip content="Copy reply">
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
