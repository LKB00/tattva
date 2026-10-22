import{j as t}from"./iframe-C8v_uZy_.js";import{bo as s,b as a}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const n=a.get("sensitive-data-guard"),P={title:"Trust/SensitiveDataGuard",component:s,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},e={name:"A card number and a phone number",render:()=>t.jsx(t.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Take one out, take both out, or send anyway. Edit the message and the warning follows."},source:{code:`const findings = findSensitive(text);

<SensitiveDataGuard
  findings={findings}
  onRemove={(id) => setText(removeSensitive(text, findings.filter((f) => f.id === id)))}
  onRemoveAll={() => setText(removeSensitive(text, findings))}
  onSendAnyway={send}
/>`}}}},_=["ACardNumberAndAPhoneNumber"];var o,r,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};export{e as ACardNumberAndAPhoneNumber,_ as __namedExportsOrder,P as default};
