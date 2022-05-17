import React, { useState, useEffect } from 'react';
import apiUserServices from '../../../ApiServices/apiUserServices';
import UserSideBar from '../../../components/UserSideBar/UserSideBar';
import styles from './style.module.css';
import { useNavigate } from 'react-router-dom';

function UserReservations() {
  let navigate = useNavigate();

  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    const getUser = async () => {
      let res = await apiUserServices.getUserProfileInfo(token);
      setUser(res);
    };
    getUser();
  }, []);

  const [user, setUser] = useState({});
  console.log('this is state', user);

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
