import * as React from "react";
const SupportImage = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h48v48H0z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.00063)" />
      </pattern>
      <image
        id="b"
        width={1600}
        height={1600}
      />
    </defs>
  </svg>
);
export default SupportImage;