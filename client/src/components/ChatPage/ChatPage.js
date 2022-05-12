import React from "react";
import UserSideBar from "../UserSideBar/UserSideBar";
import SecondSideBar from "../SecondSideBar/SecondSideBar";
import styles from "./chatPage.module.css";

export default function ChatPage() {
  return (
    <div className={styles.chatContainer}>
      <SecondSideBar />
    </div>
  );
}
