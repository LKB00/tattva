import{j as e}from"./iframe-DSdOWv-_.js";import{cf as h,b as v}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const n=v.get("voice-picker"),O={title:"Voice and audio/VoicePicker",component:h,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},r={name:"With tag filters",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Filter by tag, play samples, and choose. Starting a sample stops the one playing, and a filter that hides the playing voice stops it too."},source:{code:`const [value, setValue] = useState("juniper");

<VoicePicker label="Narrator voice" voices={voices} value={value} onChange={setValue} filters />

// voices: [{ id: "juniper", name: "Juniper", description: "Warm and unhurried.", tags: ["Calm", "Narration"],
//   source: "builtIn", sampleSeconds: 8 }, ...]`}}}},o={name:"Grid, with locked and withdrawn voices",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Two columns from 640px wide. The chosen voice has been withdrawn, so its card asks the person to pick another."},source:{code:`<VoicePicker label="Assistant voice" layout="grid" value={value} onChange={setValue} voices={[
  { id: "juniper", name: "Juniper", description: "Warm and unhurried.", source: "builtIn" },
  { id: "wren", name: "Wren", description: "Bright and quick.", source: "builtIn" },
  { id: "tamsin", name: "Tamsin", source: "library", owner: "Tomas Okafor", status: "locked", lockedReason: "Needs the Studio plan" },
  { id: "fennel", name: "Fennel", source: "library", owner: "Rosa Lindqvist", status: "withdrawn" },
]} />`}}}},a={name:"Loading and empty",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"Placeholder rows while voices load, and a plain message when there are none."},source:{code:`<VoicePicker label="Your voices" voices={voices} loading={isLoading} value={value} onChange={setValue}
  emptyText="You have no voices yet. Design or clone one to see it here." />`}}}},B=["WithTagFilters","GridWithLockedAndWithdrawnVoices","LoadingAndEmpty"];var i,s,t;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "With tag filters",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Filter by tag, play samples, and choose. Starting a sample stops the one playing, and a filter that hides the playing voice stops it too."
      },
      source: {
        code: "const [value, setValue] = useState(\\"juniper\\");\\n\\n<VoicePicker label=\\"Narrator voice\\" voices={voices} value={value} onChange={setValue} filters />\\n\\n// voices: [{ id: \\"juniper\\", name: \\"Juniper\\", description: \\"Warm and unhurried.\\", tags: [\\"Calm\\", \\"Narration\\"],\\n//   source: \\"builtIn\\", sampleSeconds: 8 }, ...]"
      }
    }
  }
}`,...(t=(s=r.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var c,d,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Grid, with locked and withdrawn voices",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Two columns from 640px wide. The chosen voice has been withdrawn, so its card asks the person to pick another."
      },
      source: {
        code: "<VoicePicker label=\\"Assistant voice\\" layout=\\"grid\\" value={value} onChange={setValue} voices={[\\n  { id: \\"juniper\\", name: \\"Juniper\\", description: \\"Warm and unhurried.\\", source: \\"builtIn\\" },\\n  { id: \\"wren\\", name: \\"Wren\\", description: \\"Bright and quick.\\", source: \\"builtIn\\" },\\n  { id: \\"tamsin\\", name: \\"Tamsin\\", source: \\"library\\", owner: \\"Tomas Okafor\\", status: \\"locked\\", lockedReason: \\"Needs the Studio plan\\" },\\n  { id: \\"fennel\\", name: \\"Fennel\\", source: \\"library\\", owner: \\"Rosa Lindqvist\\", status: \\"withdrawn\\" },\\n]} />"
      }
    }
  }
}`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Loading and empty",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Placeholder rows while voices load, and a plain message when there are none."
      },
      source: {
        code: "<VoicePicker label=\\"Your voices\\" voices={voices} loading={isLoading} value={value} onChange={setValue}\\n  emptyText=\\"You have no voices yet. Design or clone one to see it here.\\" />"
      }
    }
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};export{o as GridWithLockedAndWithdrawnVoices,a as LoadingAndEmpty,r as WithTagFilters,B as __namedExportsOrder,O as default};
