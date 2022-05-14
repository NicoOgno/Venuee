import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";

export const UserSidebarData = [
  {
    title: "FIND A VENUE",
    icon: (
      <SearchOutlinedIcon
        fontSize="large"
        color="white"
        height="40px"
        width="75px"
      />
    ),
    link: "/userSearch",
  },

  {
    title: "RESERVATIONS",
    icon: (
      <FormatListBulletedOutlinedIcon
        fontSize="large"
        color="white"
        height="40px"
        width="75px"
      />
    ),
    link: "/userReservations",
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
    link: "/userChat",
  },
];
