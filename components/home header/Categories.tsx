import CategoryButton from "../categories/CategoryButton";

const categories = ["رستوران", "کافه رستوران", "کافه", "همه"];

const Categories = () => {
  return (
    <div className="flex flex-row-reverse gap-2 items-center justify-center w-full">
      {categories.map((c) => (
        <CategoryButton key={c} category={c} />
      ))}
    </div>
  );
};
export default Categories;
