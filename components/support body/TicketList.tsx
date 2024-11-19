"use client";

import { useState } from "react";
import CheckIcon from "../input/CheckIcon";
import ClockIcon from "./ClockIcon";
import { ScrollArea } from "../ui/scroll-area";

const tickets = [
  {
    subject: "سفارش را تحویل نگرفته ام!",
    progress: "in progress",
    discription:
      "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون  ورم ایپسومورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون  ورم ایپسومورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون  ورم ایپسوم",
    date: "1403/09/21",
    time: "18:30",
  },
  {
    subject: "کیفیت غذا بد بود.",
    progress: "done",
    discription:
      "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون  ورم ایپسومورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون  ورم ایپسومورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون  ورم ایپسوم",
    date: "1403/09/21",
    time: "18:30",
  },
  {
    subject: "غذا فاسد بود.",
    progress: "in progress",
    discription:
      "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون  ورم ایپسومورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون  ورم ایپسومورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون  ورم ایپسوم",
    date: "1403/09/21",
    time: "18:30",
  },
  {
    subject: "سفارش را تحویل نگرفته ام!",
    progress: "done",
    discription:
      "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون  ورم ایپسومورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون  ورم ایپسومورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون  ورم ایپسوم",
    date: "1403/09/21",
    time: "18:30",
  },
  {
    subject: "کیفیت غذا بد بود.",
    progress: "in progress",
    discription:
      "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون  ورم ایپسومورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون  ورم ایپسومورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون  ورم ایپسوم",
    date: "1403/09/21",
    time: "18:30",
  },
  {
    subject: "غذا فاسد بود.",
    progress: "done",
    discription:
      "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون  ورم ایپسومورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون  ورم ایپسومورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون  ورم ایپسوم",
    date: "1403/09/21",
    time: "18:30",
  },
];

const TicketList = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const toggleExpand = () => {
    setIsExpanded((prev: any) => !prev);
  };
  return (
    <ScrollArea className="h-[480px]">
      <div className=" my-6 flex flex-col mx-4 justify-center items-center gap-4">
        {tickets.map((ticket, index) => (
          <div
            key={index}
            className="ring-2 w-full outline-none ring-neutral-neutral90 rounded-rounded-9 bg-primary-primary99 p-3 flex flex-col justify-center gap-2"
            style={{ direction: "rtl" }}
          >
            {/* header of ticket */}
            <div className="flex flex-row justify-between">
              <p className="text-sm font-bold text-neutral-neutral30">
                {ticket.subject}
              </p>
              {ticket.progress === "done" ? (
                <div className="bg-primary-primary95 text-key-colors-primary flex flex-row items-center rounded-full text-xs font-medium py-1 px-2 gap-2">
                  <CheckIcon />
                  <p>حل شده</p>
                </div>
              ) : (
                <div className="bg-neutral-neutral95 text-neutral-neutral30 flex flex-row items-center rounded-full text-xs font-medium py-1 px-2 gap-2">
                  <ClockIcon />
                  <p>پیگیری</p>
                </div>
              )}
            </div>
            {/* body of ticket */}
            <div>
              <p className="text-xs font-medium text-neutral-neutral35">
                {ticket.discription.length > 100 && isExpanded === false
                  ? `${ticket.discription.slice(0, 100)}...`
                  : ticket.discription}
                {ticket.discription.length > 100 && (
                  <span
                    className="text-key-colors-primary cursor-pointer"
                    onClick={toggleExpand}
                  >
                    {isExpanded ? " کمتر" : " بیشتر"}
                  </span>
                )}
              </p>
            </div>
            {/* ticket footer */}
            <div>
              <p className="flex flex-row items-center text-xs font-medium text-neutral-neutral35 gap-1">
                {ticket.time}
                <span className="text-key-colors-primary">-</span>
                {ticket.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};
export default TicketList;
