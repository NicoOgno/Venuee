import React from "react";
import VendorSidebar from "../../../components/VendorSidebar/VendorSidebar";
import styles from "./style.module.css";

function VendorAvailability() {
  return (
    <div className={styles.backgroundImg}>
      <div className={styles.vendorAvailabilityContainer}>
        <VendorSidebar />
        <div className={styles.rightSideContainer}>
          <div className={styles.demoCalendar}>calendar</div>
        </div>
      </div>
    </div>
  );
}

export default VendorAvailability;
