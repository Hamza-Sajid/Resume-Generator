import "./App.css";

import React, { useEffect,useState } from "react";
import { BrowserRouter,Link, Route, Switch } from 'react-router-dom';
import Components from "./components/Components";
import { Button } from "bootstrap";
import Home from './components/Home';
import Order from "./components/Order";
import List from './components/List';
import Header from './components/Header';
import Option from "./components/Option";
function App()
{

   
      return(
            <div className="wrapper">
            <Header/>
            <BrowserRouter>
            
            <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
      <Route path="/Option">
<Option />
      </Route>
            <Route path="/List">
            <List/>
            </Route>
            <Route path="/Order">
            <Order/>
            </Route>
        </Switch>
               </BrowserRouter>
          </div>
    )
      }

      function Confirm()
      {
            return Confirm;
      }
export default App;