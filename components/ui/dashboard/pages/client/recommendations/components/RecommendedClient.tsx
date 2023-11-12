import React, { useState } from "react";
import Image from "next/image";

import avatar from "/public/avatars/sample.png";
import SvgRibbon from "@/public/icons/Ribbon";
import ScheduleMettingModal from "@/components/ui/dashboard/Modals/ScheduleMettingModal";

type Props = {
  isBestMatch?: boolean;
  imagePath?: string;
  name: string;
  age: number;
  address: string;
  distance: number;
  hireNumber: number;
  offerMin: number;
  offerMax: number;
  workItems: string[];
  matchPercentage: number;
  onConnect: () => void;
};

const RecommendedClient: React.FC<Props> = ({
  isBestMatch,
  imagePath,
  name,
  age,
  address,
  distance,
  hireNumber,
  offerMin,
  offerMax,
  workItems,
  matchPercentage,
  onConnect,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div
      className={
        isBestMatch ? "border border-borderGreySelectColor shadow-md" : ""
      }
    >
      {isBestMatch && (
        <div className="block">
          <SvgRibbon></SvgRibbon>
        </div>
      )}
      <div className="flex p-4 m-2 font-arial justify-between border border-borderGreyColor">
        <div className="flex">
          <Image
            className="w-20 h-20 rounded-xl border-2   border-pink-600 mr-5"
            src={avatar}
            alt="Avatar"
          ></Image>
          <div className="inline-flex flex-col justify-center gap-x-2">
            <div className="flex items-center mb-2">
              <p className="text-black font-bold mr-2">{name}</p>
              <p className="text-distlineColor text-sm mr-auto">
                {age + "yrs/old"}
              </p>
              <p className="text-primary font-bold">
                {matchPercentage + "% Match"}
              </p>
            </div>
            <div className="flex">
              <p className="text-distlineColor text-sm mr-2">{address}</p>
              <p className="text-distlineColor text-sm">
                {distance + " miles away"}
              </p>
            </div>
            <div className="flex mb-2">
              <div className="flex items-center mr-6">
                <p className="text-sm font-bold mr-2">Hires:</p>
                <p className="text-sm text-distlineColor">
                  {hireNumber + " caregivers"}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-sm font-bold mr-2">Offer:</p>
                <p className="text-sm text-distlineColor">
                  {"$" + offerMin + " - " + offerMax + "/hr"}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              {workItems.map((item, index) => (
                <span
                  key={index}
                  className="bg-red-200 rounded-3xl text-bannerTextColor text-xs m-1 px-2 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <span
            className="flex items-center font-bold cursor-pointer px-3 py-2 my-8 bg-primary rounded-full text-white"
            onClick={() => setModalOpen(true)}
          >
            Schedule meeting
          </span>
        </div>
      </div>
      <ScheduleMettingModal
        open={modalOpen}
        setOpen={setModalOpen}
        name="Jimmy Dunta"
      />
    </div>
  );
};

export default RecommendedClient;
