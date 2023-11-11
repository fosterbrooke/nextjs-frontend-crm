import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { deepPurple } from "@mui/material/colors";
import { CalendarIcon } from "@/components/ui/common/Icons";
import { TimeIcon } from "@mui/x-date-pickers";
import DatePicker from "../../../DatePicker";

export default function Caregivermeetingrequest() {
  const [showday, setshowday] = useState(false);
  return (
    <div className="mx-10 mt-4">
      <div className="text-[#000] text-[24px] font-bold text-center">
        Caregivers Meeting Request
      </div>
      <div className="text-[#282828] text-center text-[14px]">
        Showing all 3 requests
      </div>
      <div className="mt-10">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className="flex justify-start gap-2 items-center">
              <div>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>FS</Avatar>
              </div>
              <div>
                <div className="text-[20px] text-[#828282]">Caregiver</div>
                <div className="text-[#282828] font-bold">
                  franksergio@rocketmail.com
                </div>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <div className="text-[24px]">Meeting Details</div>
              <div className="mt-4">
                <div className="w-2/3 flex justify-between">
                  <div className="flex gap-2">
                    <CalendarIcon className="text-primary" />
                    <span>Date</span>
                  </div>
                  <div className="text-[#282828] text-[20px] font-bold">
                    Wed, 23/10/2023
                  </div>
                  <div
                    className="text-[#4285F4] text-[20px] font-bold"
                    onClick={() => setshowday(!showday)}
                  >
                    Edit
                  </div>
                </div>
                <div className="w-2/3 flex justify-between mt-4">
                  <div className="flex gap-2">
                    <TimeIcon className="text-primary" />
                    <span>Time</span>
                  </div>
                  <div className="text-[#282828] text-[20px] font-bold">
                    02 : 34 PM
                  </div>
                  <div className="text-[#4285F4] text-[20px] font-bold">
                    Edit
                  </div>
                </div>
                <div className="w-3/4 flex justify-between mt-4">
                  <div className="flex gap-2">
                    <TimeIcon className="text-primary" />
                    <span>Description</span>
                  </div>
                  <div className="text-[#282828] text-[20px] font-bold">
                    I want a caregiver that listens and has empathy
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  style={{
                    color: "#828282",
                    border: "1px solid",
                    borderRadius: "4px",
                    borderColor: "#828282",
                    paddingInline: "16px",
                  }}
                >
                  Reject
                </button>
                <button
                  style={{
                    color: "white",
                    border: "1px solid",
                    borderRadius: "4px",
                    background: "#CB5A6F",
                    paddingInline: "16px",
                  }}
                >
                  Approve
                </button>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion className="mt-4">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className="flex justify-start gap-2 items-center">
              <div>
                <Avatar sx={{ bgcolor: deepPurple[200] }}>FS</Avatar>
              </div>
              <div>
                <div className="text-[20px] text-[#828282]">Caregiver</div>
                <div className="text-[#282828] font-bold">
                  franksergio@rocketmail.com
                </div>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <div className="text-[24px]">Meeting Details</div>
              <div className="mt-4">
                <div className="w-2/3 flex justify-between">
                  <div className="flex gap-2">
                    <CalendarIcon className="text-primary" />
                    <span>Date</span>
                  </div>
                  <div className="text-[#282828] text-[20px] font-bold">
                    Wed, 23/10/2023
                  </div>
                  <div className="text-[#4285F4] text-[20px] font-bold">
                    Edit
                  </div>
                </div>
                <div className="w-2/3 flex justify-between mt-4">
                  <div className="flex gap-2">
                    <TimeIcon className="text-primary" />
                    <span>Time</span>
                  </div>
                  <div className="text-[#282828] text-[20px] font-bold">
                    02 : 34 PM
                  </div>
                  <div className="text-[#4285F4] text-[20px] font-bold">
                    Edit
                  </div>
                </div>
                <div className="w-3/4 flex justify-between mt-4">
                  <div className="flex gap-2">
                    <TimeIcon className="text-primary" />
                    <span>Description</span>
                  </div>
                  <div className="text-[#282828] text-[20px] font-bold">
                    I want a caregiver that listens and has empathy
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  style={{
                    color: "#828282",
                    border: "1px solid",
                    borderRadius: "4px",
                    borderColor: "#828282",
                    paddingInline: "16px",
                  }}
                >
                  Reject
                </button>
                <button
                  style={{
                    color: "white",
                    border: "1px solid",
                    borderRadius: "4px",
                    background: "#CB5A6F",
                    paddingInline: "16px",
                  }}
                >
                  Approve
                </button>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion className="mt-4">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className="flex justify-start gap-2 items-center">
              <div>
                <Avatar sx={{ bgcolor: deepPurple[100] }}>FS</Avatar>
              </div>
              <div>
                <div className="text-[20px] text-[#828282]">Caregiver</div>
                <div className="text-[#282828] font-bold">
                  franksergio@rocketmail.com
                </div>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <div className="text-[24px]">Meeting Details</div>
              <div className="mt-4">
                <div className="w-2/3 flex justify-between">
                  <div className="flex gap-2">
                    <CalendarIcon className="text-primary" />
                    <span>Date</span>
                  </div>
                  <div className="text-[#282828] text-[20px] font-bold">
                    Wed, 23/10/2023
                  </div>
                  <div className="text-[#4285F4] text-[20px] font-bold">
                    Edit
                  </div>
                </div>
                <div className="w-2/3 flex justify-between mt-4">
                  <div className="flex gap-2">
                    <TimeIcon className="text-primary" />
                    <span>Time</span>
                  </div>
                  <div className="text-[#282828] text-[20px] font-bold">
                    02 : 34 PM
                  </div>
                  <div className="text-[#4285F4] text-[20px] font-bold">
                    Edit
                  </div>
                </div>
                <div className="w-3/4 flex justify-between mt-4">
                  <div className="flex gap-2">
                    <TimeIcon className="text-primary" />
                    <span>Description</span>
                  </div>
                  <div className="text-[#282828] text-[20px] font-bold">
                    I want a caregiver that listens and has empathy
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  style={{
                    color: "#828282",
                    border: "1px solid",
                    borderRadius: "4px",
                    borderColor: "#828282",
                    paddingInline: "16px",
                  }}
                >
                  Reject
                </button>
                <button
                  style={{
                    color: "white",
                    border: "1px solid",
                    borderRadius: "4px",
                    background: "#CB5A6F",
                    paddingInline: "16px",
                  }}
                >
                  Approve
                </button>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <div style={{ display: showday ? "block" : "none" }}>
        <DatePicker title="Start day" />
      </div>
    </div>
  );
}
