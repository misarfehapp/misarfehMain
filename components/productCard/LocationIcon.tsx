import * as React from "react";
const LocationIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
    fill="none"
    {...props}
  >
    <path
      stroke="#605E5E"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.75 4.167C8.75 7.083 5 9.583 5 9.583s-3.75-2.5-3.75-5.416a3.75 3.75 0 0 1 7.5 0Z"
    />
    <path
      stroke="#605E5E"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 5.417a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
    />
  </svg>
);
export default LocationIcon;
