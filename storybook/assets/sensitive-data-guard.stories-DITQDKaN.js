import{j as t}from"./iframe-DSdOWv-_.js";import{bj as s,b as a}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const n=a.get("sensitive-data-guard"),P={title:"Trust/SensitiveDataGuard",component:s,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"A card number and a phone number",render:()=>t.jsx(t.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Take one out, take both out, or send anyway. Edit the message and the warning follows."},source:{code:`const findings = findSensitive(text);

<SensitiveDataGuard
  findings={findings}
  onRemove={(id) => setText(removeSensitive(text, findings.filter((f) => f.id === id)))}
  onRemoveAll={() => setText(removeSensitive(text, findings))}
  onSendAnyway={send}
/>`}}}},_=["ACardNumberAndAPhoneNumber"];var r,o,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "A card number and a phone number",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Take one out, take both out, or send anyway. Edit the message and the warning follows."
      },
      source: {
        code: "const findings = findSensitive(text);\\n\\n<SensitiveDataGuard\\n  findings={findings}\\n  onRemove={(id) => setText(removeSensitive(text, findings.filter((f) => f.id === id)))}\\n  onRemoveAll={() => setText(removeSensitive(text, findings))}\\n  onSendAnyway={send}\\n/>"
      }
    }
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};export{e as ACardNumberAndAPhoneNumber,_ as __namedExportsOrder,P as default};
