import{j as s}from"./iframe-D-pZXX8_.js";import{a5 as u,b as i}from"./registry-47hxkx94.js";import"./AILabel-MhzMRNlT.js";import"./TakeoverBar-Y2BggOTh.js";import"./Avatar-BSb_yYoH.js";import"./Badge-HmFaFWcB.js";import"./Button-uovy57wQ.js";import"./EmptyState-BohCPNQJ.js";import"./PermissionPrompt-B0FyR0_f.js";import"./Meter-C-oU3G9o.js";import"./SegmentedControl-BpBVzN6z.js";import"./AutonomyLevel-CswizbP3.js";import"./Callout-DoHZkSuT.js";import"./ConfidenceIndicator-Dm24bmi-.js";import"./StatTile-BsiyjLrC.js";import"./UsageMeter-FOXJH8PH.js";import"./AgentQuestionCard-NSQtkDLG.js";import"./BudgetControl-CosweLxg.js";import"./PlanCard-BRu_pqmu.js";import"./icons-CBwmChW5.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C_MnSQfq.js";import"./index-CCF7Nom3.js";import"./index-9fE0v7md.js";const t=i.get("demo-stage"),R={title:"Product demos/DemoStage",component:u,tags:["autodocs"],parameters:{docs:{description:{component:t.summary+" "+t.description}}}},e={name:"A chat demo in a browser window",render:()=>s.jsx(s.Fragment,{children:t.examples[0].render()}),parameters:{docs:{description:{story:"A person asks, the answer arrives as cards, the camera pushes in on the price and pulls back. Everything is drawn from state; useDemoScript plays the beats."},source:{code:`const [phase, setPhase] = useState(0);
const [cursor, setCursor] = useState({ x: 80, y: 85, pressed: false });
const [focus, setFocus] = useState<{ target: string; scale: number } | null>(null);
const ref = useDemoScript([
  { at: 900, run: () => setCursor({ x: 22, y: 64, pressed: false }) },
  { at: 1800, run: () => setCursor((c) => ({ ...c, pressed: true })) },
  { at: 2000, run: () => setPhase(1) },
  { at: 3400, run: () => setPhase(3) },
  { at: 4400, run: () => setFocus({ target: "[data-demo=first]", scale: 1.8 }) },
  { at: 6100, run: () => setFocus(null) },
], { duration: 7700, reset: () => { setPhase(0); setFocus(null); } });

<DemoStage ref={ref} label="A person asks for a hotel and gets three hotels as cards with prices.">
  <BrowserFrame title="hotels.example/chat">
    <CameraFocus focus={focus}>{/* your product's screen, drawn from phase */}</CameraFocus>
    <DemoCursor x={cursor.x} y={cursor.y} pressed={cursor.pressed} />
  </BrowserFrame>
</DemoStage>`}}}},r={name:"A phone, cropped at the bottom",render:()=>s.jsx(s.Fragment,{children:t.examples[1].render()}),parameters:{docs:{description:{story:"bleed lets the phone run off the bottom edge, so it reads as a phone without the whole device in view."},source:{code:`<DemoStage ratio="4:5" tone="wash" bleed label="On a phone, a person approves sending an email.">
  <PhoneFrame>{/* the mobile screen */}</PhoneFrame>
</DemoStage>`}}}},q=["AChatDemoInABrowserWindow","APhoneCroppedAtTheBottom"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "A chat demo in a browser window",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A person asks, the answer arrives as cards, the camera pushes in on the price and pulls back. Everything is drawn from state; useDemoScript plays the beats."
      },
      source: {
        code: "const [phase, setPhase] = useState(0);\\nconst [cursor, setCursor] = useState({ x: 80, y: 85, pressed: false });\\nconst [focus, setFocus] = useState<{ target: string; scale: number } | null>(null);\\nconst ref = useDemoScript([\\n  { at: 900, run: () => setCursor({ x: 22, y: 64, pressed: false }) },\\n  { at: 1800, run: () => setCursor((c) => ({ ...c, pressed: true })) },\\n  { at: 2000, run: () => setPhase(1) },\\n  { at: 3400, run: () => setPhase(3) },\\n  { at: 4400, run: () => setFocus({ target: \\"[data-demo=first]\\", scale: 1.8 }) },\\n  { at: 6100, run: () => setFocus(null) },\\n], { duration: 7700, reset: () => { setPhase(0); setFocus(null); } });\\n\\n<DemoStage ref={ref} label=\\"A person asks for a hotel and gets three hotels as cards with prices.\\">\\n  <BrowserFrame title=\\"hotels.example/chat\\">\\n    <CameraFocus focus={focus}>{/* your product's screen, drawn from phase */}</CameraFocus>\\n    <DemoCursor x={cursor.x} y={cursor.y} pressed={cursor.pressed} />\\n  </BrowserFrame>\\n</DemoStage>"
      }
    }
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var c,m,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "A phone, cropped at the bottom",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "bleed lets the phone run off the bottom edge, so it reads as a phone without the whole device in view."
      },
      source: {
        code: "<DemoStage ratio=\\"4:5\\" tone=\\"wash\\" bleed label=\\"On a phone, a person approves sending an email.\\">\\n  <PhoneFrame>{/* the mobile screen */}</PhoneFrame>\\n</DemoStage>"
      }
    }
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{e as AChatDemoInABrowserWindow,r as APhoneCroppedAtTheBottom,q as __namedExportsOrder,R as default};
