import{j as e}from"./iframe-J6_2PHET.js";import{L as W,b as j}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const n=j.get("composer"),$={title:"Conversation/Composer",component:W,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},o={name:"Default",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Send stays off until something is typed. Try Enter, then Shift and Enter."},source:{code:`<div className="max-w-xl">
  <Composer onSend={(text) => console.log(text)} />
</div>`}}}},r={name:"With an attach button",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"The Attach file button shows only when files are allowed. Press it to see what happens."},source:{code:`<div className="max-w-xl">
  <Composer onAttach={() => openFilePicker()} onSend={(text) => console.log(text)} />
</div>`}}}},t={name:"While a reply is being written",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"The green Send button turns into Stop. Enter does nothing until the reply is done."},source:{code:`<div className="max-w-xl">
  <Composer generating onStop={() => {}} onSend={() => {}} />
</div>`}}}},s={name:"With a choice beside Send",render:()=>e.jsx(e.Fragment,{children:n.examples[3].render()}),parameters:{docs:{description:{story:"Add choices such as a project picker. They sit to the left of Send."},source:{code:`<div className="max-w-xl">
  <Composer
    placeholder="Ask about your projects…"
    onSend={() => {}}
    tools={<ContextPill icon={<UsersIcon width={14} height={14} />} onClick={() => {}}>All projects</ContextPill>}
  />
</div>`}}}},a={name:"Near the character limit",render:()=>e.jsx(e.Fragment,{children:n.examples[4].render()}),parameters:{docs:{description:{story:"The limit here is 40 characters. Type more than 36 to see the counter."},source:{code:`<div className="max-w-xl">
  <Composer maxLength={40} placeholder="Type more than 36 characters…" onSend={() => {}} />
</div>`}}}},i={name:"Rotating examples",render:()=>e.jsx(e.Fragment,{children:n.examples[5].render()}),parameters:{docs:{description:{story:"An empty box shows one example at a time instead of a row of example chips. With reduced motion, the first example stays."},source:{code:`<Composer
  onSend={(text) => console.log(text)}
  placeholders={[
    "My order was cancelled but no refund came",
    "UPI payment failed and the money is gone",
    "The flight was cancelled and I want my money back",
  ]}
/>`}}}},ee=["Default","WithAnAttachButton","WhileAReplyIsBeingWritten","WithAChoiceBesideSend","NearTheCharacterLimit","RotatingExamples"];var c,d,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Default",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Send stays off until something is typed. Try Enter, then Shift and Enter."
      },
      source: {
        code: "<div className=\\"max-w-xl\\">\\n  <Composer onSend={(text) => console.log(text)} />\\n</div>"
      }
    }
  }
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,l,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "With an attach button",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The Attach file button shows only when files are allowed. Press it to see what happens."
      },
      source: {
        code: "<div className=\\"max-w-xl\\">\\n  <Composer onAttach={() => openFilePicker()} onSend={(text) => console.log(text)} />\\n</div>"
      }
    }
  }
}`,...(h=(l=r.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var x,u,y;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "While a reply is being written",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The green Send button turns into Stop. Enter does nothing until the reply is done."
      },
      source: {
        code: "<div className=\\"max-w-xl\\">\\n  <Composer generating onStop={() => {}} onSend={() => {}} />\\n</div>"
      }
    }
  }
}`,...(y=(u=t.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var g,S,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "With a choice beside Send",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Add choices such as a project picker. They sit to the left of Send."
      },
      source: {
        code: "<div className=\\"max-w-xl\\">\\n  <Composer\\n    placeholder=\\"Ask about your projects…\\"\\n    onSend={() => {}}\\n    tools={<ContextPill icon={<UsersIcon width={14} height={14} />} onClick={() => {}}>All projects</ContextPill>}\\n  />\\n</div>"
      }
    }
  }
}`,...(f=(S=s.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var w,C,v;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Near the character limit",
  render: () => <>{doc.examples[4].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The limit here is 40 characters. Type more than 36 to see the counter."
      },
      source: {
        code: "<div className=\\"max-w-xl\\">\\n  <Composer maxLength={40} placeholder=\\"Type more than 36 characters…\\" onSend={() => {}} />\\n</div>"
      }
    }
  }
}`,...(v=(C=a.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var b,A,T;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Rotating examples",
  render: () => <>{doc.examples[5].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "An empty box shows one example at a time instead of a row of example chips. With reduced motion, the first example stays."
      },
      source: {
        code: "<Composer\\n  onSend={(text) => console.log(text)}\\n  placeholders={[\\n    \\"My order was cancelled but no refund came\\",\\n    \\"UPI payment failed and the money is gone\\",\\n    \\"The flight was cancelled and I want my money back\\",\\n  ]}\\n/>"
      }
    }
  }
}`,...(T=(A=i.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};export{o as Default,a as NearTheCharacterLimit,i as RotatingExamples,t as WhileAReplyIsBeingWritten,s as WithAChoiceBesideSend,r as WithAnAttachButton,ee as __namedExportsOrder,$ as default};
