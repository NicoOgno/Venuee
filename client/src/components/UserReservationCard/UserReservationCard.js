import React from 'react';
import VendorCardStyle from './style.module.css';
import moment from 'moment';

export default function Reservation({ vendor, date }) {
  return (
<<<<<<< HEAD
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
=======
    <div className={VendorCardStyle.reservationContainer}>
      <div className={VendorCardStyle.userImg}>
        <img src={vendor.vendorImg} />
      </div>
      <div className={VendorCardStyle.reservationInfo}>
        <h1 className={VendorCardStyle.reservationVenue}>{vendor.businessName}</h1>
        <h2 className={VendorCardStyle.venueType}>{vendor.type}</h2>
        <div className={VendorCardStyle.reservationDate}>
          <h1>{moment(date).format('dddd')}</h1>
          <h1>{moment(date).format('MMMM Do YYYY')}</h1>
>>>>>>> d05b4b9699c0bd8567362daa8d28415002cd1ced
        </div>
      </div>
    </div>
  );
}
