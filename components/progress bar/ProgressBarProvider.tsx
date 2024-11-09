"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ReactNode } from "react";

interface ProgressBarProviderProps {
  children: ReactNode;
}

const ProgressBarProvider: React.FC<ProgressBarProviderProps> = ({
  children,
}) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#000000"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default ProgressBarProvider;
