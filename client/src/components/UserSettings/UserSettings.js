import React from "react";
import styles from "./userSettings.module.css";
import UserSideBar from "../UserSideBar/UserSideBar";
import tempImg from "../../assets/images/clipart1129793.png";
export default function UserSettings() {
  return (
    <div className={styles.vendorSettingsPageContainer}>
      <UserSideBar />
      <div className={styles.vendorSettingsContainer}>
        <div className={styles.vendorProfile}>
          <h1 className={styles.profileHeader}>profile</h1>
          <img src={tempImg} className={styles.profileImg} />
          <h1 className={styles.profileName}>profile name</h1>
          <button type="submit" className={styles.uploadAvatar}>
            upload new avatar
          </button>
        </div>
        <div className={styles.infoHeaderContainer}>
          <h3 className={styles.basicInfoHeader}>basic info</h3>
          <button className={styles.cancelButton}>cancel</button>
          <button className={styles.updateButton}>update</button>
        </div>
        <form className={styles.formInputsContainer}>
          <div className={styles.inputGroup}>
            <label htmlFor="first-name" className={styles.inputLabel}>
              first name
            </label>
            <input name="first-name" className={styles.inputField} />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="last-name" className={styles.inputLabel}>
              last name
            </label>
            <input name="last-name" className={styles.inputField} />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.inputLabel}>
              password
            </label>
            <input name="password" className={styles.inputField} />
          </div>
        </form>
      </div>
    </div>
  );
}
