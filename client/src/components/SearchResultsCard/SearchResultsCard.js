import React, { useState } from 'react';
import apiUserServices from '../../ApiServices/apiUserServices';
import styles from './searchResultsCard.module.css';
import apiVendorServices from '../../ApiServices/apiVendorServices';
import apiReservationServices from '../../ApiServices/reservationServices';
import { useNavigate } from 'react-router-dom';

export default function SearchResultsCard({ info, partySize, date, token }) {
  let navigate = useNavigate();
  const businessName = { businessName: info.businessName };
  let data = { reserveDate: date, partySize };

  const createRes = async () => {
    const vendorId = await apiVendorServices.getVendorByName(businessName);
    const newRes = await apiReservationServices.createRes(token, { ...data, vendorId });
    console.log('res created', newRes);
    navigate('/userReservations');
  };

  return (
    <div className={styles.cardContainer}>
      <img src={info.vendorImg} className={styles.cardImg}></img>
      <div className={styles.bottomContainer}>
        <div className={styles.infoContainer}>
          <span className={styles.venueName}>{info.businessName}</span>
          <span className={styles.venueType}>{info.type}</span>
        </div>
        <button type="submit" onClick={createRes} className={styles.reserveButton}>
          RESERVE
        </button>
      </div>
    </div>
  );
}
