import{j as r}from"./iframe-DSdOWv-_.js";import{aY as p,b as c}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const a=c.get("process-diagram"),E={title:"Numbers/ProcessDiagram",component:p,tags:["autodocs"],parameters:{docs:{description:{component:a.summary+" "+a.description}}}},e={name:"How a request is handled",render:()=>r.jsx(r.Fragment,{children:a.examples[0].render()}),parameters:{docs:{description:{story:"Tab to a step to read its detail. Open View source for the text version."},source:{code:`<ProcessDiagram
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
