import React from "react";
import styles from "./logInPage.module.css";
import Toggle from "../Toggle/Toggle";
import logo from "../../assets/images/clipart1129793.png";
import { useNavigate } from "react-router-dom";

export default function LogInPage() {
  let navigate = useNavigate();
  return (
    <>
      <div className={styles.backgroundImg}>
        <div className={styles.loginContainer}>
          <div className={styles.loginSubContainer}>
            <img src={logo} className={styles.logoImg} />
            <h1 className={styles.appName}>venuee</h1>
            <form className={styles.loginForm}>
              <input
                className={styles.loginInputField}
                placeholder="EMAIL"
              ></input>
              <input
                className={styles.loginInputField}
                type="password"
                placeholder="PASSWORD"
              ></input>
              <div className={styles.toggleContainer}>
                <span className={styles.userSpan}>user</span>
                <Toggle />
                <span className={styles.vendorSpan}>vendor</span>
              </div>
              <button
                className={styles.loginButton}
                onClick={() => navigate("/search")}
              >
                login
              </button>
            </form>
            <a className={styles.signupLink}>
              don't have an account?{" "}
              <span
                className={styles.signForFree}
                onClick={() => {
                  navigate("/register");
                }}
              >
                sign up for free
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
