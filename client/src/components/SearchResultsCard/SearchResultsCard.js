import React from 'react';
import apiUserServices from '../../ApiServices/apiUserServices';
import styles from './searchResultsCard.module.css';
import apiVendorServices from '../../ApiServices/apiVendorServices';
import apiReservationServices from '../../ApiServices/reservationServices';

export default function SearchResultsCard({ info, partySize, date }) {
  let businessName = info.businessName;
  const vendorId = getVendorId();

  const getVendorId = async () => {
    const vendorId = await apiVendorServices.getVendorByName(businessName);
    return vendorId;
  };

  return (
    <div className={styles.cardContainer}>
      <img src={info.vendorImg} className={styles.cardImg}></img>
      <div className={styles.bottomContainer}>
        <div className={styles.infoContainer}>
          <span className={styles.venueName}>{info.businessName}</span>
          <span className={styles.venueType}>{info.type}</span>
        </div>
        <button className={styles.reserveButton}>RESERVE</button>
      </div>
    </div>
  );
}
