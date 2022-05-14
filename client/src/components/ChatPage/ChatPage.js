import React from "react";
import UserSideBar from "../UserSideBar/UserSideBar";
import MyChatBubble from "../MyChatBubble/MyChatBubble";
import OtherChatBubble from "../OtherChatBubble/OtherChatBubble";
import styles from "./chatPage.module.css";
import logo from "../../assets/images/clipart1129793.png";
import sendButton from "../../assets/images/send.png";

export default function ChatPage() {
  return (
    <div className={styles.overallContainer}>
      <UserSideBar />
      <div className={styles.chatContainer}>
        <header className={styles.headerContainer}>
          <div className={styles.chatNameContainer}>
            <img src={logo} className={styles.chatPicture} />
            <span className={styles.chatMember}>Ammar Ayeyo </span>
          </div>
        </header>
        <div className={styles.chatInteractionContainer}>
          <div className={styles.chatContainerBlackCover}>
            <div className={styles.chatContent}>
              <OtherChatBubble msg="Aye yooooo" />
              <OtherChatBubble msg="this chat page aint it" />
              <MyChatBubble msg="man shutup man, florida men stand up" />
              <OtherChatBubble msg="what fam???" />
              <MyChatBubble msg="Florida>Queens" />
              <MyChatBubble msg="FACTS" />
            </div>
            <div className={styles.chatInputContainer}>
              <input className={styles.messageInput}></input>
              <button type="submit" className={styles.sendButton}>
                <img src={sendButton} className={styles.sendIcon} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
