import{j as e}from"./iframe-DSdOWv-_.js";import{ap as h,b as g}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const n=g.get("inline-edit"),$={title:"Forms/InlineEdit",component:h,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},a={name:"A three-row fact check",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Change one value and press Done. The Edited tag appears next to its label. The rows stack in a Stack, with a small gap, and each row draws its own divider."},source:{code:`function Example() {
  const [amount, setAmount] = useState("3499");
  const [seller, setSeller] = useState("Flipkart");
  const [when, setWhen] = useState("7 Oct 2026");
  return (
    <Stack gap={1} className="w-80 max-w-full">
      <InlineEdit label="Amount" value={amount} onChange={setAmount} inputMode="decimal" originalValue="3499" display={<Money value={Number(amount) || 0} />} />
      <InlineEdit label="Seller" value={seller} onChange={setSeller} originalValue="Flipkart" />
      <InlineEdit label="Date" value={when} onChange={setWhen} originalValue="7 Oct 2026" />
    </Stack>
  );
}`}}}},t={name:"With validation",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Clear the digits or type letters and press Done. The edit stays open and the message appears under the field with an icon and words."},source:{code:`function Example() {
  const [v, setV] = useState("9876543210");
  return (
    <div className="w-80 max-w-full">
      <InlineEdit label="Phone number" value={v} onChange={setV} inputMode="tel" validate={(x) => (/^\\d{10}$/.test(x) ? null : "Enter 10 digits, with no spaces.")} />
    </div>
  );
}`}}}},r={name:"Custom display and edit label",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"display shows the value as large money. editLabel gives the button a longer name for screen readers."},source:{code:`function Example() {
  const [v, setV] = useState("1250");
  return (
    <div className="w-80 max-w-full">
      <InlineEdit label="Refund amount" value={v} onChange={setV} inputMode="decimal" editLabel="Change the refund amount" originalValue="1250"
        display={<span className="text-title-xs leading-7"><Money value={Number(v) || 0} /></span>} validate={(x) => (x.trim() !== "" && !Number.isNaN(Number(x)) ? null : "Enter a number, like 1250.")} />
    </div>
  );
}`}}}},q=["AThreeRowFactCheck","WithValidation","CustomDisplayAndEditLabel"];var s,o,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "A three-row fact check",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Change one value and press Done. The Edited tag appears next to its label. The rows stack in a Stack, with a small gap, and each row draws its own divider."
      },
      source: {
        code: "function Example() {\\n  const [amount, setAmount] = useState(\\"3499\\");\\n  const [seller, setSeller] = useState(\\"Flipkart\\");\\n  const [when, setWhen] = useState(\\"7 Oct 2026\\");\\n  return (\\n    <Stack gap={1} className=\\"w-80 max-w-full\\">\\n      <InlineEdit label=\\"Amount\\" value={amount} onChange={setAmount} inputMode=\\"decimal\\" originalValue=\\"3499\\" display={<Money value={Number(amount) || 0} />} />\\n      <InlineEdit label=\\"Seller\\" value={seller} onChange={setSeller} originalValue=\\"Flipkart\\" />\\n      <InlineEdit label=\\"Date\\" value={when} onChange={setWhen} originalValue=\\"7 Oct 2026\\" />\\n    </Stack>\\n  );\\n}"
      }
    }
  }
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var l,d,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "With validation",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Clear the digits or type letters and press Done. The edit stays open and the message appears under the field with an icon and words."
      },
      source: {
        code: "function Example() {\\n  const [v, setV] = useState(\\"9876543210\\");\\n  return (\\n    <div className=\\"w-80 max-w-full\\">\\n      <InlineEdit label=\\"Phone number\\" value={v} onChange={setV} inputMode=\\"tel\\" validate={(x) => (/^\\\\d{10}$/.test(x) ? null : \\"Enter 10 digits, with no spaces.\\")} />\\n    </div>\\n  );\\n}"
      }
    }
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,c,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Custom display and edit label",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "display shows the value as large money. editLabel gives the button a longer name for screen readers."
      },
      source: {
        code: "function Example() {\\n  const [v, setV] = useState(\\"1250\\");\\n  return (\\n    <div className=\\"w-80 max-w-full\\">\\n      <InlineEdit label=\\"Refund amount\\" value={v} onChange={setV} inputMode=\\"decimal\\" editLabel=\\"Change the refund amount\\" originalValue=\\"1250\\"\\n        display={<span className=\\"text-title-xs leading-7\\"><Money value={Number(v) || 0} /></span>} validate={(x) => (x.trim() !== \\"\\" && !Number.isNaN(Number(x)) ? null : \\"Enter a number, like 1250.\\")} />\\n    </div>\\n  );\\n}"
      }
    }
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};export{a as AThreeRowFactCheck,r as CustomDisplayAndEditLabel,t as WithValidation,q as __namedExportsOrder,$ as default};
