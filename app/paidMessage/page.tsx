import SuccessPopUp from "@/components/success pop-up/SuccessPopUp";

const PaidMessage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <SuccessPopUp trackingCode={98276} />
    </div>
  );
};
export default PaidMessage;
