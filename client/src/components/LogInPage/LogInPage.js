import React from "react";
import "./style.css";
import Toggle from "../Toggle/Toggle";
import logo from "../../assets/images/clipart1129793.png";

export default function LogInPage() {
  return (
    <>
      <div className="background-img">
        <div className="login-container">
          <div className="login-sub-container">
            <img src={logo} className="logo-img" />
            <h1 className="app-name">venuee</h1>
            <form className="login-form">
              <input className="login-input-field" placeholder="EMAIL"></input>
              <input
                className="login-input-field"
                type="password"
                placeholder="PASSWORD"
              ></input>
              <div className="toggle-container">
                <span className="user-span">user</span>
                <Toggle className="testit" />
                <span className="vendor-span">vendor</span>
              </div>
              <button className="login-button">login</button>
            </form>
            <a className="signup-link">
              don't have an account?{" "}
              <span className="sign-for-free">sign up for free</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
