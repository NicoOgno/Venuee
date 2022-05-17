import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../App';
import UserSideBar from '../../../components/UserSideBar/UserSideBar';
import styles from './style.module.css';
import apiUserServices from '../../../ApiServices/apiUserServices';

function UserSearchResults() {
  let navigate = useNavigate();

  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    apiUserServices.getUserProfileInfo(token);
  }, []);

  const currentUser = useContext(UserContext);
  const [user, setUser] = useState(currentUser);
  console.log(user);
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
