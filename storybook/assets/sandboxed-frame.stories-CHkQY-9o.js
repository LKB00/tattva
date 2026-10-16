import{j as r}from"./iframe-DSdOWv-_.js";import{bc as c,b as d}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const s=d.get("sandboxed-frame"),H={title:"Generated interfaces/SandboxedFrame",component:c,tags:["autodocs"],parameters:{docs:{description:{component:s.summary+" "+s.description}}}},e={name:"A small page that asks to open a link",render:()=>r.jsx(r.Fragment,{children:s.examples[0].render()}),parameters:{docs:{description:{story:"The page tells us how tall it is, so the frame fits it. Press its button and the frame asks before opening the link."},source:{code:`<SandboxedFrame
  source="Trip helper"
  title="Trip budget"
  srcDoc={html}
  permissions={["open-links"]}
/>

// Inside the page:
parent.postMessage({ type: "tattva:resize", height: document.documentElement.scrollHeight }, "*");
parent.postMessage({ type: "tattva:open-link", url: "https://example.com/" }, "*");`}}}},t={name:"A page that can only show things",render:()=>r.jsx(r.Fragment,{children:s.examples[1].render()}),parameters:{docs:{description:{story:"No permissions were declared, so every request from the page is ignored."},source:{code:'<SandboxedFrame source="Trip helper" title="Packing list" srcDoc={html} />'}}}},L=["ASmallPageThatAsksToOpenALink","APageThatCanOnlyShowThings"];var n,o,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "A small page that asks to open a link",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The page tells us how tall it is, so the frame fits it. Press its button and the frame asks before opening the link."
      },
      source: {
        code: "<SandboxedFrame\\n  source=\\"Trip helper\\"\\n  title=\\"Trip budget\\"\\n  srcDoc={html}\\n  permissions={[\\"open-links\\"]}\\n/>\\n\\n// Inside the page:\\nparent.postMessage({ type: \\"tattva:resize\\", height: document.documentElement.scrollHeight }, \\"*\\");\\nparent.postMessage({ type: \\"tattva:open-link\\", url: \\"https://example.com/\\" }, \\"*\\");"
      }
    }
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var i,p,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "A page that can only show things",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "No permissions were declared, so every request from the page is ignored."
      },
      source: {
        code: "<SandboxedFrame source=\\"Trip helper\\" title=\\"Packing list\\" srcDoc={html} />"
      }
    }
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};export{t as APageThatCanOnlyShowThings,e as ASmallPageThatAsksToOpenALink,L as __namedExportsOrder,H as default};
