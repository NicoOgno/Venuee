import React from "react";
import ReservationWindowStyle from "./style.module.css";

function onClick() {
  alert("You made the reservation!");
}

export default function ReservationWindow() {
  return (
    <div className={ReservationWindowStyle.reservationContainer}>
      <div className={ReservationWindowStyle.venueImg}>
        <img src={require("../../assets/images/6.jpg")} alt="img" />
      </div>
      <div className={ReservationWindowStyle.reservationInfo}>
        <div className={ReservationWindowStyle.reservationInfoBox}>
          <h1 className={ReservationWindowStyle.venueName}>Picolo Sogno</h1>
          <h1 className={ReservationWindowStyle.reservationDate}>
            May 08, 2022
          </h1>
        </div>
        <p className={ReservationWindowStyle.venueBio}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <button
        onClick={onClick}
        className={ReservationWindowStyle.reserveButton}
      >
        {" "}
        Reserve{" "}
      </button>
    </div>
  );
}
