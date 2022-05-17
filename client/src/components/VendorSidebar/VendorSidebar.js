import React from 'react';
import styles from './style.module.css';
import logo from '../../assets/images/clipart1129793.png';
import { VendorSidebarData } from './VendorSidebarData';
import { VendorUtilitiesData } from './VendorUtilitesData';

function VendorSidebar({ vendorName, vendorImg }) {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.profileHeader}>
        <img src={logo} alt={'no img avail'} className={styles.profileImg} />
        <div className={styles.profileName}>{vendorName}</div>
      </div>
      <div>
        <ul className={styles.sidebarList}>
          {VendorSidebarData.map((value, key) => {
            return (
              <li
                key={key}
                className={styles.row}
                id={window.location.pathname === value.link ? 'active' : ''}
                onClick={() => {
                  window.location.pathname = value.link;
                }}
              >
                <div className={styles.icon}>{value.icon}</div>
                <div className={styles.title}>{value.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <ul className={styles.utilSidebarList}>
          {VendorUtilitiesData.map((value, key) => {
            return (
              <li
                key={key}
                className={styles.utilRow}
                id={window.location.pathname === value.link ? 'active' : ''}
                onClick={() => {
                  window.location.pathname = value.link;
                }}
              >
                <div className={styles.utilIcon}>{value.icon}</div>
                <div className={styles.utilTitle}>{value.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default VendorSidebar;
