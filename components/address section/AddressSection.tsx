"use client";

import { useEffect, useState } from "react";
import HomeIcon from "./HomeIcon";
import WorkIcon from "./WorkIcon";
import ChevronLeftIcon from "./ChevronLeftIcon";
import PenIcon from "../input/PenIcon";
import TrashIcon from "./TrashIcon";
import PlusIcon from "./PlusIcon";
import CheckIcon from "../input/CheckIcon";
import CrossIcon from "../input/CrossIcon";
import LocationIcon from "./LocationIcon";
import Link from "next/link";
import ArrowBack from "../user header/ArrowBack";

const places = [
  {
    name: "خانه",
    address: "شیراز-معالی آباد- گلدشت 3",
    icon: <HomeIcon />,
  },
  {
    name: "محل کار",
    address: "شیراز-تقاطع حکیمی فلسطین- ساختمان اداری",
    icon: <WorkIcon />,
  },
];

interface AddressSectionProps {
  isAddressMenu: boolean;
}

const AddressSection = ({ isAddressMenu }: AddressSectionProps) => {
  const [isAddressEmpty, setIsAddressEmpty] = useState<boolean>(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [addresses, setAddresses] = useState(places);
  const [deletingIndex, setDeletingIndex] = useState<number | null>(null);
  const [isAddPopupVisible, setIsAddPopupVisible] = useState<boolean>(false);
  const [newAddress, setNewAddress] = useState<string>("");
  const [editingAddress, setEditingAddress] = useState<string>(""); // Temporary state for editing
  const [selectedAddressType, setSelectedAddressType] =
    useState<string>("home"); // Track selected address type
  const [customAddressName, setCustomAddressName] = useState<string>("");

  useEffect(() => {
    if (addresses.length === 0) {
      setIsAddressEmpty(true);
    } else {
      setIsAddressEmpty(false);
    }
  }, [addresses.length]);

  const handleEditClick = (index: number) => {
    setEditingIndex(index);
    setEditingAddress(addresses[index].address); // Initialize temp state with the current address
  };
  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditingAddress(""); // Clear temp state on cancel
  };
  const handleAddressChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setEditingAddress(e.target.value); // Update only the temp state
  };

  const handleSaveClick = () => {
    const updatedAddresses = addresses.map((place, i) =>
      i === editingIndex ? { ...place, address: editingAddress } : place
    );
    setAddresses(updatedAddresses); // Save changes to the main state
    setEditingIndex(null); // Exit editing mode
    setEditingAddress(""); // Clear the temp state
  };

  const handleExpandClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle expand/collapse
  };

  const handleDeleteClick = (index: number) => {
    setDeletingIndex(index); // Show confirmation popup for the selected address
  };

  const confirmDelete = () => {
    const updatedAddresses = addresses.filter((_, i) => i !== deletingIndex);
    setAddresses(updatedAddresses);
    setDeletingIndex(null); // Close popup after deleting
  };

  const cancelDelete = () => {
    setDeletingIndex(null); // Close popup without deleting
  };

  const handleAddAddressClick = () => {
    setIsAddPopupVisible(true); // Show the "add address" popup
  };

  const handleAddAddress = () => {
    let addressName =
      selectedAddressType === "etc"
        ? customAddressName
        : selectedAddressType === "home"
          ? "خانه"
          : "محل کار";

    if (
      newAddress.trim() &&
      (selectedAddressType !== "etc" || customAddressName.trim())
    ) {
      setAddresses([
        ...addresses,
        {
          name: addressName,
          address: newAddress,
          icon:
            selectedAddressType === "home" ? (
              <HomeIcon />
            ) : selectedAddressType === "work" ? (
              <WorkIcon />
            ) : (
              <LocationIcon />
            ),
        },
      ]);
      setNewAddress("");
      setCustomAddressName(""); // Reset custom name field
      setIsAddPopupVisible(false);
    }
  };

  const handleCancelAdd = () => {
    setNewAddress("");
    setIsAddPopupVisible(false); // Close the popup without adding
  };

  return (
    <div className="w-[398px] flex flex-col justify-center items-center gap-4">
      <div className="w-full flex flex-row-reverse justify-between items-center ">
        <div className="flex flex-row gap-[10px]">
          <p
            style={{ direction: "rtl" }}
            className="text-sm font-bold text-neutral-neutral30"
          >
            {" "}
            آدرس های شما
          </p>
          {isAddressMenu && (
            <Link href={"/userProfile"}>
              <ArrowBack />
            </Link>
          )}
        </div>
        <PlusIcon onClick={handleAddAddressClick} />
      </div>
      {isAddressEmpty ? (
        <div className="flex flex-col justify-center items-center">
          <button
            className="bg-light-primary py-3 px-2 text-white rounded-lg text-xs my-4"
            onClick={handleAddAddressClick}
          >
            افزودن آدرس
          </button>
          {isAddPopupVisible && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-20">
              <div className="bg-white p-4 rounded-lg shadow-lg max-w-[70%]">
                <p className="mb-4 text-center" style={{ direction: "rtl" }}>
                  انتخاب نوع آدرس:
                </p>

                {/* Radio buttons to select address type */}
                <div
                  className="flex justify-around mb-4 gap-2"
                  style={{ direction: "rtl" }}
                >
                  <label className="flex items-center flex-row gap-2">
                    <input
                      type="radio"
                      value="home"
                      checked={selectedAddressType === "home"}
                      onChange={() => setSelectedAddressType("home")}
                    />
                    <span className="ml-2">خانه</span>
                  </label>
                  <label className="flex items-center flex-row gap-2">
                    <input
                      type="radio"
                      value="work"
                      checked={selectedAddressType === "work"}
                      onChange={() => setSelectedAddressType("work")}
                    />
                    <span className="ml-2">محل کار</span>
                  </label>
                  <label className="flex items-center flex-row gap-2">
                    <input
                      type="radio"
                      value="etc"
                      checked={selectedAddressType === "etc"}
                      onChange={() => setSelectedAddressType("etc")}
                    />
                    <span className="ml-2">سایر</span>
                  </label>
                </div>

                {/* Input for custom address name if "etc" is selected */}
                {selectedAddressType === "etc" && (
                  <input
                    type="text"
                    value={customAddressName}
                    onChange={(e) => setCustomAddressName(e.target.value)}
                    placeholder="نام آدرس را وارد کنید"
                    className="ring-1 ring-gray-300 focus:outline-none focus:ring-light-primary p-2 rounded-lg w-full mb-4"
                    style={{ direction: "rtl" }}
                  />
                )}

                <textarea
                  value={newAddress}
                  onChange={(e) => setNewAddress(e.target.value)}
                  className="ring-1 ring-gray-300 focus:outline-none focus:ring-light-primary p-2 rounded-lg w-full mb-4 text-base resize-none overflow-hidden"
                  style={{
                    direction: "rtl",
                    minHeight: "40px",
                    height: "auto",
                  }}
                  placeholder="آدرس جدید"
                  rows={1}
                  onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = "auto";
                    target.style.height = `${target.scrollHeight}px`;
                  }}
                />

                <div className="flex justify-around">
                  <button
                    onClick={handleAddAddress}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg text-xs"
                  >
                    تایید
                  </button>
                  <button
                    onClick={handleCancelAdd}
                    className="bg-gray-300 text-black px-4 py-2 rounded-lg text-xs "
                  >
                    لغو
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <>
          {addresses.map((place, index) => (
            <div
              key={index}
              className={`w-full ring-1 ring-neutral-neutral90 rounded-rounded-7 p-3 transition-all duration-300 ease-in-out ${
                expandedIndex === index ? "max-h-full" : "max-h-11"
              }`}
              onClick={() => handleExpandClick(index)}
            >
              <div className="flex flex-row-reverse justify-between items-center">
                <div className="flex flex-row-reverse gap-4">
                  {place.icon}
                  <p className="text-sm font-medium text-neutral-neutral30">
                    {place.name}
                  </p>
                </div>
                <ChevronLeftIcon
                  className={`transition-all duration-200 ${
                    expandedIndex === index ? "-rotate-90" : "rotate-0"
                  }`}
                />
              </div>

              {expandedIndex === index && (
                <>
                  {editingIndex === index ? (
                    <input
                      value={editingAddress}
                      onChange={(e) => handleAddressChange(e, index)} // Pass the event and the index
                      onClick={(e) => e.stopPropagation()} // Prevent card from collapsing
                      className="text-base mt-4 p-1 ring-1 ring-neutral-neutral90 rounded w-full focus:outline-none focus:ring-light-primary"
                      style={{ direction: "rtl" }}
                    />
                  ) : (
                    <p
                      style={{
                        direction: "rtl",
                        whiteSpace: "normal",
                        overflowWrap: "anywhere",
                      }}
                      className="text-sm mt-4"
                    >
                      {place.address}
                    </p>
                  )}

                  <div className="flex flex-row gap-4 justify-start items-center mt-4">
                    {editingIndex === index ? (
                      <div className="flex flex-row gap-4">
                        <CheckIcon onClick={handleSaveClick} />
                        <CrossIcon onClick={handleCancelEdit} />
                      </div>
                    ) : (
                      <div className="flex flex-row gap-4 justify-start items-center">
                        <PenIcon
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering card toggle
                            handleEditClick(index);
                          }}
                          className={`transition-all duration-700 ease-in-out  ${
                            expandedIndex === index
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        />
                        <TrashIcon
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering card toggle
                            handleDeleteClick(index);
                          }}
                          className={`transition-all duration-700  ease-in-out ${
                            expandedIndex === index
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        />
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}

          {/* Delete confirmation popup */}
          {deletingIndex !== null && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-20">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <p className="mb-4 text-center">
                  مطمئنی میخوای آدرستو پاک کنی؟
                </p>
                <div className="flex justify-around">
                  <button
                    onClick={confirmDelete}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    اره
                  </button>
                  <button
                    onClick={cancelDelete}
                    className="bg-gray-300 text-black px-4 py-2 rounded"
                  >
                    نه
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Add address popup */}
          {isAddPopupVisible && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-20">
              <div className="bg-white p-4 rounded-lg shadow-lg max-w-[70%]">
                <p className="mb-4 text-center" style={{ direction: "rtl" }}>
                  انتخاب نوع آدرس:
                </p>

                {/* Radio buttons to select address type */}
                <div
                  className="flex justify-around mb-4 flex-row gap-2"
                  style={{ direction: "rtl" }}
                >
                  <label className="flex items-center flex-row gap-2">
                    <input
                      type="radio"
                      value="home"
                      checked={selectedAddressType === "home"}
                      onChange={() => setSelectedAddressType("home")}
                    />
                    <span className="ml-2">خانه</span>
                  </label>
                  <label className="flex items-center flex-row gap-2">
                    <input
                      type="radio"
                      value="work"
                      checked={selectedAddressType === "work"}
                      onChange={() => setSelectedAddressType("work")}
                    />
                    <span className="ml-2">محل کار</span>
                  </label>
                  <label className="flex items-center flex-row gap-2">
                    <input
                      type="radio"
                      value="etc"
                      checked={selectedAddressType === "etc"}
                      onChange={() => setSelectedAddressType("etc")}
                    />
                    <span className="ml-2">سایر</span>
                  </label>
                </div>

                {/* Input for custom address name if "etc" is selected */}
                {selectedAddressType === "etc" && (
                  <input
                    type="text"
                    value={customAddressName}
                    onChange={(e) => setCustomAddressName(e.target.value)}
                    placeholder="نام آدرس را وارد کنید"
                    className="ring-1 ring-gray-300 focus:outline-none focus:ring-light-primary p-2 rounded-lg w-full mb-4"
                    style={{ direction: "rtl" }}
                  />
                )}

                <textarea
                  value={newAddress}
                  onChange={(e) => setNewAddress(e.target.value)}
                  className="ring-1 ring-gray-300 focus:outline-none focus:ring-light-primary p-2 rounded-lg w-full mb-4 text-base resize-none overflow-hidden"
                  style={{
                    direction: "rtl",
                    minHeight: "40px",
                    height: "auto",
                  }}
                  placeholder="آدرس جدید"
                  rows={1}
                  onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = "auto";
                    target.style.height = `${target.scrollHeight}px`;
                  }}
                />

                <div className="flex justify-around">
                  <button
                    onClick={handleAddAddress}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg text-xs"
                  >
                    تایید
                  </button>
                  <button
                    onClick={handleCancelAdd}
                    className="bg-gray-300 text-black px-4 py-2 rounded-lg text-xs "
                  >
                    لغو
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AddressSection;
