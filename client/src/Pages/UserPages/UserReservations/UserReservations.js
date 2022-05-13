import React from "react";
import UserSideBar from "../../../components/UserSideBar/UserSideBar";
import styles from "./style.module.css";

function UserReservations() {
  return (
    <div className={styles.backgroundImg}>
      <div className={styles.userReservationContainer}>
        <UserSideBar />
        <div className={styles.rightSideContainer}>
          <div className={styles.demoCard}>ressy</div>
          <div className={styles.demoCard}>ressy</div>
          <div className={styles.demoCard}>ressy</div>
          <div className={styles.demoCard}>ressy</div>
          <div className={styles.demoCard}>ressy</div>
          <div className={styles.demoCard}>ressy</div>
        </div>
      </div>
    </div>
  );
}

export default UserReservations;
