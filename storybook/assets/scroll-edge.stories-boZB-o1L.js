import{j as e}from"./iframe-J6_2PHET.js";import{b4 as u,b as g}from"./registry-DJg46al6.js";import"./TakeoverBar-MV-iEnBS.js";import"./AILabel-BuzGDVfu.js";import"./Avatar-Cl0wz2JS.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";import"./EmptyState-CtL7fbEb.js";import"./PermissionPrompt-CrO3NV7_.js";import"./MeterBar-D9CLVzvA.js";import"./SegmentedControl-CnxzYyJm.js";import"./AltitudeToggle-COQfUygY.js";import"./Callout-BzBRTw5I.js";import"./ConfidenceIndicator-kyG1Jc0o.js";import"./StatTile-CcryVKxD.js";import"./UsageMeter-CSVVDiaj.js";import"./AgentQuestionCard-D0QhujV4.js";import"./BudgetControl-BWZpiVpd.js";import"./PlanCard-Dov0jnap.js";import"./icons-DAivRSTR.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./index-CJcEEXXm.js";import"./index-CaHZvsoO.js";const r=g.get("scroll-edge"),q={title:"Asking and showing work/ScrollEdge",component:u,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},o={name:"Both edges on a chat-like list",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"Scroll the list. Lines passing the top and bottom soften gradually. The padding inside keeps the first and last lines clear."},source:{code:`<ScrollEdge label="Conversation" className="h-64 w-full max-w-md rounded-card border border-line">
  <ul className="flex flex-col gap-3 px-4 py-12 text-body leading-5">
    {lines.map((l, i) => (
      <li key={l} className={i % 2 ? "ml-8 rounded-card bg-sunken px-3 py-2" : "mr-8 rounded-card border border-line px-3 py-2"}>{l}</li>
    ))}
  </ul>
</ScrollEdge>`}}}},n={name:"Top edge only",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Use this under a fixed header when the bottom has its own control. A taller fade makes a softer join."},source:{code:`<ScrollEdge edge="top" size={72} label="Messages" className="h-64 w-full max-w-md rounded-card border border-line">
  <ChatList />
</ScrollEdge>`}}}},s={name:"Reduced transparency and the fallback",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"When the system asks for reduced transparency, or the browser has no backdrop-filter, the blur layers are not drawn. A plain fade from the page colour to clear is shown instead. Nothing is lost: the content still scrolls the same way. To see it, turn on Reduce transparency in your system settings."},source:{code:`<ScrollEdge edge="bottom" size={40} label="Notes" className="h-48 w-full max-w-md rounded-card border border-line">
  <ChatList />
</ScrollEdge>`}}}},D=["BothEdgesOnAChatLikeList","TopEdgeOnly","ReducedTransparencyAndTheFallback"];var a,t,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Both edges on a chat-like list",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Scroll the list. Lines passing the top and bottom soften gradually. The padding inside keeps the first and last lines clear."
      },
      source: {
        code: "<ScrollEdge label=\\"Conversation\\" className=\\"h-64 w-full max-w-md rounded-card border border-line\\">\\n  <ul className=\\"flex flex-col gap-3 px-4 py-12 text-body leading-5\\">\\n    {lines.map((l, i) => (\\n      <li key={l} className={i % 2 ? \\"ml-8 rounded-card bg-sunken px-3 py-2\\" : \\"mr-8 rounded-card border border-line px-3 py-2\\"}>{l}</li>\\n    ))}\\n  </ul>\\n</ScrollEdge>"
      }
    }
  }
}`,...(d=(t=o.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var l,c,i;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Top edge only",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Use this under a fixed header when the bottom has its own control. A taller fade makes a softer join."
      },
      source: {
        code: "<ScrollEdge edge=\\"top\\" size={72} label=\\"Messages\\" className=\\"h-64 w-full max-w-md rounded-card border border-line\\">\\n  <ChatList />\\n</ScrollEdge>"
      }
    }
  }
}`,...(i=(c=n.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,p,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Reduced transparency and the fallback",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "When the system asks for reduced transparency, or the browser has no backdrop-filter, the blur layers are not drawn. A plain fade from the page colour to clear is shown instead. Nothing is lost: the content still scrolls the same way. To see it, turn on Reduce transparency in your system settings."
      },
      source: {
        code: "<ScrollEdge edge=\\"bottom\\" size={40} label=\\"Notes\\" className=\\"h-48 w-full max-w-md rounded-card border border-line\\">\\n  <ChatList />\\n</ScrollEdge>"
      }
    }
  }
}`,...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};export{o as BothEdgesOnAChatLikeList,s as ReducedTransparencyAndTheFallback,n as TopEdgeOnly,D as __namedExportsOrder,q as default};
