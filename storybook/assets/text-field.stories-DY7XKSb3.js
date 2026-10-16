import{j as e}from"./iframe-DSdOWv-_.js";import{bS as u,b as x}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const a=x.get("text-field"),_={title:"Forms/TextField",component:u,tags:["autodocs"],parameters:{docs:{description:{component:a.summary+" "+a.description}}}},n={name:"Search with an icon",render:()=>e.jsx(e.Fragment,{children:a.examples[0].render()}),parameters:{docs:{description:{story:"The icon is decorative. The box needs its own name because there is no visible label."},source:{code:`function Example() {
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
