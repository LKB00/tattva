import{j as s}from"./iframe-J6_2PHET.js";import{p as f}from"./proLock-DICmId1O.js";import{P as O}from"./PermissionPrompt-CrO3NV7_.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-DgJ6oH1H.js";import"./icons-DAivRSTR.js";import"./Badge-BYUPPxNI.js";import"./Button-D60Nh1os.js";const{fn:a}=__STORYBOOK_MODULE_TEST__,T={title:"Playground/PermissionPrompt",component:O,parameters:f("PermissionPrompt"),tags:["autodocs"],args:{tool:"Edit files",description:"Wants to change files in your project.",target:"src/pages/Settings.tsx",reason:"To fix the broken save button you described.",requestedBy:"Assistant",ruleScope:"src/pages",sessionScope:"this chat",state:"pending",onStateChange:a(),onDecide:a()},argTypes:{tool:{control:"text"},description:{control:"text"},target:{control:"object"},reason:{control:"text"},requestedBy:{control:"text"},ruleScope:{control:"text"},sessionScope:{control:"text"},ruleCovers:{control:"object"},ruleLifetime:{control:"text"},onceOnlyReason:{control:"text"},state:{control:"select",options:["pending","allowed-once","allowed-session","allowed-rule","denied"]},autoFocus:{control:"boolean"},labels:{control:!1},onStateChange:{table:{disable:!0}},onDecide:{table:{disable:!0}},className:{table:{disable:!0}}}},e={},o={args:{onceOnlyReason:"Deleting files always needs your approval each time."}},t={args:{state:"denied"}},r={decorators:[b=>s.jsx("div",{style:{width:320},children:s.jsx(b,{})})]},B=["Playground","OnceOnly","Denied","Narrow"];var n,c,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var l,d,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    onceOnlyReason: "Deleting files always needs your approval each time."
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,u,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    state: "denied"
  }
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,x,S;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: 320
  }}><Story /></div>]
}`,...(S=(x=r.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};export{t as Denied,r as Narrow,o as OnceOnly,e as Playground,B as __namedExportsOrder,T as default};
