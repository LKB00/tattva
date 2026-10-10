import{j as e}from"./iframe-J6_2PHET.js";import{b as j}from"./registry-DJg46al6.js";import{a as o}from"./proLock-DICmId1O.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import{P as C}from"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=j.get("permission-prompt"),re={title:"Assistants/PermissionPrompt",component:C,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description+`

**Pro part.** The preview is free; the code comes with [Tattva Pro](https://lkb00.github.io/tattva/#pricing).`}}}},s={name:"Saving a choice for next time",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Choose Allow always to see what the saved choice covers before you confirm."},source:o("PermissionPrompt")}}},t={name:"A request with several parts",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"When a request has several parts, each part is listed, and a saved choice covers each one."},source:o("PermissionPrompt")}}},n={name:"Allow once only",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"When a saved choice cannot show everything it would allow, offer only Allow once and say why."},source:o("PermissionPrompt")}}},a={name:"Allow for this session",render:()=>e.jsx(e.Fragment,{children:r.examples[3].render()}),parameters:{docs:{description:{story:"Add sessionScope to offer a middle choice. It lasts until the session ends and saves nothing for later."},source:o("PermissionPrompt")}}},i={name:"Keyboard shortcuts",render:()=>e.jsx(e.Fragment,{children:r.examples[4].render()}),parameters:{docs:{description:{story:"Click inside the prompt, then press N to open the note box or Esc to deny. The line below shows what you chose."},source:o("PermissionPrompt")}}},c={name:"After you choose",render:()=>e.jsx(e.Fragment,{children:r.examples[5].render()}),parameters:{docs:{description:{story:"The prompt shrinks to a short summary. These are the three results."},source:o("PermissionPrompt")}}},oe=["SavingAChoiceForNextTime","ARequestWithSeveralParts","AllowOnceOnly","AllowForThisSession","KeyboardShortcuts","AfterYouChoose"];var m,p,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Saving a choice for next time",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Choose Allow always to see what the saved choice covers before you confirm."
      },
      source: proSource("PermissionPrompt")
    }
  }
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var h,l,u;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "A request with several parts",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "When a request has several parts, each part is listed, and a saved choice covers each one."
      },
      source: proSource("PermissionPrompt")
    }
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var y,w,P;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Allow once only",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "When a saved choice cannot show everything it would allow, offer only Allow once and say why."
      },
      source: proSource("PermissionPrompt")
    }
  }
}`,...(P=(w=n.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var f,x,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Allow for this session",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Add sessionScope to offer a middle choice. It lasts until the session ends and saves nothing for later."
      },
      source: proSource("PermissionPrompt")
    }
  }
}`,...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var A,S,g;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Keyboard shortcuts",
  render: () => <>{doc.examples[4].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Click inside the prompt, then press N to open the note box or Esc to deny. The line below shows what you chose."
      },
      source: proSource("PermissionPrompt")
    }
  }
}`,...(g=(S=i.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var b,T,F;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "After you choose",
  render: () => <>{doc.examples[5].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The prompt shrinks to a short summary. These are the three results."
      },
      source: proSource("PermissionPrompt")
    }
  }
}`,...(F=(T=c.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};export{t as ARequestWithSeveralParts,c as AfterYouChoose,a as AllowForThisSession,n as AllowOnceOnly,i as KeyboardShortcuts,s as SavingAChoiceForNextTime,oe as __namedExportsOrder,re as default};
