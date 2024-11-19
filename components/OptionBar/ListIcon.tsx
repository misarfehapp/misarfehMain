import * as React from "react";
const ListIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={10}
    fill="none"
    {...props}
  >
    <path
      stroke="#484646"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M4.333 1H13M4.333 5H13M4.333 9H13M1 1h.007M1 5h.007M1 9h.007"
    />
  </svg>
);
export default ListIcon;
