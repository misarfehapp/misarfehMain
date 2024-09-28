import * as React from "react";
const CheckIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      fill="#006000"
      fillRule="evenodd"
      d="M13.072 6.337C16.453 4.335 18.143 3.334 20 3.334c1.857 0 3.547 1 6.928 3.003l1.144.676c3.381 2.004 5.071 3.005 6 4.654.928 1.65.928 3.65.928 7.656v1.354c0 4.005 0 6.008-.928 7.657-.929 1.65-2.619 2.65-6 4.651l-1.144.678c-3.381 2.002-5.071 3.004-6.928 3.004-1.857 0-3.547-1-6.928-3.004l-1.144-.678c-3.381-2-5.071-3.003-6-4.651C5 26.684 5 24.684 5 20.677v-1.354c0-4.006 0-6.008.928-7.656.929-1.65 2.619-2.65 6-4.654l1.144-.676Zm8.595 20.33a1.666 1.666 0 1 1-3.333 0 1.666 1.666 0 0 1 3.333 0ZM20 10.417a1.25 1.25 0 0 1 1.25 1.25v10a1.25 1.25 0 0 1-2.5 0v-10a1.25 1.25 0 0 1 1.25-1.25Z"
      clipRule="evenodd"
    />
    <path fill="#006000" d="M9 10h22v20H9z" />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M27.333 15 17.25 24.167 12.667 20"
    />
  </svg>
);
export default CheckIcon;
