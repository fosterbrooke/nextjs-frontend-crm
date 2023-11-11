import React, { Suspense, useState } from "react";
import UpcomingCareVisitCard from "./UpcomingCareVisitCard";
import CareVisitsCard from "./CareVisitsCard";
import MoneySpentCard from "./MoneySpentCard";
import MessagePreview from "../../../MessagePreview";
import UpcomingInterviews from "../../../UpcomingInterviews";
import UpcomingEventsPreview from "../../../UpcomingEventsPreview";
import UpcomingVisitsCard from "../../../UpcomingVisitsCard";
import CalendarCollapse from "../../../CalendarCollapse";
import ActiveTimesheets from "../../../ActiveTimesheets";
import CaregiversTableCard from "../../../CaregiversTableCard";
import CaregivernumCard from "./components/CaregivernumCard";
import ClientnumCard from "./components/ClientnumCard";
import Requests from "./components/Requests";
import ContractCard from "./components/ContractCard";
import ViewapplicationCard from "./components/ViewapplicationCard";
import Userchart from "./components/Userchart";

const DashboardPage = () => {
  return (
    <div className="pl-4 pr-12 flex flex-col w-full">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="grid grid-cols-12 flex gap-2">
          <div className="col-start-1  col-span-3 mt-4 flex flex-col gap-3">
            <CaregivernumCard num={68} />
            <ClientnumCard num={1000} />
          </div>
          <div className="col-start-4 col-span-5">
            <ViewapplicationCard />
          </div>
          <div className="col-start-9 col-span-4">
            <Requests />
          </div>
        </div>
        <div className="w-full flex gap-4">
          <div className="w-1/2">
            <Userchart />
          </div>
          <div className="w-1/2">
            <ContractCard />
          </div>
        </div>
        <div className=" w-full mt-4">
          <MoneySpentCard />
        </div>

        <div className="w-full flex gap-4 justify-between mt-4">
          <div className="w-2/3">
            <UpcomingInterviews />
          </div>
          <div className="w-1/3">
            <UpcomingEventsPreview />
          </div>
        </div>
        {/* <MoneySpentCard />
          <CaregiversTableCard />
          <ActiveTimesheets />
          <MessagePreview />
          <div className="flex flex-row gap-[18px]">
            <UpcomingInterviews />
            <UpcomingEventsPreview />
          </div> */}
      </Suspense>
    </div>
  );
};

export default DashboardPage;
