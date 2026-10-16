import{j as r}from"./iframe-DSdOWv-_.js";import{bi as d,b as p}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const t=p.get("selection-toolbar"),U={title:"Creating/SelectionToolbar",component:d,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},e={name:"The standard bar",render:()=>r.jsx(r.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Tab once to enter the bar. Arrow keys move between controls. Escape closes it."},source:{code:"<SelectionToolbar onAction={(id) => run(id)} onAsk={(text) => ask(text)} onClose={() => hide()} />"}}}},o={name:"Your own quick edits, no menu",render:()=>r.jsx(r.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Use your own quick edits, and drop the menu of more."},source:{code:'<SelectionToolbar presets={[{ id: "fix", label: "Fix grammar" }, { id: "short", label: "Make shorter" }]} moreActions={[]} />'}}}},_=["TheStandardBar","YourOwnQuickEditsNoMenu"];var n,s,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "The standard bar",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Tab once to enter the bar. Arrow keys move between controls. Escape closes it."
      },
      source: {
        code: "<SelectionToolbar onAction={(id) => run(id)} onAsk={(text) => ask(text)} onClose={() => hide()} />"
      }
    }
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var i,m,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Your own quick edits, no menu",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Use your own quick edits, and drop the menu of more."
      },
      source: {
        code: "<SelectionToolbar presets={[{ id: \\"fix\\", label: \\"Fix grammar\\" }, { id: \\"short\\", label: \\"Make shorter\\" }]} moreActions={[]} />"
      }
    }
  }
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};export{e as TheStandardBar,o as YourOwnQuickEditsNoMenu,_ as __namedExportsOrder,U as default};
