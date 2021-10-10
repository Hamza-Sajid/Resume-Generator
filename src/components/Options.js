import React from "react";
import App from '../App.css';
import temp1 from '../Photos/temp1.png';
import temp2 from '../Photos/temp2.png';
import temp3 from '../Photos/temp3.png';
import { useHistory } from 'react-router-dom';

function Options() {
    const history = useHistory();

    return(
        <>



        <div className="container optionheading">
            <h1>Select Resume Template </h1>

            <div className="options">

                <div className="themes">
                <img src={temp1} onClick={()  => history.push('/Theme')} ></img>
                <h2>Classic</h2>
         </div>

                <div className="themes">
                <img src={temp2} ></img>
                <h2>Jazz</h2>     
               </div>
                        <div className="themes">
                        <img src={temp3} ></img>
                        <h2>Pop</h2>
                           </div>
                
                
            </div>
        </div>
     <div className="space container">

     </div>
        
        </>
    )

}


export default Options;