import  './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import Header from "./Components/Header";
import Options from "./Components/Options";
import Theme1 from "./Components/Theme1";
function Routes()
{
    return(
<Router>
<Switch>
<Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/Options">
            <Options/>
          </Route>
          <Route path="/Theme">
            <Theme1/>
          </Route>

        </Switch>

</Router>
    )
}

export default Routes;  