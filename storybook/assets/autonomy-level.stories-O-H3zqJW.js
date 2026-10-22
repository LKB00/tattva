import{j as e}from"./iframe-C8v_uZy_.js";import{b as h}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import{A as v}from"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const r=h.get("autonomy-level"),q={title:"Assistants/AutonomyLevel",component:v,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},t={name:"Three levels of detail",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Pick a view and the list below changes."},source:{code:`const [view, setView] = useState<Altitude>("summary");
<AutonomyLevel value={view} onChange={setView} />`}}}},o={name:"Start on Steps",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Leave it uncontrolled and set where it starts."},source:{code:'<AutonomyLevel defaultValue="steps" />'}}}},s={name:"Your own hints",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"Replace the hint for any view."},source:{code:'<AutonomyLevel hints={{ summary: "Just the result of your trip search." }} />'}}}},z=["ThreeLevelsOfDetail","StartOnSteps","YourOwnHints"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Three levels of detail",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Pick a view and the list below changes."
      },
      source: {
        code: "const [view, setView] = useState<Altitude>(\\"summary\\");\\n<AutonomyLevel value={view} onChange={setView} />"
      }
    }
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Start on Steps",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Leave it uncontrolled and set where it starts."
      },
      source: {
        code: "<AutonomyLevel defaultValue=\\"steps\\" />"
      }
    }
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,l,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Your own hints",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Replace the hint for any view."
      },
      source: {
        code: "<AutonomyLevel hints={{ summary: \\"Just the result of your trip search.\\" }} />"
      }
    }
  }
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};export{o as StartOnSteps,t as ThreeLevelsOfDetail,s as YourOwnHints,z as __namedExportsOrder,q as default};
