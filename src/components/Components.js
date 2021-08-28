import React from 'react';
import Card from 'react-bootstrap/Card';

function Components(props) {
function done()
{
   
   alert("Age : "+ props.age)

}
    return(


        <div  className="d-inline-block card text-dark bg-dark mb-3 my-5 mx-5" style={{width: '18rem'}}>



<div className=" d-inline-block row row-cols-1 row-cols-md-1 g-4">
  <div className="col">
    <div className="card">
      <img src={props.image} width="20" height="250" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.fname + " " + props.lname}</h5>
        <p className="card-text">Gender : {props.gender}</p>
        <p className="card-text">Email Address : {props.email}</p>
        <button type="button" className="btn btn-primary" onClick={done}>Show Age</button>
        
      </div>
    </div>
  </div>
    </div>
</div>

    );
}

export default Components;