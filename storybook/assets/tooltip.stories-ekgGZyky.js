import{j as o}from"./iframe-J6_2PHET.js";import{bQ as u,b as g}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const e=g.get("tooltip"),z={title:"Navigation and overlays/Tooltip",component:u,tags:["autodocs"],parameters:{docs:{description:{component:e.summary+" "+e.description}}}},t={name:"On an icon button",render:()=>o.jsx(o.Fragment,{children:e.examples[0].render()}),parameters:{docs:{description:{story:"The tooltip repeats the button name for sighted mouse users. The button keeps its own label."},source:{code:`<Tooltip content="Copy reply">
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
</div>`}}}},G=["OnAnIconButton","LongDelayBelowTheTrigger","BesideAToolbar"];var a,s,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};export{r as BesideAToolbar,n as LongDelayBelowTheTrigger,t as OnAnIconButton,G as __namedExportsOrder,z as default};
