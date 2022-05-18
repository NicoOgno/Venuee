import React, { useState, useEffect } from "react";
import Toggle from "../Toggle/Toggle";
import styles from "./vendorRegisterPage.module.css";
import jetsons from "../../assets/images/jetsons.png";
import { useNavigate } from "react-router-dom";

const initialFormState = {
  businessName: "",
  email: "",
  password: "",
  streetAddress: "",
  city: "",
  state: "",
  zipCode: "",
  maxCapacity: "",
  vendorImg: "",
};

export default function VendorRegisterPage(props) {
  let navigate = useNavigate();

  const [isUser, setIsUser] = useState(false);
  const [formState, setFormState] = useState(initialFormState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  console.log(formState);

  useEffect(() => {
    setIsUser(false);
  }, []);

  const handleRegister = () => navigate("/");

  //UPLOADING IMAGES
  const handleToggle = () => {
    setIsUser(!isUser);
    navigate("/userRegister");
  };

  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <h1 className={styles.registerName}>register</h1>
        <div className={styles.toggleContainer}>
          <span className={styles.userSpan}>user</span>
          <Toggle onClick={handleToggle} value={true} />
          <span className={styles.vendorSpan}>vendor</span>
        </div>
        <form className={styles.registerForm}>
          <input
            className={styles.registerInput}
            placeholder="business name"
            name="businessName"
            value={formState.businessName}
            onChange={handleOnChange}
            required
          />
          <input
            className={styles.registerInput}
            placeholder="email"
            name="email"
            value={formState.email}
            onChange={handleOnChange}
            required
          />
          <input
            className={styles.registerInput}
            placeholder="password"
            name="password"
            value={formState.password}
            onChange={handleOnChange}
            required
          />
          <input
            className={styles.registerInput}
            placeholder="street address"
            name="streetAddress"
            value={formState.streetAddress}
            onChange={handleOnChange}
            required
          />
          <div className={styles.moreAddress}>
            <input
              className={styles.city}
              placeholder="city"
              name="city"
              value={formState.city}
              onChange={handleOnChange}
              required
            />
            <input
              className={styles.state}
              placeholder="state"
              name="state"
              value={formState.state}
              onChange={handleOnChange}
              required
            />
            <input
              className={styles.zipCode}
              placeholder="zip code"
              name="zipCode"
              value={formState.zipCode}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className={styles.bizDetails}>
            <input
              className={styles.capacity}
              placeholder="max capacity"
              name="maxCapacity"
              value={formState.maxCapacity}
              onChange={handleOnChange}
              required
            />
            <input
              type="file"
              id="file"
              accept="image/*"
              multiple="multiple"
              className={styles.uploadPictures}
              placeholder="upload pictures"
              ref={hiddenFileInput}
              onChange={handleChange}
            />
            <input
              onClick={handleClick}
              className={styles.uploadPicsButton}
              id="upload-pics-button"
            />
          </div>
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
