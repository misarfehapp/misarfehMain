import * as React from "react"
const ExitIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="#BA1A1A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.5 16.5H3.167A1.667 1.667 0 0 1 1.5 14.833V3.167A1.667 1.667 0 0 1 3.167 1.5H6.5m5.833 11.667L16.5 9m0 0-4.167-4.167M16.5 9h-10"
    />
  </svg>
)
export default ExitIcon
