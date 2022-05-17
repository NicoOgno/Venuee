import React from "react";
import styles from "./vendorSettings.module.css";
import VendorSideBar from "../VendorSidebar/VendorSidebar";
import tempImg from "../../assets/images/clipart1129793.png";
import { style } from "@mui/system";
export default function VendorSettings() {
  return (
    <div className={styles.vendorSettingsPageContainer}>
      <VendorSideBar />
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
          <div className={styles.inputGroupAlone}>
            <label htmlFor="business-name" className={styles.inputLabel}>
              business name
            </label>
            <input name="business-name" className={styles.inputField} />
          </div>
          <div className={styles.groupMultipleInputs}>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.inputLabel}>
                email
              </label>
              <input name="email" className={styles.inputField} />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.inputLabel}>
                password
              </label>
              <input name="password" className={styles.inputField} />
            </div>
          </div>
          <div className={styles.inputGroupAlone}>
            <label htmlFor="street-address" className={styles.inputLabel}>
              street address
            </label>
            <input name="street-address" className={styles.inputField} />
          </div>
          <div className={styles.groupMultipleInputs}>
            <div className={styles.inputGroupCity}>
              <label htmlFor="city" className={styles.inputLabel}>
                city
              </label>
              <input name="city" className={styles.inputField} />
            </div>
            <div className={styles.inputGroupState}>
              <label htmlFor="state" className={styles.inputLabel}>
                state
              </label>
              <input name="state" className={styles.inputField} />
            </div>
            <div className={styles.inputGroupZip}>
              <label htmlFor="zip-code" className={styles.inputLabel}>
                zip code
              </label>
              <input name="zip-code" className={styles.inputField} />
            </div>
          </div>
          <div className={styles.groupMultipleInputs}>
            <div className={styles.inputGroupCapacity}>
              <label htmlFor="capacity" className={styles.inputLabel}>
                capacity
              </label>
              <input name="capacity" className={styles.inputField} />
            </div>
            <div className={styles.inputGroupPics}>
              <label htmlFor="upload-pictures" className={styles.inputLabel}>
                upload pictures
              </label>
              <input name="upload-pictures" className={styles.inputField} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
