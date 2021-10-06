import React from "react";
import html2pdf from 'html2pdf.js';
import App from '../App.css';

function Theme1() {
function handle(e)
{
    
    e.preventDefault();
    var opt = {
        margin:       1,
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
            <div className="container">

    Enter UserName            <input type="text"></input>
    Enter Password            <input type="pasword"></input>
    Select Entusisams          <input type="range"></input>
    Gender                      <input type="checkbox" option="Malre" option="Female"></input>


           </div>
        </form>
        <button onClick={handle}>Save PDF</button>
        
        </>
    )
}


export default Theme1;