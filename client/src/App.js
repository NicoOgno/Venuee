import "./App.css";
import LogInPage from "./components/LogInPage/LogInPage";
import Dashboard from "./components/Dashboard/Dashboard";
import UserReservationCard from "./components/UserReservationCard/UserReservationCard";
import VendorReservationCard from "./components/VendorReservationCard/VendorReservationCard";
import Calendar from "./components/Calendar/Calendar";

function App() {
  return (
    <div>
      {/* <LogInPage /> */}
      {/* <Dashboard /> */}
      {/* <UserReservationCard /> */}
      <VendorReservationCard />
      {/* <Calendar /> */}
    </div>
  );
}

export default App;
