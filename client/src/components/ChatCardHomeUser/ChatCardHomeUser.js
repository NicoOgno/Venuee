import React from 'react';
import styles from './chatCardHomeUser.module.css';
import UserSideBar from '../UserSideBar/UserSideBar';
import ChatCard from '../ChatCard/ChatCard';
import ChatCardLast from '../ChatCardLast/ChatCardLast';

import three from '../../assets/images/3.jpg';
import four from '../../assets/images/4.jpg';
import five from '../../assets/images/5.jpg';

export default function ChatCardHomeUser({ user }) {
  return (
    <div className={styles.homePageContainer}>
      <UserSideBar user={user} />
      <div className={styles.homeContainer}>
        <div className={styles.cardsContainer}>
          <ChatCard
            name="Flying Dutchman"
            msg="me: I'm looking for a bar for my party this weekend, can you help?"
            time="3:30 PM"
            img={three}
          />
          <ChatCard
            name="Krusty Crab"
            msg="me: that price is a little too expensive for me, thanks though!"
            time="1:15 PM"
            img={four}
          />
          <ChatCardLast
            name="Chum Bucket"
            msg="me: hello? are you there? i'm looking for a bar to rent out please"
            time="11:45 AM"
            img={five}
          />
        </div>
      </div>
    </div>
  );
}
