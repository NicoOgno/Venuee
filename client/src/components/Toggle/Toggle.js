import React from "react";
import styles from "./toggle.module.css";

export default function Toggle({ onClick, value }) {
  return (
    <div className="my-toggle">
      <label className={styles.switch}>
        <input type="checkbox" onChange={onClick} defaultChecked={value} />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
}
