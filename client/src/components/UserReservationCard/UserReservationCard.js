import React from "react";
import VendorCardStyle from "./style.module.css";

export default function Reservation({ imageUrl, name, date }) {
  return (
    <div className={VendorCardStyle.mainContainer}>
      <div className={VendorCardStyle.reservationContainer}>
        <div className={VendorCardStyle.userImg}>
          <img src={require("../../assets/images/6.jpg")} />
        </div>
        <div className={VendorCardStyle.reservationInfo}>
          <h1 className={VendorCardStyle.reservationVenue}>Mr.Purple</h1>
          <h2 className={VendorCardStyle.venueType}>Lounge</h2>
          <div className={VendorCardStyle.reservationDate}>
            <h1 className={VendorCardStyle.reservationDay}>Monday</h1>
            <h1>May 13, 2022</h1>
          </div>
          <a href="#" className={VendorCardStyle.reservationCancelButton}>
            CANCEL RESERVATION
          </a>
        </div>
      </div>
    </div>
  );
}
