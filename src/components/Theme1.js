import React, { useState } from "react";
import html2pdf from 'html2pdf.js';
import App from '../App.css';
import ds from '../Photos/profile.png';
import CSS from '../ThemesCSS.css';

function Theme1() {

    const [input,setInput]=useState("Enter Your Name");
    const [title,setTitle]=useState("Job Title?");
    const [summary,setSummary]=useState("Enter Details");


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
<h1>Form</h1>
        <form id={'element-to-print'}>
            <div className="container theme1">

        <div className="first">
            <img src={ds} alt="asd"></img>
            <h2>Contact</h2>

            <email> 📧info@awe.com</email>
            <contact>📞03421394</contact>
            <location>📍ISB,PK</location>
                <hr/>
            <h2>Skills</h2>

            <h5>Purcashing</h5>
            <h5>Order Managment</h5>

            <h2>Languages</h2>
            <h5>Urdu</h5>
            <h5>English</h5>

            <h2>Hobbies</h2>
            <h5>Cylcing</h5>
            <h5>Traacking</h5>

            </div>

            <div className="second">
                <div className="bg">
<h3><input type="text" onChange={ (e)=>{setInput(e.target.value)} } value={input}/></h3>
<h4><input type="text" onChange={ (e)=>{setTitle(e.target.value)} } value={title}/>
</h4>

</div>
<h3>Summary</h3>
<p><input type="text" onChange={ (e)=>{setSummary(e.target.value)} } value={summary}/>
</p>

<h3>Expierance</h3>
<h4>ASSOSIACTE , Purcashing</h4>

<p>Deatils are here toksd lfk;ldsakf;lkds;lfksad ;lfkaslfklsakf;lksf;lksa ;f32k432k4k324l;324k32lk432;lk4l;32k4;l32k4;lk32;l4 k32;l4k;lk;lk23 ;l4k2;lk;l23k ;l4k324k32;l4 k2;lk2;lk4 ;l2kk 4;l k2;l4 k;lk;k ;l23 k4;l2k4;lk324;lk32;l4k32 ;l4k;l32</p>
<h3>Education</h3>

                </div>
   




           </div>
        </form>
        <button onClick={handle}>Save PDF</button>
        
        </>
    )
}


export default Theme1;