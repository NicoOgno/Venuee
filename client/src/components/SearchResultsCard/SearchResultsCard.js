import React from "react";
import styles from "./searchResultsCard.module.css";
import six from "../../assets/images/6.jpg";

export default function SearchResultsCard() {
  return (
    <div className={styles.cardContainer}>
      <img src={six} className={styles.cardImg}></img>
      <div className={styles.bottomContainer}>
        <div className={styles.infoContainer}>
          <span className={styles.venueName}>Blue's Cat Cafe</span>
          <span className={styles.venueType}>Restaurant</span>
        </div>
        <button className={styles.reserveButton}>RESERVE</button>
      </div>
    </div>
  );
}
