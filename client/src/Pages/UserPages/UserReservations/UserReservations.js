import React, { useState, useEffect, useContext } from 'react';
import apiUserServices from '../../../ApiServices/apiUserServices';
import UserSideBar from '../../../components/UserSideBar/UserSideBar';
import styles from './style.module.css';
import { UserContext } from '../../../App';
import { useNavigate } from 'react-router-dom';

function UserReservations() {
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
