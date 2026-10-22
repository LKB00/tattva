import{j as r}from"./iframe-C8v_uZy_.js";import{a_ as h,b as x}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const e=x.get("private-chat-banner"),A={title:"Trust/PrivateChatBanner",component:h,tags:["autodocs"],parameters:{docs:{description:{component:e.summary+" "+e.description}}}},t={name:"Full banner",render:()=>r.jsx(r.Fragment,{children:e.examples[0].render()}),parameters:{docs:{description:{story:"Full width. Says how long a copy is kept."},source:{code:"<PrivateChatBanner onExit={() => {}} />"}}}},o={name:"Small pill",render:()=>r.jsx(r.Fragment,{children:e.examples[1].render()}),parameters:{docs:{description:{story:"Fits in the top bar next to the title."},source:{code:'<PrivateChatBanner variant="compact" onExit={() => {}} />'}}}},n={name:"Your own wording",render:()=>r.jsx(r.Fragment,{children:e.examples[2].render()}),parameters:{docs:{description:{story:"Change the text to match what your product does."},source:{code:'<PrivateChatBanner label="Temporary chat" description="Not saved to history. Deleted from our systems within 30 days." onExit={() => {}} />'}}}},G=["FullBanner","SmallPill","YourOwnWording"];var a,s,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};export{t as FullBanner,o as SmallPill,n as YourOwnWording,G as __namedExportsOrder,A as default};
