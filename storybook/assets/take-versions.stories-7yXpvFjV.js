import{j as n}from"./iframe-DSdOWv-_.js";import{bQ as m,b as u}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const o=u.get("take-versions"),H={title:"Video/TakeVersions",component:m,tags:["autodocs"],parameters:{docs:{description:{component:o.summary+" "+o.description}}}},e={name:"History of one clip",render:()=>n.jsx(n.Fragment,{children:o.examples[0].render()}),parameters:{docs:{description:{story:"Five versions: generated, extended, edited, re-cut by a person, and an upscale still running. Make current says nothing was deleted and offers Undo. Up and Down move between versions. On a narrow screen it turns into the pager below."},source:{code:`<TakeVersions
  versions={[
    { id: "v1", op: "generated", prompt: "A ferry leaves the harbour at dawn, wide shot", durationSec: 8, author: "ai", authorName: "Reel 2", time: "Today 9:40", status: "done" },
    { id: "v2", op: "extended", from: "v1", prompt: "The ferry turns toward the open sea", durationSec: 12, author: "ai", time: "Today 9:52", status: "done" },
    { id: "v3", op: "edited", from: "v2", segment: [2, 6], detail: "warmer sunrise light", durationSec: 12, author: "ai", time: "Today 10:05", status: "done" },
    { id: "v4", op: "recut", from: "v3", segment: [8, 12], durationSec: 12, author: "person", authorName: "Mara", time: "Today 10:11", status: "done" },
    { id: "v5", op: "upscaled", from: "v4", detail: "4K", durationSec: 12, author: "ai", time: "Just now", status: "generating" },
  ]}
  currentId={current}
  onPreview={showInPlayer}
  onMakeCurrent={setCurrent}
  onBranch={branchFrom}
/>`}}}},r={name:"One at a time, for a phone",render:()=>n.jsx(n.Fragment,{children:o.examples[1].render()}),parameters:{docs:{description:{story:"The pager layout, which auto uses below 640px wide. Each step previews that version; Make current keeps the same Undo."},source:{code:`<TakeVersions versions={versions} currentId={current} layout="pager"
  onPreview={showInPlayer} onMakeCurrent={setCurrent} onBranch={branchFrom} />`}}}},N=["HistoryOfOneClip","OneAtATimeForAPhone"];var t,a,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "History of one clip",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Five versions: generated, extended, edited, re-cut by a person, and an upscale still running. Make current says nothing was deleted and offers Undo. Up and Down move between versions. On a narrow screen it turns into the pager below."
      },
      source: {
        code: "<TakeVersions\\n  versions={[\\n    { id: \\"v1\\", op: \\"generated\\", prompt: \\"A ferry leaves the harbour at dawn, wide shot\\", durationSec: 8, author: \\"ai\\", authorName: \\"Reel 2\\", time: \\"Today 9:40\\", status: \\"done\\" },\\n    { id: \\"v2\\", op: \\"extended\\", from: \\"v1\\", prompt: \\"The ferry turns toward the open sea\\", durationSec: 12, author: \\"ai\\", time: \\"Today 9:52\\", status: \\"done\\" },\\n    { id: \\"v3\\", op: \\"edited\\", from: \\"v2\\", segment: [2, 6], detail: \\"warmer sunrise light\\", durationSec: 12, author: \\"ai\\", time: \\"Today 10:05\\", status: \\"done\\" },\\n    { id: \\"v4\\", op: \\"recut\\", from: \\"v3\\", segment: [8, 12], durationSec: 12, author: \\"person\\", authorName: \\"Mara\\", time: \\"Today 10:11\\", status: \\"done\\" },\\n    { id: \\"v5\\", op: \\"upscaled\\", from: \\"v4\\", detail: \\"4K\\", durationSec: 12, author: \\"ai\\", time: \\"Just now\\", status: \\"generating\\" },\\n  ]}\\n  currentId={current}\\n  onPreview={showInPlayer}\\n  onMakeCurrent={setCurrent}\\n  onBranch={branchFrom}\\n/>"
      }
    }
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var i,d,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "One at a time, for a phone",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The pager layout, which auto uses below 640px wide. Each step previews that version; Make current keeps the same Undo."
      },
      source: {
        code: "<TakeVersions versions={versions} currentId={current} layout=\\"pager\\"\\n  onPreview={showInPlayer} onMakeCurrent={setCurrent} onBranch={branchFrom} />"
      }
    }
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};export{e as HistoryOfOneClip,r as OneAtATimeForAPhone,N as __namedExportsOrder,H as default};
