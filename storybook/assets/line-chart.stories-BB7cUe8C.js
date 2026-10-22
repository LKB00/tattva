import{j as e}from"./iframe-C8v_uZy_.js";import{aA as L,b as g}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const r=g.get("line-chart"),W={title:"Numbers/LineChart",component:L,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},a={name:"Two lines, named at their ends",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"A key shows for two or more lines. The names at the line ends repeat it. Click or tap the chart, or tab to it and use the arrow keys."},source:{code:`<div className="w-full">
  <LineChart series={LATENCY} x={DAYS} unit="minutes" ariaLabel="How long orders take" />
</div>`}}}},o={name:"Four lines that differ by more than color",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"The third and fourth lines have a dash pattern and a square or triangle dot, so you can tell them apart without color."},source:{code:`<div className="w-full">
  <LineChart series={MODEL_RPM} x={DAYS} unit="orders per hour" ariaLabel="Orders per hour by shop" />
</div>`}}}},n={name:"Real numbers and a forecast",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"Forecast points are dotted. Here Saturday and Sunday are forecast."},source:{code:`<div className="w-full">
  <LineChart series={[{ id: "cost", label: "Daily sales", data: [310, 325, 298, 340, 352, 365, 380], projectionFrom: 5 }]} x={DAYS} formatValue={(n) => "$" + n.toLocaleString("en-US")} unit="dollars" ariaLabel="Daily sales" />
</div>`}}}},s={name:"A number still coming in",render:()=>e.jsx(e.Fragment,{children:r.examples[3].render()}),parameters:{docs:{description:{story:"While the latest point is still coming in, it is hollow. The pop-up and screen reader both call it not final."},source:{code:`<div className="w-full">
  <LineChart streaming series={[{ id: "tps", label: "Orders per hour", data: [410, 425, 398, 440, 452, 447, 463, 301] }]} x={["10:00", "10:05", "10:10", "10:15", "10:20", "10:25", "10:30", "10:35"]} unit="orders per hour" ariaLabel="Orders per hour" />
</div>`}}}},$=["TwoLinesNamedAtTheirEnds","FourLinesThatDifferByMoreThanColor","RealNumbersAndAForecast","ANumberStillComingIn"];var t,i,d;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Two lines, named at their ends",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A key shows for two or more lines. The names at the line ends repeat it. Click or tap the chart, or tab to it and use the arrow keys."
      },
      source: {
        code: "<div className=\\"w-full\\">\\n  <LineChart series={LATENCY} x={DAYS} unit=\\"minutes\\" ariaLabel=\\"How long orders take\\" />\\n</div>"
      }
    }
  }
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var l,m,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Four lines that differ by more than color",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The third and fourth lines have a dash pattern and a square or triangle dot, so you can tell them apart without color."
      },
      source: {
        code: "<div className=\\"w-full\\">\\n  <LineChart series={MODEL_RPM} x={DAYS} unit=\\"orders per hour\\" ariaLabel=\\"Orders per hour by shop\\" />\\n</div>"
      }
    }
  }
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,u,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Real numbers and a forecast",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Forecast points are dotted. Here Saturday and Sunday are forecast."
      },
      source: {
        code: "<div className=\\"w-full\\">\\n  <LineChart series={[{ id: \\"cost\\", label: \\"Daily sales\\", data: [310, 325, 298, 340, 352, 365, 380], projectionFrom: 5 }]} x={DAYS} formatValue={(n) => \\"$\\" + n.toLocaleString(\\"en-US\\")} unit=\\"dollars\\" ariaLabel=\\"Daily sales\\" />\\n</div>"
      }
    }
  }
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,f,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "A number still coming in",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "While the latest point is still coming in, it is hollow. The pop-up and screen reader both call it not final."
      },
      source: {
        code: "<div className=\\"w-full\\">\\n  <LineChart streaming series={[{ id: \\"tps\\", label: \\"Orders per hour\\", data: [410, 425, 398, 440, 452, 447, 463, 301] }]} x={[\\"10:00\\", \\"10:05\\", \\"10:10\\", \\"10:15\\", \\"10:20\\", \\"10:25\\", \\"10:30\\", \\"10:35\\"]} unit=\\"orders per hour\\" ariaLabel=\\"Orders per hour\\" />\\n</div>"
      }
    }
  }
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{s as ANumberStillComingIn,o as FourLinesThatDifferByMoreThanColor,n as RealNumbersAndAForecast,a as TwoLinesNamedAtTheirEnds,$ as __namedExportsOrder,W as default};
