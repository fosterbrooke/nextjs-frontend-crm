import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useRef, useState } from "react";
import ChooseDay from "../ChooseDay";
import ChooseTime from "../ChooseTime";
import { PrimaryButton } from "../../common/PrimaryButton";
import Image from "next/image";
import avatar from "/public/avatars/sample.png";
import InputField from "../../auth/client/InputField";
import ChangeConfirmModal from "./ChangeConfirmModal";

export default function AddNewServiceModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: any;
}) {
  const fileInputRef = useRef(null);

  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <div
      className="flex justify-center items-center w-screen h-screen fixed left-0 top-0 bg-black bg-opacity-50 z-[1000]"
      style={{
        display: open ? "flex" : "none",
      }}
      onClick={() => setOpen(false)}
    >
      <div
        className="px-4 py-4 bg-white z-[1005] w-1/2"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center">
          <div className="text-[#CB5A6F] font-bold text-xl w-full">
            Add New Service
          </div>
          <div className="ml-auto">
            <IconButton onClick={() => setConfirmOpen(true)}>
              <CloseIcon />
            </IconButton>
          </div>
        </div>
        <div className="flex flex-col mx-4 mt-4">
          <div className="flex flex-col">
            <span className="text-xs text-distlineColor">
              Set service image
            </span>
            <div
              className="border border-dashed border-distlineColor rounded-lg flex justify-center items-center py-12 mt-2 w-2/5 cursor-pointer"
              onClick={() => fileInputRef.current.click()}
            >
              <span className="font-bold underline underline-offset-2">
                Choose file
              </span>
            </div>
            <input type="file" style={{ display: "none" }} ref={fileInputRef} />
          </div>
          <div className="mt-6">
            <InputField
              type="text"
              title="Set service name"
              placholder="Enter title"
              value=""
              handleChange={() => {}}
            />
          </div>
          <div className="mt-6">
            <InputField
              type="text"
              title="Set service description"
              placholder=""
              value=""
              multiline={true}
              rows={6}
              handleChange={() => {}}
            />
          </div>
          <div className="text-center my-6">
            <PrimaryButton className="text-[20px]" handleClick={() => {}}>
              Save
            </PrimaryButton>
          </div>
        </div>
      </div>
      <ChangeConfirmModal
        open={confirmOpen}
        onCancel={() => setConfirmOpen(false)}
        onDiscard={() => {
          setOpen(false);
          setConfirmOpen(false);
        }}
      />
    </div>
  );
}
