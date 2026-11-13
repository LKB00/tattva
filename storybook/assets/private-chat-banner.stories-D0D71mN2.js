import{j as r}from"./iframe-D-pZXX8_.js";import{b4 as h,b as x}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const e=x.get("private-chat-banner"),A={title:"Trust/PrivateChatBanner",component:h,tags:["autodocs"],parameters:{docs:{description:{component:e.summary+" "+e.description}}}},t={name:"Full banner",render:()=>r.jsx(r.Fragment,{children:e.examples[0].render()}),parameters:{docs:{description:{story:"Full width. Says how long a copy is kept."},source:{code:"<PrivateChatBanner onExit={() => {}} />"}}}},o={name:"Small pill",render:()=>r.jsx(r.Fragment,{children:e.examples[1].render()}),parameters:{docs:{description:{story:"Fits in the top bar next to the title."},source:{code:'<PrivateChatBanner variant="compact" onExit={() => {}} />'}}}},n={name:"Your own wording",render:()=>r.jsx(r.Fragment,{children:e.examples[2].render()}),parameters:{docs:{description:{story:"Change the text to match what your product does."},source:{code:'<PrivateChatBanner label="Temporary chat" description="Not saved to history. Deleted from our systems within 30 days." onExit={() => {}} />'}}}},G=["FullBanner","SmallPill","YourOwnWording"];var a,s,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
