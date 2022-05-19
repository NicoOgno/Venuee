import React, { useEffect, useState } from 'react';
import UserSideBar from '../../../components/UserSideBar/UserSideBar';
import styles from './style.module.css';
import { useNavigate } from 'react-router-dom';
import apiUserServices from '../../../ApiServices/apiUserServices';
import SearchResultsCard from '../../../components/SearchResultsCard/SearchResultsCard';

const initialFormState = {
  dateRequested: '',
  zipcodeRequested: '',
  typeRequested: '',
  groupSize: '',
};

function UserSearch() {
  let navigate = useNavigate();

  const [userReservations, setUserReservations] = useState([]);

  const [user, setUser] = useState({});

  const [formState, setFormState] = useState(initialFormState);

  const [matchedResults, setMatchedResults] = useState([]);
  console.log(matchedResults);

  const token = localStorage.getItem('accessToken');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { dateRequested, zipcodeRequested, typeRequested, groupSize } = formState;
    const searchParams = { dateRequested, zipcodeRequested, typeRequested, groupSize };
    const result = await apiUserServices.getAvailableVendors(searchParams);
    setMatchedResults(result);
  };

  return (
    <div className={styles.backgroundImg}>
      <div className={styles.userSearchContainer}>
        <UserSideBar user={user} />
        <div className={styles.rightSideContainer}>
          <div className={styles.searchBarContainer}>
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
              <button type="button" className={styles.searchButton} onClick={handleSubmit}>
                SEARCH
              </button>
            </form>
          </div>
          <div className={styles.noResultsContainer}>
            {matchedResults.length > 0 ? (
              <div className={styles.yesResultsContainer}>
                {matchedResults.map((item, index) => {
                  return (
                    <SearchResultsCard
                      date={formState.dateRequested}
                      partySize={formState.groupSize}
                      info={item}
                      token={token}
                      key={index}
                    />
                  );
                })}
              </div>
            ) : (
              <>
                <h3 className={styles.emptySearchText}>NO RESULTS</h3>
                <p className={styles.emptySearchText}>
                  TRY ADJUSTING YOUR SEARCH BY CHANGING YOUR ZIP CODE, DATE, AND ADDING A TYPE
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSearch;
