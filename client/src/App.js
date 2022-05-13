import "./App.css";
import LogInPage from "./components/LogInPage/LogInPage";
import Dashboard from "./components/Dashboard/Dashboard";
import UserReservationCard from "./components/UserReservationCard/UserReservationCard";
import VendorReservationCard from "./components/VendorReservationCard/VendorReservationCard";
import Calendar from "./components/Calendar/Calendar";
import Chatbox from "./components/Chatbox/Chatbox";
import UserReservationWindow from "./components/UserReservationWindow/UserReserveWindow";

function App() {
  return (
    <div>
      {/* <LogInPage /> */}
      {/* <Dashboard /> */}
      {/* <UserReservationCard /> */}
      {/* <VendorReservationCard /> */}
      {/* <Calendar /> */}
      {/* <Chatbox /> */}
      <UserReservationWindow />
    </div>
  );
}

export default App;
