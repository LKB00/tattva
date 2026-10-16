import{j as r}from"./iframe-DSdOWv-_.js";import{aX as h,b as x}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const e=x.get("private-chat-banner"),z={title:"Trust/PrivateChatBanner",component:h,tags:["autodocs"],parameters:{docs:{description:{component:e.summary+" "+e.description}}}},t={name:"Full banner",render:()=>r.jsx(r.Fragment,{children:e.examples[0].render()}),parameters:{docs:{description:{story:"Full width. Says how long a copy is kept."},source:{code:"<PrivateChatBanner onExit={() => {}} />"}}}},o={name:"Small pill",render:()=>r.jsx(r.Fragment,{children:e.examples[1].render()}),parameters:{docs:{description:{story:"Fits in the top bar next to the title."},source:{code:'<PrivateChatBanner variant="compact" onExit={() => {}} />'}}}},n={name:"Your own wording",render:()=>r.jsx(r.Fragment,{children:e.examples[2].render()}),parameters:{docs:{description:{story:"Change the text to match what your product does."},source:{code:'<PrivateChatBanner label="Temporary chat" description="Not saved to history. Deleted from our systems within 30 days." onExit={() => {}} />'}}}},A=["FullBanner","SmallPill","YourOwnWording"];var a,s,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Full banner",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Full width. Says how long a copy is kept."
      },
      source: {
        code: "<PrivateChatBanner onExit={() => {}} />"
      }
    }
  }
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var m,p,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Small pill",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Fits in the top bar next to the title."
      },
      source: {
        code: "<PrivateChatBanner variant=\\"compact\\" onExit={() => {}} />"
      }
    }
  }
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,l,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Your own wording",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Change the text to match what your product does."
      },
      source: {
        code: "<PrivateChatBanner label=\\"Temporary chat\\" description=\\"Not saved to history. Deleted from our systems within 30 days.\\" onExit={() => {}} />"
      }
    }
  }
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};export{t as FullBanner,o as SmallPill,n as YourOwnWording,A as __namedExportsOrder,z as default};
