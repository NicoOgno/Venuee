import React from "react";
import "./style.css";
import logo from "../../assets/images/clipart1129793.png";
import { UserSidebarData } from "./UserSidebarData";
import { UserUtilitiesData } from "./UserUtilitiesData";

function UserSideBar() {
  return (
    <div className="sidebar-container">
      <div className="profile-header">
        <img src={logo} className="profile-img" />
        <div className="profile-name">Booger</div>
      </div>
      <div>
        <ul className="sidebar-list">
          {UserSidebarData.map((value, key) => {
            return (
              <li
                key={key}
                className="row"
                id={window.location.pathname === value.link ? "active" : ""}
                onClick={() => {
                  window.location.pathname = value.link;
                }}
              >
                <div className="icon">{value.icon}</div>
                <div className="title">{value.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <ul className="util-sidebar-list">
          {UserUtilitiesData.map((value, key) => {
            return (
              <li
                key={key}
                className="util-row"
                id={window.location.pathname === value.link ? "active" : ""}
                onClick={() => {
                  window.location.pathname = value.link;
                }}
              >
                <div className="util-icon">{value.icon}</div>
                <div className="util-title">{value.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default UserSideBar;
