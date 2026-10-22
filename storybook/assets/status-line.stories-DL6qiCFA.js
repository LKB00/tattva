import{j as e}from"./iframe-C8v_uZy_.js";import{bG as h,b as g}from"./registry-fxrPUWiH.js";import"./AILabel-CDYjrpzD.js";import"./TakeoverBar-B9bdUtWZ.js";import"./Avatar-CwrcAuZb.js";import"./Badge-D1OZy8p4.js";import"./Button-DbrrknnO.js";import"./EmptyState-OIy_CDRP.js";import"./PermissionPrompt-C1h8Sfm6.js";import"./Meter-DHPR4El0.js";import"./SegmentedControl-zCjgqWHZ.js";import"./AutonomyLevel-COewMiVa.js";import"./Callout-CMSiv94a.js";import"./ConfidenceIndicator-CmF-INuH.js";import"./StatTile-ElkU5517.js";import"./UsageMeter-D9tpkHIJ.js";import"./AgentQuestionCard-6bIKCTd4.js";import"./BudgetControl-BeEXNESR.js";import"./PlanCard-C1cbH8Db.js";import"./icons-B6RAoSrK.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-2dOUpm6k.js";import"./useFocusAfter-C3B-sFrc.js";import"./index-md-6-jL1.js";import"./index-D1lDGBUb.js";const r=g.get("status-line"),q={title:"Asking and showing work/StatusLine",component:h,tags:["autodocs"],parameters:{docs:{description:{component:r.summary+" "+r.description}}}},t={name:"With a current item",render:()=>e.jsx(e.Fragment,{children:r.examples[0].render()}),parameters:{docs:{description:{story:"The current state keeps the normal ink and a heavier weight. The others are muted."},source:{code:'<StatusLine items={["Case", "Flipkart", "₹2,340", "Waiting"]} current={3} />'}}}},n={name:"Truncating in a narrow box",render:()=>e.jsx(e.Fragment,{children:r.examples[1].render()}),parameters:{docs:{description:{story:"The line stays on one row and ends with an ellipsis when it does not fit."},source:{code:`<div className="w-48 border border-line p-2">
  <StatusLine items={["Case", "Flipkart Internet Private Limited", "₹2,340", "Waiting for a reply"]} current={3} />
</div>`}}}},o={name:"No current item",render:()=>e.jsx(e.Fragment,{children:r.examples[2].render()}),parameters:{docs:{description:{story:"Without current, every item is in normal ink."},source:{code:'<StatusLine label="Order" items={["Order 4821", "Aero 12 blender", "Delivered 6 Sep"]} />'}}}},z=["WithACurrentItem","TruncatingInANarrowBox","NoCurrentItem"];var i,s,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "With a current item",
  render: () => <>{doc.examples[0].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The current state keeps the normal ink and a heavier weight. The others are muted."
      },
      source: {
        code: "<StatusLine items={[\\"Case\\", \\"Flipkart\\", \\"₹2,340\\", \\"Waiting\\"]} current={3} />"
      }
    }
  }
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var m,d,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Truncating in a narrow box",
  render: () => <>{doc.examples[1].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "The line stays on one row and ends with an ellipsis when it does not fit."
      },
      source: {
        code: "<div className=\\"w-48 border border-line p-2\\">\\n  <StatusLine items={[\\"Case\\", \\"Flipkart Internet Private Limited\\", \\"₹2,340\\", \\"Waiting for a reply\\"]} current={3} />\\n</div>"
      }
    }
  }
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,u,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "No current item",
  render: () => <>{doc.examples[2].render()}</>,
  parameters: {
    docs: {
      description: {
        story: "Without current, every item is in normal ink."
      },
      source: {
        code: "<StatusLine label=\\"Order\\" items={[\\"Order 4821\\", \\"Aero 12 blender\\", \\"Delivered 6 Sep\\"]} />"
      }
    }
  }
}`,...(l=(u=o.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};export{o as NoCurrentItem,n as TruncatingInANarrowBox,t as WithACurrentItem,z as __namedExportsOrder,q as default};
