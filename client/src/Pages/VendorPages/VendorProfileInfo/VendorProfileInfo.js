import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import apiVendorServices from '../../../ApiServices/apiVendorServices';
import VendorSidebar from '../../../components/VendorSidebar/VendorSidebar';
import styles from './style.module.css';
import { VendorContext } from '../../../App';

function VendorProfileInfo() {
  let navigate = useNavigate();
  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    apiVendorServices.getVendorProfileInfo(token);
  });

  const currentVendor = useContext(VendorContext);
  const [vendor, setVendor] = useState(currentVendor);
  console.log(vendor);
  return <VendorSidebar />;
}

export default VendorProfileInfo;
