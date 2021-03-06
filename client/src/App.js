import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserReservations from './Pages/UserPages/UserReservations/UserReservations';
import UserChat from './Pages/UserPages/UserChat/UserChat';
import UserSearch from './Pages/UserPages/UserSearch/UserSearch';
import UserSearchResults from './Pages/UserPages/UserSearchResults/UserSearchResults';
import UserProfileInfo from './Pages/UserPages/UserProfileInfo/UserProfileInfo';
import UserChatFull from './Pages/UserPages/UserChatFull/UserChatFull';
import UserRegisterPage from './components/UserRegisterPage/UserRegisterPage';
import VendorRegisterPage from './components/VendorRegisterPage/VendorRegisterPage';
import VendorReservations from './Pages/VendorPages/VendorReservations/VendorReservations';
import VendorAvailability from './Pages/VendorPages/VendorAvailability/VendorAvailability';
import VendorChat from './Pages/VendorPages/VendorChat/VendorChat';
import VendorChatFull from './Pages/VendorPages/VendorChatFull/VendorChatFull';
import VendorProfileInfo from './Pages/VendorPages/VendorProfileInfo/VendorProfileInfo';
import Login from './Pages/UserPages/Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/userRegister" element={<UserRegisterPage />} />
        <Route path="/vendorRegister" element={<VendorRegisterPage />} />
        <Route path="/userSearch" element={<UserSearch />} />
        <Route path="/searchResults" element={<UserSearchResults />} />
        <Route path="/userReservations" element={<UserReservations />} />
        <Route path="/userChat" element={<UserChat />} />
        <Route path="/userProfileInfo" element={<UserProfileInfo />} />
        <Route path="/userChatFull" element={<UserChatFull />} />
        <Route path="/vendorReservations" element={<VendorReservations />} />
        <Route path="/vendorAvailability" element={<VendorAvailability />} />
        <Route path="/vendorChat" element={<VendorChat />} />
        <Route path="/vendorChatFull" element={<VendorChatFull />} />
        <Route path="/vendorProfileInfo" element={<VendorProfileInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
