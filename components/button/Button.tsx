import InputIcon from "../input/InputIcon";

const Button = () => {
  return (
    <button className="w-[170px] h-[42px] flex flex-row gap-3 bg-[#006000] rounded-rounded-7 justify-center items-center">
      <InputIcon fill="#ffffff" />
      <p className="w-[62px] h-[18px] font-medium text-2xs text-white">ثبت اطلاعات</p>
      <InputIcon fill="#ffffff" />
    </button>
  );
};
export default Button;
