import React from "react";
import { SettingsOutline, LogOutOutline } from "react-ionicons";

export const UserUtilitiesData = [
  {
    title: "SETTINGS",
    icon: <SettingsOutline color="white" height="30px" width="55px" />,
    link: "/profileInfo",
  },

  {
    title: "LOGOUT",
    icon: <LogOutOutline color="white" height="30px" width="55px" />,
    link: "/login",
  },
];
