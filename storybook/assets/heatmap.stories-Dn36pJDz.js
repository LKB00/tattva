import{j as e}from"./iframe-C8v_uZy_.js";import{ao as h,b as S}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const r=S.get("heatmap"),N={title:"Markets and trading/Heatmap",component:h,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},a={name:"Sector moves by day",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"The direction scale. The up and down colours are stronger for bigger moves. Each cell prints its signed number. The cell with no data shows a dash."},source:{code:`<ChartFrame
  title="Sector moves this week"
  subtitle="Change in price, percent"
  summary="Energy had the biggest swings. Banks and Tech were mixed."
  table={heatmapTable({ rows: SECTORS, cols: WEEKDAYS, values: SECTOR_MOVES, formatValue: pct, unit: "percent", rowHeader: "Sector", caption: "Sector moves by day" })}
>
  <Heatmap rows={SECTORS} cols={WEEKDAYS} values={SECTOR_MOVES} formatValue={pct} unit="percent" legend ariaLabel="Sector moves by day" />
</ChartFrame>`}}}},o={name:"A profit and loss calendar",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Feed it weekday rows and week columns. Put each day in the row for its weekday and the column for its week. Use null for a day with no trades."},source:{code:`// PNL_DAYS[weekday][week]: 5 rows (Mon to Fri) by 4 weeks, null for no trades
<Heatmap rows={WEEKDAYS} cols={WEEKS} values={PNL_DAYS} formatValue={dollars} unit="dollars" legend cellSize={52} ariaLabel="Daily profit and loss, four weeks" />`}}}},s={name:"Counts in one colour",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"The sequential scale runs from light to dark in one hue. The number sits on a small chip so it stays readable on any shade."},source:{code:'<Heatmap scale="sequential" rows={REGIONS} cols={HOURS} values={ORDERS} unit="orders" legend ariaLabel="Orders by region and hour" />'}}}},j=["SectorMovesByDay","AProfitAndLossCalendar","CountsInOneColour"];var n,t,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Sector moves by day",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The direction scale. The up and down colours are stronger for bigger moves. Each cell prints its signed number. The cell with no data shows a dash."
      },
      source: {
        code: "<ChartFrame\\n  title=\\"Sector moves this week\\"\\n  subtitle=\\"Change in price, percent\\"\\n  summary=\\"Energy had the biggest swings. Banks and Tech were mixed.\\"\\n  table={heatmapTable({ rows: SECTORS, cols: WEEKDAYS, values: SECTOR_MOVES, formatValue: pct, unit: \\"percent\\", rowHeader: \\"Sector\\", caption: \\"Sector moves by day\\" })}\\n>\\n  <Heatmap rows={SECTORS} cols={WEEKDAYS} values={SECTOR_MOVES} formatValue={pct} unit=\\"percent\\" legend ariaLabel=\\"Sector moves by day\\" />\\n</ChartFrame>"
      }
    }
  }
}`,...(i=(t=a.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var d,c,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "A profit and loss calendar",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Feed it weekday rows and week columns. Put each day in the row for its weekday and the column for its week. Use null for a day with no trades."
      },
      source: {
        code: "// PNL_DAYS[weekday][week]: 5 rows (Mon to Fri) by 4 weeks, null for no trades\\n<Heatmap rows={WEEKDAYS} cols={WEEKS} values={PNL_DAYS} formatValue={dollars} unit=\\"dollars\\" legend cellSize={52} ariaLabel=\\"Daily profit and loss, four weeks\\" />"
      }
    }
  }
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,p,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Counts in one colour",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The sequential scale runs from light to dark in one hue. The number sits on a small chip so it stays readable on any shade."
      },
      source: {
        code: "<Heatmap scale=\\"sequential\\" rows={REGIONS} cols={HOURS} values={ORDERS} unit=\\"orders\\" legend ariaLabel=\\"Orders by region and hour\\" />"
      }
    }
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};export{o as AProfitAndLossCalendar,s as CountsInOneColour,a as SectorMovesByDay,j as __namedExportsOrder,N as default};
