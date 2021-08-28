import React from 'react';
import propTypes from 'prop-types';

function Header()
{
  return(
    <div>
   
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <a className="navbar-brand" href="https://google.com">
<img src=" https://freepngimg.com/download/batman/3-2-batman-logo-png.png " alt="header" width="85" height="45"/>
    </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <center>
           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services </a>
              </li>
             
              <li className="nav-item">
                <a className="nav-link" href="#">Investors </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Portfolio </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">About Us </a>
              </li>
            </ul>
            </center>
                      </div>
        </div>
      </nav> 
   
    </div>
  
    );
  }
export default Header;

