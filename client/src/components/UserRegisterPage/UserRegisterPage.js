import React, { useState, useEffect, useRef } from "react";
import Toggle from "../Toggle/Toggle";
import styles from "./userRegisterPage.module.css";
import jetsons from "../../assets/images/jetsons.png";
import { useNavigate } from "react-router-dom";
import apiUserServices from "../../ApiServices/apiUserServices";

const initialFormState = {
  username: "",
  companyName: "",
  email: "",
  password: "",
};

// Just writing out the logic here for how I think I can handle this user register form page
// Going to use the useref hook that way I don't update any states unless we are actually attempting
// to submit
// When we click the button, it will check the conditions of every ref in the input fields
// if there are input fields that are not filled in properly, the button does nothing
// and it will also highlight those fields that are done incorrectly
// by changing the state/color of them in some way
// I think that could work

export default function UserRegisterPage() {
  let navigate = useNavigate();

  // defining the useRef variables
  const userName = useRef();
  const companyName = useRef();
  const email = useRef();
  const password = useRef();

  const [isUser, setIsUser] = useState(true);
  const [formState, setFormState] = useState(initialFormState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };
  //TODO ONCE ROUTES OPEN
  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   const { email, companyName, password, username } = formState;
  //   const user = { email, companyName, password, username };
  //   const res = await apiUserServices.UserRegister(user);

  //   if(res.error) {
  //     alert(`${res.message}`);
  //     setFormState(initialFormState)
  //   }
  // };
  const handleRegister = () => navigate("/");
  const handleToggle = () => {
    setIsUser(!isUser);
    navigate("/vendorRegister");
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <h1 className={styles.registerName}>register</h1>
        <div className={styles.toggleContainer}>
          <span className={styles.userSpan}>user</span>
          <Toggle onClick={handleToggle} value={false} />
          <span className={styles.vendorSpan}>vendor</span>
        </div>
        <form className={styles.registerForm}>
          <input
            className={styles.registerInput}
            placeholder="username"
            name="username"
            value={formState.username}
            onChange={handleOnChange}
          />
          <input
            className={styles.registerInput}
            placeholder="company name(optional)"
            name="companyName"
            value={formState.companyName}
            onChange={handleOnChange}
          />
          <input
            className={styles.registerInput}
            placeholder="email"
            name="email"
            value={formState.email}
            onChange={handleOnChange}
          />
          <input
            className={`${styles.registerInput} ${styles.lowerCaseInput}`}
            placeholder="password"
            name="password"
            value={formState.password}
            onChange={handleOnChange}
          />
        </form>
        <button className={styles.registerButton} onClick={handleRegister}>
          register
        </button>
        <a className={styles.loginLink}>
          already have an account?{" "}
          <span
            className={styles.login}
            onClick={() => {
              navigate("/");
            }}
          >
            login
          </span>
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
