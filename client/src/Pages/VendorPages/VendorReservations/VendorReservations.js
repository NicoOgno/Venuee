import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VendorSidebar from '../../../components/VendorSidebar/VendorSidebar';
import styles from './style.module.css';
import apiVendorServices from '../../../ApiServices/apiVendorServices';
import VendorReservationCard from '../../../components/VendorReservationCard/VendorReservationCard';

function VendorReservations() {
  let navigate = useNavigate();
  const token = localStorage.getItem('accessToken');

  const getVendor = async () => {
    let res = await apiVendorServices.getVendorProfileInfo(token);
    setVendor(res);
  };

  const getVendorReservations = async () => {
    let res = await apiVendorServices.getVendorReservations(token);
    setVendorReservations(res);
  };
  useEffect(() => {
    getVendorReservations();
    getVendor();
  }, []);

  const [vendor, setVendor] = useState({});
  const [vendorReservations, setVendorReservations] = useState([]);
  console.log(vendorReservations);

  return (
    <div className={styles.backgroundImg}>
      <div className={styles.vendorReservationContainer}>
        <VendorSidebar vendorName={vendor.businessName} vendorImg={vendor.vendorImg} />
        <div className={styles.rightSideContainer}>
          <div className={styles.vendorReservationCard}>
            <VendorReservationCard />
          </div>
          <div className={styles.vendorReservationCard}>
            <VendorReservationCard />
          </div>
          <div className={styles.vendorReservationCard}>
            <VendorReservationCard />
          </div>
          <div className={styles.vendorReservationCard}>
            <VendorReservationCard />
          </div>
          <div className={styles.vendorReservationCard}>
            <VendorReservationCard />
          </div>
        </div>
      </div>
    </div>
  );
}
export default VendorReservations;
