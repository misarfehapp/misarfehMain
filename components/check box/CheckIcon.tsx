import * as React from "react";
const CheckIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={10}
    fill="none"
    {...props}
  >
    <path fill="#fff" d="m4 9.4-4-4L1.4 4 4 6.6 10.6 0 12 1.4l-8 8Z" />
  </svg>
);
export default CheckIcon;
