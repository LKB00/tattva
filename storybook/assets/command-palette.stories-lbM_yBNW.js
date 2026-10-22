import{j as e}from"./iframe-C8v_uZy_.js";import{N as u,b as g}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const t=g.get("command-palette"),A={title:"Navigation and overlays/CommandPalette",component:u,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},n={name:"Grouped commands opened by a button",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"Commands under a group name get a heading. Typing narrows the list, matches at the start of a label come first, and a disabled command is shown but skipped by the arrow keys."},source:{code:`const commands: PaletteCommand[] = [
  { id: "new", label: "New chat", group: "Create", icon: <PlusIcon width={16} height={16} />, shortcut: "N", keywords: ["start", "conversation"], onSelect: () => setLast("New chat") },
  { id: "file", label: "Open file", group: "Create", hint: "Pick a file from your project", icon: <FileIcon width={16} height={16} />, onSelect: () => setLast("Open file") },
  { id: "search", label: "Search chats", group: "Go to", icon: <SearchIcon width={16} height={16} />, shortcut: "/", onSelect: () => setLast("Search chats") },
  { id: "settings", label: "Settings", group: "Go to", icon: <SettingsIcon width={16} height={16} />, keywords: ["preferences"], onSelect: () => setLast("Settings") },
  { id: "undo", label: "Undo last change", group: "Go to", icon: <UndoIcon width={16} height={16} />, disabled: true, onSelect: () => setLast("Undo") },
];

function Example() {
  const [open, setOpen] = useState(false);
  const [last, setLast] = useState("Nothing yet");
  return (
    <div className="flex flex-col items-start gap-2 text-body leading-5 text-fg">
      <Button variant="secondary" onClick={() => setOpen(true)}>Open commands <Kbd className="ml-1">Ctrl K</Kbd></Button>
      <p aria-live="polite" className="text-fg-muted">Last command: {last}</p>
      <CommandPalette open={open} onClose={() => setOpen(false)} label="Commands" placeholder="Type a command…" commands={commands} />
    </div>
  );
}`}}}},o={name:"Opened with Ctrl K or Cmd K",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"The palette registers no shortcut. Your app adds one. In an app, attach the listener to the document; here it is on the box so it does not clash with this site's own search."},source:{code:`function Example() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col items-start gap-2 text-body leading-5 text-fg"
      onKeyDown={(e) => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); e.stopPropagation(); setOpen((o) => !o); } }}>
      <Button variant="secondary" onClick={() => setOpen(true)}>Open commands</Button>
      <p className="text-fg-muted">Focus the button, then press Ctrl K or Cmd K.</p>
      <CommandPalette open={open} onClose={() => setOpen(false)} label="Commands" commands={commands} />
    </div>
  );
}`}}}},s={name:"No results",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:'When nothing matches, or no commands are passed, the list shows the empty text. Screen readers hear "No results" once someone has typed.'},source:{code:`function Example() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>Open empty palette</Button>
      <CommandPalette open={open} onClose={() => setOpen(false)} label="Commands" commands={[]} emptyText="No commands here yet" />
    </>
  );
}`}}}},Y=["GroupedCommandsOpenedByAButton","OpenedWithCtrlKOrCmdK","NoResults"];var a,r,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Grouped commands opened by a button",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Commands under a group name get a heading. Typing narrows the list, matches at the start of a label come first, and a disabled command is shown but skipped by the arrow keys."
      },
      source: {
        code: "const commands: PaletteCommand[] = [\\n  { id: \\"new\\", label: \\"New chat\\", group: \\"Create\\", icon: <PlusIcon width={16} height={16} />, shortcut: \\"N\\", keywords: [\\"start\\", \\"conversation\\"], onSelect: () => setLast(\\"New chat\\") },\\n  { id: \\"file\\", label: \\"Open file\\", group: \\"Create\\", hint: \\"Pick a file from your project\\", icon: <FileIcon width={16} height={16} />, onSelect: () => setLast(\\"Open file\\") },\\n  { id: \\"search\\", label: \\"Search chats\\", group: \\"Go to\\", icon: <SearchIcon width={16} height={16} />, shortcut: \\"/\\", onSelect: () => setLast(\\"Search chats\\") },\\n  { id: \\"settings\\", label: \\"Settings\\", group: \\"Go to\\", icon: <SettingsIcon width={16} height={16} />, keywords: [\\"preferences\\"], onSelect: () => setLast(\\"Settings\\") },\\n  { id: \\"undo\\", label: \\"Undo last change\\", group: \\"Go to\\", icon: <UndoIcon width={16} height={16} />, disabled: true, onSelect: () => setLast(\\"Undo\\") },\\n];\\n\\nfunction Example() {\\n  const [open, setOpen] = useState(false);\\n  const [last, setLast] = useState(\\"Nothing yet\\");\\n  return (\\n    <div className=\\"flex flex-col items-start gap-2 text-body leading-5 text-fg\\">\\n      <Button variant=\\"secondary\\" onClick={() => setOpen(true)}>Open commands <Kbd className=\\"ml-1\\">Ctrl K</Kbd></Button>\\n      <p aria-live=\\"polite\\" className=\\"text-fg-muted\\">Last command: {last}</p>\\n      <CommandPalette open={open} onClose={() => setOpen(false)} label=\\"Commands\\" placeholder=\\"Type a command…\\" commands={commands} />\\n    </div>\\n  );\\n}"
      }
    }
  }
}`,...(m=(r=n.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};var c,d,i;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Opened with Ctrl K or Cmd K",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The palette registers no shortcut. Your app adds one. In an app, attach the listener to the document; here it is on the box so it does not clash with this site's own search."
      },
      source: {
        code: "function Example() {\\n  const [open, setOpen] = useState(false);\\n  return (\\n    <div className=\\"flex flex-col items-start gap-2 text-body leading-5 text-fg\\"\\n      onKeyDown={(e) => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === \\"k\\") { e.preventDefault(); e.stopPropagation(); setOpen((o) => !o); } }}>\\n      <Button variant=\\"secondary\\" onClick={() => setOpen(true)}>Open commands</Button>\\n      <p className=\\"text-fg-muted\\">Focus the button, then press Ctrl K or Cmd K.</p>\\n      <CommandPalette open={open} onClose={() => setOpen(false)} label=\\"Commands\\" commands={commands} />\\n    </div>\\n  );\\n}"
      }
    }
  }
}`,...(i=(d=o.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var p,l,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "No results",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "When nothing matches, or no commands are passed, the list shows the empty text. Screen readers hear \\"No results\\" once someone has typed."
      },
      source: {
        code: "function Example() {\\n  const [open, setOpen] = useState(false);\\n  return (\\n    <>\\n      <Button variant=\\"secondary\\" onClick={() => setOpen(true)}>Open empty palette</Button>\\n      <CommandPalette open={open} onClose={() => setOpen(false)} label=\\"Commands\\" commands={[]} emptyText=\\"No commands here yet\\" />\\n    </>\\n  );\\n}"
      }
    }
  }
}`,...(h=(l=s.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};export{n as GroupedCommandsOpenedByAButton,s as NoResults,o as OpenedWithCtrlKOrCmdK,Y as __namedExportsOrder,A as default};
