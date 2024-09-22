import * as React from "react";
const WorkIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={14}
    fill="none"
    {...props}
  >
    <path
      stroke="#797776"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M10.667 13V2.333A1.333 1.333 0 0 0 9.333 1H6.667a1.333 1.333 0 0 0-1.334 1.333V13M2.667 3.667h10.666c.737 0 1.334.597 1.334 1.333v6.667c0 .736-.597 1.333-1.334 1.333H2.667a1.333 1.333 0 0 1-1.334-1.333V5c0-.736.597-1.333 1.334-1.333Z"
    />
  </svg>
);
export default WorkIcon;
