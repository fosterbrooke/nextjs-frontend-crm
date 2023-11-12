import React, { useState } from "react";
import RecommendedClient from "../../../RecommendedClient";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const recommendedClientsData = [
  {
    isBestMatch: true,
    imagePath: "public/avatars/sample.png",
    name: "Jimmy Dunta",
    age: 76,
    address: "Maryland lane, Arizona, USA.",
    distance: 1.4,
    hireNumber: 45,
    offerMin: 12,
    offerMax: 35,
    workItems: [
      "Housekeeping",
      "Meal Preparation",
      "Meal Preparation",
      "24/7 Care",
      "Resipe Care",
    ],
    matchPercentage: 99.8,
  },
  {
    imagePath: "public/avatars/sample.png",
    name: "Jimmy Dunta",
    age: 76,
    address: "Maryland lane, Arizona, USA.",
    distance: 1.4,
    hireNumber: 45,
    offerMin: 12,
    offerMax: 35,
    workItems: [
      "Housekeeping",
      "Meal Preparation",
      "Meal Preparation",
      "24/7 Care",
      "Resipe Care",
    ],
    matchPercentage: 99.8,
  },
  {
    imagePath: "public/avatars/sample.png",
    name: "Jimmy Dunta",
    age: 76,
    address: "Maryland lane, Arizona, USA.",
    distance: 1.4,
    hireNumber: 45,
    offerMin: 12,
    offerMax: 35,
    workItems: [
      "Housekeeping",
      "Meal Preparation",
      "Meal Preparation",
      "24/7 Care",
      "Resipe Care",
    ],
    matchPercentage: 99.8,
  },
  {
    imagePath: "public/avatars/sample.png",
    name: "Jimmy Dunta",
    age: 76,
    address: "Maryland lane, Arizona, USA.",
    distance: 1.4,
    hireNumber: 45,
    offerMin: 12,
    offerMax: 35,
    workItems: [
      "Housekeeping",
      "Meal Preparation",
      "Meal Preparation",
      "24/7 Care",
      "Resipe Care",
    ],
    matchPercentage: 99.8,
  },
  {
    imagePath: "public/avatars/sample.png",
    name: "Jimmy Dunta",
    age: 76,
    address: "Maryland lane, Arizona, USA.",
    distance: 1.4,
    hireNumber: 45,
    offerMin: 12,
    offerMax: 35,
    workItems: [
      "Housekeeping",
      "Meal Preparation",
      "Meal Preparation",
      "24/7 Care",
      "Resipe Care",
    ],
    matchPercentage: 99.8,
  },
  {
    imagePath: "public/avatars/sample.png",
    name: "Jimmy Dunta",
    age: 76,
    address: "Maryland lane, Arizona, USA.",
    distance: 1.4,
    hireNumber: 45,
    offerMin: 12,
    offerMax: 35,
    workItems: [
      "Housekeeping",
      "Meal Preparation",
      "Meal Preparation",
      "24/7 Care",
      "Resipe Care",
    ],
    matchPercentage: 99.8,
  },
  {
    imagePath: "public/avatars/sample.png",
    name: "Jimmy Dunta",
    age: 76,
    address: "Maryland lane, Arizona, USA.",
    distance: 1.4,
    hireNumber: 45,
    offerMin: 12,
    offerMax: 35,
    workItems: [
      "Housekeeping",
      "Meal Preparation",
      "Meal Preparation",
      "24/7 Care",
      "Resipe Care",
    ],
    matchPercentage: 99.8,
  },
];

const raceItems = [
  "White & European American",
  "Hispanic & Latino American",
  "African American",
  "Asian American",
  "Native American & Alaska Natives",
  "Native Hawaiians & Pacific Islanders",
  "Middle Easterners & North African",
  "Asian American",
  "Others",
];

const genderItems = ["Any", "Male", "Female", "Prefer not to say"];

export default function RecommendationsPage() {
  const [filterMenuState, setFilterMenuState] = useState<boolean>(false);
  const [showCaregiver, setShowCaregiver] = useState<boolean>(false);

  const router = useRouter();

  const toggleFilterMenu = (open: boolean) => {
    setFilterMenuState(open);
  };

  const handleAccept = () => {
    router.push("/dashboard/caregiver/client_profile");
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5 h-full p-2">
        <div className="p-2">
          {!showCaregiver && (
            <div className="flex flex-col items-center pt-40">
              <p className="text-bannerTextColor text-xl">
                &quot;Clients in need of a caregiver will show up here&quot;
                view
              </p>
              <p className="text-bannerTextColor text-xl">
                <span
                  className="text-primary cursor-pointer text-xl"
                  onClick={() => setShowCaregiver(true)}
                >
                  recommendations
                </span>{" "}
                to get started
              </p>
            </div>
          )}
          {showCaregiver && (
            <div>
              <div className="text-center font-bold text-[24px] mb-4">
                You have 2 pending applications
              </div>
              {recommendedClientsData.map((item, index) => (
                <>
                  <RecommendedClient
                    key={index}
                    {...item}
                    onConnect={() => {}}
                  />
                  <div className="flex justify-center gap-4 py-2">
                    <span
                      className="bg-success hover:bg-success normal-case rounded-full px-4 py-2 text-white font-bold cursor-pointer"
                      onClick={handleAccept}
                    >
                      Accept
                    </span>
                    <span className="bg-brightRedColor hover:bg-brightRedColor normal-case rounded-full px-4 py-2 text-white font-bold cursor-pointer">
                      Reject
                    </span>
                  </div>
                </>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
