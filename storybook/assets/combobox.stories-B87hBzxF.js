import{j as e}from"./iframe-C8v_uZy_.js";import{M as h,b}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const n=b.get("combobox"),_={title:"Forms/Combobox",component:h,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},o={name:"Company search with popular names",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Focus the empty box to see the popular names and the hint. Type ama and press Enter to pick Amazon."},source:{code:`function Example() {
  const [v, setV] = useState("");
  return (
    <div className="w-72 max-w-full">
      <Combobox label="Company" placeholder="Search for a company" value={v} onChange={setV} options={companies} popular={["Amazon", "Flipkart", "Swiggy"]}
        onSelect={(val, how) => console.log(how, val)} />
    </div>
  );
}`}}}},a={name:"Free text is accepted",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"A name that is not in the list stays as typed. The last row says so, and its words can be changed with useTypedLabel."},source:{code:`function Example() {
  const [v, setV] = useState("Corner Bookshop");
  return (
    <div className="w-72 max-w-full">
      <Combobox label="Seller" value={v} onChange={setV} options={companies} useTypedLabel={(t) => \`Use \\u201C\${t}\\u201D as the seller\`} />
    </div>
  );
}`}}}},r={name:"Inside a Field with an error",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"Field adds the label, hint and error, and passes the id and aria props to the input. The error shows until something is typed."},source:{code:`function Example() {
  const [v, setV] = useState("");
  return (
    <div className="w-72 max-w-full">
      <Field label="Bank" hint="Pick one, or type its name." error={v.trim().length === 0 ? "Choose or type a bank." : undefined} required>
        {(a) => <Combobox {...a} label="Bank" value={v} onChange={setV} options={companies} popular={["Amazon", "Flipkart", "Swiggy"]} placeholder="Search for a bank" />}
      </Field>
    </div>
  );
}`}}}},$=["CompanySearchWithPopularNames","FreeTextIsAccepted","InsideAFieldWithAnError"];var t,s,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Company search with popular names",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Focus the empty box to see the popular names and the hint. Type ama and press Enter to pick Amazon."
      },
      source: {
        code: "function Example() {\\n  const [v, setV] = useState(\\"\\");\\n  return (\\n    <div className=\\"w-72 max-w-full\\">\\n      <Combobox label=\\"Company\\" placeholder=\\"Search for a company\\" value={v} onChange={setV} options={companies} popular={[\\"Amazon\\", \\"Flipkart\\", \\"Swiggy\\"]}\\n        onSelect={(val, how) => console.log(how, val)} />\\n    </div>\\n  );\\n}"
      }
    }
  }
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var p,m,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Free text is accepted",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A name that is not in the list stays as typed. The last row says so, and its words can be changed with useTypedLabel."
      },
      source: {
        code: "function Example() {\\n  const [v, setV] = useState(\\"Corner Bookshop\\");\\n  return (\\n    <div className=\\"w-72 max-w-full\\">\\n      <Combobox label=\\"Seller\\" value={v} onChange={setV} options={companies} useTypedLabel={(t) => \`Use \\\\u201C\${t}\\\\u201D as the seller\`} />\\n    </div>\\n  );\\n}"
      }
    }
  }
}`,...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,c,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Inside a Field with an error",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Field adds the label, hint and error, and passes the id and aria props to the input. The error shows until something is typed."
      },
      source: {
        code: "function Example() {\\n  const [v, setV] = useState(\\"\\");\\n  return (\\n    <div className=\\"w-72 max-w-full\\">\\n      <Field label=\\"Bank\\" hint=\\"Pick one, or type its name.\\" error={v.trim().length === 0 ? \\"Choose or type a bank.\\" : undefined} required>\\n        {(a) => <Combobox {...a} label=\\"Bank\\" value={v} onChange={setV} options={companies} popular={[\\"Amazon\\", \\"Flipkart\\", \\"Swiggy\\"]} placeholder=\\"Search for a bank\\" />}\\n      </Field>\\n    </div>\\n  );\\n}"
      }
    }
  }
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};export{o as CompanySearchWithPopularNames,a as FreeTextIsAccepted,r as InsideAFieldWithAnError,$ as __namedExportsOrder,_ as default};
