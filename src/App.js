import "./App.css";
import HomePage from './Components/HomePage'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Options from "./Components/Options";
import Theme1 from "./Components/Theme1";
import Example from "./Components/Example";
import { createContext, useContext } from "react";
import React from "react";
// const =createContext("dark");
const ThemeContext = React.createContext('light');


function App()
{


return(

  <>
  <Header/>


  <ThemeContext.provider value="dark">
  <Example />
  </ThemeContext.provider>
  

  <Footer/>
  </>
)
}



export default{ App, ThemeContext};