import React, { useState, useEffect } from "react";
import apiUserServices from "../../../ApiServices/apiUserServices";
import UserSideBar from "../../../components/UserSideBar/UserSideBar";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import UserReservationCard from "../../../components/UserReservationCard/UserReservationCard";

function UserReservations() {
  let navigate = useNavigate();

<<<<<<< HEAD
  const token = localStorage.getItem("accessToken");
=======
  const [user, setUser] = useState({});
  const [userReservations, setUserReservations] = useState([]);

  const token = localStorage.getItem('accessToken');
>>>>>>> d05b4b9699c0bd8567362daa8d28415002cd1ced

  const getUserReservations = async () => {
    let res = await apiUserServices.getUserReservations(token);
    setUserReservations(res);
  };

  const getUser = async () => {
    let res = await apiUserServices.getUserProfileInfo(token);
    setUser(res);
  };

  useEffect(() => {
    getUser();
    getUserReservations();
  }, []);

<<<<<<< HEAD
  const [user, setUser] = useState({});
  console.log("this is state", user);
=======
  console.log(userReservations);
>>>>>>> d05b4b9699c0bd8567362daa8d28415002cd1ced

  return (
    <div className={styles.backgroundImg}>
      <div className={styles.userReservationContainer}>
        <UserSideBar user={user} />
        <div className={styles.rightSideContainer}>
          {userReservations.map((item, index) => {
            return (
              <UserReservationCard vendor={item.vendorInfo} date={item.reserveDate} key={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UserReservations;
