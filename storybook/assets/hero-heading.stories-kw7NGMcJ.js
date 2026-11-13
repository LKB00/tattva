import{j as o}from"./iframe-D-pZXX8_.js";import{au as d,b as c}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const r=c.get("hero-heading"),q={title:"Conversation/HeroHeading",component:d,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},e={name:"Typed",render:()=>o.jsx(o.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"The default. The text types out when the page opens and whenever the text changes."},source:{code:'<HeroHeading text="What can I help you with?" />'}}}},t={name:"Static",render:()=>o.jsx(o.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Turn typing off to show the full text at once, for example on a page people visit often."},source:{code:'<HeroHeading text="Good evening, Lokesh" type={false} />'}}}},z=["Typed","Static"];var n,a,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Typed",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The default. The text types out when the page opens and whenever the text changes."
      },
      source: {
        code: "<HeroHeading text=\\"What can I help you with?\\" />"
      }
    }
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Static",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Turn typing off to show the full text at once, for example on a page people visit often."
      },
      source: {
        code: "<HeroHeading text=\\"Good evening, Lokesh\\" type={false} />"
      }
    }
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{t as Static,e as Typed,z as __namedExportsOrder,q as default};
