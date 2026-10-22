import{j as e}from"./iframe-C8v_uZy_.js";import{W as v,b as h}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const n=h.get("conversation-list"),H={title:"Conversation/ConversationList",component:v,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},t={name:"Grouped history",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Each chat has a group name. Groups show in the order they first appear."},source:{code:`const [active, setActive] = useState("2");

<div className="w-65">
  <ConversationList
    activeId={active}
    onSelect={setActive}
    onNew={() => {}}
    items={[
      { id: "1", title: "Q3 revenue analysis", group: "Today" },
      { id: "2", title: "Onboarding email draft", group: "Today" },
      { id: "3", title: "SQL help", group: "Yesterday" },
      { id: "4", title: "Meeting notes summary", group: "Yesterday" },
    ]}
  />
</div>`}}}},r={name:"Chats with no groups",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Chats with no group all go under Recent."},source:{code:`const [active, setActive] = useState("a");

<div className="w-65">
  <ConversationList
    activeId={active}
    onSelect={setActive}
    onNew={() => {}}
    items={[
      { id: "a", title: "Trip planning" },
      { id: "b", title: "Contract summary" },
    ]}
  />
</div>`}}}},o={name:"Rename and delete from a row menu",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"Each row gets a More menu. Delete asks once, right in the row, and Keep it is as easy to press as Delete. The menu is drawn on the page itself, so a scrolling side bar cannot cut it off."},source:{code:`<ConversationList
  activeId={active}
  onSelect={setActive}
  onNew={newChat}
  items={items}
  onRename={(id) => askForName(id)}
  onDelete={(id) => remove(id)}
/>`}}}},K=["GroupedHistory","ChatsWithNoGroups","RenameAndDeleteFromARowMenu"];var s,a,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Grouped history",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Each chat has a group name. Groups show in the order they first appear."
      },
      source: {
        code: "const [active, setActive] = useState(\\"2\\");\\n\\n<div className=\\"w-65\\">\\n  <ConversationList\\n    activeId={active}\\n    onSelect={setActive}\\n    onNew={() => {}}\\n    items={[\\n      { id: \\"1\\", title: \\"Q3 revenue analysis\\", group: \\"Today\\" },\\n      { id: \\"2\\", title: \\"Onboarding email draft\\", group: \\"Today\\" },\\n      { id: \\"3\\", title: \\"SQL help\\", group: \\"Yesterday\\" },\\n      { id: \\"4\\", title: \\"Meeting notes summary\\", group: \\"Yesterday\\" },\\n    ]}\\n  />\\n</div>"
      }
    }
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var c,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Chats with no groups",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Chats with no group all go under Recent."
      },
      source: {
        code: "const [active, setActive] = useState(\\"a\\");\\n\\n<div className=\\"w-65\\">\\n  <ConversationList\\n    activeId={active}\\n    onSelect={setActive}\\n    onNew={() => {}}\\n    items={[\\n      { id: \\"a\\", title: \\"Trip planning\\" },\\n      { id: \\"b\\", title: \\"Contract summary\\" },\\n    ]}\\n  />\\n</div>"
      }
    }
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,l,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Rename and delete from a row menu",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Each row gets a More menu. Delete asks once, right in the row, and Keep it is as easy to press as Delete. The menu is drawn on the page itself, so a scrolling side bar cannot cut it off."
      },
      source: {
        code: "<ConversationList\\n  activeId={active}\\n  onSelect={setActive}\\n  onNew={newChat}\\n  items={items}\\n  onRename={(id) => askForName(id)}\\n  onDelete={(id) => remove(id)}\\n/>"
      }
    }
  }
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};export{r as ChatsWithNoGroups,t as GroupedHistory,o as RenameAndDeleteFromARowMenu,K as __namedExportsOrder,H as default};
