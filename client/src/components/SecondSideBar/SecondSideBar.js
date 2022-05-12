import React from "react";
import styles from "./secondSideBar.module.css";
import logo from "../../assets/images/clipart1129793.png";

export default function SecondSideBar() {
  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.imageNameContainer}>
        <img src={logo} className={styles.topLogo} />
        <span className={styles.userName}>booger 2.0</span>
      </div>
      <ul className={styles.linkList}>
        <li className={styles.linkListItem}>dashboard</li>
        <li className={styles.linkListItem}>availability</li>
        <li className={styles.linkListItem}>chat</li>
      </ul>
      <ul className={styles.bottomList}>
        <li className={styles.linkListItem}>settings</li>
        <li className={styles.linkListItem}>logoutttststs</li>
      </ul>
    </div>
  );
}
