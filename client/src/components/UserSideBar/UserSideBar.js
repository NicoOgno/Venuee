import React from 'react';
import styles from './style.module.css';
import logo from '../../assets/images/clipart1129793.png';
import { UserSidebarData } from './UserSidebarData';
import { UserUtilitiesData } from './UserUtilitiesData';

function UserSidebar({ user }) {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.profileHeader}>
        <img src={user.userImg} alt={logo} className={styles.profileImg} />
        <div className={styles.profileName}>{user.userName}</div>
      </div>
      <div>
        <ul className={styles.sidebarList}>
          {UserSidebarData.map((value, key) => {
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
          {UserUtilitiesData.map((value, key) => {
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

export default UserSidebar;
