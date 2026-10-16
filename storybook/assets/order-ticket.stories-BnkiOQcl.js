import{j as e}from"./iframe-DSdOWv-_.js";import{aP as y,b as h}from"./registry-DcbxQlzK.js";import"./TakeoverBar-BFylOAVd.js";import"./AILabel-DIryw_X_.js";import"./Avatar-DEi7tpoL.js";import"./Badge-CNtJmipZ.js";import"./Button-B2T4qG1k.js";import"./EmptyState-CCWqabG1.js";import"./PermissionPrompt-BiRqq7vA.js";import"./MeterBar-BMetz_pC.js";import"./SegmentedControl-BgMVExEr.js";import"./AltitudeToggle-Cb9IRtUJ.js";import"./Callout-A4UqfUFK.js";import"./ConfidenceIndicator-Dl0vhYCA.js";import"./StatTile-D1qbPF0f.js";import"./UsageMeter-IsJk8RBz.js";import"./AgentQuestionCard-DCBV90iq.js";import"./BudgetControl-DSEWE3rC.js";import"./PlanCard-BDiFLneA.js";import"./icons-B_WjQLVo.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-CdDkLuxs.js";import"./index-BGPQXF9A.js";import"./index-OqG60wSS.js";const r=h.get("order-ticket"),B={title:"Markets and trading/OrderTicket",component:y,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},t={name:"Market buy",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"The simple case. The app computes the summary rows and passes them in."},source:{code:`function Example() {
  const [v, setV] = useState<OrderTicketValue>({ side: "buy", quantity: 10, orderType: "market", limitPrice: null, product: "intraday", stop: null, target: null });
  return (
    <OrderTicket symbol="RELIANCE" price={2945.5} value={v} onChange={setV} onSubmit={() => {}}
      summary={[{ label: "Margin needed", value: "29,455.00", hint: "Worked out by the app." }, { label: "Charges", value: "41.20" }]} />
  );
}`}}}},n={name:"Limit sell with errors",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"Quantity moves in lots. A limit order shows the price field. Each error is a sentence under its field."},source:{code:`function Example() {
  const [v, setV] = useState<OrderTicketValue>({ side: "sell", quantity: 100, orderType: "limit", limitPrice: 0, product: "intraday", stop: null, target: null });
  return (
    <OrderTicket symbol="NIFTY 24500 CE" price={142.5} lotSize={75} value={v} onChange={setV} onSubmit={() => {}}
      errors={{ limitPrice: "Enter a price above 0.", stop: "A sell order needs a stop above the limit price." }} />
  );
}`}}}},s={name:"Paused with a reason",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"Every field and the button lock. The reason sits next to the button in words."},source:{code:`<OrderTicket symbol="RELIANCE" price={2945.5} value={{ side: "buy", quantity: 10, orderType: "market", limitPrice: null, product: "intraday", stop: null, target: null }}
  onChange={() => {}} onSubmit={() => {}} disabled disabledReason="Trading is paused: daily loss limit reached" />`}}}},Q=["MarketBuy","LimitSellWithErrors","PausedWithAReason"];var o,i,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Market buy",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The simple case. The app computes the summary rows and passes them in."
      },
      source: {
        code: "function Example() {\\n  const [v, setV] = useState<OrderTicketValue>({ side: \\"buy\\", quantity: 10, orderType: \\"market\\", limitPrice: null, product: \\"intraday\\", stop: null, target: null });\\n  return (\\n    <OrderTicket symbol=\\"RELIANCE\\" price={2945.5} value={v} onChange={setV} onSubmit={() => {}}\\n      summary={[{ label: \\"Margin needed\\", value: \\"29,455.00\\", hint: \\"Worked out by the app.\\" }, { label: \\"Charges\\", value: \\"41.20\\" }]} />\\n  );\\n}"
      }
    }
  }
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var d,l,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Limit sell with errors",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Quantity moves in lots. A limit order shows the price field. Each error is a sentence under its field."
      },
      source: {
        code: "function Example() {\\n  const [v, setV] = useState<OrderTicketValue>({ side: \\"sell\\", quantity: 100, orderType: \\"limit\\", limitPrice: 0, product: \\"intraday\\", stop: null, target: null });\\n  return (\\n    <OrderTicket symbol=\\"NIFTY 24500 CE\\" price={142.5} lotSize={75} value={v} onChange={setV} onSubmit={() => {}}\\n      errors={{ limitPrice: \\"Enter a price above 0.\\", stop: \\"A sell order needs a stop above the limit price.\\" }} />\\n  );\\n}"
      }
    }
  }
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,p,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Paused with a reason",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Every field and the button lock. The reason sits next to the button in words."
      },
      source: {
        code: "<OrderTicket symbol=\\"RELIANCE\\" price={2945.5} value={{ side: \\"buy\\", quantity: 10, orderType: \\"market\\", limitPrice: null, product: \\"intraday\\", stop: null, target: null }}\\n  onChange={() => {}} onSubmit={() => {}} disabled disabledReason=\\"Trading is paused: daily loss limit reached\\" />"
      }
    }
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};export{n as LimitSellWithErrors,t as MarketBuy,s as PausedWithAReason,Q as __namedExportsOrder,B as default};
