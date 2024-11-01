import * as React from "react";
const MapIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke={props.stroke ||  "#484646"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M5.333 12 .667 14.667V4l4.666-2.667m0 10.667 5.334 2.667M5.333 12V1.334m5.334 13.333L15.333 12V1.334L10.667 4m0 10.667V4m0 0L5.333 1.333"
    />
  </svg>
);
export default MapIcon;
