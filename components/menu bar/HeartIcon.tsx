import * as React from "react";
const HeartIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="#ADAAAA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.867 2.842a4.583 4.583 0 0 0-6.484 0l-.883.883-.883-.883a4.584 4.584 0 0 0-6.484 6.483l7.367 7.367 7.367-7.367a4.581 4.581 0 0 0 0-6.483Z"
    />
  </svg>
);
export default HeartIcon;
