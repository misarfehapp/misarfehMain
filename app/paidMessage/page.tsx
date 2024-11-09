import SuccessPopUp from "@/components/success pop-up/SuccessPopUp";
import { Suspense } from "react";

const PaidMessage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Suspense>
        <SuccessPopUp trackingCode={98276} />
      </Suspense>
    </div>
  );
};
export default PaidMessage;
