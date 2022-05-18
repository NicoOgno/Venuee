import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiVendorServices from '../../../ApiServices/apiVendorServices';
import VendorSidebar from '../../../components/VendorSidebar/VendorSidebar';
import styles from './style.module.css';

function VendorAvailability() {
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
  console.log(vendor);
  return (
    <div className={styles.backgroundImg}>
      <div className={styles.vendorAvailabilityContainer}>
        <VendorSidebar vendor={vendor} />
        <div className={styles.rightSideContainer}>
          <div className={styles.demoCalendar}>calendar</div>
        </div>
      </div>
    </div>
  );
}

export default VendorAvailability;
