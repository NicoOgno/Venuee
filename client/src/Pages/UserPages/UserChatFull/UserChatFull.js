import React, { useState, useEffect } from 'react';
import apiUserServices from '../../../ApiServices/apiUserServices';
import ChatPage from '../../../components/ChatPage/ChatPage';
import { useNavigate } from 'react-router-dom';
import UserSideBar from '../../../components/UserSideBar/UserSideBar';

function UserChatFull() {
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
  return (
    <>
      {/* <UserSideBar /> */}
      <ChatPage />
    </>
  );
}

export default UserChatFull;
