import React from "react";
import styles from "./otherChatBubble.module.css";

export default function OtherChatBubble(props) {
  return <div className={styles.chatBubble}>{props.msg}</div>;
}
