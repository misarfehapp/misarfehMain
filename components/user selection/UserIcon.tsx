import * as React from "react";
const UserIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="#797776"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.667 16.5v-1.667a3.333 3.333 0 0 0-3.334-3.333H4.667a3.333 3.333 0 0 0-3.334 3.333V16.5m10-11.667a3.333 3.333 0 1 1-6.666 0 3.333 3.333 0 0 1 6.666 0Z"
    />
  </svg>
);
export default UserIcon;
