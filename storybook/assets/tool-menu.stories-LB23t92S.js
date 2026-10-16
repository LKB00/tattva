import{j as t}from"./iframe-DSdOWv-_.js";import{b$ as m,b as l}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const n=l.get("tool-menu"),_={title:"Conversation/ToolMenu",component:m,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},o={name:"Menu with tags",render:()=>t.jsx(t.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Switching a tool on or off updates its check and adds or removes its tag next to the button."},source:{code:`<ToolMenu
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
