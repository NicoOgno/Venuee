import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserSideBar from '../../../components/UserSideBar/UserSideBar';
import apiUserServices from '../../../ApiServices/apiUserServices';
import UserSettings from '../../../components/UserSettings/UserSettings';

function UserProfileInfo() {
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

  return <UserSettings user={user} />;
}

export default UserProfileInfo;
