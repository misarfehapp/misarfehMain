import * as React from "react";
const DollarIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#797776"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 .833v18.334m4.167-15h-6.25a2.917 2.917 0 1 0 0 5.833h4.166a2.917 2.917 0 0 1 0 5.834H1"
    />
  </svg>
);
export default DollarIcon;
