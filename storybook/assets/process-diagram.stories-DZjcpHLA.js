import{j as r}from"./iframe-C8v_uZy_.js";import{a$ as p,b as c}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const a=c.get("process-diagram"),E={title:"Numbers/ProcessDiagram",component:p,tags:["autodocs"],parameters:{docs:{description:{component:a.summary+" "+a.description}}}},e={name:"How a request is handled",render:()=>r.jsx(r.Fragment,{children:a.examples[0].render()}),parameters:{docs:{description:{story:"Tab to a step to read its detail. Open View source for the text version."},source:{code:`<ProcessDiagram
  label="How a request is handled. Full description follows."
  caption="How a request reaches a result"
  description="A request is planned. Risky steps wait for a person to approve them before the report."
  nodes={[
    { id: "ask", label: "Ask", kind: "start", detail: "The person sends a request." },
    { id: "plan", label: "Plan steps", detail: "The assistant lists what it will do." },
    { id: "risk", label: "Is it risky?", kind: "decision", detail: "Anything that changes your files needs a person." },
    { id: "approve", label: "Approve", kind: "attention", detail: "The person says yes before anything changes." },
    { id: "done", label: "Report", kind: "end", detail: "The assistant sums up what happened." },
  ]}
/>`}}}},s={name:"With labeled branches",render:()=>r.jsx(r.Fragment,{children:a.examples[1].render()}),parameters:{docs:{description:{story:"Arrows can carry short labels such as yes and no."},source:{code:`<ProcessDiagram label="Retry flow. Description follows." caption="When to try again"
  nodes={[{ id: "a", label: "Send request", kind: "start" }, { id: "b", label: "Worked?", kind: "decision" }, { id: "c", label: "Done", kind: "end" }]}
  edges={[{ from: "a", to: "b" }, { from: "b", to: "c", label: "yes" }]} />`}}}},L=["HowARequestIsHandled","WithLabeledBranches"];var n,t,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "How a request is handled",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Tab to a step to read its detail. Open View source for the text version."
      },
      source: {
        code: "<ProcessDiagram\\n  label=\\"How a request is handled. Full description follows.\\"\\n  caption=\\"How a request reaches a result\\"\\n  description=\\"A request is planned. Risky steps wait for a person to approve them before the report.\\"\\n  nodes={[\\n    { id: \\"ask\\", label: \\"Ask\\", kind: \\"start\\", detail: \\"The person sends a request.\\" },\\n    { id: \\"plan\\", label: \\"Plan steps\\", detail: \\"The assistant lists what it will do.\\" },\\n    { id: \\"risk\\", label: \\"Is it risky?\\", kind: \\"decision\\", detail: \\"Anything that changes your files needs a person.\\" },\\n    { id: \\"approve\\", label: \\"Approve\\", kind: \\"attention\\", detail: \\"The person says yes before anything changes.\\" },\\n    { id: \\"done\\", label: \\"Report\\", kind: \\"end\\", detail: \\"The assistant sums up what happened.\\" },\\n  ]}\\n/>"
      }
    }
  }
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var i,d,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "With labeled branches",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Arrows can carry short labels such as yes and no."
      },
      source: {
        code: "<ProcessDiagram label=\\"Retry flow. Description follows.\\" caption=\\"When to try again\\"\\n  nodes={[{ id: \\"a\\", label: \\"Send request\\", kind: \\"start\\" }, { id: \\"b\\", label: \\"Worked?\\", kind: \\"decision\\" }, { id: \\"c\\", label: \\"Done\\", kind: \\"end\\" }]}\\n  edges={[{ from: \\"a\\", to: \\"b\\" }, { from: \\"b\\", to: \\"c\\", label: \\"yes\\" }]} />"
      }
    }
  }
}`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};export{e as HowARequestIsHandled,s as WithLabeledBranches,L as __namedExportsOrder,E as default};
