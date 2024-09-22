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

const AddressSection = () => {
  const [isAddressEmpty, setIsAddressEmpty] = useState<boolean>(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [addresses, setAddresses] = useState(places);
  const [deletingIndex, setDeletingIndex] = useState<number | null>(null);
  const [isAddPopupVisible, setIsAddPopupVisible] = useState<boolean>(false);
  const [newAddress, setNewAddress] = useState<string>("");

  useEffect(() => {
    if (addresses.length === 0) {
      setIsAddressEmpty(true);
    } else {
      setIsAddressEmpty(false);
    }
  }, [addresses.length]);

  const handleEditClick = (index: number) => {
    setEditingIndex(index);
  };
  const handleCancelEdit = () => {
    setEditingIndex(null);
  };
  const handleAddressChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedAddresses = addresses.map((place, i) =>
      i === index ? { ...place, address: e.target.value } : place
    );
    setAddresses(updatedAddresses);
  };

  const handleSaveClick = () => {
    setEditingIndex(null); // Exit editing mode
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
    if (newAddress.trim()) {
      setAddresses([
        ...addresses,
        { name: "آدرس جدید", address: newAddress, icon: <HomeIcon /> },
      ]);
      setNewAddress("");
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
        <p
          style={{ direction: "rtl" }}
          className="text-sm font-bold text-neutral-neutral30"
        >
          {" "}
          آدرس های شما
        </p>
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
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <p className="mb-4 text-center" style={{ direction: "rtl" }}>
                  آدرس جدید را وارد کنید:
                </p>
                <textarea
                  value={newAddress}
                  onChange={(e) => setNewAddress(e.target.value)}
                  className="ring-1 ring-gray-300 focus:outline-none focus:ring-light-primary p-2 rounded-lg w-full mb-4 text-2xs resize-none overflow-hidden"
                  style={{
                    direction: "rtl",
                    minHeight: "40px",
                    height: "auto",
                  }}
                  placeholder="آدرس جدید"
                  rows={1} // Set the initial number of rows
                  onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = "auto"; // Reset height for recalculation
                    target.style.height = `${target.scrollHeight}px`; // Set height based on scrollHeight
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
                      value={place.address}
                      onChange={(e) => handleAddressChange(e, index)}
                      onClick={(e) => e.stopPropagation()} // Prevent card from collapsing
                      className="text-sm mt-4 p-1 ring-1 ring-neutral-neutral90 rounded w-full focus:outline-none focus:ring-light-primary"
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
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
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
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <p className="mb-4 text-center" style={{ direction: "rtl" }}>
                  آدرس جدید را وارد کنید:
                </p>
                <textarea
                  value={newAddress}
                  onChange={(e) => setNewAddress(e.target.value)}
                  className="ring-1 ring-gray-300 focus:outline-none focus:ring-light-primary p-2 rounded-lg w-full mb-4 text-2xs resize-none overflow-hidden"
                  style={{
                    direction: "rtl",
                    minHeight: "40px",
                    height: "auto",
                  }}
                  placeholder="آدرس جدید"
                  rows={1} // Set the initial number of rows
                  onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = "auto"; // Reset height for recalculation
                    target.style.height = `${target.scrollHeight}px`; // Set height based on scrollHeight
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
