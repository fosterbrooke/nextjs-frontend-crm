import { MoneysIcon, WalletIcon } from "@/components/ui/common/Icons";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { Avatar, IconButton, InputBase } from "@mui/material";
import { TimeIcon } from "@mui/x-date-pickers";
import React, { useState } from "react";
import TimesheetSubmitButton from "./TimesheetSubmitButton";
import ApproveDlg from "./approveDlg";

const fakerData = {
  dateInfo: [
    {
      day: "Mon",
      date: "23/09/23",
      startHour: "10:30 AM",
      endHour: "03:02 PM",
      totalHour: "07:32:00",
      totalAmount: "$70",
    },
    {
      day: "Mon",
      date: "23/09/23",
      startHour: "10:30 AM",
      endHour: "03:02 PM",
      totalHour: "07:32:00",
      totalAmount: "$70",
    },
    {
      day: "Mon",
      date: "23/09/23",
      startHour: "10:30 AM",
      endHour: "03:02 PM",
      totalHour: "07:32:00",
      totalAmount: "$70",
    },
    {
      day: "Tue",
      date: "23/09/23",
      startHour: "10:30 AM",
      endHour: "03:02 PM",
      totalHour: "07:32:00",
      totalAmount: "$70",
    },
    {
      day: "Wed",
      date: "23/09/23",
      startHour: "10:30 AM",
      endHour: "03:02 PM",
      totalHour: "07:32:00",
      totalAmount: "$70",
    },
    {
      day: "Thur",
      date: "23/09/23",
      startHour: "10:30 AM",
      endHour: "03:02 PM",
      totalHour: "07:32:00",
      totalAmount: "$70",
    },
    {
      day: "Fri",
      date: "23/09/23",
      startHour: "10:30 AM",
      endHour: "03:02 PM",
      totalHour: "07:32:00",
      totalAmount: "$70",
    },
  ],
};

const InfoComp = ({
  description,
  info,
  icon,
  color,
}: {
  description: string;
  info: string;
  icon: any;
  color: string;
}) => {
  return (
    <div className="flex items-center">
      <div className={`p-2 rounded-full`} style={{ backgroundColor: color }}>
        {icon}
      </div>
      <div className="ml-4 flex flex-col">
        <span className="text-[#828282]">{description}</span>
        <span className="text-[#282828] font-bold">{info}</span>
      </div>
    </div>
  );
};

const SelectTimeComp = ({ hour, mode }: { hour: number; mode: string }) => {
  const getFormatedStr = (num: number) => {
    const val = num > 12 ? num - 12 : num;
    const suffix = num > 12 ? "PM" : "AM";
    return `${val.toString().length < 2 ? `0${val}` : val}:30 ${suffix}`;
  };

  return (
    <div className="px-8 py-1 border border-solid border-[#828282]">
      <div className="text-[#828282] text-[14px]">{`${mode} Hour`}</div>
      <div className="text-[#282828] font-bold">{getFormatedStr(hour)}</div>
    </div>
  );
};

export default function TimesheetArea({
  name,
  daterange,
}: {
  name: string;
  daterange: string;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const handleApproveclicked = () => {
    setModalOpen(true);
  };
  const handleSetmodal = () => {
    setModalOpen(false);
  };
  const imagePath = "/images/profile_card_1.png";

  return (
    <div>
      <div className="px-4 py-2 flex justify-between border border-solid border-[#C4C4C4]">
        <div className="flex items-center font-bold">
          <span>{daterange}</span>
        </div>
        <div className="ml-2 flex items-center">
          <Avatar
            alt="Remy Sharp"
            src="/public/avatars/sample.png"
            sx={{ width: 48, height: 48 }}
          />
          <div className="ml-2 font-bold">{name}</div>
        </div>
        <div className="ml-2 flex items-center font-bold text-[#CB5A6F]">
          <span>{"Rate/hr: $10/hr"}</span>
        </div>
        <div className="m-4 flex">
          <button
            className="px-8 py-2 rounded-1 bg-red-800"
            style={{ color: "white" }}
            onClick={handleApproveclicked}
          >
            approve
          </button>
        </div>
      </div>
      <div className="p-8">
        <div className="flex justify-between">
          <InfoComp
            description="Hours worked this week:"
            info="40 hours 32 minutes"
            icon={<TimeIcon className={`text-white text-3xl`} />}
            color="#C75167"
          />
          <InfoComp
            description="Payment this week:"
            info="$430.00"
            icon={<WalletIcon className={`text-white text-3xl`} />}
            color="#4285F4"
          />
          <InfoComp
            description="Total payment so far:"
            info="$4290.00"
            icon={<MoneysIcon className={`text-white text-3xl`} />}
            color="#30A64A"
          />
        </div>
      </div>
      <div className="m-12">
        <table className="w-full h-10/12 border border-solid 1px border-[#282828] rounded-xl text-center ">
          <thead>
            <tr
              className="text font-[#282828] font-bold"
              style={{ fontSize: "20px" }}
            >
              <th className="border border-solid 1px border-[#828282] rounded-md p-6">
                Date
              </th>
              <th className="border border-solid 1px border-[#828282] p-6">
                Start Hour
              </th>
              <th className="border border-solid 1px border-[#828282] p-6">
                End Hour
              </th>
              <th className="border border-solid 1px border-[#828282] rounded-md first-letter:p-6">
                Total Hour
              </th>
              <th className="p-6">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {fakerData.dateInfo.map((item, idx) => (
              <tr key={`timesheetarea-tr-${idx}`}>
                <td className="font-bold border border-solid 1px border-[#828282] text-[16px] p-4">{`${item.day},${item.date}`}</td>
                <td className="border border-solid 1px border-[#828282] text-[14px] p-4">
                  {item.startHour}
                </td>
                <td className="border border-solid 1px border-[#828282] text-[14px] p-4">
                  {item.endHour}
                </td>
                <td className="border border-solid 1px border-[#828282] text-[14px] p-4">
                  {item.totalHour}
                </td>
                <td className="border border-solid 1px border-[#828282] text-[14px] p-4">
                  {item.totalAmount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ApproveDlg
        open={modalOpen}
        setModalOpen={setModalOpen}
        imagePath={imagePath}
      />
    </div>
  );
}
