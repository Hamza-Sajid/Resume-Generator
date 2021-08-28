import "./App.css";
import React, { useEffect,useState } from "react";
import Form from './components/Form';
import Footer from "./components/Footer";
import Header  from "./components/Header";
import {Router} from "react-router-dom";
import Components from "./components/Components";


function App()
{

      
      const [user, Setuser] = useState([])   
    
      useEffect(() => {
        fetch ('https://randomuser.me/api/?results=5')
        .then (results => results.json())
        .then (data =>{
            Setuser(data.results);    
        })
      }, [])
      
      
      return(
      <div>
       <Header/>
      
       {user.map((user) => (
    <Components
    key = {user.name.first}
    fname = {user.name.first}
    lname = {user.name.last}
    image = {user.picture.large}
    gender = {user.gender} 
    email = {user.email}
    age = {user.dob.age}
    
    />
      ))}
         
    </div>
    )
      }
export default App;