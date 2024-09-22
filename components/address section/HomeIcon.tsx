import * as React from "react";
const HomeIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#797776"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M5 14.667V8h4v6.667M1 6l6-4.667L13 6v7.334a1.333 1.333 0 0 1-1.333 1.333H2.333A1.333 1.333 0 0 1 1 13.334V6Z"
    />
  </svg>
);
export default HomeIcon;
