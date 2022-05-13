import React from "react";
import "./App.css";
import LogInPage from "./components/LogInPage/LogInPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserReservations from "./Pages/UserReservations/UserReservations";
import UserChat from "./Pages/UserChat/UserChat";
import UserSearch from "./Pages/UserSearch/UserSearch";
import UserSearchResults from "./Pages/UserSearchResults/UserSearchResults";
import UserProfileInfo from "./Pages/UserProfileInfo/UserProfileInfo";
import UserChatFull from "./Pages/UserChatFull/UserChatFull";
import UserRegisterPage from "./components/UserRegisterPage/UserRegisterPage";
import VendorRegisterPage from "./components/VendorRegisterPage/VendorRegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/userRegister" element={<UserRegisterPage />} />
        <Route path="/vendorRegister" element={<VendorRegisterPage />} />
        <Route path="/search" element={<UserSearch />} />
        <Route path="/searchResults" element={<UserSearchResults />} />
        <Route path="/userReservations" element={<UserReservations />} />
        <Route path="/userChat" element={<UserChat />} />
        <Route path="/userProfileInfo" element={<UserProfileInfo />} />
        <Route path="/userChatFull" element={<UserChatFull />} />
      </Routes>
    </Router>

    // <div>
    //   {/* <UserRegisterPage /> */}
    //   {/* <LogInPage /> */}
    //   {/* <VendorRegisterPage /> */}
    //   {/* <UserSideBar /> */}
    //   {/*<ChatPage />*/}
    //   <UserSideBar />
    //   {/* <VendorSidebar /> */}
    // </div>
  );
}

export default App;
