import React from "react";
import App from '../App.css';
import { Carousel } from 'antd';
import ds from '../Photos/ds.png';
import { useHistory } from 'react-router-dom';
import easy from '../Photos/easy.png';
import spell from '../Photos/spell.png'
import themes from '../Photos/theme.png';
import Routes from "../Routes";
function HomePage(params) {
    const history = useHistory();

    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
      
    return(

<>

<div class="container">
  <h1>Design Your Resume In Just 2/Min</h1>

  <img className="avatar" src="https://resume.io/assets/landing/home/letter-maker/visual-214a0ef480db4fd16f5084887b3dd61a9706d77e243e2407d96a41948ee10024.png"
  width="500" height="400"></img>

<button className="startButton" onClick={()  => history.push('/Options')} >Create My Resume Now</button>


<div className="tooltips , container">
    <p>Use professional resume templates that follow the exact ‘resume rules’ employers look for. Easy to use and done within minutes - try now for free!</p>
</div>





</div>

<div className="svg-top">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#48db83" fill-opacity="1" d="M0,128L48,128C96,128,192,128,288,154.7C384,181,480,235,576,224C672,213,768,139,864,128C960,117,1056,171,1152,160C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
</div>
<div className="container">

    <h2 className="heading">
    "Effortlessly make a job-worthy resume and cover letter that gets you hired faster"
    </h2>

<h1>Features</h1>
<div className="features-list">
<div className="feature">
    <img src={easy} width="100" height="80"/>
    <h3>Easy Builder</h3>
    <p>Create a powerful resume profile or cover letter in one click. Writer’s block is no longer an obstacle. Try for free!</p>
</div>


<div className="feature">
    <img src={themes} width="50" height="80"/>
    <h3>Approved Templates
 </h3>
    <p>Professionally-designed resume templates and examples (+guides). Just edit and download in 5 minutes.

</p>
</div>



<div className="feature">
    <img src={spell} width="50" height="80"/>
    <h3>Spell-Checker
</h3>
    <p>Create a powerful resume profile or cover letter in one click. Writer’s block is no longer an obstacle. Try for free!</p>
</div>


</div>
</div>

<div className="container samples">
    <h1> Samples  </h1>
<img width="600"src={ds}></img>    
</div>

</>
    )
}

export default HomePage;