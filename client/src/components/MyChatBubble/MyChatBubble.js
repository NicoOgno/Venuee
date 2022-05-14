import React from "react";
import styles from "./myChatBubble.module.css";

export default function MyChatBubble(props) {
  return <div className={styles.chatBubble}>{props.msg}</div>;
}
