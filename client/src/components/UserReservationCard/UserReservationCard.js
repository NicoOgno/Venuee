import React from 'react';
import VendorCardStyle from './style.module.css';
import moment from 'moment';

export default function Reservation({ vendor, date }) {
  return (
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
        </div>
        <a href="#" className={VendorCardStyle.reservationCancelButton}>
          CANCEL RESERVATION
        </a>
      </div>
    </div>
  );
}
