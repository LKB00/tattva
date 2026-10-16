import{j as e}from"./iframe-DSdOWv-_.js";import{bN as u,b as g}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const a=g.get("take-card"),Q={title:"Video/TakeCard",component:u,tags:["autodocs"],parameters:{docs:{description:{component:a.summary+" "+a.description}}}},n={name:"From the queue to a finished take",render:()=>e.jsx(e.Fragment,{children:a.examples[0].render()}),parameters:{docs:{description:{story:"Step through the life of one take. The lime edge shows only while the model works. Cancel says first that the credits come back, and the card then says so."},source:{code:`<TakeCard
  id="t1"
  label="Take 1"
  status={status}            // "queued" | "generating" | "finalising" | "done" | ...
  ratio="16:9"
  durationSec={8}
  model="Reel 2"
  prompt="Slow push in on a fishing harbour at sunrise, gulls overhead, calm water"
  queuePosition={3}
  queueReason="Busy period"
  eta="About 2 minutes"
  charge={{ amount: 20, state: status === "done" ? "charged" : "estimated" }}
  cancelNote="Cancel now and the 20 credits come back."
  provenance={{ carries: ["An invisible watermark", "C2PA Content Credentials"], made: "today at 10:42" }}
  onCancel={cancelTake}
  onOpen={openInPlayer}
/>`}}}},t={name:"Endings: blocked, failed, rate limited, cancelled",render:()=>e.jsx(e.Fragment,{children:a.examples[1].render()}),parameters:{docs:{description:{story:"A policy block is a calm note, not a red error. It says whether the request or the finished video was stopped, and that nothing was charged. A failure is the only red state. Every ending names the charge."},source:{code:`<TakeCard id="e1" label="Take 2" status="blocked"
  blockedReason={{ where: "output", message: "The result showed a real brand logo on the shop sign.",
    suggestion: "Ask for a plain wooden sign with no lettering." }}
  charge={{ amount: 20, state: "notCharged" }} onEditPrompt={editPrompt} />

<TakeCard id="e2" label="Take 3" status="blocked"
  blockedReason={{ where: "input", message: "The prompt named a real public figure.", suggestion: "..." }}
  charge={{ amount: 20, state: "notCharged" }} onEditPrompt={editPrompt} />

<TakeCard id="e3" label="Take 4" status="failed"
  error="The model stopped part way through. Your prompt and settings are saved."
  charge={{ amount: 20, state: "refunded" }} onRetry={retry} />

<TakeCard id="e4" label="Take 5" status="rateLimited" retryNote="It starts again in about a minute."
  charge={{ amount: 20, state: "estimated" }} onRetry={retry} />

<TakeCard id="e5" label="Take 6" status="cancelled" charge={{ amount: 20, state: "refunded" }} onRetry={retry} />`}}}},r={name:"A draft take with lineage and more actions",render:()=>e.jsx(e.Fragment,{children:a.examples[2].render()}),parameters:{docs:{description:{story:"A low-cost draft is tagged Draft on the frame and in the words, so it is never taken for the finished clip. The lineage line says where it came from, and the overflow menu holds the next steps."},source:{code:`<TakeCard
  id="d1" label="Take 7" status="done" ratio="9:16" durationSec={6} model="Ray3"
  quality="draft"
  lineage="Extended from take 2"
  charge={{ amount: 4, state: "charged" }}
  provenance={{ madeWith: "Ray3 (draft mode)", carries: ["C2PA Content Credentials"] }}
  onOpen={openInPlayer}
  menu={[
    { id: "final", label: "Make final quality", onSelect: makeFinal },
    { id: "extend", label: "Extend", onSelect: extend },
    { id: "remix", label: "Remix", onSelect: remix },
    { type: "separator" },
    { id: "dl", label: "Download", onSelect: download },
  ]}
/>`}}}},Y=["FromTheQueueToAFinishedTake","EndingsBlockedFailedRateLimitedCancelled","ADraftTakeWithLineageAndMoreActions"];var o,s,d;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "From the queue to a finished take",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Step through the life of one take. The lime edge shows only while the model works. Cancel says first that the credits come back, and the card then says so."
      },
      source: {
        code: "<TakeCard\\n  id=\\"t1\\"\\n  label=\\"Take 1\\"\\n  status={status}            // \\"queued\\" | \\"generating\\" | \\"finalising\\" | \\"done\\" | ...\\n  ratio=\\"16:9\\"\\n  durationSec={8}\\n  model=\\"Reel 2\\"\\n  prompt=\\"Slow push in on a fishing harbour at sunrise, gulls overhead, calm water\\"\\n  queuePosition={3}\\n  queueReason=\\"Busy period\\"\\n  eta=\\"About 2 minutes\\"\\n  charge={{ amount: 20, state: status === \\"done\\" ? \\"charged\\" : \\"estimated\\" }}\\n  cancelNote=\\"Cancel now and the 20 credits come back.\\"\\n  provenance={{ carries: [\\"An invisible watermark\\", \\"C2PA Content Credentials\\"], made: \\"today at 10:42\\" }}\\n  onCancel={cancelTake}\\n  onOpen={openInPlayer}\\n/>"
      }
    }
  }
}`,...(d=(s=n.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var i,l,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Endings: blocked, failed, rate limited, cancelled",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A policy block is a calm note, not a red error. It says whether the request or the finished video was stopped, and that nothing was charged. A failure is the only red state. Every ending names the charge."
      },
      source: {
        code: "<TakeCard id=\\"e1\\" label=\\"Take 2\\" status=\\"blocked\\"\\n  blockedReason={{ where: \\"output\\", message: \\"The result showed a real brand logo on the shop sign.\\",\\n    suggestion: \\"Ask for a plain wooden sign with no lettering.\\" }}\\n  charge={{ amount: 20, state: \\"notCharged\\" }} onEditPrompt={editPrompt} />\\n\\n<TakeCard id=\\"e2\\" label=\\"Take 3\\" status=\\"blocked\\"\\n  blockedReason={{ where: \\"input\\", message: \\"The prompt named a real public figure.\\", suggestion: \\"...\\" }}\\n  charge={{ amount: 20, state: \\"notCharged\\" }} onEditPrompt={editPrompt} />\\n\\n<TakeCard id=\\"e3\\" label=\\"Take 4\\" status=\\"failed\\"\\n  error=\\"The model stopped part way through. Your prompt and settings are saved.\\"\\n  charge={{ amount: 20, state: \\"refunded\\" }} onRetry={retry} />\\n\\n<TakeCard id=\\"e4\\" label=\\"Take 5\\" status=\\"rateLimited\\" retryNote=\\"It starts again in about a minute.\\"\\n  charge={{ amount: 20, state: \\"estimated\\" }} onRetry={retry} />\\n\\n<TakeCard id=\\"e5\\" label=\\"Take 6\\" status=\\"cancelled\\" charge={{ amount: 20, state: \\"refunded\\" }} onRetry={retry} />"
      }
    }
  }
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,h,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "A draft take with lineage and more actions",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A low-cost draft is tagged Draft on the frame and in the words, so it is never taken for the finished clip. The lineage line says where it came from, and the overflow menu holds the next steps."
      },
      source: {
        code: "<TakeCard\\n  id=\\"d1\\" label=\\"Take 7\\" status=\\"done\\" ratio=\\"9:16\\" durationSec={6} model=\\"Ray3\\"\\n  quality=\\"draft\\"\\n  lineage=\\"Extended from take 2\\"\\n  charge={{ amount: 4, state: \\"charged\\" }}\\n  provenance={{ madeWith: \\"Ray3 (draft mode)\\", carries: [\\"C2PA Content Credentials\\"] }}\\n  onOpen={openInPlayer}\\n  menu={[\\n    { id: \\"final\\", label: \\"Make final quality\\", onSelect: makeFinal },\\n    { id: \\"extend\\", label: \\"Extend\\", onSelect: extend },\\n    { id: \\"remix\\", label: \\"Remix\\", onSelect: remix },\\n    { type: \\"separator\\" },\\n    { id: \\"dl\\", label: \\"Download\\", onSelect: download },\\n  ]}\\n/>"
      }
    }
  }
}`,...(p=(h=r.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};export{r as ADraftTakeWithLineageAndMoreActions,t as EndingsBlockedFailedRateLimitedCancelled,n as FromTheQueueToAFinishedTake,Y as __namedExportsOrder,Q as default};
