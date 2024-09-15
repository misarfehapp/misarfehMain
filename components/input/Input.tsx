"use client";
import { useEffect, useRef, useState } from "react";
import InputIcon from "./InputIcon";
import PenIcon from "./PenIcon";
import ChevronDownIcon from "./ChevronDownIcon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
const validPrefixes = [
  "0914",
  "0913",
  "0919",
  "0912",
  "0918",
  "0917",
  "0915",
  "0916",
  "0911",
  "0996",
  "0994",
  "0993",
  "0992",
  "0991",
  "0990",
  "0910",
  "0932",
  "0930",
  "0933",
  "0935",
  "0936",
  "0937",
  "0938",
  "0939",
  "0900",
  "0901",
  "0902",
  "0903",
  "0904",
  "0905",
  "0941",
  "0920",
  "0921",
  "0922",
  "0923",
  "0934",
  "099910",
  "099911",
  "099913",
  "099914",
  "099999",
  "09999",
  "09990",
  "099810",
  "099811",
  "099812",
  "099813",
  "099814",
  "099815",
  "099816",
  "099817",
  "09998",
];

const provincesOfIran = [
  "تهران",
  "اصفهان",
  "فارس",
  "خراسان رضوی",
  "آذربایجان شرقی",
  "مازندران",
  "خوزستان",
  "کرمان",
  "گیلان",
  "البرز",
  "آذربایجان غربی",
  "قم",
  "مرکزی",
  "کرمانشاه",
  "سیستان و بلوچستان",
  "کردستان",
  "هرمزگان",
  "لرستان",
  "قزوین",
  "زنجان",
  "همدان",
  "یزد",
  "اردبیل",
  "بوشهر",
  "چهارمحال و بختیاری",
  "سمنان",
  "گلستان",
  "ایلام",
  "کهگیلویه و بویراحمد",
  "خراسان جنوبی",
  "خراسان شمالی",
  "قم",
  "یزد",
  "اردبیل",
  "بوشهر",
  "چهارمحال و بختیاری",
  "زنجان",
  "سمنان",
  "سیستان و بلوچستان",
  "کردستان",
  "کرمان",
  "کرمانشاه",
  "کهگیلویه و بویراحمد",
  "گلستان",
  "گیلان",
  "لرستان",
  "مازندران",
  "مرکزی",
  "هرمزگان",
  "همدان",
];
const sexes = ["مرد", "زن", "ترجیح می دهم نگویم"];
interface InputProps {
  type: "province" | "city" | "name" | "phone" | "sex";
  name?: string;
  phone?: string;
  province?: string;
  city?: string;
  sex?: "مرد" | "زن" | "ترجیح می دهم نگویم";
}
const citiesByProvince: Record<string, string[]> = {
  تهران: [
    "تهران",
    "شهریار",
    "اسلامشهر",
    "ری",
    "ورامین",
    "دماوند",
    "بومهن",
    "رودهن",
    "ملارد",
  ],
  اصفهان: [
    "اصفهان",
    "کاشان",
    "خمینی‌شهر",
    "نجف‌آباد",
    "شاهین‌شهر",
    "فلاورجان",
    "زرین‌شهر",
    "سمیرم",
    "آران و بیدگل",
  ],
  فارس: [
    "شیراز",
    "مرودشت",
    "فسا",
    "کازرون",
    "لار",
    "جهرم",
    "داراب",
    "لامرد",
    "فیروزآباد",
  ],
  "خراسان رضوی": [
    "مشهد",
    "نیشابور",
    "سبزوار",
    "تربت حیدریه",
    "قوچان",
    "فریمان",
    "چناران",
    "طرقبه",
  ],
  "آذربایجان شرقی": [
    "تبریز",
    "مراغه",
    "مرند",
    "میانه",
    "اهر",
    "شبستر",
    "هشترود",
    "بستان‌آباد",
  ],
  مازندران: [
    "ساری",
    "آمل",
    "بابل",
    "قائم‌شهر",
    "نوشهر",
    "چالوس",
    "رامسر",
    "بابلسر",
    "نور",
  ],
  خوزستان: [
    "اهواز",
    "آبادان",
    "خرمشهر",
    "دزفول",
    "بهبهان",
    "ماهشهر",
    "شوشتر",
    "اندیمشک",
  ],
  کرمان: [
    "کرمان",
    "رفسنجان",
    "جیرفت",
    "سیرجان",
    "بم",
    "زرند",
    "کهنوج",
    "رودبار",
    "راور",
  ],
  گیلان: [
    "رشت",
    "بندر انزلی",
    "لاهیجان",
    "رودسر",
    "فومن",
    "صومعه‌سرا",
    "تالش",
    "آستارا",
  ],
  البرز: ["کرج", "فردیس", "نظرآباد", "هشتگرد", "اشتهارد"],
  "آذربایجان غربی": [
    "ارومیه",
    "خوی",
    "میاندوآب",
    "مهاباد",
    "بوکان",
    "سلماس",
    "پیرانشهر",
    "نقده",
  ],
  قم: ["قم"],
  مرکزی: ["اراک", "ساوه", "خمین", "محلات", "تفرش", "دلیجان", "شازند"],
  کرمانشاه: [
    "کرمانشاه",
    "اسلام‌آباد غرب",
    "سنقر",
    "هرسین",
    "کنگاور",
    "جوانرود",
    "صحنه",
  ],
  "سیستان و بلوچستان": [
    "زاهدان",
    "چابهار",
    "زابل",
    "خاش",
    "ایرانشهر",
    "سراوان",
    "سرباز",
  ],
  کردستان: ["سنندج", "سقز", "بانه", "مریوان", "بیجار", "قروه", "دیواندره"],
  هرمزگان: ["بندرعباس", "میناب", "قشم", "بندر لنگه", "کیش", "جاسک", "بستک"],
  لرستان: [
    "خرم‌آباد",
    "بروجرد",
    "دورود",
    "کوهدشت",
    "الیگودرز",
    "ازنا",
    "پلدختر",
  ],
  قزوین: ["قزوین", "البرز", "تاکستان", "بوئین زهرا", "آبیک"],
  زنجان: ["زنجان", "ابهر", "خرمدره", "قیدار", "ماه‌نشان"],
  همدان: ["همدان", "ملایر", "نهاوند", "تویسرکان", "رزن", "اسدآباد"],
  یزد: ["یزد", "میبد", "اردکان", "مهریز", "تفت", "بافق"],
  اردبیل: ["اردبیل", "مشگین‌شهر", "پارس‌آباد", "خلخال", "گرمی"],
  بوشهر: ["بوشهر", "برازجان", "کنگان", "دیلم", "گناوه", "جم", "عسلویه"],
  "چهارمحال و بختیاری": ["شهرکرد", "بروجن", "فارسان", "لردگان", "کوهرنگ"],
  سمنان: ["سمنان", "شاهرود", "دامغان", "گرمسار", "مهدی‌شهر"],
  گلستان: [
    "گرگان",
    "گنبد کاووس",
    "علی‌آباد کتول",
    "آق‌قلا",
    "مینودشت",
    "بندر ترکمن",
  ],
  ایلام: ["ایلام", "دهلران", "آبدانان", "مهران", "دره‌شهر"],
  "کهگیلویه و بویراحمد": ["یاسوج", "دوگنبدان", "دهدشت", "لیکک"],
  "خراسان جنوبی": ["بیرجند", "قائن", "طبس", "فردوس", "نهبندان"],
  "خراسان شمالی": ["بجنورد", "شیروان", "اسفراین", "آشخانه", "فاروج"],
};

