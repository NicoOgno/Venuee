import React from "react";
import VendorSidebar from "../../../components/VendorSidebar/VendorSidebar";
import styles from "./style.module.css";

function VendorChatFull() {
  return (
    <div className={styles.backgroundImg}>
      <div className={styles.vendorChatContainer}>
        <VendorSidebar />
        <div className={styles.rightSideContainer}></div>
      </div>
    </div>
  );
}

export default VendorChatFull;
