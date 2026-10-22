import{j as t}from"./iframe-C8v_uZy_.js";import{c4 as m,b as l}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const n=l.get("tool-menu"),_={title:"Conversation/ToolMenu",component:m,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},o={name:"Menu with tags",render:()=>t.jsx(t.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Switching a tool on or off updates its check and adds or removes its tag next to the button."},source:{code:`<ToolMenu
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
