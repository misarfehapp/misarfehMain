import * as React from "react";
const SearchIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <path
      stroke="#262625"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="m13 13-2.9-2.9m1.567-3.767A5.333 5.333 0 1 1 1 6.333a5.333 5.333 0 0 1 10.667 0Z"
    />
  </svg>
);
export default SearchIcon;
