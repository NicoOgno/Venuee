import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";

export const VendorSidebarData = [
  {
    title: "DASHBOARD",
    icon: (
      <HomeOutlinedIcon
        fontSize="large"
        color="white"
        height="40px"
        width="75px"
      />
    ),
    link: "/vendorReservations",
  },

  {
    title: "AVAILABILITY",
    icon: (
      <CalendarMonthOutlinedIcon
        fontSize="large"
        color="white"
        height="40px"
        width="75px"
      />
    ),
    link: "/setAvailabilty",
  },

  {
    title: "CHAT",
    icon: (
      <ChatOutlinedIcon
        fontSize="large"
        color="white"
        height="40px"
        width="75px"
      />
    ),
    link: "/vendorChat",
  },
];
