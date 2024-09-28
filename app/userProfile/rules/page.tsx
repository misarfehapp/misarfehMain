import ArrowBack from "@/components/user header/ArrowBack";
import Link from "next/link";

const policies = [
  "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله متون بلکه روزنامه و مجله  در ستون  ورم ایپسوم ...",
  "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله متون بلکه روزنامه و مجله  در ستون  ورم ایپسوم ...",
];

const cancelRules = [
  "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله متون بلکه روزنامه و مجله  در ستون  ورم ایپسوم ...",
  "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله متون بلکه روزنامه و مجله  در ستون  ورم ایپسوم ...",
];

const termsOfCooperation = [
  "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله متون بلکه روزنامه و مجله  در ستون  ورم ایپسوم ...",
  "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله متون بلکه روزنامه و مجله  در ستون  ورم ایپسوم ...",
];
const RulesPage = () => {
  return (
    <div>
      {/* header */}
      <div className="flex flex-row justify-end mt-3 min-h-16 items-center border-b border-b-[#C7C6CA] px-5 gap-[10px]">
        <p className="text-base font-medium text-[#49454F]">قوانین و شرایط</p>
        <Link href={"/userProfile"}>
          <ArrowBack />
        </Link>
      </div>
      <div style={{ direction: "rtl" }} className="my-16 mx-4">
        <p className="text-lg font-medium text-neutral-neutral30">
          سیاست های می صرفه
        </p>
        <ul className="list-disc list-inside text-right space-y-4 mt-4">
          {policies.map((policy) => (
            <li key={policy} className="text-xs font-medium">
              {policy}
            </li>
          ))}
        </ul>
        <p className="text-lg font-medium text-neutral-neutral30 mt-4">
          قوانین لغو رزرو
        </p>
        <ul className="list-disc list-inside text-right space-y-4 mt-4">
          {cancelRules.map((cr) => (
            <li key={cr} className="text-xs font-medium">
              {cr}
            </li>
          ))}
        </ul>
        <p className="text-lg font-medium text-neutral-neutral30 mt-4">
          شرایط همکاری
        </p>
        <ul className="list-disc list-inside text-right space-y-4 mt-4">
          {termsOfCooperation.map((tc) => (
            <li key={tc} className="text-xs font-medium">
              {tc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RulesPage;
