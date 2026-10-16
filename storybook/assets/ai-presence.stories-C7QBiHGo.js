import{j as e}from"./iframe-DSdOWv-_.js";import{g as h,b as u}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const s=u.get("ai-presence"),H={title:"Conversation/AIPresence",component:h,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},t={name:"Switch between states",render:()=>e.jsx(e.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"The orb glides between states. The label and the hidden message for screen readers change only when the state does."},source:{code:`const [state, setState] = useState<AIPresenceState>("listening");

<AIPresence state={state} size="lg" />
{(["idle", "listening", "thinking", "speaking", "error"] as const).map((s) => (
  <Button key={s} size="sm" onClick={() => setState(s)}>{s}</Button>
))}
<Button size="sm" variant="ghost" onClick={() => setState("idle")}>Stop</Button>`}}}},n={name:"Audio level",render:()=>e.jsx(e.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"Pass the sound volume from 0 to 1. The orb smooths it, rising fast and falling slowly."},source:{code:'<AIPresence state="speaking" size="lg" level={level} />'}}}},r={name:"Sizes",render:()=>e.jsx(e.Fragment,{children:s.examples[2].render()}),parameters:{docs:{description:{story:""},source:{code:`<AIPresence size="sm" state="thinking" />
<AIPresence size="md" state="thinking" />
<AIPresence size="lg" state="thinking" showLabel={false} />`}}}},J=["SwitchBetweenStates","AudioLevel","Sizes"];var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Switch between states",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The orb glides between states. The label and the hidden message for screen readers change only when the state does."
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
        story: "Pass the sound volume from 0 to 1. The orb smooths it, rising fast and falling slowly."
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
