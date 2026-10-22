import{j as e}from"./iframe-C8v_uZy_.js";import{bF as h,b as y}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const t=y.get("starter-gallery"),E={title:"Conversation/StarterGallery",component:h,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},n={name:"Ideas and templates",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"A sentence on what it can do, three ideas and three templates with categories."},source:{code:`<StarterGallery
  statement="I can write, shorten and reword text you give me. I cannot open links or see your files."
  intents={[{ id: "draft", label: "Draft an email" }, { id: "sum", label: "Summarize a document" }, { id: "plan", label: "Plan my week" }]}
  onIntent={() => {}}
  templates={[
    { id: "a", title: "Weekly update", description: "Share progress with your team.", category: "Writing" },
    { id: "b", title: "Meeting notes", description: "Turn rough notes into clear actions.", category: "Work" },
    { id: "c", title: "Product description", description: "Describe an item in a few lines.", category: "Marketing" },
  ]}
  onTemplate={() => {}}
/>`}}}},r={name:"With a Shuffle button",render:()=>e.jsx(e.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"Add a button for shuffling. Here it swaps the templates."},source:{code:`<StarterGallery
  statement="I can write, shorten and reword text you give me. I cannot open links or see your files."
  intents={[{ id: "draft", label: "Draft an email" }, { id: "sum", label: "Summarize a document" }, { id: "plan", label: "Plan my week" }]}
  onIntent={() => {}}
  templates={picked.map((t, i) => ({ id: \`\${n}-\${i}\`, title: t, description: "A starting point you can change." }))}
  onTemplate={() => {}}
  randomize={<Button size="sm" variant="ghost" onClick={() => setN(n + 1)}>Shuffle</Button>}
/>`}}}},a={name:"Ideas only",render:()=>e.jsx(e.Fragment,{children:t.examples[2].render()}),parameters:{docs:{description:{story:"Leave out the templates for a shorter first screen."},source:{code:`<StarterGallery heading="How can I help?" statement="I answer questions about your orders. I cannot change an order."
  intents={[{ id: "track", label: "Track an order" }, { id: "return", label: "Start a return" }, { id: "invoice", label: "Find an invoice" }]}
  onIntent={() => {}} />`}}}},L=["IdeasAndTemplates","WithAShuffleButton","IdeasOnly"];var o,i,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Ideas and templates",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A sentence on what it can do, three ideas and three templates with categories."
      },
      source: {
        code: "<StarterGallery\\n  statement=\\"I can write, shorten and reword text you give me. I cannot open links or see your files.\\"\\n  intents={[{ id: \\"draft\\", label: \\"Draft an email\\" }, { id: \\"sum\\", label: \\"Summarize a document\\" }, { id: \\"plan\\", label: \\"Plan my week\\" }]}\\n  onIntent={() => {}}\\n  templates={[\\n    { id: \\"a\\", title: \\"Weekly update\\", description: \\"Share progress with your team.\\", category: \\"Writing\\" },\\n    { id: \\"b\\", title: \\"Meeting notes\\", description: \\"Turn rough notes into clear actions.\\", category: \\"Work\\" },\\n    { id: \\"c\\", title: \\"Product description\\", description: \\"Describe an item in a few lines.\\", category: \\"Marketing\\" },\\n  ]}\\n  onTemplate={() => {}}\\n/>"
      }
    }
  }
}`,...(s=(i=n.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var d,l,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "With a Shuffle button",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Add a button for shuffling. Here it swaps the templates."
      },
      source: {
        code: "<StarterGallery\\n  statement=\\"I can write, shorten and reword text you give me. I cannot open links or see your files.\\"\\n  intents={[{ id: \\"draft\\", label: \\"Draft an email\\" }, { id: \\"sum\\", label: \\"Summarize a document\\" }, { id: \\"plan\\", label: \\"Plan my week\\" }]}\\n  onIntent={() => {}}\\n  templates={picked.map((t, i) => ({ id: \`\${n}-\${i}\`, title: t, description: \\"A starting point you can change.\\" }))}\\n  onTemplate={() => {}}\\n  randomize={<Button size=\\"sm\\" variant=\\"ghost\\" onClick={() => setN(n + 1)}>Shuffle</Button>}\\n/>"
      }
    }
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,p,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Ideas only",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Leave out the templates for a shorter first screen."
      },
      source: {
        code: "<StarterGallery heading=\\"How can I help?\\" statement=\\"I answer questions about your orders. I cannot change an order.\\"\\n  intents={[{ id: \\"track\\", label: \\"Track an order\\" }, { id: \\"return\\", label: \\"Start a return\\" }, { id: \\"invoice\\", label: \\"Find an invoice\\" }]}\\n  onIntent={() => {}} />"
      }
    }
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};export{n as IdeasAndTemplates,a as IdeasOnly,r as WithAShuffleButton,L as __namedExportsOrder,E as default};
