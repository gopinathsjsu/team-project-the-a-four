import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";
import BasePage from "./common/basepage";
import MileageProgram from "./mileage/mileageProgram";
import Search from "./flights/searchFlights";
import FlightsList from "./flights/flightsList";
import FlightPayment from "./flights/flightPayment";
import NewRegistration from "./login/newRegistration";
import UserProfile from "./user/userProfile";
import HelpPage from "./help/helpPage";
import UserType from "./flights/userType";
import AdminHome from "./admin/adminHome";
import CreateReservation from "./reservation/createReservation";
import ManageReservation from "./reservation/manageReservation";

export default function App() {

  return (
    <BasePage>
      <Router>
        <Switch>
        <Route path="/" exact render={(props) => <Search />} />
        <Route path="/mileageProgram" exact render={(props) => <MileageProgram />} />
        <Route path ="/flights/flightsList" exact render={(props) => <FlightsList/>} />
        <Route path ="/flightPayment" exact render={(props) => <FlightPayment/>} />
        <Route path ="/userType" exact render={(props) => <UserType/>} />
        <Route path="/newUser/Register" exact render={(props) => <NewRegistration/>}/>
        <Route path="/user/UserProfile/" exact render={(props) => <UserProfile/>}/>
        <Route path="/travel/help" exact render={(props) => <HelpPage/>}/>
        <Route path="/admin/home" exact render={(props) => <AdminHome/>}/>
        <Route path="/flights/reservation" exact render={(props) => <CreateReservation/>}/>
        <Route path="/reservation/manage/:pnr" exact render={(props) => <ManageReservation/>}/>
        </Switch>
      </Router>
    </BasePage>
  );
}

