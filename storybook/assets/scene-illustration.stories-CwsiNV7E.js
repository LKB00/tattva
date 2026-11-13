import{j as e}from"./iframe-D-pZXX8_.js";import{bn as f,b as I}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const n=I.get("scene-illustration"),J={title:"Empty and error/SceneIllustration",component:f,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},s={name:"In an empty screen",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Put the scene in EmptyState's art slot. The words say what happened; the scene sets the tone."},source:{code:`import firstUse from "@tattva/ui/scenes/first-use.json";

<EmptyState
  variant="first-use"
  art={<SceneIllustration data={firstUse} size="sm" />}
  action={<Button>Ask a question</Button>}
/>`}}}},t={name:"Loop, once or still",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"Loop suits a waiting screen. Once suits a success that should settle. Still suits pages with a lot going on. Reduced motion always shows the still picture."},source:{code:`<SceneIllustration data={working} motion="loop" />
<SceneIllustration data={success} motion="once" />
<SceneIllustration data={approval} motion="still" />`}}}},o={name:"Loading the file by address",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"The scene files are also served on the Tattva site and ship in the npm package, so you can load one by address instead of importing it."},source:{code:'<SceneIllustration src="/scenes/confidence.json" label="A dial with the needle high in the lime" />'}}}},r={name:"All scenes",render:()=>e.jsx(e.Fragment,{children:n.examples[3].render()}),parameters:{docs:{description:{story:"Each scene has one job. Pick the one that matches the moment, not the one you like best."},source:{code:'{sceneNames.map((name) => (\n  <SceneIllustration key={name} src={`/scenes/${name}.json`} size="sm" motion="still" />\n))}'}}}},K=["InAnEmptyScreen","LoopOnceOrStill","LoadingTheFileByAddress","AllScenes"];var a,i,c;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "In an empty screen",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Put the scene in EmptyState's art slot. The words say what happened; the scene sets the tone."
      },
      source: {
        code: "import firstUse from \\"@tattva/ui/scenes/first-use.json\\";\\n\\n<EmptyState\\n  variant=\\"first-use\\"\\n  art={<SceneIllustration data={firstUse} size=\\"sm\\" />}\\n  action={<Button>Ask a question</Button>}\\n/>"
      }
    }
  }
}`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,d,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Loop, once or still",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Loop suits a waiting screen. Once suits a success that should settle. Still suits pages with a lot going on. Reduced motion always shows the still picture."
      },
      source: {
        code: "<SceneIllustration data={working} motion=\\"loop\\" />\\n<SceneIllustration data={success} motion=\\"once\\" />\\n<SceneIllustration data={approval} motion=\\"still\\" />"
      }
    }
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,u,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Loading the file by address",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The scene files are also served on the Tattva site and ship in the npm package, so you can load one by address instead of importing it."
      },
      source: {
        code: "<SceneIllustration src=\\"/scenes/confidence.json\\" label=\\"A dial with the needle high in the lime\\" />"
      }
    }
  }
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var y,g,S;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "All scenes",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Each scene has one job. Pick the one that matches the moment, not the one you like best."
      },
      source: {
        code: "{sceneNames.map((name) => (\\n  <SceneIllustration key={name} src={\`/scenes/\${name}.json\`} size=\\"sm\\" motion=\\"still\\" />\\n))}"
      }
    }
  }
}`,...(S=(g=r.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};export{r as AllScenes,s as InAnEmptyScreen,o as LoadingTheFileByAddress,t as LoopOnceOrStill,K as __namedExportsOrder,J as default};
