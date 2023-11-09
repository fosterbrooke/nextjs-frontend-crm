import { Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Fade from "@mui/material/Fade";

const MenuButton = styled(Button)`
  display: flex;
  align-items: center;
  color: #282828;
  text-transform: none;
  font-weight: 700;
`;

export default function ConditionSelect({
  icon,
  method,
  by,
  choices,
}: {
  icon: any;
  method: string;
  by: string;
  choices: string[];
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex">
      <div className="text-[#828282] flex items-center">
        {icon}
        <span
          style={{ fontFamily: "Arial", fontSize: "14px" }}
        >{`${method.toUpperCase()} BY`}</span>
      </div>
      <div>
        <MenuButton
          aria-controls={isMenuOpen ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={isMenuOpen ? "true" : undefined}
          onClick={handleClick}
        >
          {by}
          {<ArrowDropDownIcon />}
        </MenuButton>
        <Menu
          anchorEl={anchorEl}
          open={isMenuOpen}
          onClose={handleMenuClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          TransitionComponent={Fade}
        >
          {choices.map((choice, idx) => (
            <MenuItem
              key={`condition-select-menu-item-${idx}`}
              onClick={handleMenuClose}
            >
              {choice}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
}
