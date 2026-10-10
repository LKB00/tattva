import{j as e}from"./iframe-J6_2PHET.js";import{bG as u,b as x}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const a=x.get("text-field"),_={title:"Forms/TextField",component:u,tags:["autodocs"],parameters:{docs:{description:{component:a.summary+" "+a.description}}}},n={name:"Search with an icon",render:()=>e.jsx(e.Fragment,{children:a.examples[0].render()}),parameters:{docs:{description:{story:"The icon is decorative. The box needs its own name because there is no visible label."},source:{code:`function Example() {
  const [q, setQ] = useState("");
  return (
    <div className="w-72">
      <TextField type="search" aria-label="Search chats" placeholder="Search chats" leading={<SearchIcon />} value={q} onChange={(e) => setQ(e.target.value)} />
    </div>
  );
}`}}}},r={name:"In a Field with a hint and an error",render:()=>e.jsx(e.Fragment,{children:a.examples[1].render()}),parameters:{docs:{description:{story:"Field adds the label, hint and error and passes the wiring to the input."},source:{code:`<div className="w-72">
  <Field label="Email" hint="We only use it to send receipts." error="Enter an email like name@example.com.">
    {(a) => <TextField {...a} type="email" defaultValue="name@" />}
  </Field>
</div>`}}}},t={name:"Sizes and states",render:()=>e.jsx(e.Fragment,{children:a.examples[2].render()}),parameters:{docs:{description:{story:"Small and medium, a trailing unit, then disabled and read-only."},source:{code:`<div className="flex w-72 flex-col gap-3">
  <TextField size="sm" aria-label="Small" placeholder="Small" />
  <TextField aria-label="Amount" placeholder="0.00" leading="₹" />
  <TextField aria-label="Disabled" defaultValue="Disabled" disabled />
  <TextField aria-label="Read only" defaultValue="Read only" readOnly />
</div>`}}}},B=["SearchWithAnIcon","InAFieldWithAHintAndAnError","SizesAndStates"];var i,l,s;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Search with an icon",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The icon is decorative. The box needs its own name because there is no visible label."
      },
      source: {
        code: "function Example() {\\n  const [q, setQ] = useState(\\"\\");\\n  return (\\n    <div className=\\"w-72\\">\\n      <TextField type=\\"search\\" aria-label=\\"Search chats\\" placeholder=\\"Search chats\\" leading={<SearchIcon />} value={q} onChange={(e) => setQ(e.target.value)} />\\n    </div>\\n  );\\n}"
      }
    }
  }
}`,...(s=(l=n.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var d,o,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "In a Field with a hint and an error",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Field adds the label, hint and error and passes the wiring to the input."
      },
      source: {
        code: "<div className=\\"w-72\\">\\n  <Field label=\\"Email\\" hint=\\"We only use it to send receipts.\\" error=\\"Enter an email like name@example.com.\\">\\n    {(a) => <TextField {...a} type=\\"email\\" defaultValue=\\"name@\\" />}\\n  </Field>\\n</div>"
      }
    }
  }
}`,...(c=(o=r.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var m,p,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Sizes and states",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Small and medium, a trailing unit, then disabled and read-only."
      },
      source: {
        code: "<div className=\\"flex w-72 flex-col gap-3\\">\\n  <TextField size=\\"sm\\" aria-label=\\"Small\\" placeholder=\\"Small\\" />\\n  <TextField aria-label=\\"Amount\\" placeholder=\\"0.00\\" leading=\\"₹\\" />\\n  <TextField aria-label=\\"Disabled\\" defaultValue=\\"Disabled\\" disabled />\\n  <TextField aria-label=\\"Read only\\" defaultValue=\\"Read only\\" readOnly />\\n</div>"
      }
    }
  }
}`,...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};export{r as InAFieldWithAHintAndAnError,n as SearchWithAnIcon,t as SizesAndStates,B as __namedExportsOrder,_ as default};
