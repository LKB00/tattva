import{j as e}from"./iframe-DSdOWv-_.js";import{av as l,b as k}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const n=k.get("likeness-consent"),V={title:"Video/LikenessConsent",component:l,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},s={name:"Every status",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"The view of the person who asked. Pending is amber because Asha still has to act; nothing else is. They can see who may use it but not change it."},source:{code:`<LikenessConsent subjectName="Asha Rao" status="pending" linkExpiresIn="23 hours"
  onSendLink={sendLink} onRecordHere={recordHere} onCancelRequest={cancel} />

<LikenessConsent subjectName="Asha Rao" status="rejected"
  rejectionReason="The person in the video did not read the lines, so we could not tell they agreed."
  onSendLink={sendLink} />

<LikenessConsent subjectName="Juno, the guide" status="notRealPerson" />`}}}},o={name:"The person in it: who can use it, uses and revoke",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"With canManage, Asha picks who may use her likeness (narrowest first), sees each use, and can revoke with a confirm in place."},source:{code:`<LikenessConsent subjectName="Asha Rao" status="accepted" decidedOn="2 October" canManage
  audience={audience} onAudienceChange={setAudience}
  usage={[{ who: "Ravi Menon", what: "Spring launch, shot 3", when: "Today, 10:42" }, ...]}
  onRevoke={revoke} />`}}}},t={name:"Record here",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:'Tomas is in the room, so "record now" opens VoiceConsentCheck with subject="likeness" inside the panel. Done moves to accepted.'},source:{code:`<LikenessConsent subjectName="Tomas Okafor" status={status}
  onSendLink={sendLink} onRecordHere={() => setStatus("recording")}
  check={{ step, lines, currentLine: 0, recording, consentText, manualReviewHref: "/help/manual-review",
    onAgree, onContinue, onStartLine, onStopLine, onCancel, onDone: () => setStatus("accepted") }} />`}}}},q=["EveryStatus","ThePersonInItWhoCanUseItUsesAndRevoke","RecordHere"];var r,a,i;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Every status",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The view of the person who asked. Pending is amber because Asha still has to act; nothing else is. They can see who may use it but not change it."
      },
      source: {
        code: "<LikenessConsent subjectName=\\"Asha Rao\\" status=\\"pending\\" linkExpiresIn=\\"23 hours\\"\\n  onSendLink={sendLink} onRecordHere={recordHere} onCancelRequest={cancel} />\\n\\n<LikenessConsent subjectName=\\"Asha Rao\\" status=\\"rejected\\"\\n  rejectionReason=\\"The person in the video did not read the lines, so we could not tell they agreed.\\"\\n  onSendLink={sendLink} />\\n\\n<LikenessConsent subjectName=\\"Juno, the guide\\" status=\\"notRealPerson\\" />"
      }
    }
  }
}`,...(i=(a=s.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var c,d,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "The person in it: who can use it, uses and revoke",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With canManage, Asha picks who may use her likeness (narrowest first), sees each use, and can revoke with a confirm in place."
      },
      source: {
        code: "<LikenessConsent subjectName=\\"Asha Rao\\" status=\\"accepted\\" decidedOn=\\"2 October\\" canManage\\n  audience={audience} onAudienceChange={setAudience}\\n  usage={[{ who: \\"Ravi Menon\\", what: \\"Spring launch, shot 3\\", when: \\"Today, 10:42\\" }, ...]}\\n  onRevoke={revoke} />"
      }
    }
  }
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,u,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Record here",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Tomas is in the room, so \\"record now\\" opens VoiceConsentCheck with subject=\\"likeness\\" inside the panel. Done moves to accepted."
      },
      source: {
        code: "<LikenessConsent subjectName=\\"Tomas Okafor\\" status={status}\\n  onSendLink={sendLink} onRecordHere={() => setStatus(\\"recording\\")}\\n  check={{ step, lines, currentLine: 0, recording, consentText, manualReviewHref: \\"/help/manual-review\\",\\n    onAgree, onContinue, onStartLine, onStopLine, onCancel, onDone: () => setStatus(\\"accepted\\") }} />"
      }
    }
  }
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};export{s as EveryStatus,t as RecordHere,o as ThePersonInItWhoCanUseItUsesAndRevoke,q as __namedExportsOrder,V as default};
