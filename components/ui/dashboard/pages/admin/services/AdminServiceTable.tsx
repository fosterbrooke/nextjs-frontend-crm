import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

interface AdminServiceItem {
  client: string;
  caregiver: string;
  type: string;
}

const fakeData: AdminServiceItem[] = [
  {
    client: "Wendall Flynn",
    caregiver: "Frank Sergio",
    type: "Assistance with Mobility and Physical Exercise",
  },
  {
    client: "Wendall Flynn",
    caregiver: "Frank Sergio",
    type: "Assistance with Mobility and Physical Exercise",
  },
  {
    client: "Wendall Flynn",
    caregiver: "Frank Sergio",
    type: "Assistance with Mobility and Physical Exercise",
  },
  {
    client: "Wendall Flynn",
    caregiver: "Frank Sergio",
    type: "Assistance with Mobility and Physical Exercise",
  },
  {
    client: "Wendall Flynn",
    caregiver: "Frank Sergio",
    type: "Assistance with Mobility and Physical Exercise",
  },
  {
    client: "Wendall Flynn",
    caregiver: "Frank Sergio",
    type: "Assistance with Mobility and Physical Exercise",
  },
  {
    client: "Wendall Flynn",
    caregiver: "Frank Sergio",
    type: "Assistance with Mobility and Physical Exercise",
  },
  {
    client: "Wendall Flynn",
    caregiver: "Frank Sergio",
    type: "Assistance with Mobility and Physical Exercise",
  },
  {
    client: "Wendall Flynn",
    caregiver: "Frank Sergio",
    type: "Assistance with Mobility and Physical Exercise",
  },
];

export default function AdminServiceTable() {
  return (
    <Table>
      <TableHead>
        <TableRow className="text-distlineColor bg-[#F9FAFB] rounded-lg">
          <TableCell sx={{ width: "30%" }}>Client</TableCell>
          <TableCell sx={{ width: "30%" }}>Assigned Caregiver</TableCell>
          <TableCell sx={{ width: "40%" }}>Service Types</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {fakeData.map((item, idx) => (
          <TableRow key={`adminservicetable-row-${idx}`}>
            <TableCell className="text-textdarkColor font-bold">
              {item.client}
            </TableCell>
            <TableCell className="text-textdarkColor">
              {item.caregiver}
            </TableCell>
            <TableCell className="text-distlineColor">{item.type}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
