import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Segment from "../segment/Segment";

const DrawerComponent = () => {
  return (
    <div>
      <Drawer>
        <DrawerTrigger>Open Drawer</DrawerTrigger>
        <DrawerContent className="w-full flex flex-col md:max-w-xl mx-auto p-4 gap-[12px]">
          <DrawerHeader>
            <div className="flex flex-col gap-1">
              <DrawerTitle className="text-[14px] text-right">
                حساسیت غذایی
              </DrawerTitle>
              <DrawerDescription
                style={{ direction: "rtl" }}
                className="text-2xs text-right"
              >
                {" "}
                اگر حساسیت غذایی دارید به ما اطلاع دهید تا به سلامتی شما کمک
                کنیم!
              </DrawerDescription>
            </div>
          </DrawerHeader>
          <div className="flex flex-row justify-center items-end space-x-4 mt-[20px]">
            <Segment />
            <Segment />
          </div>
          <DrawerFooter className="flex justify-center mt-4">
            <button className="bg-primary text-black py-2 px-4 rounded-md">
              انتخاب و ورود
            </button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
export default DrawerComponent;
