import React, { useEffect } from "react";
import VendorSidebar from "../../../components/VendorSidebar/VendorSidebar";
import styles from "./style.module.css";
import apiVendorServices from "../../../ApiServices/apiVendorServices";

function VendorReservations() {
  const token = localStorage.getItem("accessToken");
  console.log(token);

  useEffect(() => {
    apiVendorServices.getVendorProfileInfo(token);
  });
  return (
    <div className={styles.backgroundImg}>
      <div className={styles.vendorReservationContainer}>
        <VendorSidebar />
        <div className={styles.rightSideContainer}>
          <div className={styles.demoCard}>ressy</div>
          <div className={styles.demoCard}>ressy</div>
          <div className={styles.demoCard}>ressy</div>
          <div className={styles.demoCard}>ressy</div>
          <div className={styles.demoCard}>ressy</div>
          <div className={styles.demoCard}>ressy</div>
        </div>
      </div>
    </div>
  );
}
export default VendorReservations;
