import React from "react";
import NewEventItem from "./components/NewEventItem";
import NewMessageItem from "./components/NewMessageItem";
import RescheduleItem from "./components/RescheduleItem";
import PaymentItem from "./components/PaymentItem";
import TimesheetItem from "./components/TimesheetItem";
import NewServiceItem from "./components/NewServiceItem";
import SettingsIcon from "@mui/icons-material/Settings";

const Notifications = () => {
  return (
    <div className="w-[550px] h-5/6 text-2xl text-black bg-white rounded">
      <div className="flex justify-between p-5 border border-l-0 border-t-0 border-r-0 border-b-1 border-borderGreyColor">
        <p className="text-base font-bold">Notifications</p>
        <SettingsIcon />
      </div>
      <div className="overflow-auto h-5/6">
        <NewMessageItem
          from="Frank Sergio"
          isViewed={false}
          time={"30 minutes ago"}
        />
        <RescheduleItem
          actor={"Ashley Kimmy"}
          date={"Thursday - 23 Oct, 2023"}
          time={"30 minutes ago"}
        />
        <PaymentItem from="Gabby Alao" amount={9500} time={"30 minutes ago"} />
        <TimesheetItem actor="Ben Franklin" time="30 minutes ago" />
        <NewServiceItem name="Meal Preparation" time="30 minutes ago" />
        <NewEventItem name="Chrismas Party" time="30 minutes ago" />
      </div>
      <div className="flex justify-center">
        <p className="text-[#F4AAB7] font-bold text-base py-4 select-none cursor-pointer">
          Clear all notification
        </p>
      </div>
    </div>
  );
};

export default Notifications;
