import{j as e}from"./iframe-DSdOWv-_.js";import{i as u,b as w}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const o=w.get("approval-prompt"),q={title:"Assistants/ApprovalPrompt",component:u,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},n={name:"High risk",render:()=>e.jsx(e.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"An action that cannot be undone, in amber with a red label. There is no Always allow."},source:{code:`<ApprovalPrompt
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
