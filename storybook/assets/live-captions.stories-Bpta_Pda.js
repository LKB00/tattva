import{j as e}from"./iframe-D-pZXX8_.js";import{aG as u,b as g}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const s=g.get("live-captions"),G={title:"Voice and audio/LiveCaptions",component:u,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},n={name:"A live conversation",render:()=>e.jsx(e.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"Step through it. The person's words start light and settle. The assistant is cut off mid-answer, and the part it never said is struck through."},source:{code:`const [visible, setVisible] = useState(savedVisible);
const [size, setSize] = useState<CaptionSize>(savedSize);

<LiveCaptions
  lines={lines}
  visible={visible}
  onVisibleChange={setVisible}
  size={size}
  onSizeChange={setSize}
/>

// lines, updated as the speech comes in:
{ id: "p1", speaker: "person", text: "What time does the pharmacy on", status: "interim" }
{ id: "a1", speaker: "assistant", text: "Elm Street Pharmacy closes at 8 pm today. It opens at 9 tomorrow, and…", status: "interrupted", spokenUpTo: 41 }`}}}},t={name:"A call transcript you can play from",render:()=>e.jsx(e.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"Custom speakers, a hidden card number and a line that was cut off. Each line is a button that plays the recording from that point."},source:{code:`<LiveCaptions
  label="Call transcript"
  lines={call}
  speakerLabels={{ agent: "Assistant", caller: "Dana (caller)" }}
  aiSpeakers={["agent"]}
  onSeek={(id) => player.seekToLine(id)}
  size="sm"
/>

{ id: "c4", speaker: "caller", text: "The one ending [hidden].", status: "redacted", hiddenLabel: "card digits hidden" }`}}}},a={name:"Unspoken words left out",render:()=>e.jsx(e.Fragment,{children:s.examples[2].render()}),parameters:{docs:{description:{story:"With unspoken set to hide, the transcript keeps only what was played. The line still says Interrupted. announceFinal reads finished assistant lines to screen readers."},source:{code:'<LiveCaptions lines={lines} unspoken="hide" announceFinal controls={false} size="lg" />'}}}},R=["ALiveConversation","ACallTranscriptYouCanPlayFrom","UnspokenWordsLeftOut"];var r,i,o;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "A live conversation",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Step through it. The person's words start light and settle. The assistant is cut off mid-answer, and the part it never said is struck through."
      },
      source: {
        code: "const [visible, setVisible] = useState(savedVisible);\\nconst [size, setSize] = useState<CaptionSize>(savedSize);\\n\\n<LiveCaptions\\n  lines={lines}\\n  visible={visible}\\n  onVisibleChange={setVisible}\\n  size={size}\\n  onSizeChange={setSize}\\n/>\\n\\n// lines, updated as the speech comes in:\\n{ id: \\"p1\\", speaker: \\"person\\", text: \\"What time does the pharmacy on\\", status: \\"interim\\" }\\n{ id: \\"a1\\", speaker: \\"assistant\\", text: \\"Elm Street Pharmacy closes at 8 pm today. It opens at 9 tomorrow, and…\\", status: \\"interrupted\\", spokenUpTo: 41 }"
      }
    }
  }
}`,...(o=(i=n.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var d,p,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "A call transcript you can play from",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Custom speakers, a hidden card number and a line that was cut off. Each line is a button that plays the recording from that point."
      },
      source: {
        code: "<LiveCaptions\\n  label=\\"Call transcript\\"\\n  lines={call}\\n  speakerLabels={{ agent: \\"Assistant\\", caller: \\"Dana (caller)\\" }}\\n  aiSpeakers={[\\"agent\\"]}\\n  onSeek={(id) => player.seekToLine(id)}\\n  size=\\"sm\\"\\n/>\\n\\n{ id: \\"c4\\", speaker: \\"caller\\", text: \\"The one ending [hidden].\\", status: \\"redacted\\", hiddenLabel: \\"card digits hidden\\" }"
      }
    }
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var l,m,h;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Unspoken words left out",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "With unspoken set to hide, the transcript keeps only what was played. The line still says Interrupted. announceFinal reads finished assistant lines to screen readers."
      },
      source: {
        code: "<LiveCaptions lines={lines} unspoken=\\"hide\\" announceFinal controls={false} size=\\"lg\\" />"
      }
    }
  }
}`,...(h=(m=a.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};export{t as ACallTranscriptYouCanPlayFrom,n as ALiveConversation,a as UnspokenWordsLeftOut,R as __namedExportsOrder,G as default};
