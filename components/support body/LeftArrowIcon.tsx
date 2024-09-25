import * as React from "react";
const LeftArrowIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M.576 5.876 5.799.65l.85.848-3.776 3.777h13.551v1.2H2.873l3.776 3.775-.85.85L.576 5.876Z"
      clipRule="evenodd"
    />
  </svg>
);
export default LeftArrowIcon;
