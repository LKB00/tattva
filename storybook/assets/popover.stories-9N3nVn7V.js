import{j as e}from"./iframe-J6_2PHET.js";import{b as x}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import{P as y}from"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const o=x.get("popover"),H={title:"Controls/Popover",component:y,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},t={name:"Basic panel",render:()=>e.jsx(e.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Give the button its screen reader details and open the panel on click."},source:{code:`<Popover label="About credits"
  trigger={({ toggle, triggerProps }) => <Button variant="secondary" size="sm" onClick={toggle} {...triggerProps}>About credits</Button>}>
  <p className="p-2 text-body leading-5">Cost depends on duration.</p>
</Popover>`}}}},n={name:"A menu that closes when you pick",render:()=>e.jsx(e.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"The panel can close itself when you pick something. Use a menu for a list of actions."},source:{code:`<Popover label="Options" role="menu" align="end"
  trigger={({ toggle, triggerProps }) => <Button variant="secondary" size="sm" onClick={toggle} {...triggerProps}>Options</Button>}>
  {({ close }) => (
    <div className="flex flex-col">
      <button role="menuitem" className="rounded-xl px-3 py-1.5 text-left text-body leading-5 hover:bg-hover" onClick={close}>Rename</button>
      <button role="menuitem" className="rounded-xl px-3 py-1.5 text-left text-body leading-5 hover:bg-hover" onClick={close}>Duplicate</button>
    </div>
  )}
</Popover>`}}}},r={name:"Opens upward",render:()=>e.jsx(e.Fragment,{children:o.examples[2].render()}),parameters:{docs:{description:{story:"Open upward when the button is near the bottom of the screen. If the panel still does not fit, it opens downward."},source:{code:`<Popover label="Tips" side="top"
  trigger={({ toggle, triggerProps }) => <Button variant="ghost" size="sm" onClick={toggle} {...triggerProps}>Tips</Button>}>
  <p className="p-2 text-body leading-5">Press Esc to close.</p>
</Popover>`}}}},s={name:"Near the edge of the screen",render:()=>e.jsx(e.Fragment,{children:o.examples[3].render()}),parameters:{docs:{description:{story:"A wide panel on a button at the right edge. It would run past the edge, so it shifts left to stay on screen."},source:{code:`<div className="flex justify-end">
  <Popover label="Share options" panelClassName="w-72"
    trigger={({ toggle, triggerProps }) => <Button variant="secondary" size="sm" onClick={toggle} {...triggerProps}>Share</Button>}>
    <p className="p-2 text-body leading-5">Anyone with the link can view this. The panel shifts left to stay on screen.</p>
  </Popover>
</div>`}}}},J=["BasicPanel","AMenuThatClosesWhenYouPick","OpensUpward","NearTheEdgeOfTheScreen"];var a,i,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Basic panel",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Give the button its screen reader details and open the panel on click."
      },
      source: {
        code: "<Popover label=\\"About credits\\"\\n  trigger={({ toggle, triggerProps }) => <Button variant=\\"secondary\\" size=\\"sm\\" onClick={toggle} {...triggerProps}>About credits</Button>}>\\n  <p className=\\"p-2 text-body leading-5\\">Cost depends on duration.</p>\\n</Popover>"
      }
    }
  }
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var l,c,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "A menu that closes when you pick",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The panel can close itself when you pick something. Use a menu for a list of actions."
      },
      source: {
        code: "<Popover label=\\"Options\\" role=\\"menu\\" align=\\"end\\"\\n  trigger={({ toggle, triggerProps }) => <Button variant=\\"secondary\\" size=\\"sm\\" onClick={toggle} {...triggerProps}>Options</Button>}>\\n  {({ close }) => (\\n    <div className=\\"flex flex-col\\">\\n      <button role=\\"menuitem\\" className=\\"rounded-xl px-3 py-1.5 text-left text-body leading-5 hover:bg-hover\\" onClick={close}>Rename</button>\\n      <button role=\\"menuitem\\" className=\\"rounded-xl px-3 py-1.5 text-left text-body leading-5 hover:bg-hover\\" onClick={close}>Duplicate</button>\\n    </div>\\n  )}\\n</Popover>"
      }
    }
  }
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,g,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Opens upward",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Open upward when the button is near the bottom of the screen. If the panel still does not fit, it opens downward."
      },
      source: {
        code: "<Popover label=\\"Tips\\" side=\\"top\\"\\n  trigger={({ toggle, triggerProps }) => <Button variant=\\"ghost\\" size=\\"sm\\" onClick={toggle} {...triggerProps}>Tips</Button>}>\\n  <p className=\\"p-2 text-body leading-5\\">Press Esc to close.</p>\\n</Popover>"
      }
    }
  }
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,v,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Near the edge of the screen",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A wide panel on a button at the right edge. It would run past the edge, so it shifts left to stay on screen."
      },
      source: {
        code: "<div className=\\"flex justify-end\\">\\n  <Popover label=\\"Share options\\" panelClassName=\\"w-72\\"\\n    trigger={({ toggle, triggerProps }) => <Button variant=\\"secondary\\" size=\\"sm\\" onClick={toggle} {...triggerProps}>Share</Button>}>\\n    <p className=\\"p-2 text-body leading-5\\">Anyone with the link can view this. The panel shifts left to stay on screen.</p>\\n  </Popover>\\n</div>"
      }
    }
  }
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};export{n as AMenuThatClosesWhenYouPick,t as BasicPanel,s as NearTheEdgeOfTheScreen,r as OpensUpward,J as __namedExportsOrder,H as default};
