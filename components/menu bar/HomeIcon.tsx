import * as React from "react";
const HomeIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.5 18.333V10h5v8.333M1.5 7.5 9 1.667 16.5 7.5v9.166a1.666 1.666 0 0 1-1.667 1.667H3.167A1.667 1.667 0 0 1 1.5 16.667V7.5Z"
    />
  </svg>
);
export default HomeIcon;
