import React from "react";
import insta from '../Photos/insta.png';
import fb from '../Photos/fb.webp';
import twitter from '../Photos/twitter.png';


function Footer()
{
return(
    <> 
  <nav className="navbar navbar-dark bg-dark">
  
    <a className=" contact" href="#">
      <p>Contact Us</p>
    </a>
    
    <div className=" sociallinks">
       
       <img width="50" src={fb}/>
       <img width="70" src={twitter}/>
       <img width="70" src={insta}/>
  </div>
</nav>

     </>
)
}

export default Footer;