import React from "react";
import styles from "./chatCard.module.css";

export default function ChatCard(props) {
  return (
    <div className={styles.chatCardContainer}>
      <img src={props.img} className={styles.msgImg}></img>
      <div className={styles.chatInfoContainer}>
        <h3 className={styles.messagePartnerName}>{props.name}</h3>
        <p className={styles.messageContent}>{props.msg}</p>
      </div>
      <span className={styles.msgTime}>{props.time}</span>
    </div>
  );
}
