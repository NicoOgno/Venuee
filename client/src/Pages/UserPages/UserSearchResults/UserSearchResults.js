import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserSideBar from '../../../components/UserSideBar/UserSideBar';
import styles from './style.module.css';
import apiUserServices from '../../../ApiServices/apiUserServices';

function UserSearchResults() {
  let navigate = useNavigate();

  const [userReservations, setUserReservations] = useState([]);
  const [user, setUser] = useState({});

  const token = localStorage.getItem('accessToken');

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

  return (
    <div className={styles.backgroundImg}>
      <div className={styles.userSearchContainer}>
        <UserSideBar user={user} />
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
