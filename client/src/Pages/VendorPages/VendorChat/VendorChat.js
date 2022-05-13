import React from "react";
import VendorSidebar from "../../../components/VendorSidebar/VendorSidebar";
import styles from "./style.module.css";

function VendorChat() {
  return (
    <div className={styles.backgroundImg}>
      <div className={styles.vendorChatContainer}>
        <VendorSidebar />
        <div className={styles.rightSideContainer}>
          <div className={styles.demoCard}>chat</div>
          <div className={styles.demoCard}>chat</div>
          <div className={styles.demoCard}>chat</div>
        </div>
      </div>
    </div>
  );
}

export default VendorChat;
