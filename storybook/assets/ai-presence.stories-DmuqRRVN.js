import{j as e}from"./iframe-C8v_uZy_.js";import{g as h,b as u}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const s=u.get("ai-presence"),H={title:"Conversation/AIPresence",component:h,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},t={name:"Switch between states",render:()=>e.jsx(e.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"The disc glides between states. The label and the hidden message for screen readers change only when the state does."},source:{code:`const [state, setState] = useState<AIPresenceState>("listening");

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
