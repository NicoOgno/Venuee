import React from "react";
import "./style.css";
import Reservation from "../VendorReservationCard/Reservation";

export default function Dashboard() {
  return (
    <div className="background-img">
      <div className="dashboard-container">
        <div className="sidebar-container"></div>
        <div className="reservations-container">
          <Reservation />
        </div>
      </div>
    </div>
  );
}
