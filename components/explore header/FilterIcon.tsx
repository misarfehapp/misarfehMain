import * as React from "react";
const FilterIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#605E5E"
      d="M5.75 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM2.92 2a3.001 3.001 0 0 1 5.66 0h7.17a1 1 0 1 1 0 2H8.58a3.001 3.001 0 0 1-5.66 0H1.75a1 1 0 0 1 0-2h1.17Zm8.83 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM8.92 8a3.001 3.001 0 0 1 5.66 0h1.17a1 1 0 1 1 0 2h-1.17a3 3 0 0 1-5.66 0H1.75a1 1 0 1 1 0-2h7.17Zm-3.17 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2.83 0a3 3 0 0 1 5.66 0h7.17a1 1 0 0 1 0 2H8.58a3 3 0 0 1-5.66 0H1.75a1 1 0 1 1 0-2h1.17Z"
    />
  </svg>
);
export default FilterIcon;
