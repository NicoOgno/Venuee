import React, { useState } from 'react';
import styles from './userSettings.module.css';
import UserSideBar from '../UserSideBar/UserSideBar';
import tempImg from '../../assets/images/clipart1129793.png';

const intialFormState = {
  userName: '',
  email: '',
  company: '',
  userImg: '',
};

export default function UserSettings({ user }) {
  const [formState, setFormState] = useState(intialFormState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  const updateUser = () => {
    console.log(formState);
  };

  return (
    <div className={styles.vendorSettingsPageContainer}>
      <UserSideBar user={user} />
      <div className={styles.vendorSettingsContainer}>
        <div className={styles.vendorProfile}>
          <h1 className={styles.profileHeader}>profile</h1>
          <img src={user.userImg} alt={tempImg} className={styles.profileImg} />
          <h1 className={styles.profileName}>{user.userName}</h1>
          <button type="submit" className={styles.uploadAvatar}>
            upload new avatar
          </button>
        </div>
        <div className={styles.infoHeaderContainer}>
          <h3 className={styles.basicInfoHeader}>basic info</h3>
          {/* //TODO ADD CANCEL FUNCTION TO CLEAR FORM AND PUT/PATCH ON SUBMIT BUTTON */}

          <button className={styles.cancelButton}>cancel</button>
          <button className={styles.updateButton} type="submit" onClick={updateUser}>
            update
          </button>
        </div>
        <form className={styles.formInputsContainer}>
          <div className={styles.inputGroup}>
            <label htmlFor="userName" className={styles.inputLabel}>
              USERNAME
            </label>
            <input
              name="userName"
              placeholder={user.userName}
              className={styles.inputField}
              onChange={handleOnChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="company" className={styles.inputLabel}>
              COMPANY NAME (OPTIONAL)
            </label>
            <input
              name="company"
              placeholder={user.company}
              className={styles.inputField}
              onChange={handleOnChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.inputLabel}>
              PASSWORD
            </label>
            <input
              name="password"
              type="password"
              placeholder="CHANGE PASSWORD"
              className={styles.inputField}
              onChange={handleOnChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
