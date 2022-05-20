import React, { useState, useEffect } from 'react';
import styles from './vendorSettings.module.css';
import VendorSideBar from '../VendorSidebar/VendorSidebar';
import tempImg from '../../assets/images/clipart1129793.png';

const initialFormState = {
  businessName: '',
  email: '',
  password: '',
  streetAddress: '',
  city: '',
  state: '',
  zipCode: '',
  capacity: '',
};

export default function VendorSettings({ vendor }) {
  const [formState, setFormState] = useState(initialFormState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  const updateVendor = () => {};

  return (
    <div className={styles.vendorSettingsPageContainer}>
      <VendorSideBar vendor={vendor} />
      <div className={styles.vendorSettingsContainer}>
        <div className={styles.vendorProfile}>
          <h1 className={styles.profileHeader}>profile</h1>
          <img src={vendor.vendorImg} className={styles.profileImg} />
          <h1 className={styles.profileName}>{vendor.businessName}</h1>
          <button type="submit" className={styles.uploadAvatar}>
            upload new avatar
          </button>
        </div>
        <div className={styles.infoHeaderContainer}>
          <h3 className={styles.basicInfoHeader}>basic info</h3>
          {/* //TODO ADD CANCEL FUNCTION TO CLEAR FORM AND PUT/PATCH ON SUBMIT BUTTON */}
          <button className={styles.cancelButton}>cancel</button>
          <button className={styles.updateButton} type="button" onClick={updateVendor}>
            update
          </button>
        </div>
        <form className={styles.formInputsContainer}>
          <div className={styles.inputGroupAlone}>
            <label htmlFor="businessName" className={styles.inputLabel}>
              business name
            </label>
            <input
              name="businessName"
              placeholder={vendor.businessName}
              className={styles.inputField}
              onChange={handleOnChange}
            />
          </div>
          <div className={styles.groupMultipleInputs}>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.inputLabel}>
                email
              </label>
              <input
                name="email"
                placeholder={vendor.email}
                className={styles.inputField}
                onChange={handleOnChange}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.inputLabel}>
                password
              </label>
              <input
                name="password"
                type="password"
                placeholder="CHANGE PASSWORD"
                className={styles.inputField}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className={styles.inputGroupAlone}>
            <label htmlFor="streetAddress" className={styles.inputLabel}>
              street address
            </label>
            <input
              name="streetAddress"
              placeholder={vendor.streetAddress}
              className={styles.inputField}
              onChange={handleOnChange}
            />
          </div>
          <div className={styles.groupMultipleInputs}>
            <div className={styles.inputGroupCity}>
              <label htmlFor="city" className={styles.inputLabel}>
                city
              </label>
              <input
                name="city"
                placeholder={vendor.city}
                className={styles.inputField}
                onChange={handleOnChange}
              />
            </div>
            <div className={styles.inputGroupState}>
              <label htmlFor="state" className={styles.inputLabel}>
                state
              </label>
              <input
                name="state"
                placeholder={vendor.state}
                className={styles.inputField}
                onChange={handleOnChange}
              />
            </div>
            <div className={styles.inputGroupZip}>
              <label htmlFor="zipCode" className={styles.inputLabel}>
                zip code
              </label>
              <input
                name="zipCode"
                placeholder={vendor.zipCode}
                className={styles.inputField}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className={styles.groupMultipleInputs}>
            <div className={styles.inputGroupCapacity}>
              <label htmlFor="capacity" className={styles.inputLabel}>
                capacity
              </label>
              <input
                name="capacity"
                placeholder={vendor.maxCapacity}
                className={styles.inputField}
                onChange={handleOnChange}
              />
            </div>
            <div className={styles.inputGroupPics}>
              <label htmlFor="upload-pictures" className={styles.inputLabel}>
                upload pictures
              </label>
              <input name="upload-pictures" className={styles.inputField} />
            </div>
            <button className={styles.uploadPicsButton}>+</button>
          </div>
        </form>
      </div>
    </div>
  );
}
