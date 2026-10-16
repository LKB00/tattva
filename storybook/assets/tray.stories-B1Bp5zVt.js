import{j as e}from"./iframe-DSdOWv-_.js";import{c4 as u,b as y}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const n=y.get("tray"),E={title:"Conversation/Tray",component:u,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},t={name:"Rows that need attention",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"A row marked as needing attention gets an amber dot. Use it only when a person has to act."},source:{code:`<div className="max-w-xl">
  <Tray label="Needs you" action="4 running →">
    <TrayRow attention title="Quarterly report" detail="Approval pending for 6 days" trailing="Open →" />
    <TrayRow attention title="Customer survey" detail="Missing 2 answers, due in 2 days" trailing="Open →" />
    <TrayRow icon={<FileIcon />} title="Launch plan" detail="On track" trailing="Open →" />
  </Tray>
</div>`}}}},o={name:"With a message box underneath",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"The message box sits inside the panel, lined up with the list."},source:{code:`<div className="max-w-xl">
  <Tray
    label="Needs you"
    footer={
      <Composer
        placeholder="Give me a task or question to work on…"
        onSend={() => {}}
        tools={<ContextPill icon={<UsersIcon width={14} height={14} />} onClick={() => {}}>All projects</ContextPill>}
      />
    }
  >
    <TrayRow attention title="Quarterly report" detail="Approval pending for 6 days" trailing="Open →" />
  </Tray>
</div>`}}}},r={name:"Without a heading",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"Leave the heading out for a plain list. Screen readers then get no name for it, so only do this when a nearby heading explains the list."},source:{code:`<div className="max-w-xl">
  <Tray>
    <TrayRow icon={<SearchIcon />} title="Find missing documents" />
    <TrayRow icon={<ToolIcon />} title="Reconcile invoices" />
  </Tray>
</div>`}}}},G=["RowsThatNeedAttention","WithAMessageBoxUnderneath","WithoutAHeading"];var a,i,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Rows that need attention",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A row marked as needing attention gets an amber dot. Use it only when a person has to act."
      },
      source: {
        code: "<div className=\\"max-w-xl\\">\\n  <Tray label=\\"Needs you\\" action=\\"4 running →\\">\\n    <TrayRow attention title=\\"Quarterly report\\" detail=\\"Approval pending for 6 days\\" trailing=\\"Open →\\" />\\n    <TrayRow attention title=\\"Customer survey\\" detail=\\"Missing 2 answers, due in 2 days\\" trailing=\\"Open →\\" />\\n    <TrayRow icon={<FileIcon />} title=\\"Launch plan\\" detail=\\"On track\\" trailing=\\"Open →\\" />\\n  </Tray>\\n</div>"
      }
    }
  }
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var d,l,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "With a message box underneath",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The message box sits inside the panel, lined up with the list."
      },
      source: {
        code: "<div className=\\"max-w-xl\\">\\n  <Tray\\n    label=\\"Needs you\\"\\n    footer={\\n      <Composer\\n        placeholder=\\"Give me a task or question to work on…\\"\\n        onSend={() => {}}\\n        tools={<ContextPill icon={<UsersIcon width={14} height={14} />} onClick={() => {}}>All projects</ContextPill>}\\n      />\\n    }\\n  >\\n    <TrayRow attention title=\\"Quarterly report\\" detail=\\"Approval pending for 6 days\\" trailing=\\"Open →\\" />\\n  </Tray>\\n</div>"
      }
    }
  }
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,m,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Without a heading",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Leave the heading out for a plain list. Screen readers then get no name for it, so only do this when a nearby heading explains the list."
      },
      source: {
        code: "<div className=\\"max-w-xl\\">\\n  <Tray>\\n    <TrayRow icon={<SearchIcon />} title=\\"Find missing documents\\" />\\n    <TrayRow icon={<ToolIcon />} title=\\"Reconcile invoices\\" />\\n  </Tray>\\n</div>"
      }
    }
  }
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};export{t as RowsThatNeedAttention,o as WithAMessageBoxUnderneath,r as WithoutAHeading,G as __namedExportsOrder,E as default};
