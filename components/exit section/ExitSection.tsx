"use client";
import { useState } from "react";
import ExitIcon from "../icons/ExitIcon";

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
        <p className="text-light-error text-sm font-bold">خروج از حساب کاربری</p>
      </div>
      {showExitConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="bg-white p-5 rounded-lg shadow-lg text-center m-4">
            <p className="text-lg font-medium mb-4">
              آیا می‌خواهید از حساب کاربری خود خارج شوید؟
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleConfirmExit}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                خروج
              </button>
              <button
                onClick={handleCancelExit}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                انصراف
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ExitSection;
