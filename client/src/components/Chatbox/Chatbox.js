import React from "react";
import ChatboxStyle from "./style.module.css";

export default function Chatbox() {
  return (
    <div className={ChatboxStyle.chatboxContainer}>
      <img
        src={require("../../assets/images/10007447_1405252279743343_829523453_n.jpg")}
        className={ChatboxStyle.avatarImg}
      />
      <div className={ChatboxStyle.chatboxInfo}>
        <h1 className={ChatboxStyle.chatboxUser}>Mike Wells</h1>
        <h1 className={ChatboxStyle.chatboxTextDescription}>
          tristique et egestas quis ipsum suspendisse ultrices gravida dictum
          fusce
        </h1>
        <h2 className={ChatboxStyle.chatboxTime}>4:37 PM</h2>
      </div>
    </div>
  );
}
