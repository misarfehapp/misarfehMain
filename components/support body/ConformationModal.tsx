import CheckIcon from "./CheckIcon";

const ConformationModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-neutral-neutral30 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-xl  w-[350px] flex flex-col  gap-3">
        <div className="flex flex-col justify-center items-center">
          <CheckIcon />
          <p className="text-sm font-bold">موفقیت آمیز</p>
        </div>
        <p className="text-xs font-medium">
          تیکت شما با موفقیت ثبت شد. تیم پشتیبانی ما در اسرع وقت به درخواست شما
          رسیدگی میکنند. تشکر از همکاری شما!
        </p>
        <button
          onClick={onClose}
          className="bg-primary-primary99 text-[#006000] text-sm font-bold px-6 py-2 rounded-lg self-end"
        >
          متوجه شدم
        </button>
      </div>
    </div>
  );
};
export default ConformationModal;
