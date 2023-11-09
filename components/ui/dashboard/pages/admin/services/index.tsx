import React, { useState } from "react";
import MyServices from "./MyServices";
import TaskManagement from "./TaskManagement";

export default function ServicesPage() {
  const [curTabIndex, setCurTabIndex] = useState(0);

  const activeStyle = {
    color: "#CB5A6F",
    textDecoration: "underline",
    fontWeight: "bold",
  };

  const handleSummaryTab = () => {
    setCurTabIndex(0);
  };

  const handleBillingTab = () => {
    setCurTabIndex(1);
  };

  return (
    <div className="bg-[#FAFAFB] w-full flex flex-col">
      <div className="flex justify-center gap-10">
        <div
          className="cursor-pointer"
          style={curTabIndex == 0 ? activeStyle : {}}
          onClick={handleSummaryTab}
        >
          Service Catelog
        </div>
        <div
          className="cursor-pointer"
          style={curTabIndex == 1 ? activeStyle : {}}
          onClick={handleBillingTab}
        >
          Scheduled Services
        </div>
      </div>
      <div>{curTabIndex == 0 ? <MyServices /> : <TaskManagement />}</div>
    </div>
  );
}
