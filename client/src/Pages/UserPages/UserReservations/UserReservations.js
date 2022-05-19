import React, { useState, useEffect } from "react";
import apiUserServices from "../../../ApiServices/apiUserServices";
import UserSideBar from "../../../components/UserSideBar/UserSideBar";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import UserReservationCard from "../../../components/UserReservationCard/UserReservationCard";

function UserReservations() {
  let navigate = useNavigate();

  const [user, setUser] = useState({});
  const [userReservations, setUserReservations] = useState([]);

  const token = localStorage.getItem("accessToken");

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

  console.log(userReservations);

  return (
    <div className={styles.backgroundImg}>
      <div className={styles.userReservationContainer}>
        <UserSideBar user={user} className={styles.userSideBar} />
        <div className={styles.rightSideContainer}>
          {userReservations.map((item, index) => {
            return (
              <div className={styles.demoCard}>
                <UserReservationCard
                  vendor={item.vendorInfo}
                  date={item.reserveDate}
                  key={index}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UserReservations;
