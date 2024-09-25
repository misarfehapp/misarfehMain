import * as React from "react";
const HeadphoneIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="#797776"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1.5 14V9a7.5 7.5 0 0 1 15 0v5m0 .833a1.666 1.666 0 0 1-1.667 1.667H14a1.666 1.666 0 0 1-1.667-1.667v-2.5A1.667 1.667 0 0 1 14 10.667h2.5v4.166Zm-15 0A1.666 1.666 0 0 0 3.167 16.5H4a1.667 1.667 0 0 0 1.667-1.667v-2.5A1.667 1.667 0 0 0 4 10.667H1.5v4.166Z"
    />
  </svg>
);
export default HeadphoneIcon;
