import React from "react";
import styles from "./toggle.module.css";

export default function Toggle() {
  return (
    <div className="my-toggle">
      <label className={styles.switch}>
        <input type="checkbox" />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
}
