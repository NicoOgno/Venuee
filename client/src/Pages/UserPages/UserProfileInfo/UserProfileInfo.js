import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserSideBar from '../../../components/UserSideBar/UserSideBar';
import apiUserServices from '../../../ApiServices/apiUserServices';
import { UserContext } from '../../../App';
// import styles from "./styles.module.css";

function UserProfileInfo() {
  let navigate = useNavigate();

  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    apiUserServices.getUserProfileInfo(token);
  }, []);

  const currentUser = useContext(UserContext);
  const [user, setUser] = useState(currentUser);
  console.log(user);
  return <UserSideBar />;
}

export default UserProfileInfo;
