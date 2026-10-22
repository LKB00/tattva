import{j as r}from"./iframe-C8v_uZy_.js";import{bn as d,b as p}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const t=p.get("selection-toolbar"),U={title:"Creating/SelectionToolbar",component:d,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},e={name:"The standard bar",render:()=>r.jsx(r.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Tab once to enter the bar. Arrow keys move between controls. Escape closes it."},source:{code:"<SelectionToolbar onAction={(id) => run(id)} onAsk={(text) => ask(text)} onClose={() => hide()} />"}}}},o={name:"Your own quick edits, no menu",render:()=>r.jsx(r.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Use your own quick edits, and drop the menu of more."},source:{code:'<SelectionToolbar presets={[{ id: "fix", label: "Fix grammar" }, { id: "short", label: "Make shorter" }]} moreActions={[]} />'}}}},_=["TheStandardBar","YourOwnQuickEditsNoMenu"];var n,s,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
