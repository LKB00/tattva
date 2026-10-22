import{j as e}from"./iframe-C8v_uZy_.js";import{_ as h,b as g}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const n=g.get("date-picker"),V={title:"Forms/DatePicker",component:h,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},t={name:"With a range and quick buttons",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Days before 15 August 2026 and after today are shown but off. Today and Yesterday sit above the grid because both are allowed."},source:{code:`function Example() {
  const [d, setD] = useState<string | null>(null);
  return <DatePicker label="Date it happened" value={d} onChange={setD} today="2026-10-07" min="2026-08-15" />;
}`}}}},a={name:"With a chosen value",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"It opens on the month of the chosen day. The line under the grid says the date in words and how long ago it was."},source:{code:`function Example() {
  const [d, setD] = useState<string | null>("2026-10-01");
  return <DatePicker label="Date you first complained" value={d} onChange={setD} today="2026-10-07" />;
}`}}}},r={name:"Inside a Field with a hint",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"The calendar is not a single input, so Field gives it the label and the hint. Put the ids on a wrapper and keep the grid's own label."},source:{code:`function Example() {
  const [d, setD] = useState<string | null>(null);
  return (
    <div className="w-80 max-w-full">
      <Field label="When did it go wrong?" hint="Days after today are off because this has already happened.">
        {({ id, "aria-describedby": describedBy }) => (
          <div id={id} role="group" aria-describedby={describedBy}>
            <DatePicker label="Date it went wrong" value={d} onChange={setD} today="2026-10-07" />
          </div>
        )}
      </Field>
    </div>
  );
}`}}}},Y=["WithARangeAndQuickButtons","WithAChosenValue","InsideAFieldWithAHint"];var o,s,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "With a range and quick buttons",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Days before 15 August 2026 and after today are shown but off. Today and Yesterday sit above the grid because both are allowed."
      },
      source: {
        code: "function Example() {\\n  const [d, setD] = useState<string | null>(null);\\n  return <DatePicker label=\\"Date it happened\\" value={d} onChange={setD} today=\\"2026-10-07\\" min=\\"2026-08-15\\" />;\\n}"
      }
    }
  }
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var d,c,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "With a chosen value",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "It opens on the month of the chosen day. The line under the grid says the date in words and how long ago it was."
      },
      source: {
        code: "function Example() {\\n  const [d, setD] = useState<string | null>(\\"2026-10-01\\");\\n  return <DatePicker label=\\"Date you first complained\\" value={d} onChange={setD} today=\\"2026-10-07\\" />;\\n}"
      }
    }
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,u,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Inside a Field with a hint",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The calendar is not a single input, so Field gives it the label and the hint. Put the ids on a wrapper and keep the grid's own label."
      },
      source: {
        code: "function Example() {\\n  const [d, setD] = useState<string | null>(null);\\n  return (\\n    <div className=\\"w-80 max-w-full\\">\\n      <Field label=\\"When did it go wrong?\\" hint=\\"Days after today are off because this has already happened.\\">\\n        {({ id, \\"aria-describedby\\": describedBy }) => (\\n          <div id={id} role=\\"group\\" aria-describedby={describedBy}>\\n            <DatePicker label=\\"Date it went wrong\\" value={d} onChange={setD} today=\\"2026-10-07\\" />\\n          </div>\\n        )}\\n      </Field>\\n    </div>\\n  );\\n}"
      }
    }
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};export{r as InsideAFieldWithAHint,a as WithAChosenValue,t as WithARangeAndQuickButtons,Y as __namedExportsOrder,V as default};
