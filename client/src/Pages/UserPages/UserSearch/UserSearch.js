import React, { useEffect, useState } from "react";
import UserSideBar from "../../../components/UserSideBar/UserSideBar";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import apiUserServices from "../../../ApiServices/apiUserServices";
import VenueSearchBar from "../../../components/VenueSearchBar/VenueSearchBar";

function UserSearch() {
  let navigate = useNavigate();

  const [userReservations, setUserReservations] = useState([]);
  const [user, setUser] = useState({});

  const token = localStorage.getItem("accessToken");

  const getUserReservations = async () => {
    let res = await apiUserServices.getUserReservations(token);
    setUserReservations(res);
  };

  const getUser = async () => {
    let res = await apiUserServices.getUserProfileInfo(token);
    setUser(res);
  };

  useEffect(() => {
    getUserReservations();
    getUser();
  }, []);
  console.log(userReservations);
  return (
    <div className={styles.backgroundImg}>
      <div className={styles.userSearchContainer}>
        <UserSideBar user={user} />
        <div className={styles.rightSideContainer}>
          <div className={styles.searchBarContainer}>
            {/* <div className={styles.zipcode}>zipcode</div>
            <div className={styles.type}>type</div>
            <div className={styles.date}>date</div>
            <div className={styles.groupSize}>groupsize</div> */}
            {/* //TODO add on click to route to result page// */}
            {/* <button
              className={styles.searchButton}
              onClick={() => {
                navigate("/searchResults");
              }}
            >
              Update
            </button> */}
            <VenueSearchBar
              onClick={() => {
                navigate("/searchResults");
              }}
            />
          </div>
          <h1 className={styles.emptySearchText}>NO ITEMS YET</h1>
        </div>
      </div>
    </div>
  );
}

export default UserSearch;
