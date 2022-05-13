import React from "react";
import UserSideBar from "../../components/UserSideBar/UserSideBar";
import styles from "./style.module.css";

function UserChat() {
  return (
    <div className={styles.backgroundImg}>
      <div className={styles.userChatContainer}>
        <UserSideBar />
        <div className={styles.rightSideContainer}>
          <div className={styles.demoCard}>chat</div>
          <div className={styles.demoCard}>chat</div>
          <div className={styles.demoCard}>chat</div>
        </div>
      </div>
    </div>
  );
}

export default UserChat;
