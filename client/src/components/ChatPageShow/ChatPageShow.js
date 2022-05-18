import React, { useState, useRef, useEffect } from 'react';
import VendorSidebar from '../VendorSidebar/VendorSidebar';
import MyChatBubble from '../MyChatBubble/MyChatBubble';
import OtherChatBubble from '../OtherChatBubble/OtherChatBubble';
import styles from './chatPageShow.module.css';
import morgan from '../../assets/images/10007447_1405252279743343_829523453_n.jpg';
import sendButton from '../../assets/images/send.png';
import apiVendorServices from '../../ApiServices/apiVendorServices';

export default function ChatPageShow() {
  const [msgSent, setMsgSent] = useState(false);
  const [myMsg, setMyMsg] = useState('');

  const messageRef = useRef();

  const sendMessage = () => {
    const testMsg = messageRef.current.value;
    setMyMsg(testMsg);
    messageRef.current.value = null;
    setMsgSent(true);
  };

  const token = localStorage.getItem('accessToken');

  const getVendor = async () => {
    let res = await apiVendorServices.getVendorProfileInfo(token);
    setVendor(res);
  };

  useEffect(() => {
    getVendor();
  }, []);

  const [vendor, setVendor] = useState({});

  return (
    <div className={styles.overallContainer}>
      <VendorSidebar vendor={vendor} />
      <div className={styles.chatContainer}>
        <header className={styles.headerContainer}>
          <div className={styles.chatNameContainer}>
            <img src={morgan} className={styles.chatPicture} />
            <span className={styles.chatMember}>Morgan Freeman </span>
          </div>
        </header>
        <div className={styles.chatInteractionContainer}>
          <div className={styles.chatContainerBlackCover}>
            <div className={styles.chatContent}>
              <OtherChatBubble msg="Hello there" />
              <OtherChatBubble msg="This is award winning actor" />
              <OtherChatBubble msg="And cultural legend" />
              <OtherChatBubble msg="Morgan Freeman" />
              <OtherChatBubble msg="I'm nominated for another Oscar and need this venue for my party" />
              {msgSent ? <MyChatBubble msg={myMsg} /> : ''}
              {/* <MyChatBubble msg="man shutup man, florida men stand up" /> */}
            </div>
            <div className={styles.chatInputContainer}>
              <input className={styles.messageInput} ref={messageRef}></input>
              <button type="submit" className={styles.sendButton}>
                <img src={sendButton} className={styles.sendIcon} onClick={sendMessage} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
