import React from "react";
import Toggle from "../Toggle/Toggle";
import styles from "./userRegisterPage.module.css";
import jetsons from "../../assets/images/jetsons.png";

export default function UserRegisterPage() {
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
          <input className={styles.registerInput} placeholder="name" />
          <input
            className={styles.registerInput}
            placeholder="company (optional)"
          />
          <input className={styles.registerInput} placeholder="email" />
          <input
            className={styles.registerInput}
            placeholder="password"
            type="password"
          />
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
