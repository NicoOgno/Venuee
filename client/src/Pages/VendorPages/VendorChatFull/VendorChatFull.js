import React from 'react';
import VendorSidebar from '../../../components/VendorSidebar/VendorSidebar';
import styles from './style.module.css';
import ChatPage from '../../../components/ChatPage/ChatPage';

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
