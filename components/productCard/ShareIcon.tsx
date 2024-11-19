import * as React from "react";
const ShareIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#1E1E1E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M4.727 9.007 9.28 11.66m-.007-7.32L4.727 6.993M13 3.333a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM5 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 4.667a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </svg>
);
export default ShareIcon;
