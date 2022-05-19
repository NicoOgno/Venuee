import React, { useEffect, useState } from "react";
import UserSideBar from "../../../components/UserSideBar/UserSideBar";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import apiUserServices from "../../../ApiServices/apiUserServices";

const initialFormState = {
  dateRequested: "",
  zipcodeRequested: "",
  typeRequested: "",
  groupSize: "",
};

function UserSearch() {
  let navigate = useNavigate();

  const [userReservations, setUserReservations] = useState([]);

  const [user, setUser] = useState({});

  const [formState, setFormState] = useState(initialFormState);

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
    getUserReservations();
    getUser();
  }, []);
  // console.log(userReservations);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  console.log(formState);
  return (
    <div className={styles.backgroundImg}>
      <div className={styles.userSearchContainer}>
        <UserSideBar user={user} />
        <div className={styles.rightSideContainer}>
          <div className={styles.searchBarContainer}>
            {/* <div className={styles.zipcode}>zipcode</div>
            <div className={styles.type}>type</div>
            <div className={styles.date}>date</div>
            <div className={styles.groupSize}>groupsize</div> */}
            {/* //TODO add on click to route to result page// */}
            {/* <button
              className={styles.searchButton}
              onClick={() => {
                navigate("/searchResults");
              }}
            >
              Update
            </button> */}
            <form className={styles.formHolder}>
              <input
                placeholder="*ZIP CODE"
                name="zipcodeRequested"
                value={formState.zipcodeRequested}
                onChange={handleOnChange}
                className={styles.zipCode}
              />
              <select
                id="type"
                name="typeRequested"
                value={formState.typeRequested}
                onChange={handleOnChange}
                className={styles.typeSelector}
              >
                <option defaultValue="">TYPE</option>
                <option value="bar">BAR</option>
                <option value="restaurant">RESTAURANTE</option>
                <option value="lounge">LOUNGE</option>
                <option value="banquetHall">BANQUET HALL</option>
              </select>
              <input
                type="date"
                name="dateRequested"
                value={formState.dateRequested}
                onChange={handleOnChange}
                className={styles.dateSelect}
              />
              <input
                placeholder="GROUP SIZE"
                name="groupSize"
                value={formState.groupSize}
                onChange={handleOnChange}
                className={styles.groupSize}
              ></input>
              <button type="button" className={styles.searchButton}>
                SEARCH
              </button>
            </form>
          </div>
          <h1 className={styles.emptySearchText}>NO ITEMS YET</h1>
        </div>
      </div>
    </div>
  );
}

export default UserSearch;
