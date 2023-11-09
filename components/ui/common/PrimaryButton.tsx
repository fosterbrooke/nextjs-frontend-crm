import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const PrimaryButton = ({
  children,
  href,
  handleClick,
}: {
  children: React.ReactNode;
  href: string;
  handleClick?: Function;
}) => {
  return (
    <Button
      className="px-4 sm:px-4 py-1 bg-primary hover:bg-primary rounded-md normal-case"
      // onClick={() => (handleClick === undefined ? null : handleClick())}
    >
      <Link
        className="text-primaryButtonTextColor text-bigPrimaryButtonTextSize sm:text-[20px] text-[14px]"
        href={href}
      >
        {children}
      </Link>
    </Button>
  );
};

PrimaryButton.displayName = "PrimaryButton";

export { PrimaryButton };
