import React from 'react';
import VendorCardStyle from './style.module.css';
import moment from 'moment';

export default function Reservation({ user, date }) {
  return (
    <div className={VendorCardStyle.mainContainer}>
      <div className={VendorCardStyle.userContainer}>
        <div className={VendorCardStyle.userImg}>
          <img src={user.userImg} />
        </div>
        <div className={VendorCardStyle.userInfo}>
          <h1 className={VendorCardStyle.userName}>{user.userName}</h1>
          <p className={VendorCardStyle.userCompany}>{user.company}</p>
          <div className={VendorCardStyle.reservationDate}>
            <h1 className={VendorCardStyle.reservationDay}>{moment(date).format('dddd')}</h1>
            <h1 className={VendorCardStyle.reservationDay}>
              {moment(date).format('MMMM Do YYYY')}
            </h1>
          </div>
          <a href="#" className={VendorCardStyle.reservationCancelButton}>
            CANCEL RESERVATION
          </a>
        </div>
      </div>
    </div>
  );
}
