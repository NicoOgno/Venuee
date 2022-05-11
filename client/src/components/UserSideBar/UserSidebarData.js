import React from "react";
import { SearchOutline, ListOutline, ChatbubblesOutline } from "react-ionicons";

export const UserSidebarData = [
  {
    title: "FIND A VENUE",
    icon: <SearchOutline color="white" height="40px" width="75px" />,
    link: "/search",
  },

  {
    title: "RESERVATIONS",
    icon: <ListOutline color="white" height="40px" width="75px" />,
    link: "/userReservations",
  },

  {
    title: "CHAT",
    icon: <ChatbubblesOutline color="white" height="40px" width="75px" />,
    link: "/userChat",
  },
];
