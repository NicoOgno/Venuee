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
          <h1 className={VendorCardStyle.reservationRestaurant}>Mr.Purple</h1>
          <div className={VendorCardStyle.reservationDate}>
            <h1>Monday</h1>
            <h1>May 13, 2022</h1>
          </div>
          <p className={VendorCardStyle.reservationBio}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <a href="#" className={VendorCardStyle.reservationCancelButton}>
            CANCEL RESERVATION
          </a>
        </div>
      </div>
    </div>
  );
}
