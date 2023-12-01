import { PrimaryButton } from "@/components/ui/common/PrimaryButton";
import React, { useEffect, useState } from "react";
import CreateNewTaskModal from "../../../Modals/CreateNewTaskModal";

const weekNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const serviceData = [
  {
    serviceName: "Meal Preparation",
    imageUrl: "/avatars/sample.png",
    caregiverName: "Gabby Alao",
    day: 0,
    startHour: 0,
    endHour: 3,
  },
  {
    serviceName: "House Keeping",
    imageUrl: "/avatars/sample.png",
    caregiverName: "Kimberly Alao",
    day: 1,
    startHour: 0,
    endHour: 2,
  },
  {
    serviceName: "Regular assessment and care plans",
    imageUrl: "/avatars/sample.png",
    caregiverName: "Kimberly Alao",
    day: 2,
    startHour: 2,
    endHour: 3,
  },
  {
    serviceName: "Meal Preparation",
    imageUrl: "/avatars/sample.png",
    caregiverName: "Gabby Alao",
    day: 3,
    startHour: 0,
    endHour: 3,
  },
  {
    serviceName: "House Keeping",
    imageUrl: "/avatars/sample.png",
    caregiverName: "Kimberly Alao",
    day: 4,
    startHour: 1,
    endHour: 2,
  },
  {
    serviceName: "House Keeping",
    imageUrl: "/avatars/sample.png",
    caregiverName: "Kimberly Alao",
    day: 5,
    startHour: 0,
    endHour: 1,
  },
];

export default function TaskManagement() {
  const [open, setOpen] = useState(false);
  const handleCreateTask = () => {
    setOpen(true);
  };

  useEffect(() => {
    
  }, []);

  return (
    <div className="w-full px-8 flex flex-col">
      <div className="ml-auto">
        <div onClick={handleCreateTask}>
          <div
            className="w-full p-2 rounded-md border border-solid border-primary flex justify-center items-center cursor-pointer bg-primary text-white font-bold"
            onClick={() => setOpen(false)}
          >
            Create New Task +
          </div>
        </div>
      </div>
      <div className="mt-8 w-full flex flex-col items-center relative">
        <div>
          <div className="w-full flex">
            <div className="w-[100px]"></div>
            {weekNames.map((name, idx) => (
              <div
                key={`weekname-${idx}`}
                className="text-[20px] font-bold w-[150px] text-center"
              >
                {name}
              </div>
            ))}
          </div>
          {["", "", "", "", "", "", "", ""].map((time, idx) => (
            <div key={`taskmgr-row-${idx}`} className="flex">
              <div className="w-[100px] bg-white px-2 text-distlineColor text-center font-bold">{`0${idx}:00 AM`}</div>
              {weekNames.map((week, idx1) => (
                <div
                  key={`taskmgr-col-${idx1}`}
                  className="w-[150px] h-[150px] bg-white"
                ></div>
              ))}
            </div>
          ))}
        </div>
        <div className="absolute flex justify-center items-center h-[400px]">
          <div className="font-bold text-[18px]">
            Set tasks reminders, click “
            <span className="text-primary">Create New Task</span>” to set up
          </div>
        </div>
      </div>
      <CreateNewTaskModal open={open} setOpen={setOpen} />
    </div>
  );
}
