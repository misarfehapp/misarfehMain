import SearchIcon from "./SearchIcon";

interface SearchBarProps {
  isHomePage: boolean;
}

const SearchBar = ({ isHomePage }: SearchBarProps) => {
  return (
    <div
      className={`bg-neutral-neutral100 ring-2 ring-neutral-neutral80 ${isHomePage ? "w-full" : "w-[220px]"} h-12 rounded-rounded-9 flex flex-row justify-end items-center py-2 px-4 gap-4`}
    >
      <input
        style={{ direction: "rtl" }}
        type="text"
        className="rounded-rounded-9 text-base font-medium w-full outline-none"
        placeholder="جستوجو مکان ٬ غذا..."
      />
      <SearchIcon />
    </div>
  );
};
export default SearchBar;
