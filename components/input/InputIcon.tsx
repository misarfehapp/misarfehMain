import * as React from "react";

const InputIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={16}
    fill="none"
    {...props}
  >
    <rect
      width={6.563}
      height={6.75}
      y={0.5}
      fill={props.fill || "#919094"}
      rx={2}
    />
    <rect
      width={6.563}
      height={6.75}
      x={8.438}
      y={0.5}
      fill={props.fill || "#919094"}
      rx={2}
    />
    <rect
      width={6.563}
      height={6.75}
      y={8.75}
      fill={props.fill || "#919094"}
      rx={2}
    />
    <rect
      width={6.563}
      height={6.75}
      x={8.438}
      y={8.75}
      fill={props.fill || "#919094"}
      rx={2}
    />
  </svg>
);

export default InputIcon;
