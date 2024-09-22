import * as React from "react";
const LocationIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={13}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M3.36.32C.48 1.367-.861 4.927.59 7.672c.205.386 1.325 1.639 2.488 2.783l2.116 2.08 2.294-2.364c2.645-2.727 3.215-4.056 2.65-6.178C9.32.913 6.273-.737 3.362.32Zm2.625 4.158c.737.888-.345 2.252-1.306 1.647-.267-.169-.528-.517-.578-.775-.207-1.051 1.197-1.7 1.884-.872Z"
      clipRule="evenodd"
    />
  </svg>
);
export default LocationIcon;
