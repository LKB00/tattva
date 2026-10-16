import{j as e}from"./iframe-DSdOWv-_.js";import{cc as w,b as v}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const r=v.get("voice-card"),J={title:"Voice and audio/VoiceCard",component:w,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},n={name:"Play a sample",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Press the round button to hear a sample and again to stop it. Starting one stops the other. Basalt shows a sample that fails to load."},source:{code:`const sim = useSimulatedSamples(); // stand-in for real audio

<VoiceCard name="Juniper" description="Warm and unhurried. Good for long reads." tags={["Calm", "Narration"]}
  source="builtIn" preview={sim.previewFor("juniper", { seconds: 8 })} />
<VoiceCard name="Wren" description="Bright and quick. Good for short updates." tags={["Upbeat"]}
  source="designed" preview={sim.previewFor("wren", { seconds: 6 })} />
<VoiceCard name="Basalt" description="Low and steady." tags={["Deep"]}
  source="builtIn" preview={sim.previewFor("basalt", { seconds: 6, fails: true })} />`}}}},o={name:"Ownership and availability",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Your own verified clone, a licensed library voice being withdrawn, one locked to a plan, a clone not yet verified (a person must act, so amber), and one already withdrawn."},source:{code:`<VoiceCard name="My reading voice" description="Recorded on 2 October." source="cloned" consent="self-verified" preview={...} />
<VoiceCard name="Marlow" source="library" owner="Rosa Lindqvist" consent="licensed"
  status="withdrawing" withdrawsOn="3 March 2027" preview={...} />
<VoiceCard name="Tamsin" source="library" owner="Tomas Okafor" status="locked" lockedReason="Needs the Studio plan" preview={...} />
<VoiceCard name="Team intro voice" source="cloned" owner="Ines Morrow" consent="none" preview={...} />
<VoiceCard name="Fennel" source="library" owner="Rosa Lindqvist" status="withdrawn" preview={...} />`}}}},a={name:"As a radio",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"With onSelect the card is a radio. Choosing never plays the sample; the sample button is its own control."},source:{code:`const [value, setValue] = useState("juniper");

<div role="radiogroup" aria-label="Narrator voice">
  <VoiceCard groupName="narrator" name="Juniper" description="Warm and unhurried." source="builtIn"
    selected={value === "juniper"} onSelect={() => setValue("juniper")} preview={sim.previewFor("juniper", { seconds: 6 })} />
  <VoiceCard groupName="narrator" name="Wren" description="Bright and quick." source="builtIn"
    selected={value === "wren"} onSelect={() => setValue("wren")} preview={sim.previewFor("wren", { seconds: 6 })} />
</div>`}}}},D=["PlayASample","OwnershipAndAvailability","AsARadio"];var i,s,t;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Play a sample",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press the round button to hear a sample and again to stop it. Starting one stops the other. Basalt shows a sample that fails to load."
      },
      source: {
        code: "const sim = useSimulatedSamples(); // stand-in for real audio\\n\\n<VoiceCard name=\\"Juniper\\" description=\\"Warm and unhurried. Good for long reads.\\" tags={[\\"Calm\\", \\"Narration\\"]}\\n  source=\\"builtIn\\" preview={sim.previewFor(\\"juniper\\", { seconds: 8 })} />\\n<VoiceCard name=\\"Wren\\" description=\\"Bright and quick. Good for short updates.\\" tags={[\\"Upbeat\\"]}\\n  source=\\"designed\\" preview={sim.previewFor(\\"wren\\", { seconds: 6 })} />\\n<VoiceCard name=\\"Basalt\\" description=\\"Low and steady.\\" tags={[\\"Deep\\"]}\\n  source=\\"builtIn\\" preview={sim.previewFor(\\"basalt\\", { seconds: 6, fails: true })} />"
      }
    }
  }
}`,...(t=(s=n.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var d,c,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Ownership and availability",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Your own verified clone, a licensed library voice being withdrawn, one locked to a plan, a clone not yet verified (a person must act, so amber), and one already withdrawn."
      },
      source: {
        code: "<VoiceCard name=\\"My reading voice\\" description=\\"Recorded on 2 October.\\" source=\\"cloned\\" consent=\\"self-verified\\" preview={...} />\\n<VoiceCard name=\\"Marlow\\" source=\\"library\\" owner=\\"Rosa Lindqvist\\" consent=\\"licensed\\"\\n  status=\\"withdrawing\\" withdrawsOn=\\"3 March 2027\\" preview={...} />\\n<VoiceCard name=\\"Tamsin\\" source=\\"library\\" owner=\\"Tomas Okafor\\" status=\\"locked\\" lockedReason=\\"Needs the Studio plan\\" preview={...} />\\n<VoiceCard name=\\"Team intro voice\\" source=\\"cloned\\" owner=\\"Ines Morrow\\" consent=\\"none\\" preview={...} />\\n<VoiceCard name=\\"Fennel\\" source=\\"library\\" owner=\\"Rosa Lindqvist\\" status=\\"withdrawn\\" preview={...} />"
      }
    }
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,m,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "As a radio",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With onSelect the card is a radio. Choosing never plays the sample; the sample button is its own control."
      },
      source: {
        code: "const [value, setValue] = useState(\\"juniper\\");\\n\\n<div role=\\"radiogroup\\" aria-label=\\"Narrator voice\\">\\n  <VoiceCard groupName=\\"narrator\\" name=\\"Juniper\\" description=\\"Warm and unhurried.\\" source=\\"builtIn\\"\\n    selected={value === \\"juniper\\"} onSelect={() => setValue(\\"juniper\\")} preview={sim.previewFor(\\"juniper\\", { seconds: 6 })} />\\n  <VoiceCard groupName=\\"narrator\\" name=\\"Wren\\" description=\\"Bright and quick.\\" source=\\"builtIn\\"\\n    selected={value === \\"wren\\"} onSelect={() => setValue(\\"wren\\")} preview={sim.previewFor(\\"wren\\", { seconds: 6 })} />\\n</div>"
      }
    }
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};export{a as AsARadio,o as OwnershipAndAvailability,n as PlayASample,D as __namedExportsOrder,J as default};
