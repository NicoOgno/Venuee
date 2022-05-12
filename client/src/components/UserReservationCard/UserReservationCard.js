import React from "react";
import "./style.css";

export default function Reservation({ imageUrl, name, date }) {
  return (
    <div className="mainContainer">
      <div className="reservationContainer">
        <div className="userImg">
          <img src={require("../../assets/images/6.jpg")} />
        </div>
        <div className="reservationInfo">
          <h1 className="reservationRestaurant">Mr.Purple</h1>
          <div className="reservationDate">
            <h1>Monday</h1>
            <h1>May 13, 2022</h1>
          </div>
          <p className="reservationBio">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <a href="#" className="reservationCancelButton">
            CANCEL RESERVATION
          </a>
        </div>
      </div>
    </div>
  );
}
