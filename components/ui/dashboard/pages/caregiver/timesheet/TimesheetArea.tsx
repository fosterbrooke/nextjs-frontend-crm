import { MoneysIcon, WalletIcon } from "@/components/ui/common/Icons";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { Avatar, IconButton, InputBase } from "@mui/material";
import { TimeIcon } from "@mui/x-date-pickers";
import React, { useState } from "react";
import TimesheetSubmitButton from "./TimesheetSubmitButton";
import TimePickerModal from "../../../TimePickerModal";

const fakerData = {
  dateInfo: [
    {
      day: "Mon",
      date: "23/09/23",
    },
    {
      day: "Tue",
      date: "24/09/23",
    },
    {
      day: "Wed",
      date: "25/09/23",
    },
    {
      day: "Thur",
      date: "26/09/23",
    },
    {
      day: "Fri",
      date: "27/09/23",
    },
    {
      day: "Sat",
      date: "28/09/23",
    },
    {
      day: "Sun",
      date: "29/09/23",
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

  const [open, setOpen] = useState(false);
  const [timeStr, setTimeStr] = useState("Select Time");

  return (
    <>
      <div
        className="flex-1 px-8 py-1 border border-solid border-[#828282]"
        onClick={() => setOpen(true)}
      >
        <div className="text-[#828282] text-[14px]">{`${mode} Hour`}</div>
        <div className="text-[#282828] font-bold">{timeStr}</div>
      </div>
      <TimePickerModal
        title={"Select Time"}
        open={open}
        setOpen={setOpen}
        setValue={setTimeStr}
        format={true}
      />
    </>
  );
};

export default function TimesheetArea({
  name,
  daterange,
}: {
  name: string;
  daterange: string;
}) {
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
        <div className="ml-2 flex">
          <div className="flex items-center">
            <span className="rounded-lg px-1 py-1.5 border border-solid border-[#C4C4C4]">
              <ArrowBack />
            </span>
            <span className="ml-2 rounded-lg px-1 py-1.5 border border-solid border-[#C4C4C4]">
              <ArrowForward />
            </span>
          </div>
          <div className="px-2 ml-2 flex justify-between border w-[250px] h-[60px] rounded-lg">
            <InputBase
              className="font-bold"
              sx={{ color: "rgba(0, 0, 0, 0.87)", width: "220px" }}
              value={"10-09-2023 - 17-09-2023"}
              placeholder="Global search"
            />
            <IconButton type="submit">
              <CloseIcon />
            </IconButton>
          </div>
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
        <div className="mt-4 flex flex-col">
          <div className="py-2 flex justify-around bg-[#F5F5F5]">
            {fakerData.dateInfo.map((item, idx) => (
              <div
                key={`timesheet-area-datainfo-${idx}`}
                className="flex flex-col text-[#828282]"
              >
                <span className="text-center">{item.day}</span>
                <span>{item.date}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-x-2 justify-around">
            {["", "", "", "", "", "", ""].map((item, idx) => (
              <SelectTimeComp
                key={`timesheet-area-start-hour-${idx}`}
                hour={10}
                mode="Start"
              />
            ))}
          </div>
          <div className="mt-2 flex gap-x-2 justify-around">
            {["", "", "", "", "", "", ""].map((item, idx) => (
              <SelectTimeComp
                key={`timesheet-area-end-hour-${idx}`}
                hour={18}
                mode="End"
              />
            ))}
          </div>
        </div>
        <div className="mt-4 flex">
          <div className="text-[#CB5A6F]">
            Total Hour: <b>40:30</b>
          </div>
          <div className="ml-auto">
            <TimesheetSubmitButton statusProp="initial" />
          </div>
        </div>
      </div>
    </div>
  );
}
