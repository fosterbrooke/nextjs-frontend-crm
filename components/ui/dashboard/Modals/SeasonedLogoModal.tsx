import React, { ReactElement, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Dialog, Divider } from "@mui/material";
import Image from "next/image";

import app_logo from "@/public/icons/app_logo.svg";

export default function SeasonedLogoModal({
  open,
  onClose,
  footer,
  content,
}: {
  open: boolean;
  onClose: any;
  content: ReactElement;
  footer: ReactElement;
}) {
  const router = useRouter();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      onClick={(event) => event.stopPropagation()}
    >
      <div className="flex flex-col p-4">
        <div className="flex justify-center">
          <Image
            alt="logo"
            src={app_logo}
            onClick={() => router.push("/")}
            width={135}
            priority={false}
            style={{ height: "auto" }}
          />
        </div>
        {content}
        <div className="my-4">
          <Divider />
        </div>
        <div className="flex justify-center gap-4">{footer}</div>
      </div>
    </Dialog>
  );
}
