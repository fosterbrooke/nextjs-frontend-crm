import React from "react";

import SvgFilter from "@/public/icons/Filter";
import ConditionSelect from "@/components/ui/dashboard/ConditionSelect";

const eventsData = [
  {
    creator: "Seasoned senior",
    name: "Oldies Hangout",
    fee: 320,
    date: "10 Nove, 2023",
    time: "03:32 PM",
  },
  {
    creator: "Seasoned senior",
    name: "Oldies Hangout",
    fee: 320,
    date: "10 Nove, 2023",
    time: "03:32 PM",
  },
  {
    creator: "Seasoned senior",
    name: "Oldies Hangout",
    fee: 320,
    date: "10 Nove, 2023",
    time: "03:32 PM",
  },
];

const BrowseEvents = () => {
  return (
    <div className="flex flex-col items-center px-20">
      <div className="w-2/3 flex justify-end">
        <ConditionSelect
          icon={<SvgFilter />}
          method="filter"
          by="All"
          choices={["All", "Free", "Paid", "Ongoing", "Past Events"]}
        />
      </div>
      <div className="w-2/3 flex justify-between">
        {eventsData.map((item, index) => (
          <div
            key={`browseevent-${index}`}
            className="flex flex-col justify-between bg-black w-[350px] h-[240px] m-1 p-2"
          >
            <div className="text-white">{`Created by: ${item.creator}`}</div>
            <div className="text-white">
              <div className="flex items-center">
                <p className="font-bold text-xl mr-1">{item.name}</p>
                <p>{`Fee: ${item.fee}`}</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p> {item.date} </p>
                  <p> {item.time} </p>
                </div>
                <span className="px-8 py-2 border border-white cursor-pointer">
                  <p>VIEW</p>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseEvents;
