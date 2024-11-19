import * as React from "react";
const HeadPhoneIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={14}
    fill="none"
    {...props}
  >
    <path
      stroke="#006000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M1.5 11V7a6 6 0 1 1 12 0v4m0 .667A1.334 1.334 0 0 1 12.167 13H11.5a1.333 1.333 0 0 1-1.333-1.333v-2A1.333 1.333 0 0 1 11.5 8.333h2v3.334Zm-12 0A1.333 1.333 0 0 0 2.833 13H3.5a1.334 1.334 0 0 0 1.333-1.333v-2A1.333 1.333 0 0 0 3.5 8.333h-2v3.334Z"
    />
  </svg>
);
export default HeadPhoneIcon;
