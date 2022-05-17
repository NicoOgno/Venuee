import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VendorSidebar from '../../../components/VendorSidebar/VendorSidebar';
import styles from './style.module.css';
import apiVendorServices from '../../../ApiServices/apiVendorServices';

function VendorReservations() {
  let navigate = useNavigate();
  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    const getVendor = async () => {
      let res = await apiVendorServices.getVendorProfileInfo(token);
      setVendor(res);
    };
    getVendor();
  }, []);

  const [vendor, setVendor] = useState({});

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
