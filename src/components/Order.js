import React from 'react';
import List from './List';


function Order(props)
{
    return(

<div className="container my-5">
    <div className="container" style={{width:'35em', height:'25em', border: '2px solid gray', borderRadius: '5px'}}>
  <div className="row row justify-content-md-center">
    <div className="col-9">

     <form className="my-5">
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Crust</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" />
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Flavor</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="inputPassword3" />
    </div>
  </div>

  <div className="row mb-3">
  <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Size</label>
    <div className="col-sm-10">
      <input type="number" className="form-control" id="inputPassword3" />
    </div>
    
  

  </div>
  <div class="d-grid gap-2 d-md-block my-5 " >
  <button class="btn btn-dark bg-dark" style={{margin: 'auto', display: 'block' }} type="button">Place Order</button>
</div>
</form>
</div></div></div>
  
</div>
    )
}

export default Order;