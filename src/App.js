import "./App.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import React, { useEffect,useState } from "react";
import { BrowserRouter,Link, Route, Switch } from 'react-router-dom';
import Components from "./components/Components";
import { Button } from "bootstrap";
import Home from './components/Home';
import Order from "./components/Order";
import List from './components/List';
import Header from './components/Header';
import Option from "./components/Option";
import Footer from "./components/Footer";
function App()
{
      const [order, setOrder]=useState([]);
      function addOrder(order)
      {
            setOrder( (orders) =>
            {
                  orders.push(order);
                  return [...orders];
            })
      }
   
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
            <List order={order} setOrder={addOrder}/>
            </Route>
            <Route path="/Order">
            <Order order={order} setOrder={addOrder}/>
            </Route>
        </Switch>
               </BrowserRouter>
               <Footer/>
          </div>
    )
      }

      function Confirm()
      {
            return Confirm;
      }
export default App;