import SearchIcon from "./SearchIcon";

const SearchBar = () => {
  return (
    <div className="bg-neutral-neutral100 ring-2 ring-neutral-neutral80 w-full h-12 rounded-rounded-9 flex flex-row justify-end items-center py-2 px-4 gap-4">
      <input
        style={{ direction: "rtl" }}
        type="text"
        className=" text-base font-medium w-full outline-none"
        placeholder="جستوجو مکان ٬ غذا یا دسته بندی..."
      />
      <SearchIcon />
    </div>
  );
};
export default SearchBar;
