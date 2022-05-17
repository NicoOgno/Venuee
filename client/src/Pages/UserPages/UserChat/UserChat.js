import React, { useState, useEffect, useContext } from 'react';
import UserSideBar from '../../../components/UserSideBar/UserSideBar';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';
import { UserContext } from '../../../App';
import apiUserServices from '../../../ApiServices/apiUserServices';

function UserChat() {
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
      <div className={styles.userChatContainer}>
        <UserSideBar />
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
