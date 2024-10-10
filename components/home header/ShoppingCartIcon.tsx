import * as React from "react";
const ShoppingCartIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#484646"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M.833.833h3.334L6.4 11.992a1.667 1.667 0 0 0 1.667 1.341h8.1a1.667 1.667 0 0 0 1.666-1.341L19.167 5H5m3.333 12.5a.833.833 0 1 1-1.666 0 .833.833 0 0 1 1.666 0Zm9.167 0a.833.833 0 1 1-1.667 0 .833.833 0 0 1 1.667 0Z"
    />
  </svg>
);
export default ShoppingCartIcon;
