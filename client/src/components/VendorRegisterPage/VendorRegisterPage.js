import React from "react";
import Toggle from "../Toggle/Toggle";
import styles from "./vendorRegisterPage.module.css";
import jetsons from "../../assets/images/jetsons.png";

export default function VendorRegisterPage() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <h1 className={styles.registerName}>register</h1>
        <div className={styles.toggleContainer}>
          <span className={styles.userSpan}>user</span>
          <Toggle />
          <span className={styles.vendorSpan}>vendor</span>
        </div>
        <form className={styles.registerForm}>
          <input className={styles.registerInput} placeholder="business name" />
          <input className={styles.registerInput} placeholder="email" />
          <input
            className={styles.registerInput}
            placeholder="password"
            type="password"
          />
          <input
            className={styles.registerInput}
            placeholder="street address"
          />
          <div className={styles.moreAddress}>
            <input className={styles.city} placeholder="city" />
            <input className={styles.state} placeholder="state" />
            <input className={styles.zipCode} placeholder="zip code" />
          </div>
          <div className={styles.bizDetails}>
            <input className={styles.capacity} placeholder="capacity" />
            <input
              className={styles.uploadPictures}
              placeholder="upload pictures"
            />
            <button className={styles.uploadPicsButton}>+</button>
          </div>
        </form>
        <button className={styles.registerButton}>register</button>
        <a className={styles.loginLink}>
          already have an account? <span className={styles.login}>login</span>
        </a>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.subRightContainer}>
          <img src={jetsons} className={styles.jetsons} />
        </div>
      </div>
    </div>
  );
}
