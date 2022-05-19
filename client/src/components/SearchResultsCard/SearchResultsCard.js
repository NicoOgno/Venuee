import React from 'react';
import styles from './searchResultsCard.module.css';
import six from '../../assets/images/6.jpg';

export default function SearchResultsCard({ info }) {
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
