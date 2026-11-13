import{j as e}from"./iframe-D-pZXX8_.js";import{j as u,b as w}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const o=w.get("approval-prompt"),q={title:"Assistants/ApprovalPrompt",component:u,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},n={name:"High risk",render:()=>e.jsx(e.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"An action that cannot be undone, in amber with a red label. There is no Always allow."},source:{code:`<ApprovalPrompt
  risk="high"
  action="Delete 14 archived projects"
  detail={<>This permanently removes <b>14 projects</b> from the workspace <b>Acme Studio</b>. It cannot be undone.</>}
  onApprove={() => {}}
  onDeny={() => {}}
/>`}}}},r={name:"Medium risk (the default)",render:()=>e.jsx(e.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"An action others will see, in amber. Medium is used when no level is given."},source:{code:`<ApprovalPrompt
  action="Send a reminder to Dana Whitfield"
  detail={<>An email from <b>team@example.com</b> will be sent now.</>}
  onApprove={() => {}}
  onDeny={() => {}}
/>`}}}},t={name:"Low risk with Always allow",render:()=>e.jsx(e.Fragment,{children:o.examples[2].render()}),parameters:{docs:{description:{story:"An action that only looks, in a neutral color. It can offer Always allow so people are not asked again. Click a button to see the choice."},source:{code:`<ApprovalPrompt
  risk="low"
  action="Read the shared reports folder"
  detail={<>The assistant will list file names in <b>/reports/2026</b>. Nothing is changed.</>}
  onApprove={() => {}}
  onDeny={() => {}}
  onAlways={() => {}}
/>`}}}},z=["HighRisk","MediumRiskTheDefault","LowRiskWithAlwaysAllow"];var a,s,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "High risk",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "An action that cannot be undone, in amber with a red label. There is no Always allow."
      },
      source: {
        code: "<ApprovalPrompt\\n  risk=\\"high\\"\\n  action=\\"Delete 14 archived projects\\"\\n  detail={<>This permanently removes <b>14 projects</b> from the workspace <b>Acme Studio</b>. It cannot be undone.</>}\\n  onApprove={() => {}}\\n  onDeny={() => {}}\\n/>"
      }
    }
  }
}`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var p,l,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Medium risk (the default)",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "An action others will see, in amber. Medium is used when no level is given."
      },
      source: {
        code: "<ApprovalPrompt\\n  action=\\"Send a reminder to Dana Whitfield\\"\\n  detail={<>An email from <b>team@example.com</b> will be sent now.</>}\\n  onApprove={() => {}}\\n  onDeny={() => {}}\\n/>"
      }
    }
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,d,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Low risk with Always allow",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "An action that only looks, in a neutral color. It can offer Always allow so people are not asked again. Click a button to see the choice."
      },
      source: {
        code: "<ApprovalPrompt\\n  risk=\\"low\\"\\n  action=\\"Read the shared reports folder\\"\\n  detail={<>The assistant will list file names in <b>/reports/2026</b>. Nothing is changed.</>}\\n  onApprove={() => {}}\\n  onDeny={() => {}}\\n  onAlways={() => {}}\\n/>"
      }
    }
  }
}`,...(h=(d=t.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};export{n as HighRisk,t as LowRiskWithAlwaysAllow,r as MediumRiskTheDefault,z as __namedExportsOrder,q as default};
