import * as React from "react";
const ShoppingIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <path
      stroke="#797776"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M.583.583h2.334L4.48 8.394a1.167 1.167 0 0 0 1.167.94h5.67a1.167 1.167 0 0 0 1.166-.94l.934-4.894H3.5m2.333 8.75a.583.583 0 1 1-1.166 0 .583.583 0 0 1 1.167 0Zm6.417 0a.583.583 0 1 1-1.166 0 .583.583 0 0 1 1.166 0Z"
    />
  </svg>
);
export default ShoppingIcon;
