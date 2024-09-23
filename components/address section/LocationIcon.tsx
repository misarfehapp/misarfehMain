import * as React from "react";
const LocationIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    stroke="#000"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      stroke="#797776"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M12 21c3.5-3.6 7-6.824 7-10.8C19 6.224 15.866 3 12 3s-7 3.224-7 7.2 3.5 7.2 7 10.8Z" />
      <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </g>
  </svg>
);
export default LocationIcon;
