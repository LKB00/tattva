import{j as e}from"./iframe-DSdOWv-_.js";import{W as b,b as S}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const n=S.get("data-table"),$={title:"Numbers/DataTable",component:b,tags:["autodocs"],parameters:{docs:{description:{component:n.summary+" "+n.description}}}},r={name:"Wait times by shop",render:()=>e.jsx(e.Fragment,{children:n.examples[0].render()}),parameters:{docs:{description:{story:"Number columns line up on the right. Values are already formatted."},source:{code:`<div className="w-full max-w-xl">
  <DataTable
    caption="Wait times by shop, last 7 days"
    columns={[
      { key: "model", header: "Shop" },
      { key: "p50", header: "Typical (min)", numeric: true },
      { key: "p95", header: "Slowest (min)", numeric: true },
      { key: "calls", header: "Orders", numeric: true },
    ]}
    rows={[
      { model: "North shop", p50: "28", p95: "77", calls: "48,200" },
      { model: "East shop", p50: "24", p95: "66", calls: "31,450" },
      { model: "West shop", p50: "18", p95: "41", calls: "12,030" },
    ]}
  />
</div>`}}}},a={name:"A long table with fixed headings",render:()=>e.jsx(e.Fragment,{children:n.examples[1].render()}),parameters:{docs:{description:{story:"For long tables, headings stay in view while the rows scroll."},source:{code:`<div className="w-full max-w-md">
  <DataTable
    stickyHeader
    maxHeight={160}
    caption="Daily sales, last 7 days"
    columns={[{ key: "day", header: "Day" }, { key: "cost", header: "Sales (USD)", numeric: true }]}
    rows={DAYS.map((d, i) => ({ day: d, cost: "$" + [310, 325, 298, 340, 352, 365, 380][i] }))}
  />
</div>`}}}},s={name:"Cards on a phone",render:()=>e.jsx(e.Fragment,{children:n.examples[2].render()}),parameters:{docs:{description:{story:"Set responsive to stack and each row becomes a card when the table is narrow, with the column name before each value. Nothing scrolls sideways. This frame is narrow on purpose, so you see the phone layout here."},source:{code:`<div className="w-72">
  <DataTable
    responsive="stack"
    caption="Wait times by shop, last 7 days"
    columns={[
      { key: "shop", header: "Shop" },
      { key: "p50", header: "Typical (min)", numeric: true },
      { key: "p95", header: "Slowest (min)", numeric: true },
    ]}
    rows={[
      { shop: "North shop", p50: "28", p95: "77" },
      { shop: "East shop", p50: "24", p95: "66" },
    ]}
  />
</div>`}}}},t={name:"Sortable, dense, with up and down",render:()=>e.jsx(e.Fragment,{children:n.examples[3].render()}),parameters:{docs:{description:{story:"A watchlist. Headings sort (none, then ascending, then descending). The change column gets an arrow and a colour. Pressing a row name chooses that row."},source:{code:`function Example() {
  const [active, setActive] = useState("TCS");
  return (
    <DataTable
      caption="Watchlist, sorted by any column"
      density="dense"
      defaultSort={{ key: "chg", direction: "desc" }}
      activeRowKey={active}
      onRowClick={(r) => setActive(String(r.id))}
      columns={[
        { key: "name", header: "Stock", sortable: true },
        { key: "price", header: "Price (₹)", numeric: true, sortable: true,
          sortValue: (r) => Number(String(r.price).replace(/,/g, "")) },
        { key: "chg", header: "Change", numeric: true, sortable: true,
          sortValue: (r) => Number(String(r.chg).replace("−", "-").replace("%", "")),
          direction: (r) => String(r.chg).startsWith("+") ? "up" : String(r.chg).startsWith("−") ? "down" : "flat" },
      ]}
      rows={[
        { id: "RELIANCE", name: "Reliance", price: "2,874.50", chg: "+1.42%" },
        { id: "TCS", name: "TCS", price: "3,912.10", chg: "−0.63%" },
        { id: "INFY", name: "Infosys", price: "1,688.25", chg: "0.00%" },
        { id: "HDFCBANK", name: "HDFC Bank", price: "1,642.80", chg: "−1.18%" },
      ]}
    />
  );
}`}}}},q=["WaitTimesByShop","ALongTableWithFixedHeadings","CardsOnAPhone","SortableDenseWithUpAndDown"];var o,i,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Wait times by shop",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Number columns line up on the right. Values are already formatted."
      },
      source: {
        code: "<div className=\\"w-full max-w-xl\\">\\n  <DataTable\\n    caption=\\"Wait times by shop, last 7 days\\"\\n    columns={[\\n      { key: \\"model\\", header: \\"Shop\\" },\\n      { key: \\"p50\\", header: \\"Typical (min)\\", numeric: true },\\n      { key: \\"p95\\", header: \\"Slowest (min)\\", numeric: true },\\n      { key: \\"calls\\", header: \\"Orders\\", numeric: true },\\n    ]}\\n    rows={[\\n      { model: \\"North shop\\", p50: \\"28\\", p95: \\"77\\", calls: \\"48,200\\" },\\n      { model: \\"East shop\\", p50: \\"24\\", p95: \\"66\\", calls: \\"31,450\\" },\\n      { model: \\"West shop\\", p50: \\"18\\", p95: \\"41\\", calls: \\"12,030\\" },\\n    ]}\\n  />\\n</div>"
      }
    }
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,p,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "A long table with fixed headings",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "For long tables, headings stay in view while the rows scroll."
      },
      source: {
        code: "<div className=\\"w-full max-w-md\\">\\n  <DataTable\\n    stickyHeader\\n    maxHeight={160}\\n    caption=\\"Daily sales, last 7 days\\"\\n    columns={[{ key: \\"day\\", header: \\"Day\\" }, { key: \\"cost\\", header: \\"Sales (USD)\\", numeric: true }]}\\n    rows={DAYS.map((d, i) => ({ day: d, cost: \\"$\\" + [310, 325, 298, 340, 352, 365, 380][i] }))}\\n  />\\n</div>"
      }
    }
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,h,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Cards on a phone",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Set responsive to stack and each row becomes a card when the table is narrow, with the column name before each value. Nothing scrolls sideways. This frame is narrow on purpose, so you see the phone layout here."
      },
      source: {
        code: "<div className=\\"w-72\\">\\n  <DataTable\\n    responsive=\\"stack\\"\\n    caption=\\"Wait times by shop, last 7 days\\"\\n    columns={[\\n      { key: \\"shop\\", header: \\"Shop\\" },\\n      { key: \\"p50\\", header: \\"Typical (min)\\", numeric: true },\\n      { key: \\"p95\\", header: \\"Slowest (min)\\", numeric: true },\\n    ]}\\n    rows={[\\n      { shop: \\"North shop\\", p50: \\"28\\", p95: \\"77\\" },\\n      { shop: \\"East shop\\", p50: \\"24\\", p95: \\"66\\" },\\n    ]}\\n  />\\n</div>"
      }
    }
  }
}`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var y,g,w;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Sortable, dense, with up and down",
  render: () => <>{doc.examples[3].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "A watchlist. Headings sort (none, then ascending, then descending). The change column gets an arrow and a colour. Pressing a row name chooses that row."
      },
      source: {
        code: "function Example() {\\n  const [active, setActive] = useState(\\"TCS\\");\\n  return (\\n    <DataTable\\n      caption=\\"Watchlist, sorted by any column\\"\\n      density=\\"dense\\"\\n      defaultSort={{ key: \\"chg\\", direction: \\"desc\\" }}\\n      activeRowKey={active}\\n      onRowClick={(r) => setActive(String(r.id))}\\n      columns={[\\n        { key: \\"name\\", header: \\"Stock\\", sortable: true },\\n        { key: \\"price\\", header: \\"Price (₹)\\", numeric: true, sortable: true,\\n          sortValue: (r) => Number(String(r.price).replace(/,/g, \\"\\")) },\\n        { key: \\"chg\\", header: \\"Change\\", numeric: true, sortable: true,\\n          sortValue: (r) => Number(String(r.chg).replace(\\"−\\", \\"-\\").replace(\\"%\\", \\"\\")),\\n          direction: (r) => String(r.chg).startsWith(\\"+\\") ? \\"up\\" : String(r.chg).startsWith(\\"−\\") ? \\"down\\" : \\"flat\\" },\\n      ]}\\n      rows={[\\n        { id: \\"RELIANCE\\", name: \\"Reliance\\", price: \\"2,874.50\\", chg: \\"+1.42%\\" },\\n        { id: \\"TCS\\", name: \\"TCS\\", price: \\"3,912.10\\", chg: \\"−0.63%\\" },\\n        { id: \\"INFY\\", name: \\"Infosys\\", price: \\"1,688.25\\", chg: \\"0.00%\\" },\\n        { id: \\"HDFCBANK\\", name: \\"HDFC Bank\\", price: \\"1,642.80\\", chg: \\"−1.18%\\" },\\n      ]}\\n    />\\n  );\\n}"
      }
    }
  }
}`,...(w=(g=t.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};export{a as ALongTableWithFixedHeadings,s as CardsOnAPhone,t as SortableDenseWithUpAndDown,r as WaitTimesByShop,q as __namedExportsOrder,$ as default};
