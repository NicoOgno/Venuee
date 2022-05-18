import React from "react";
import styles from "./chatCardHome.module.css";
import VendorSideBar from "../VendorSidebar/VendorSidebar";
import ChatCard from "../ChatCard/ChatCard";
import ChatCardLast from "../ChatCardLast/ChatCardLast";
import morgan from "../../assets/images/10007447_1405252279743343_829523453_n.jpg";
import jack from "../../assets/images/jack.jpeg";
import elon from "../../assets/images/elon.jpeg";
import peter from "../../assets/images/thiel.jpeg";
import sheryl from "../../assets/images/sheryl.jpeg";

export default function ChatCardHome() {
  return (
    <div className={styles.homePageContainer}>
      <VendorSideBar />
      <div className={styles.homeContainer}>
        <div className={styles.cardsContainer}>
          <ChatCard
            name="Morgan Freeman"
            msg="Them: I'm nominated for another Oscar and need this venue for my party"
            time="6:55 PM"
            img={morgan}
          />
          <ChatCard
            name="Sheryl Sandberg"
            msg="Them: Do you have capacity for our 72,000 employees?"
            time="1:34 PM"
            img={sheryl}
          />
          <ChatCard
            name="Jack Dorsey"
            msg="Them: Bitcoin convention incoming legggooooo!"
            time="11:50 AM"
            img={jack}
          />
          <ChatCard
            name="Elon Musk"
            msg="Them: Joe and I want to do a podcast here lolz!"
            time="9:50 PM"
            img={elon}
          />
          <ChatCardLast
            name="Peter Thiel"
            msg="Them: Will you accept Ayn Randian Libertarian MAGA conventions?"
            time="5:08 AM"
            img={peter}
          />
        </div>
      </div>
    </div>
  );
}
