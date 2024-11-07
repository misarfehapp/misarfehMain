import SupportBody from "@/components/support body/SupportBody";
import SupportHeader from "@/components/support header/SupportHeader";
import ArrowBack from "@/components/user header/ArrowBack";
import Link from "next/link";

const SupportPage = () => {
  return (
    <div className="flex justify-center py-8 px-4">
      <div className="w-full max-w-[398px] flex flex-col items-center gap-4">
        <div>
          {/* header */}
          <div className="flex flex-row justify-end mt-3 min-h-16 items-center border-b border-b-[#C7C6CA] px-5 gap-[10px]">
            <p className="text-base font-medium text-[#49454F]">پشتیبانی</p>
            <Link href={"/userProfile"}>
              <ArrowBack />
            </Link>
          </div>
          <div>
            <SupportHeader />
            <div className="flex items-center justify-center my-6">
              <SupportBody />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SupportPage;
