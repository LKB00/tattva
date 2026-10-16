import{j as e}from"./iframe-DSdOWv-_.js";import{aQ as h,b as g}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const t=g.get("outline-editor"),N={title:"Slides/OutlineEditor",component:h,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},i={name:"Draft, edit and build",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Slides stream in title first, and only the one being written is read-only. Edit any title and the badge changes to Edited by you, with Update outline beside Build slides. Lock a slide to keep it when updating. Build moves to Approved, then Building."},source:{code:`const [items, setItems] = useState<OutlineItem[]>([]);
const [state, setState] = useState<OutlineState>("drafting");

<OutlineEditor
  items={items}
  state={state}
  pendingId={writingId}            // the slide the AI is still writing
  overview={<p>A six-slide quarterly review of Larkspur Outdoor for the board…</p>}
  onItemsChange={setItems}
  onStateChange={setState}          // "ready" becomes "edited" on the first edit
  onUpdate={() => redraftAround(items)}
  onBuild={() => buildSlides(items)}
  estimate={\`\${items.length} slides, about \${items.length * 5} credits\`}
  maxItems={12}
/>`}}}},n={name:"Failed, updating and building",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"When drafting stops, what was written stays editable and the error says why, with Try again beside Build. While the AI updates, the outline is read-only under one calm working edge and locked slides say so. While building, it reads as a plain list."},source:{code:`<OutlineEditor items={partial} state="failed"
  error="The connection dropped after slide 3. Nothing was charged for the unfinished part."
  onItemsChange={setItems} onUpdate={retry} onBuild={build} estimate="3 slides, about 15 credits" />

<OutlineEditor items={items} state="updating" onItemsChange={setItems} onUpdate={update} onBuild={build} />

<OutlineEditor items={items} state="building" onItemsChange={setItems} onBuild={build} />`}}}},s={name:"Missing title and the slide limit",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:'Press Build slides: the empty title gets the error "Every slide needs a title" and focus, and nothing is built. At the limit, Add is turned off and the reason is written beside it. Remove a slide to see Undo remove.'},source:{code:`<OutlineEditor
  items={items}                      // slide 2 has no title
  state="edited"
  onItemsChange={setItems}
  onUpdate={update}
  onBuild={build}                    // not called while a title is empty
  maxItems={5}
  estimate="5 slides, about 25 credits"
  labels={{ heading: "Returns policy briefing" }}
/>`}}}},P=["DraftEditAndBuild","FailedUpdatingAndBuilding","MissingTitleAndTheSlideLimit"];var d,r,a;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Draft, edit and build",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Slides stream in title first, and only the one being written is read-only. Edit any title and the badge changes to Edited by you, with Update outline beside Build slides. Lock a slide to keep it when updating. Build moves to Approved, then Building."
      },
      source: {
        code: "const [items, setItems] = useState<OutlineItem[]>([]);\\nconst [state, setState] = useState<OutlineState>(\\"drafting\\");\\n\\n<OutlineEditor\\n  items={items}\\n  state={state}\\n  pendingId={writingId}            // the slide the AI is still writing\\n  overview={<p>A six-slide quarterly review of Larkspur Outdoor for the board…</p>}\\n  onItemsChange={setItems}\\n  onStateChange={setState}          // \\"ready\\" becomes \\"edited\\" on the first edit\\n  onUpdate={() => redraftAround(items)}\\n  onBuild={() => buildSlides(items)}\\n  estimate={\`\${items.length} slides, about \${items.length * 5} credits\`}\\n  maxItems={12}\\n/>"
      }
    }
  }
}`,...(a=(r=i.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var o,l,m;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Failed, updating and building",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "When drafting stops, what was written stays editable and the error says why, with Try again beside Build. While the AI updates, the outline is read-only under one calm working edge and locked slides say so. While building, it reads as a plain list."
      },
      source: {
        code: "<OutlineEditor items={partial} state=\\"failed\\"\\n  error=\\"The connection dropped after slide 3. Nothing was charged for the unfinished part.\\"\\n  onItemsChange={setItems} onUpdate={retry} onBuild={build} estimate=\\"3 slides, about 15 credits\\" />\\n\\n<OutlineEditor items={items} state=\\"updating\\" onItemsChange={setItems} onUpdate={update} onBuild={build} />\\n\\n<OutlineEditor items={items} state=\\"building\\" onItemsChange={setItems} onBuild={build} />"
      }
    }
  }
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,p,c;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Missing title and the slide limit",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Press Build slides: the empty title gets the error \\"Every slide needs a title\\" and focus, and nothing is built. At the limit, Add is turned off and the reason is written beside it. Remove a slide to see Undo remove."
      },
      source: {
        code: "<OutlineEditor\\n  items={items}                      // slide 2 has no title\\n  state=\\"edited\\"\\n  onItemsChange={setItems}\\n  onUpdate={update}\\n  onBuild={build}                    // not called while a title is empty\\n  maxItems={5}\\n  estimate=\\"5 slides, about 25 credits\\"\\n  labels={{ heading: \\"Returns policy briefing\\" }}\\n/>"
      }
    }
  }
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{i as DraftEditAndBuild,n as FailedUpdatingAndBuilding,s as MissingTitleAndTheSlideLimit,P as __namedExportsOrder,N as default};
