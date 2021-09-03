import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import React from 'react';
import './Styles.css';

function Components(params) {
    return(
       

        <div className="container">
  <div className="maindiv">
<img src="https://cdn.pixabay.com/photo/2018/04/23/16/22/welcome-3344772_1280.jpg" width="450"></img>
<h2>Let's Start Ordering Your Favorite Pizza!</h2>
<Link to="/">Home
<button type="button" className="btn btn-primary btn-lg container
" >Start Here</button>
</Link>
  </div>


  
</div>
        

    )
}

export default Components;