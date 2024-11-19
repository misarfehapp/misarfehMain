import * as React from "react";
const UserProfileIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.084 16.5v-1.667A3.333 3.333 0 0 0 11.75 11.5H5.083a3.333 3.333 0 0 0-3.333 3.333V16.5m10-11.667a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0Z"
    />
  </svg>
);
export default UserProfileIcon;