const Input = ({ type, name, phone, province, city, sex }: InputProps) => {
  const [phoneNumber, setPhoneNumber] = useState<string>(phone || "");
  const [isValid, setIsValid] = useState<boolean>(true);
  const [showError, setShowError] = useState(false);
  const [isNameEditable, setIsNameEditable] = useState<boolean>(false);
  const [editableName, setEditableName] = useState<string>(name || "");
  const [selectedProvince, setSelectedProvince] = useState<string>(
    province || ""
  );
  const [selectedCity, setSelectedCity] = useState<string>(city || "");
  const [selectedSex, setSelectedSex] = useState<string>(sex || "");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (type === "phone") {
      setPhoneNumber(phone || "");
    }
  }, [phone, type]);

  const isValidPhoneNumber = (phoneNumber: string) => {
    if (phoneNumber.length !== 11) return false;
    return validPrefixes.some((prefix) => phoneNumber.startsWith(prefix));
  };

  const handleChange = (e: { target: { value: string } }) => {
    const value = e.target.value;
    if (type === "phone") {
      if (value.length <= 11) {
        setPhoneNumber(value);
        if (value.length === 11) {
          const valid = isValidPhoneNumber(value);
          setIsValid(valid);
          setShowError(!valid);
        } else {
          setIsValid(true);
          setShowError(false);
        }
      }
    } else if (type === "name" && isNameEditable) {
      setEditableName(value);
    }
  };

  const handlePenClick = () => {
    setIsNameEditable(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    }, 0);
  };
  const handleProvinceChange = (province: string) => {
    setSelectedProvince(province);
    setSelectedCity(""); // Reset city when the province changes
  };
  const handleCityChange = (value: string) => {
    setSelectedCity(value);
  };
  const handleSexChange = (value: string) => {
    setSelectedSex(value)
  };

  return (
    <div className="relative min-h-[48px]">
      <div className="flex justify-center">
        <label
          htmlFor="input"
          className={`absolute right-7 bg-gradient-to-t from-[#FBF8FD] to-white text-center text-neutral-neutral40 -top-2 px-1 font-normal text-2xs h-[14px] ${type === "phone" && "w-14"} ${type === "name" && "w-24"}`}
        >
          {type === "phone" && "شماره تلفن"}
          {type === "name" && "نام و نام خانوادگی"}
          {type === "province" && "استان سکونت"}
          {type === "city" && "شهر سکونت"}
          {type === "sex" && "جنسیت"}
        </label>
        {type === "name" && (
          <PenIcon
            className="absolute top-1/3 left-8 cursor-pointer"
            onClick={handlePenClick}
          />
        )}
        {type === "sex" && (
          <div className="mx-4 gap-4 flex flex-col w-[398px] justify-center items-center">
            {/* Sex Select */}
            <Select onValueChange={handleSexChange} value={selectedSex}>
              <SelectTrigger className="h-12 bg-[#FBF8FD] border-[1.5px] border-[#C7C6CA] rounded-rounded-7 pl-4 pr-5 text-xs text-neutral-neutral30">
                {selectedSex ? (
                  <span>
                    {selectedSex }
                  </span>
                ) : (
                  <span className="text-neutral-neutral30">
                    جنسیت خود را انتخاب کنید
                  </span>
                )}
              </SelectTrigger>
              <SelectContent>
                {sexes.map((sexOption) => (
                  <SelectItem key={sexOption} value={sexOption}>
                    {sexOption}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
        {type === "province" && (
          <div className=" mx-4 gap-4 flex flex-col  w-[398px] justify-center items-center">
            {/* Province Select */}
            <Select
              onValueChange={handleProvinceChange}
              value={selectedProvince}
            >
              <SelectTrigger className="h-12   bg-[#FBF8FD] border-[1.5px] border-[#C7C6CA] rounded-rounded-7 pl-4 pr-5 text-xs text-neutral-neutral30">
                {selectedProvince ? (
                  <span>{selectedProvince}</span>
                ) : (
                  <span className="text-neutral-neutral30">
                    استان سکونت خود را انتخاب کنید
                  </span>
                )}
              </SelectTrigger>
              <SelectContent>
                {provincesOfIran.map((province) => (
                  <SelectItem key={province} value={province}>
                    {province}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* City Select (dependent on province) */}
            {selectedProvince && (
              <>
                <label
                  htmlFor="city"
                  className="absolute bg-gradient-to-t from-[#FBF8FD] to-white text-center top-14 right-7 px-1 font-normal text-2xs h-[14px] text-neutral-neutral40"
                >
                  شهر سکونت
                </label>
                <Select onValueChange={setSelectedCity} value={selectedCity}>
                  <SelectTrigger className="h-12 bg-[#FBF8FD] border-[1.5px] border-[#C7C6CA] rounded-rounded-7 pl-4 pr-5 text-xs text-neutral-neutral30">
                    {selectedCity ? (
                      <span>{selectedCity}</span>
                    ) : (
                      <span className="text-neutral-neutral30">
                        شهر خود را انتخاب کنید
                      </span>
                    )}
                  </SelectTrigger>
                  <SelectContent>
                    {citiesByProvince[selectedProvince]?.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </>
            )}
          </div>
        )}
        {(type === "phone" || type === "name") && (
          <input
            id="input"
            ref={inputRef}
            style={{ direction: "rtl" }}
            type={type === "phone" ? "number" : "text"}
            value={type === "phone" ? phoneNumber : editableName}
            onChange={handleChange}
            placeholder={
              type === "phone" ? "09121234567" : "نام و نام خانوادگی"
            }
            disabled={type === "name" && !isNameEditable}
            className={`h-12 mx-4 w-[398px] border-[1.5px] ${
              type === "phone" && !isValid
                ? "border-red-500"
                : "border-[#C7C6CA]"
            } rounded-rounded-7 bg-[#FBF8FD] pr-5 pl-14 outline-none text-xs text-neutral-neutral30`}
          />
        )}
      </div>
      {showError && type === "phone" && (
        <p
          className="text-red-500 text-xs mt-[10px] pr-4"
          style={{ direction: "rtl" }}
        >
          شماره تلفن معتبر نیست!
        </p>
      )}
    </div>
  );
};

export default Input;
