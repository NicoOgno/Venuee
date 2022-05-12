import React from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

export const UtilitiesData = [
  {
    title: "SETTINGS",
    icon: <SettingsOutlinedIcon color="white" height="30px" width="55px" />,
    link: "/profileInfo",
  },

  {
    title: "LOGOUT",
    icon: <LogoutIcon color="white" height="30px" width="55px" />,
    link: "/login",
  },
];
