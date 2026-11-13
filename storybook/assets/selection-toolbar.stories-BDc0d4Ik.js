import{j as r}from"./iframe-D-pZXX8_.js";import{bu as d,b as p}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const t=p.get("selection-toolbar"),U={title:"Creating/SelectionToolbar",component:d,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},e={name:"The standard bar",render:()=>r.jsx(r.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Tab once to enter the bar. Arrow keys move between controls. Escape closes it."},source:{code:"<SelectionToolbar onAction={(id) => run(id)} onAsk={(text) => ask(text)} onClose={() => hide()} />"}}}},o={name:"Your own quick edits, no menu",render:()=>r.jsx(r.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Use your own quick edits, and drop the menu of more."},source:{code:'<SelectionToolbar presets={[{ id: "fix", label: "Fix grammar" }, { id: "short", label: "Make shorter" }]} moreActions={[]} />'}}}},_=["TheStandardBar","YourOwnQuickEditsNoMenu"];var n,s,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
