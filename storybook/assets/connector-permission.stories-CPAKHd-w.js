import{j as o}from"./iframe-DSdOWv-_.js";import{N as d,b as l}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const r=l.get("connector-permission"),I={title:"Trust/ConnectorPermission",component:d,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},e={name:"Gmail, connected",render:()=>o.jsx(o.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Press Disconnect: it asks once, in place. Then Connect again."},source:{code:`<ConnectorPermission
  app="Gmail"
  icon={<GmailLogo />}
  account="mira@example.com"
  status="connected"
  lastUsed="2 hours ago"
  access={[
    { id: "r", label: "Read your email and attachments", level: "read" },
    { id: "w", label: "Write drafts for you to check", level: "write" },
    { id: "s", label: "Send email as you", level: "send" },
    { id: "d", label: "Delete email", level: "delete" },
  ]}
  onDisconnect={disconnect}
  onConnect={connect}
/>`}}}},n={name:"Expired",render:()=>o.jsx(o.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"When access runs out, say so and offer to reconnect."},source:{code:'<ConnectorPermission app="Google Drive" status="expired" access={[{ id: "r", label: "See your files", level: "read" }]} onConnect={reconnect} />'}}}},N=["GmailConnected","Expired"];var s,t,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Gmail, connected",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press Disconnect: it asks once, in place. Then Connect again."
      },
      source: {
        code: "<ConnectorPermission\\n  app=\\"Gmail\\"\\n  icon={<GmailLogo />}\\n  account=\\"mira@example.com\\"\\n  status=\\"connected\\"\\n  lastUsed=\\"2 hours ago\\"\\n  access={[\\n    { id: \\"r\\", label: \\"Read your email and attachments\\", level: \\"read\\" },\\n    { id: \\"w\\", label: \\"Write drafts for you to check\\", level: \\"write\\" },\\n    { id: \\"s\\", label: \\"Send email as you\\", level: \\"send\\" },\\n    { id: \\"d\\", label: \\"Delete email\\", level: \\"delete\\" },\\n  ]}\\n  onDisconnect={disconnect}\\n  onConnect={connect}\\n/>"
      }
    }
  }
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};var c,i,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Expired",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "When access runs out, say so and offer to reconnect."
      },
      source: {
        code: "<ConnectorPermission app=\\"Google Drive\\" status=\\"expired\\" access={[{ id: \\"r\\", label: \\"See your files\\", level: \\"read\\" }]} onConnect={reconnect} />"
      }
    }
  }
}`,...(m=(i=n.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{n as Expired,e as GmailConnected,N as __namedExportsOrder,I as default};
