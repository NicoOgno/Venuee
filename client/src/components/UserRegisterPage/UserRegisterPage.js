import React, { useState, useEffect } from 'react';
import Toggle from '../Toggle/Toggle';
import styles from './userRegisterPage.module.css';
import jetsons from '../../assets/images/jetsons.png';
import { useNavigate } from 'react-router-dom';
import apiUserServices from '../../ApiServices/apiUserServices';

const initialFormState = {
  userName: '',
  company: '',
  email: '',
  password: '',
  userImg: '',
};

export default function UserRegisterPage() {
  let navigate = useNavigate();
  const logo =
    'https://firebasestorage.googleapis.com/v0/b/venuee-41927.appspot.com/o/clipart1129793.png?alt=media&token=4bc0d65b-5017-47ca-a9b7-1a65e0a1056d';

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
  const handleRegister = async (e) => {
    console.log('submitted');

    e.preventDefault();
    const { email, company, password, userName } = formState;
    const user = { email, company, password, userName, userImg: logo };
    const res = await apiUserServices.UserRegister(user);

    if (res.error) {
      alert(`${res.message}`);
      setFormState(initialFormState);
      navigate('/userRegister');
      return;
    }
    navigate('/');
  };

  const handleToggle = () => {
    setIsUser(!isUser);
    navigate('/vendorRegister');
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
        <form className={styles.registerForm} onSubmit={handleRegister}>
          <input
            className={styles.registerInput}
            placeholder="username"
            name="userName"
            value={formState.userName}
            onChange={handleOnChange}
            required
          />
          <input
            className={styles.registerInput}
            placeholder="company name(optional)"
            name="company"
            value={formState.company}
            onChange={handleOnChange}
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
          <button type="submit" className={styles.registerButton}>
            register
          </button>
        </form>

        <a className={styles.loginLink}>
          already have an account?{' '}
          <span
            className={styles.login}
            onClick={() => {
              navigate('/');
            }}
          >
            login
          </span>
        </a>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.subRightContainer}>
          <img src={jetsons} className={styles.jetsons} alt="" />
        </div>
      </div>
    </div>
  );
}
