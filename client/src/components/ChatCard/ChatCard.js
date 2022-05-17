import React from "react";
import styles from "./chatCard.module.css";
import img from "../../assets/images/10007447_1405252279743343_829523453_n.jpg";

export default function ChatCard(props) {
  return (
    <div className={styles.chatCardContainer}>
      <img src={img} className={styles.msgImg}></img>
      <div className={styles.chatInfoContainer}>
        <h3 className={styles.messagePartnerName}>{props.name}</h3>
        <p className={styles.messageContent}>{props.msg}</p>
      </div>
      <span className={styles.msgTime}>{props.time}</span>
    </div>
  );
}
