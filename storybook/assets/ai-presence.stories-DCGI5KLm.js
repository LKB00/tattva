import{j as e}from"./iframe-D-pZXX8_.js";import{g as h,b as u}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const s=u.get("ai-presence"),H={title:"Conversation/AIPresence",component:h,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},t={name:"Switch between states",render:()=>e.jsx(e.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"The disc glides between states. The label and the hidden message for screen readers change only when the state does."},source:{code:`const [state, setState] = useState<AIPresenceState>("listening");

<AIPresence state={state} size="lg" />
{(["idle", "listening", "thinking", "speaking", "error"] as const).map((s) => (
  <Button key={s} size="sm" onClick={() => setState(s)}>{s}</Button>
))}
<Button size="sm" variant="ghost" onClick={() => setState("idle")}>Stop</Button>`}}}},n={name:"Audio level",render:()=>e.jsx(e.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"Pass the sound volume from 0 to 1. The disc smooths it, rising fast and falling slowly."},source:{code:'<AIPresence state="speaking" size="lg" level={level} />'}}}},r={name:"Sizes",render:()=>e.jsx(e.Fragment,{children:s.examples[2].render()}),parameters:{docs:{description:{story:""},source:{code:`<AIPresence size="sm" state="thinking" />
<AIPresence size="md" state="thinking" />
<AIPresence size="lg" state="thinking" showLabel={false} />`}}}},J=["SwitchBetweenStates","AudioLevel","Sizes"];var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Switch between states",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The disc glides between states. The label and the hidden message for screen readers change only when the state does."
      },
      source: {
        code: "const [state, setState] = useState<AIPresenceState>(\\"listening\\");\\n\\n<AIPresence state={state} size=\\"lg\\" />\\n{([\\"idle\\", \\"listening\\", \\"thinking\\", \\"speaking\\", \\"error\\"] as const).map((s) => (\\n  <Button key={s} size=\\"sm\\" onClick={() => setState(s)}>{s}</Button>\\n))}\\n<Button size=\\"sm\\" variant=\\"ghost\\" onClick={() => setState(\\"idle\\")}>Stop</Button>"
      }
    }
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var c,m,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Audio level",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Pass the sound volume from 0 to 1. The disc smooths it, rising fast and falling slowly."
      },
      source: {
        code: "<AIPresence state=\\"speaking\\" size=\\"lg\\" level={level} />"
      }
    }
  }
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,l,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Sizes",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: ""
      },
      source: {
        code: "<AIPresence size=\\"sm\\" state=\\"thinking\\" />\\n<AIPresence size=\\"md\\" state=\\"thinking\\" />\\n<AIPresence size=\\"lg\\" state=\\"thinking\\" showLabel={false} />"
      }
    }
  }
}`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};export{n as AudioLevel,r as Sizes,t as SwitchBetweenStates,J as __namedExportsOrder,H as default};
