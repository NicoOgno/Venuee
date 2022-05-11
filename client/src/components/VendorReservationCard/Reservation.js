import React from "react";
import "./style.css";

export default function Reservation({ imageUrl, name, date }) {
  //   return (
  //     <div className="reservation-container">
  //       <div className="reservation-img">
  //         <img
  //           src="data:image/jpeg;base64,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"
  //           className="profile-image"
  //         />
  //       </div>
  //       <div className="reservation-info">
  //         <div className="reservation-name">
  //           <span>Name</span>
  //         </div>
  //         <div className="reservation-size">
  //           <span>Party Size</span>
  //         </div>
  //         <div className="reservation-date">
  //           <span>Date</span>
  //         </div>
  //         <a href="#" className="delete-reservation">
  //           Delete
  //         </a>
  //       </div>
  //     </div>
  //   );

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
