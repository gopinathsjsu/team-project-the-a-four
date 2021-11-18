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
import Login from "./login/login";
import FlightsList from "./flights/flightsList";
import FlightPayment from "./flights/flightPayment";
import UserType from "./flights/userType";

function App() {
  return (
    <BasePage>
      <Router>
        <Switch>
        <Route path="/" exact render={(props) => <Search />} />
        <Route path="/mileageProgram" exact render={(props) => <MileageProgram />} />
        <Route path="/login" exact render={(props) => <Login />} />
        <Route path="/:userName" exact render={(props) => <Search />} />
        <Route path ="/flightsList.js" exact render={(props) => <FlightsList/>} />
        <Route path ="/flightPayment" exact render={(props) => <FlightPayment/>} />
        </Switch>
      </Router>
    </BasePage>
  );
}

export default App;
