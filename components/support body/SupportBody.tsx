"use client";
import { useState } from "react";
import OptionBar from "../OptionBar/OptionBar";
import LeftArrowIcon from "./LeftArrowIcon";
import ConformationModal from "./ConformationModal";

const initialReasons = [
  "سفارش را تحویل نگرفته ام!",
  "کیفیت غذا بد بود.",
  "غذا فاسد بود.",
];

const SupportBody = () => {
  const [selectedOption, setSelectedOption] = useState<string>("ثبت تیکت");
  const [message, setMessage] = useState<string>("");
  const [reasons, setReasons] = useState<string[]>(initialReasons);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleChange = (e: { target: { value: string } }) => {
    const value = e.target.value;
    setMessage(value);
  };

  const handleReasonClick = (reason: string) => {
    // Append the selected reason to the message with a space between each reason
    setMessage((prevMessage) =>
      prevMessage ? `${prevMessage} ${reason}` : reason
    );

    // Optionally remove the reason from the list (comment this out if not needed)
    setReasons(reasons.filter((r) => r !== reason));
  };
  const handleSubmit = () => {
    // Show the confirmation modal
    setShowModal(true);
    setMessage("");
    setReasons(initialReasons);
  };

  const handleCloseModal = () => {
    // Close the confirmation modal
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center w-[398px] mx-4">
      <OptionBar type="support" setSelectedOption={setSelectedOption} />
      {/* Conditional rendering based on selected option */}
      {selectedOption === "ثبت تیکت" ? (
        <div style={{ direction: "rtl" }} className="my-8 relative">
          <div className="flex flex-col justify-center gap-1">
            <p className="text-sm font-bold text-neutral-neutral30">
              کاربر عزیز دلیل نا رضایتی شما چیست؟
            </p>
            <p className="text-2xs font-medium text-[#46464A]">
              با نوشتن دلیل نا رضایتی خود به ما کمک کنید تا تجربه بهتری برای شما
              بسازیم!
            </p>
          </div>
          <label
            htmlFor="textarea"
            className="absolute right-3 z-10 bg-gradient-to-t from-[#FBF8FD] to-white text-center text-neutral-neutral40 top-14 px-1 font-normal text-2xs h-[14px]"
          >
            توضیحات
          </label>
          <textarea
            className="ring-[1.52px] ring-[#C7C6CA] text-xs bg-[#FBF8FD] rounded-rounded-7 w-full min-h-24 mt-6 font-normal py-3 px-4 outline-none"
            placeholder="توضیحات شما..."
            onChange={handleChange}
            value={message}
          />
          <div className="flex flex-col justify-center gap-3 mt-3">
            {reasons.map((reason) => (
              <p
                className="border-b border-neutral-neutral90 py-2 text-neutral-neutral30 text-sm font-medium "
                onClick={() => handleReasonClick(reason)}
              >
                {reason}
              </p>
            ))}
          </div>
          <button
            className="bg-light-primary flex flex-row items-center justify-center w-full text-white min-h-[42px] gap-3 rounded-rounded-7 text-xs font-medium my-3"
            onClick={handleSubmit}
          >
            <p>ثبت و ارسال تیکت</p>
            <LeftArrowIcon />
          </button>
          {showModal && <ConformationModal onClose={handleCloseModal} />}
        </div>
      ) : (
        <p>Page 2: تیکت ها</p>
      )}
    </div>
  );
};

export default SupportBody;
