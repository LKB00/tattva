import{j as t}from"./iframe-D-pZXX8_.js";import{cc as m,b as l}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const n=l.get("tool-menu"),_={title:"Conversation/ToolMenu",component:m,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},o={name:"Menu with tags",render:()=>t.jsx(t.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Switching a tool on or off updates its check and adds or removes its tag next to the button."},source:{code:`<ToolMenu
  side="bottom"
  attach={[{ id: "file", label: "Upload a file", icon: <FileIcon /> }, { id: "image", label: "Add a photo", icon: <ImageIcon /> }]}
  tools={tools.map((t) => ({ ...t, checked: !!on[t.id] }))}
  connectors={[{ id: "drive", label: "Google Drive", status: "Connected" }]}
  onToggle={(id, checked) => setOn((s) => ({ ...s, [id]: checked }))}
/>`}}}},e={name:"Tools only",render:()=>t.jsx(t.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Sections with nothing in them are left out."},source:{code:'<ToolMenu side="bottom" tools={[{ id: "search", label: "Web search", icon: <GlobeIcon />, checked: true }]} />'}}}},R=["MenuWithTags","ToolsOnly"];var r,s,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Menu with tags",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Switching a tool on or off updates its check and adds or removes its tag next to the button."
      },
      source: {
        code: "<ToolMenu\\n  side=\\"bottom\\"\\n  attach={[{ id: \\"file\\", label: \\"Upload a file\\", icon: <FileIcon /> }, { id: \\"image\\", label: \\"Add a photo\\", icon: <ImageIcon /> }]}\\n  tools={tools.map((t) => ({ ...t, checked: !!on[t.id] }))}\\n  connectors={[{ id: \\"drive\\", label: \\"Google Drive\\", status: \\"Connected\\" }]}\\n  onToggle={(id, checked) => setOn((s) => ({ ...s, [id]: checked }))}\\n/>"
      }
    }
  }
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var a,c,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Tools only",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Sections with nothing in them are left out."
      },
      source: {
        code: "<ToolMenu side=\\"bottom\\" tools={[{ id: \\"search\\", label: \\"Web search\\", icon: <GlobeIcon />, checked: true }]} />"
      }
    }
  }
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};export{o as MenuWithTags,e as ToolsOnly,R as __namedExportsOrder,_ as default};
