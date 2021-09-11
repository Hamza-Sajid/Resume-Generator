import React from 'react';
import Order from './Order';
function Header(props)
{

  
    return(

        <nav className="navbar  navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 text-center " style={{textAlign: 'center', position: 'relative', left: '40%'}}>
    Pizza Ordering App 🍕
              
              </span>
              <h6 style={{color:'white', float: 'right', position: 'relative', right:'-38%'}}>
                1
                </h6>
              <img width="40" src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/red_shoppictbasket_1484336512-1.png"></img>
              
        </div>
      </nav>
      
    )
}

export default Header;