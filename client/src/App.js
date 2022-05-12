import "./App.css";
import LogInPage from "./components/LogInPage/LogInPage";
import UserRegisterPage from "./components/UserRegisterPage/UserRegisterPage";
import VendorRegisterPage from "./components/VendorRegisterPage/VendorRegisterPage";
import UserSideBar from "./components/UserSideBar/UserSideBar";
import ChatPage from "./components/ChatPage/ChatPage";
import UserSidebar from "./components/UserSidebar/UserSidebar";
import VendorSidebar from "./components/VendorSidebar/VendorSidebar";


function App() {
  return (
    <div>
      {/* <UserRegisterPage /> */}
      {/* <LogInPage /> */}
      {/* <VendorRegisterPage /> */}
      {/* <UserSideBar /> */}
      {/*<ChatPage />*/}
      {/* <UserSidebar /> */}
      <VendorSidebar />
    </div>
  );
}

export default App;
