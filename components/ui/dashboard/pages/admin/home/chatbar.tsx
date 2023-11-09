import { Dialog } from "@mui/material";
import React from "react";
import ChatArea from "../messages/ChatArea";
import Image from "next/image";
export default function chatbar({
  open,
  setopen,
}: {
  open: boolean;
  setopen: Function;
}) {
  const partnerName = "Gabby Alio";
  const subTitle = "medical support";

  return (
    <div
      className="flex justify-center items-center w-screen h-screen fixed left-0 top-0 bg-black bg-opacity-50 z-[1000]"
      style={{
        display: open ? "flex" : "none",
      }}
      onClick={() => setopen(false)}
    >
      <div className="w-[1420px]  bg-white">
        <div className="flex flex-row gap-2">
          <div className="w-2/3 h-[676px]">
            <div className="flex flex-row gap-3">
              <Image
                alt=""
                src="/images/chat/admin.svg"
                className=""
                width={451}
                height={249}
              />
              <Image
                alt=""
                src="/images/chat/caregiver.svg"
                className=""
                width={451}
                height={249}
              />
            </div>
            <Image
              alt=""
              src="/images/chat/client.svg"
              className="mt-3"
              width={924}
              height={593}
            />
          </div>
          <div className="w-1/3 h-[845px]">
            <ChatArea partner={partnerName} subtitle={subTitle} />
          </div>
        </div>
      </div>
    </div>
  );
}
