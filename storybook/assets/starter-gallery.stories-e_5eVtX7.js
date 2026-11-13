import{j as e}from"./iframe-D-pZXX8_.js";import{bN as h,b as y}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const t=y.get("starter-gallery"),q={title:"Conversation/StarterGallery",component:h,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},n={name:"Ideas and templates",render:()=>e.jsx(e.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"A sentence on what it can do, three ideas and three templates with categories."},source:{code:`<StarterGallery
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
  onIntent={() => {}} />`}}}},E=["IdeasAndTemplates","WithAShuffleButton","IdeasOnly"];var o,i,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};export{n as IdeasAndTemplates,a as IdeasOnly,r as WithAShuffleButton,E as __namedExportsOrder,q as default};
