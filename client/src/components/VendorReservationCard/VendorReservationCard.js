import React from "react";
import VendorCardStyle from "./style.module.css";

export default function Reservation({ imageUrl, name, date }) {
  return (
    <div className={VendorCardStyle.userContainer}>
      <div className={VendorCardStyle.userImg}>
        <img
          src={require("../../assets/images/10007447_1405252279743343_829523453_n.jpg")}
        />
      </div>
      <div className={VendorCardStyle.userInfo}>
        <h1 className={VendorCardStyle.userName}>Mike Wells</h1>
        <p className={VendorCardStyle.userCompany}>Codeworks</p>
        <div className={VendorCardStyle.reservationDate}>
          <h1>Monday</h1>
          <h1>May 13, 2022</h1>
        </div>
        <a href="#" className={VendorCardStyle.reservationCancelButton}>
          CANCEL RESERVATION
        </a>
      </div>
    </div>
  );
}
