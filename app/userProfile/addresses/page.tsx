import AddressSection from "@/components/address section/AddressSection";

const AddressesPage = () => {
  return (
    <div className="my-6 mx-4 flex flex-col gap-4">
      <div className="flex justify-center h-full">
        <AddressSection isAddressMenu={true}/>
      </div>
    </div>
  );
};
export default AddressesPage;
