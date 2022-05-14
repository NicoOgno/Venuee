import React, { useState, useEffect } from "react";
import styles from "./logInPage.module.css";
import Toggle from "../Toggle/Toggle";
import logo from "../../assets/images/clipart1129793.png";
import { useNavigate } from "react-router-dom";
import apiUserServices from "../../ApiServices/apiUserServices";
import apiVendorServices from "../../ApiServices/apiVendorServices";

const initialFormState = {
  email: "",
  password: "",
};

export default function LogInPage() {
  let navigate = useNavigate();

  const [isUser, setIsUser] = useState(true);
  const [formState, setFormState] = useState(initialFormState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  // CLICK HANDLER ONCE ROUTES ARE FINISHED
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formState;
    const user = { email, password };
    //TODO add vendor login when path avail
    if (isUser) {
      const res = await apiUserServices.userLogin(user);
      if (res.accessToken) {
        navigate("/userSearch");
      } else {
        alert("Incorrect Credentials");
      }
    } else {
      const res = await apiVendorServices.vendorLogin(user);
      if (res.accessToken) {
        navigate("/vendorReservations");
      } else {
        alert("Incorrect Credentials");
      }
    }
  };

  const validateForm = () => {
    return !formState.email || !formState.password;
  };

  //Manual navigate
  // const handleLogin = () =>
  //   isUser ? navigate("/userSearch") : navigate("/vendorReservations");

  const handleToggle = () => {
    setIsUser(!isUser);
  };

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
                name="email"
                value={formState.email}
                onChange={handleOnChange}
              ></input>
              <input
                className={styles.loginInputField}
                // type="password"
                placeholder="PASSWORD"
                name="password"
                onChange={handleOnChange}
              ></input>
              <div className={styles.toggleContainer}>
                <span className={styles.userSpan}>user</span>
                <Toggle onClick={handleToggle} />
                <span className={styles.vendorSpan}>vendor</span>
              </div>
              <button
                className={styles.loginButton}
                onClick={handleLogin}
                type="submit"
                disabled={validateForm()}
              >
                login
              </button>
            </form>
            <a className={styles.signupLink}>
              don't have an account?{" "}
              <span
                className={styles.signForFree}
                onClick={() => {
                  navigate("/userRegister");
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
