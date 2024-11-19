"use client";
import { useState } from "react";
import OptionBar from "../OptionBar/OptionBar";
import LeftArrowIcon from "./LeftArrowIcon";
import ConformationModal from "./ConformationModal";
import TicketRegistration from "./TicketRegistration";
import TicketList from "./TicketList";

const SupportBody = () => {
  const [selectedOption, setSelectedOption] = useState<string>("ثبت تیکت");

  return (
    <div className="flex flex-col items-center w-full mx-4">
      <OptionBar type="support" setSelectedOption={setSelectedOption} />
      {/* Conditional rendering based on selected option */}
      {selectedOption === "ثبت تیکت" ? <TicketRegistration /> : <TicketList />}
    </div>
  );
};

export default SupportBody;
