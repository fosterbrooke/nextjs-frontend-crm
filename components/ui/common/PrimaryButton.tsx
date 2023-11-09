import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const PrimaryButton = ({
  children,
  href,
  handleClick,
}: {
  children: React.ReactNode;
  href?: string;
  handleClick?: Function;
}) => {
  const router = useRouter();

  const handleButtonClick = () => {
    if (href == "" || href == "#" || href == undefined) {
      if (handleClick) handleClick();
    } else {
      if (href) router.push(href);
    }
  };

  return (
    <Button
      className="px-4 sm:px-4 py-1 bg-primary hover:bg-primary rounded-md normal-case"
      onClick={handleButtonClick}
    >
      <span className="text-primaryButtonTextColor text-smallPrimaryButtonTextSize sm:text-[20px] text-[14px]">
        {children}
      </span>
      {/* <Link
        className="text-primaryButtonTextColor text-bigPrimaryButtonTextSize sm:text-[20px] text-[14px]"
        href={href}
      >
        {children}
      </Link> */}
    </Button>
  );
};

PrimaryButton.displayName = "PrimaryButton";

export { PrimaryButton };
