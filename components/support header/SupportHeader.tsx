"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CopyIcon from "./CopyIcon";
import SupportImage from "./supportImage";

const SupportHeader = () => {
  const [phoneNumber] = useState("071384846");
  const [showCopyMessage, setShowCopyMessage] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        // Show the success message
        setShowCopyMessage(true);

        // Hide the message after 1 second
        setTimeout(() => {
          setShowCopyMessage(false);
        }, 1000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="relative">
      <div
        className="flex flex-row gap-4 items-center m-4"
        style={{ direction: "rtl" }}
      >
        <div className="w-14 h-14 bg-gradient-to-t from-[#2B9EF0] to-[#6FD4FC] rounded-rounded-9 flex justify-center items-center">
          <SupportImage />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs text-neutral-neutral40 font-medium">
            تماس با پشتیبانی
          </p>
          <div className="flex flex-row gap-2 items-center">
            <p className="border-b text-neutral-neutral30 border-neutral-neutral30 text-base font-bold w-fit">
              {phoneNumber}
            </p>
            <div onClick={handleCopy} className="cursor-pointer">
              <CopyIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[6px] bg-neutral-neutral90" />

      {/* AnimatePresence for controlling exit animations */}
      <AnimatePresence>
        {showCopyMessage && (
          <motion.div
            className="fixed bottom-0 right-0 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded text-sm"
            initial={{ opacity: 0, y: 50, x: -10 }}
            animate={{ opacity: 1, y: -10, x: -10 }}
            exit={{ opacity: 0, y: 50, x: -10 }}
            transition={{ duration: 0.5 }}
          >
            شماره کپی شد
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SupportHeader;
