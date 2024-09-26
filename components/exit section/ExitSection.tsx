"use client";
import { useState } from "react";
import ExitIcon from "../icons/ExitIcon";
import WarningIcon from "./WarningIcon";

const ExitSection = () => {
  // State to control the visibility of the pop-up
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  // Function to handle the exit button click
  const handleExitClick = () => {
    setShowExitConfirm(true); // Show the pop-up
  };

  // Function to handle canceling the exit
  const handleCancelExit = () => {
    console.log("cancel");

    setShowExitConfirm(false); // Hide the pop-up
  };

  // Function to confirm exit action
  const handleConfirmExit = () => {
    // Add your logic for exiting the account here
    console.log("Exiting account...");
    setShowExitConfirm(false); // Hide the pop-up after confirming
  };
  return (
    <div style={{ direction: "rtl" }}>
      <div
        className="flex flex-row items-center gap-3 mx-4 my-6"
        onClick={handleExitClick}
      >
        <ExitIcon />
        <p className="text-light-error text-sm font-bold">
          خروج از حساب کاربری
        </p>
      </div>
      {showExitConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-neutral-neutral30 bg-opacity-50 z-10">
          <div className="bg-white py-4 px-6 rounded-rounded-9 m-4 w-[358px] min-[170px] flex flex-col justify-center gap-3 shadow-Blur/Overlay">
            <div className="flex flex-col justify-center items-center gap-1">
              <WarningIcon />
              <p className="text-sm font-bold text-[#525256]">هشدار</p>
            </div>
            <p className="text-xs font-medium">
              آیا می‌خواهید از حساب کاربری خود خارج شوید؟
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={handleCancelExit}
                className="bg-white px-5 py-2 rounded-rounded-6 text-sm font-bold text-[#5E5E62]"
              >
                خیر
              </button>
              <button
                onClick={handleConfirmExit}
                className="bg-primary-primary99 text-[#006000] text-sm font-bold px-6 py-2 rounded"
              >
                بله
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ExitSection;
