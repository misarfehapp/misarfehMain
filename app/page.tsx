import Button from "@/components/button/Button";
import CategoryButton from "@/components/categories/CategoryButton";
import Input from "@/components/input/Input";
import OptionBar from "@/components/OptionBar/OptionBar";
import OTPInput from "@/components/OTPInput/OTPInput";
import Segment from "@/components/segment/Segment";

export default function Home() {
  return (
    <div className="mx-4 flex flex-col space-y-10 my-4 ">
      <h1 className="mb-8">components</h1>
      <Input />
      <OTPInput />
      <Segment/>
      <Button/>
      <CategoryButton/>
      <OptionBar/>
    </div>
  );
}
