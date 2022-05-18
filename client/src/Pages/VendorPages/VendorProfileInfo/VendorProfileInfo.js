import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiVendorServices from '../../../ApiServices/apiVendorServices';
import VendorSidebar from '../../../components/VendorSidebar/VendorSidebar';
import styles from './style.module.css';
import VendorSettings from '../../../components/VendorSettings/VendorSettings';

function VendorProfileInfo() {
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

  return <VendorSettings vendor={vendor} />;
}

export default VendorProfileInfo;
