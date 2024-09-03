import * as React from "react";
const StarIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <path
      stroke={props.stroke || "#939090"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="m7 1.167 1.802 3.651 4.031.59-2.917 2.84.689 4.014L7 10.366l-3.605 1.896.688-4.014-2.917-2.84 4.031-.59L7 1.167Z"
    />
  </svg>
);
export default StarIcon;
