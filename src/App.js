import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './Components/HomePage'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Options from "./Components/Options";
import Theme1 from "./Components/Theme1";

function App()
{


return(
  <Router>

 
  <Header/> 

  

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

        <Footer/>

  </Router>

)
}



export default App;