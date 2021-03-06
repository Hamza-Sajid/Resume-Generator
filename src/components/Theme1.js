import React, { createElement, useState } from "react";
import html2pdf from 'html2pdf.js';
import App from '../App.css';
import ds from '../Photos/profile.png';
import pdf from '../Photos/pdf.png';
import CSS from '../ThemesCSS.css';
import { List } from "rc-field-form";


function Theme1(props) {
    
    function skills(e)
    {
        e.preventDefault();
        var skills=document.getElementById("skills");
        var skill = document.createElement('input');
        skill.type = "email";
        skill.placeholder = "Enter Hobbies";
        skills.appendChild(skill);

    }
    function languages(e)
    {
        e.preventDefault();
        var languages=document.getElementById("languages");
        var language = document.createElement('input');
        language.type = "email";
        language.placeholder = "Enter Hobbies";
        

        
        languages.appendChild(language);
        
            // languages.appendChild(languages);
    }
function para(e)
{
    e.preventDefault();
    
    var a=document.getElementById("list");
    var para = document.createElement("textarea");//make an p element
        var b=document.createTextNode("System Analyst                                  @LGS   __      2012--2015");
        para.appendChild(b);//add the text to the p element
    a.appendChild(para);
}

function education(e)
{
    e.preventDefault();
    
    var a=document.getElementById("education");
    var para = document.createElement("textarea");//make an p element
        var b=document.createTextNode(" BS in Computer Networks                      @KUST     2019 _ 2023");
        para.appendChild(b);//add the text to the p element
    a.appendChild(para);
}

function Hobbies(e)
{
    e.preventDefault();
    var aa=document.getElementById("hobbies");
    var element = document.createElement('input');
    element.type = "email";
    element.placeholder = "Enter Hobbies";


        var bb=document.createTextNode("Type Hobbies");
        element.appendChild(bb);//add the text to the p element
        aa.appendChild(element);   
}

function handle(e)
{
    
    e.preventDefault();
    var opt = {
        margin:       0,
        filename:     'myfile.pdf',
        image:        { type: 'jpeg', quality: 1 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
    var element = document.getElementById('element-to-print');
    html2pdf().set(opt).from(element).save();

    // html2pdf(element);
}


  

    return(

        <>
<h1>Template </h1>

        <form id={'element-to-print'}>
            <div className="container theme1">

        <div className="first">

                
            <img src={ds} alt="asd"></img> 

            <h2>Contact</h2>

            <email> ????<input type="email" placeholder="Hamza@server.com" /></email>
            <contact>????<input type="contact" placeholder="+92-432412" /></contact>
            <location>????<input type="location" placeholder="F-10 - Markaz Isb" /></location>
                <hr/>
            <h3>Skills <button onClick={skills}><h2 className="add-btn">+</h2></button> </h3>
            <div id="skills">
                
                </div>
           

            <h3>Languages <button onClick={languages} ><h2 className="add-btn">+</h2></button> </h3>
            <div id="languages">
                
                </div>
           

            <h3>Hobbies  <button onClick={Hobbies}><h2 className="add-btn">+</h2></button>   </h3>
            <div id="hobbies">
                </div>
            

            </div>

            <div className="second">
                <div className="bg">

                
                <div id="name1" contenteditable="true">Name</div>
                <div id="name" contenteditable="true">Operations Analyst</div>
{/* <h3><input type="text" onChange={ (e)=>{setInput(e.target.value)} } value={input}/></h3>
<h4><input type="text" onChange={ (e)=>{setTitle(e.target.value)} } value={title}/>
</h4> */}

</div>
<h3>Summary</h3>
<p> <div id="firstname" contenteditable="true"  >Example: <br/>Operations analyst with more than three years of experience in order processing, business management and computer services who worked closely with the business team and monitored the accuracy of business process ordering from implementation to execution.
</div>

</p>

<h3>Expierance <button onClick={para}> <h2 className="add-btn">+</h2> </button></h3>
<ul id="list" className="listDesign">
    
    </ul>

<h3>Education <button onClick={education}> <h2 className="add-btn">+</h2>  </button></h3>
<ul id="education" className="listDesign">

    </ul>
                </div>
   




           </div>
        </form>


        
        <div className="container pdf">
            <h5>Download Now</h5>
        <img src={pdf} width="100" onClick={handle}></img>
            </div>
        </>
    )
}


export default Theme1;