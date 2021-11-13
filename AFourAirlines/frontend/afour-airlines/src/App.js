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
import SearchPage from "./flights/flightsList";

function App() {
  return (
    <BasePage>
      <Router>
        <Switch>
        <Route path="/" exact render={(props) => <Search />} />
        <Route path="/mileageProgram" exact render={(props) => <MileageProgram />} />
        <Route path="/login" exact render={(props) => <Login />} />
        <Route path="/searchPage" exact render={(props) => <SearchPage />} />
        <Route path ="/flightsList" exact render={(props) => <FlightsList/>} />
        </Switch>
      </Router>
    </BasePage>
  );
}

export default App;
