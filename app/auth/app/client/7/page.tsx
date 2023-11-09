"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

import WithRightBG from "@/components/ui/auth/WithRightBG";
import LogoImg from "@/components/ui/auth/LogoImg";
import FormPrimaryBtn from "@/components/ui/auth/FormPrimaryBtn";
import Role from "@/components/ui/auth/Role";
import CallAssistance from "@/components/ui/auth/CallAssistance";
import BackBtn from "@/components/ui/auth/client/BackBtn";
import ProgressStatusBar from "@/components/ui/auth/client/ProgressStatusBar";
import OptionalLbl from "@/components/ui/auth/client/OptionalLbl";
import SaveExitBtn from "@/components/ui/auth/client/SaveExitBtn";
import ContinueBtn from "@/components/ui/auth/client/ContinueBtn";
import ComMethodSel from "@/components/ui/auth/client/ComMethodSel";
import MultiRangeSlider from "@/components/ui/auth/MultiRangeSlider";

type comMethodDataType = {
  id: number;
  title: string;
};

const comMethodData: comMethodDataType[] = [
  {
    id: 0,
    title: "Daily",
  },
  {
    id: 1,
    title: "Weekly",
  },
  {
    id: 2,
    title: "Bi Weekly",
  },
];

const SelectOption = () => {
  const router = useRouter();
  const [showRoleSelected, setShowRoleSelected] = useState(0);
  const [selectedComMethodID, setComMethodId] = useState<number>();

  return (
    <>
      <WithRightBG imgpathname="/images/registration_img_7.png">
        <LogoImg onClicked={() => router.push("/")} />
        <div className="flex ml-8 mt-[145px] fixed">
          <BackBtn onClicked={() => router.push("/auth/app/client/6")} />
        </div>
        <ProgressStatusBar completeness={7} hasBack={true} />
        {/* <OptionalLbl /> */}
        <div className="px-8 mx-auto mt-8 sm:w-full">
          <div
            className="text-center"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className=" text-[32px] text-textdarkColor font-arial font-bold">
              Care-Budget
            </div>
            <div className="text-base text-distlineColor font-arial font-normal mt-4 mx-7">
              &nbsp;&nbsp;&nbsp; Please indicate your budget for the care
              services on a [weekly/monthly] basis. Your input will help us
              tailor our care options to align with your preferences and
              financial requirements
            </div>
            <div
              className="text-base text-textdarkColor font-arial font-bold mt-6"
              style={{ width: "max-content" }}
            >
              Create your budget
              <div className="text-sm mt-6">Choose type of stay (optional)</div>
              <div className="justify-center gap-2 grid grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-4 sm:grid-cols-2">
                <div
                  onClick={() => {
                    setShowRoleSelected(1);
                  }}
                >
                  <div
                    className={`w-[146px] h-[156px] relative text-center border-solid ${
                      showRoleSelected === 1
                        ? "border-borderSelectColor"
                        : "border-borderGreyColor"
                    } ${
                      showRoleSelected === 1 ? "border-[3px]" : "border-[1px]"
                    } mx-auto mt-[9px]`}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Image
                      alt="sketch"
                      src="/gifs/caregiver.gif"
                      width={70}
                      height={70}
                      className="mx-auto mt-[9px]"
                    />
                    <div className="mb-2">
                      <div className="text-sm font-arial font-bold mt-4">
                        Live-In Care
                      </div>
                      <div className="text-xs text-distlineColor font-arial font-light mx-[5px]">
                        For continuous, around-the-clock care
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => {
                    setShowRoleSelected(2);
                  }}
                >
                  <div
                    className={`w-[146px] h-[156px] relative text-center border-solid ${
                      showRoleSelected === 2
                        ? "border-borderSelectColor"
                        : "border-borderGreyColor"
                    } ${
                      showRoleSelected === 2 ? "border-[3px]" : "border-[1px]"
                    } mx-auto mt-[9px]`}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Image
                      alt="sketch"
                      src="/gifs/caregive_job.gif"
                      width={70}
                      height={70}
                      className="mx-auto mt-[9px]"
                    />
                    <div className="mb-2">
                      <div className="text-sm font-arial font-bold mt-4">
                        Overnight Care
                      </div>
                      <div className="text-xs text-distlineColor font-arial font-light mx-[5px]">
                        For care during nighttime hours
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => {
                    setShowRoleSelected(3);
                  }}
                >
                  <div
                    className={`w-[146px] h-[156px] relative text-center border-solid ${
                      showRoleSelected === 3
                        ? "border-borderSelectColor"
                        : "border-borderGreyColor"
                    } ${
                      showRoleSelected === 3 ? "border-[3px]" : "border-[1px]"
                    } mx-auto mt-[9px]`}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Image
                      alt="sketch"
                      src="/gifs/caregiver.gif"
                      width={70}
                      height={70}
                      className="mx-auto mt-[9px]"
                    />
                    <div className="mb-2">
                      <div className="text-sm font-arial font-bold mt-4">
                        Short Notice Care
                      </div>
                      <div className="text-xs text-distlineColor font-arial font-light mx-[5px]">
                        For emergency or last-minute care
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => {
                    setShowRoleSelected(4);
                  }}
                >
                  <div
                    className={`w-[146px] h-[156px] relative text-center border-solid ${
                      showRoleSelected === 4
                        ? "border-borderSelectColor"
                        : "border-borderGreyColor"
                    } ${
                      showRoleSelected === 4 ? "border-[3px]" : "border-[1px]"
                    } mx-auto mt-[9px]`}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Image
                      alt="sketch"
                      src="/gifs/caregive_job.gif"
                      width={70}
                      height={70}
                      className="mx-auto mt-[9px]"
                    />
                    <div className="mb-2">
                      <div className="text-sm font-arial font-bold mt-4">
                        Daily Care
                      </div>
                      <div className="text-xs text-distlineColor font-arial font-light mx-[5px]">
                        For regular, scheduled care during the day
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">Preferred Payment Plan</div>
              <div className="justify-center sm:gap-[10px] lg:gap-[10px] xl:gap-[10px] gap-[39px] grid grid-cols-3 xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-3 sm:grid-cols-1 mt-[-11px] my-[-15px]">
                {comMethodData.map((item, index) => (
                  <ComMethodSel
                    key={`com_method_sel_${index}`}
                    title={item.title}
                    status={item.id === selectedComMethodID ? true : false}
                    onClick={(e) => {
                      if (
                        e.type === "click" &&
                        e.clientX !== 0 &&
                        e.clientY !== 0
                      ) {
                        setComMethodId(item.id);
                      }
                    }}
                  />
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="mt-20"
              ></div>
              <div>
                <MultiRangeSlider
                  min={0}
                  max={200}
                  onChange={({ min, max }: { min: number; max: number }) =>
                    console.log(`min = ${min}, max = ${max}`)
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mx-8 mt-[50px]">
          <SaveExitBtn onClicked={() => {}} />
          <ContinueBtn onClicked={() => router.push("/auth/app/client/8")} />
        </div>
      </WithRightBG>
    </>
  );
};

export default SelectOption;
