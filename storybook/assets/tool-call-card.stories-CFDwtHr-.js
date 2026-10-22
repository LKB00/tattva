import{j as e}from"./iframe-C8v_uZy_.js";import{c2 as h,b as g}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const r=g.get("tool-call-card"),z={title:"Assistants/ToolCallCard",component:h,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},n={name:"Pending and running",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"A waiting step says Queued. A running step shows a spinner and no time yet."},source:{code:`<div className="w-full max-w-md space-y-2">
  <ToolCallCard name="Search the web" status="pending" summary="Waiting to start" />
  <ToolCallCard name="Search the web" status="running" summary='Searching "last quarter revenue"' />
</div>`}}}},a={name:"Success with details",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Open the card to see what was sent and what came back."},source:{code:`<ToolCallCard
  name="Search the web"
  status="success"
  summary='Searched "last quarter revenue"'
  durationMs={1840}
  input={{ query: "last quarter revenue", limit: 5 }}
  output="5 results found"
/>`}}}},t={name:"Error",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"The red tag, alert icon and tinted border make a failed step easy to spot."},source:{code:`<ToolCallCard
  name="Open a web page"
  status="error"
  summary="The page took too long to respond"
  durationMs={30000}
  input={{ url: "https://example.com/report" }}
  output="No answer after 30 seconds"
/>`}}}},B=["PendingAndRunning","SuccessWithDetails","Error"];var s,o,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Pending and running",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A waiting step says Queued. A running step shows a spinner and no time yet."
      },
      source: {
        code: "<div className=\\"w-full max-w-md space-y-2\\">\\n  <ToolCallCard name=\\"Search the web\\" status=\\"pending\\" summary=\\"Waiting to start\\" />\\n  <ToolCallCard name=\\"Search the web\\" status=\\"running\\" summary='Searching \\"last quarter revenue\\"' />\\n</div>"
      }
    }
  }
}`,...(d=(o=n.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var i,m,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Success with details",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Open the card to see what was sent and what came back."
      },
      source: {
        code: "<ToolCallCard\\n  name=\\"Search the web\\"\\n  status=\\"success\\"\\n  summary='Searched \\"last quarter revenue\\"'\\n  durationMs={1840}\\n  input={{ query: \\"last quarter revenue\\", limit: 5 }}\\n  output=\\"5 results found\\"\\n/>"
      }
    }
  }
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,u,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Error",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The red tag, alert icon and tinted border make a failed step easy to spot."
      },
      source: {
        code: "<ToolCallCard\\n  name=\\"Open a web page\\"\\n  status=\\"error\\"\\n  summary=\\"The page took too long to respond\\"\\n  durationMs={30000}\\n  input={{ url: \\"https://example.com/report\\" }}\\n  output=\\"No answer after 30 seconds\\"\\n/>"
      }
    }
  }
}`,...(l=(u=t.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};export{t as Error,n as PendingAndRunning,a as SuccessWithDetails,B as __namedExportsOrder,z as default};
