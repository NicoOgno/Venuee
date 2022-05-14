import React from "react";
import UserSideBar from "../../../components/UserSideBar/UserSideBar";
import styles from "./style.module.css";

function UserSearchResults() {
  return (
    <div className={styles.backgroundImg}>
      <div className={styles.userSearchContainer}>
        <UserSideBar />
        <div className={styles.rightSideContainer}>
          <div className={styles.searchBarContainer}>
            <div className={styles.zipcode}>zipcode</div>
            <div className={styles.type}>type</div>
            <div className={styles.date}>date</div>
            <div className={styles.groupSize}>groupsize</div>
            <button className={styles.searchButton}>Update</button>
          </div>
          <div className={styles.resultsContainer}>
            <div className={styles.demoResult}></div>
            <div className={styles.demoResult}></div>
            <div className={styles.demoResult}></div>
            <div className={styles.demoResult}></div>
            <div className={styles.demoResult}></div>
            <div className={styles.demoResult}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserSearchResults;
