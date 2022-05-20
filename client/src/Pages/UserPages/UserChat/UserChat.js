import React, { useState, useEffect } from 'react';
import UserSideBar from '../../../components/UserSideBar/UserSideBar';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';
import apiUserServices from '../../../ApiServices/apiUserServices';
import ChatCardHomeUser from '../../../components/ChatCardHomeUser/ChatCardHomeUser';

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

  return <ChatCardHomeUser user={user} />;
}

export default UserChat;
