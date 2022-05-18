import React from 'react';
import styles from './chatCardHome.module.css';
import VendorSideBar from '../VendorSidebar/VendorSidebar';
import ChatCard from '../ChatCard/ChatCard';
import ChatCardLast from '../ChatCardLast/ChatCardLast';

export default function ChatCardHome({ vendor }) {
  return (
    <div className={styles.homePageContainer}>
      <VendorSideBar vendorName={vendor.businessName} vendorImg={vendor.vendorImg} />
      <div className={styles.homeContainer}>
        <div className={styles.cardsContainer}>
          <ChatCard name="Mike Freeman" msg="duuuuuuuvvvvaaaallllll" time="8:34 PM" />
          <ChatCard name="Ammar Freeman" msg="pauuuuusssseeee the bmt" time="8:34 PM" />
          <ChatCard name="Tyler Freeman" msg="portlandia babyeeeee" time="5:50 PM" />
          <ChatCard name="Ash Freeman" msg="florida stand uuuup" time="5:50 PM" />
          <ChatCardLast name="Nico Freeman" msg="neneeee" time="5:12 PM" />
        </div>
      </div>
    </div>
  );
}
