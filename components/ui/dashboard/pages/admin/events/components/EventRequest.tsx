import React, { useState } from "react";

import SvgFilter from "@/public/icons/Filter";
import ConditionSelect from "@/components/ui/dashboard/ConditionSelect";
import EventCard from "../../../EventCard";
import { Pagination } from "@mui/material";
import RowSelection from "@/components/ui/dashboard/RowsSelection";
import SvgCircleClose from "@/public/icons/CircleClose";
import SvgCircleCheck from "@/public/icons/CircleCheck";
import ThumbImage from "@/public/images/event_thumb.png";
import Image from "next/image";
import EventApproveModal from "./EventApproveModal";

const eventsData = [
  {
    name: "Oldies Hangout",
    fee: 320,
    description:
      "Oldies Hangout is a social event for users to engage our seniors in various fun activity which wll be good for them to un....",
  },
  {
    name: "Oldies Hangout",
    fee: 320,
    description:
      "Oldies Hangout is a social event for users to engage our seniors in various fun activity which wll be good for them to un....",
  },
  {
    name: "Oldies Hangout",
    fee: 320,
    description:
      "Oldies Hangout is a social event for users to engage our seniors in various fun activity which wll be good for them to un....",
  },
  {
    name: "Oldies Hangout",
    fee: 320,
    description:
      "Oldies Hangout is a social event for users to engage our seniors in various fun activity which wll be good for them to un....",
  },
  {
    name: "Oldies Hangout",
    fee: 320,
    description:
      "Oldies Hangout is a social event for users to engage our seniors in various fun activity which wll be good for them to un....",
  },
];

const EventRequest = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="w-full h-full flex flex-col px-20 justify-between">
      <div className="w-full p-4 bg-white m-2 grid justify-items-center">
        <table className="w-full h-10/12 rounded-xl">
          <thead className="bg-[#F9FAFB]">
            <tr className="text-[#282828] text-xs">
              <th className="text-left py-4 pr-12">Thumbnail</th>
              <th className="text-left py-4 pr-24">Event Name</th>
              <th className="text-left py-4 pr-24">Fee</th>
              <th className="text-left py-4">Description</th>
              <th className="text-left pl-12"></th>
              <th className="text-left"></th>
            </tr>
          </thead>
          <tbody>
            {eventsData.map((item, index) => (
              <tr
                key={`paymenthistory-transaction-${index}`}
                className="text-[#282828]"
              >
                <td className="font-arial py-4">
                  <Image src={ThumbImage} alt="thumb" />
                </td>
                <td className="font-arial text-lg text-[#4285F4]">
                  <p className="font-semibold font-arial">{item.name}</p>
                </td>
                <td className="font-arial text-normal font-bold text-[#282828]">
                  <p className="text-sm">{`Fee: $${item.fee}`}</p>
                </td>
                <td className="font-arial">
                  <p className="text-textdarkColor font-normal text-sm tracking-wider w-[320px]">
                    {item.description}
                  </p>
                </td>
                <td className="font-arial">
                  <div className="rounded-full w-[56px] h-[56px] p-4 bg-[#F0F0F0] bg-opacity-50 flex items-center justify-center cursor-pointer">
                    <SvgCircleClose />
                  </div>
                </td>
                <td className="font-arial p-2">
                  <div
                    className="rounded-full w-[56px] h-[56px] p-4 bg-[#F0F0F0] bg-opacity-50 flex items-center justify-center cursor-pointer"
                    onClick={() => setOpen(true)}
                  >
                    <SvgCircleCheck />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center justify-between">
          <span className="text-textdarkColor w-[130px] mr-2 font-arial">
            1 to 1 4 records
          </span>
          <RowSelection />
          <span className="text-textdarkColor w-[130px] ml-2 font-arial">
            items per page
          </span>
        </div>
        <Pagination count={1} variant="outlined" shape="rounded" />
      </div>
      <EventApproveModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default EventRequest;
