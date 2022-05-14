import React from "react";
import UserSideBar from "../../../components/UserSideBar/UserSideBar";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";

function UserSearch() {
  let navigate = useNavigate();
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
            {/* //TODO add on click to route to result page// */}
            <button
              className={styles.searchButton}
              onClick={() => {
                navigate("/searchResults");
              }}
            >
              Update
            </button>
          </div>
          <h1 className={styles.emptySearchText}>NO ITEMS YET</h1>
        </div>
      </div>
    </div>
  );
}

export default UserSearch;
