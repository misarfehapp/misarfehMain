import * as React from "react";
const LocationIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.stroke || "#605E5E"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.25 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0Z"
    />
    <path
      stroke={props.stroke || "#605E5E"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.25 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
  </svg>
);
export default LocationIcon;
