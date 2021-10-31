import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import BasePage from "./common/basepage";
import MileageProgram from "./mileage/mileageProgram";

function App() {
  return (
    <BasePage>
      <Router>
        <Switch>
        <Route path="/" exact render={(props) => <MileageProgram />} />
        </Switch>
      </Router>
    </BasePage>
  );
}

export default App;
