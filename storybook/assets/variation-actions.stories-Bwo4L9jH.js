import{j as e}from"./iframe-C8v_uZy_.js";import{cd as u,b as g}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const t=g.get("variation-actions"),_={title:"Creating/VariationActions",component:u,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},n={name:"Standard actions, with where it came from",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"The standard list is Vary, Upscale, Remix and Extend. Extend has no strength choice."},source:{code:'<VariationActions lineage="Made from Variant B" onAction={(id, strength) => {}} />'}}}},o={name:"Showing costs",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Each action can show a cost. Use it to say what the action will spend."},source:{code:`<VariationActions
  lineage="Made from Variant B"
  onAction={() => {}}
  actions={[
    { id: "vary", label: "Vary", cost: "About 4 credits" },
    { id: "upscale", label: "Upscale", cost: "About 8 credits" },
    { id: "remix", label: "Remix", cost: "About 4 credits" },
  ]}
/>`}}}},r={name:"Your own strengths, switched off",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"Your own strength choices, starting on the second one. Disabled turns the buttons off."},source:{code:`<VariationActions
  onAction={() => {}}
  strengths={[{ value: "low", label: "Low" }, { value: "mid", label: "Medium" }, { value: "high", label: "High" }]}
  defaultStrength="mid"
  actions={[{ id: "vary", label: "Vary" }]}
  disabled
/>`}}}},k=["StandardActionsWithWhereItCameFrom","ShowingCosts","YourOwnStrengthsSwitchedOff"];var a,s,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Standard actions, with where it came from",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The standard list is Vary, Upscale, Remix and Extend. Extend has no strength choice."
      },
      source: {
        code: "<VariationActions lineage=\\"Made from Variant B\\" onAction={(id, strength) => {}} />"
      }
    }
  }
}`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var c,d,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Showing costs",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Each action can show a cost. Use it to say what the action will spend."
      },
      source: {
        code: "<VariationActions\\n  lineage=\\"Made from Variant B\\"\\n  onAction={() => {}}\\n  actions={[\\n    { id: \\"vary\\", label: \\"Vary\\", cost: \\"About 4 credits\\" },\\n    { id: \\"upscale\\", label: \\"Upscale\\", cost: \\"About 8 credits\\" },\\n    { id: \\"remix\\", label: \\"Remix\\", cost: \\"About 4 credits\\" },\\n  ]}\\n/>"
      }
    }
  }
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var l,p,h;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Your own strengths, switched off",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Your own strength choices, starting on the second one. Disabled turns the buttons off."
      },
      source: {
        code: "<VariationActions\\n  onAction={() => {}}\\n  strengths={[{ value: \\"low\\", label: \\"Low\\" }, { value: \\"mid\\", label: \\"Medium\\" }, { value: \\"high\\", label: \\"High\\" }]}\\n  defaultStrength=\\"mid\\"\\n  actions={[{ id: \\"vary\\", label: \\"Vary\\" }]}\\n  disabled\\n/>"
      }
    }
  }
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};export{o as ShowingCosts,n as StandardActionsWithWhereItCameFrom,r as YourOwnStrengthsSwitchedOff,k as __namedExportsOrder,_ as default};
