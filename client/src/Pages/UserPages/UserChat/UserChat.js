import React, { useState, useEffect } from 'react';
import UserSideBar from '../../../components/UserSideBar/UserSideBar';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';
import apiUserServices from '../../../ApiServices/apiUserServices';

function UserChat() {
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
      <div className={styles.userChatContainer}>
        <UserSideBar user={user} />
        <div className={styles.rightSideContainer}>
          <div className={styles.demoCard}>chat</div>
          <div className={styles.demoCard}>chat</div>
          <div className={styles.demoCard}>chat</div>
        </div>
      </div>
    </div>
  );
}

export default UserChat;
