import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import VendorSidebar from '../../../components/VendorSidebar/VendorSidebar';
import styles from './style.module.css';
import apiVendorServices from '../../../ApiServices/apiVendorServices';
import { VendorContext } from '../../../App';

function VendorReservations() {
  let navigate = useNavigate();
  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    apiVendorServices.getVendorProfileInfo(token);
  });

  const currentVendor = useContext(VendorContext);
  const [vendor, setVendor] = useState(currentVendor);
  console.log(vendor);

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
