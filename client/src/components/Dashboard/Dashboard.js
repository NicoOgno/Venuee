import React from "react";
import "./style.css";
import UserReservationCard from "../UserReservationCard/UserReservationCard";

export default function Dashboard() {
  return (
    <div className="background-img">
      <div className="dashboard-container">
        <div className="sidebar-container"></div>
        <div className="reservations-container">
          <UserReservationCard />
        </div>
      </div>
    </div>
  );
}
