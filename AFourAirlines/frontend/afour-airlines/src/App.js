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
import UserProfile from "./user/userProfile"
import HelpPage from "./help/helpPage"

export default function App() {

  return (
    <BasePage>
      <Router>
        <Switch>
        <Route path="/" exact render={(props) => <Search />} />
        <Route path="/mileageProgram" exact render={(props) => <MileageProgram />} />
        <Route path="/:userName" exact render={(props) => <Search />} />
        <Route path="/mileageProgram/:userName" exact render={(props) => <MileageProgram />} />
        <Route path ="/flightsList.js" exact render={(props) => <FlightsList/>} />
        <Route path ="/flightPayment" exact render={(props) => <FlightPayment/>} />
        <Route path="/newUser/Register" exact render={(props) => <NewRegistration/>}/>
        <Route path="/user/UserProfile/:userName" exact render={(props) => <UserProfile/>}/>
        <Route path="/travel/help" exact render={(props) => <HelpPage/>}/>
        </Switch>
      </Router>
    </BasePage>
  );
}

