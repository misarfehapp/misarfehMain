"use client";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import ChevronLeftIcon from "../address section/ChevronLeftIcon";

const FoodSensitivities = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([
    "شیر",
    "تخم مرغ",
    "سیر و پیاز",
  ]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const allItems = ["شیر", "تخم مرغ", "سیر و پیاز", "گلوتن", "ماهی"]; // Example items
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const addItem = (item: string) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item]);
    }
    setSearchQuery("");
  };

  const removeItem = (item: string, event: React.MouseEvent) => {
    event.stopPropagation(); // Prevents dropdown from toggling
    setSelectedItems(selectedItems.filter((i) => i !== item));
  };

  const filteredItems = allItems.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-[398px]">
      {/* Title */}
      <p
        style={{ direction: "rtl" }}
        className="text-sm font-bold text-neutral-neutral30"
      >
        حساسیت های غذایی
      </p>

      <div className="flex flex-col gap-2 mt-4" style={{ direction: "rtl" }}>
        {/* Dropdown and Selected Items */}
        <div className="relative w-full max-w-md">
          {/* Dropdown Button */}
          <button
            onClick={toggleDropdown}
            className="w-full flex items-center justify-between p-3 ring-[1.5px] ring-[#E5E2E1] rounded-rounded-7 shadow-sm bg-white"
          >
            {/* Selected Items and Search Input (Pills Inside Button) */}
            <div className="flex flex-wrap items-center gap-2 overflow-auto max-w-full">
              {selectedItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 pr-1 pl-2 py-0.5 bg-gray-200 rounded-full text-sm text-neutral-neutral30"
                >
                  <AiOutlineClose
                    className="cursor-pointer"
                    onClick={(e) => removeItem(item, e)}
                  />
                  <span className="text-xs font-bold">{item}</span>
                </div>
              ))}
              {/* Search Input Inside Dropdown */}
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="جستجو کنید..."
                className="flex-grow p-1 text-base border-none outline-none min-w-[100px]" // Ensure minimum width
              />
            </div>

            {/* Dropdown Arrow */}
            <ChevronLeftIcon
              className={`text-black ${
                dropdownOpen
                  ? "-rotate-90 transition-all duration-300 ease-in-out"
                  : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute left-0 w-full mt-1 bg-white border rounded-lg shadow-lg z-20">
              {/* Filtered Items */}
              <ul>
                {filteredItems.map((item) => (
                  <li
                    key={item}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => addItem(item)}
                  >
                    {item}
                  </li>
                ))}

                {/* No items found */}
                {filteredItems.length === 0 && (
                  <li className="p-2 text-gray-500">موردی یافت نشد</li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodSensitivities;
