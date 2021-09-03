import React from 'react';

export default function List() {
  return(
<div className="Container my-5 ">
<h3 style={{textAlign:'center'}}>List Of All Orders 🛒</h3>
<div className="" style={{width:'300px', height: '200px' , display: 'block', position: 'relative' , left: '30%' , textAlign: 'center'}}>
<ul className="list-group d-inline-flex p-2 d-flex " style={{width:'500px', height:'300px' , display: 'block'}}>
  <li className="list-group-item bg-dark text-white" aria-current="true">1 Large Pizza</li>
  <li className="list-group-item">2 Extra Large</li>
  <li className="list-group-item">1 Cheeze Pizza</li>
  <li className="list-group-item">2 Zinger Burgers</li>
  <li className="list-group-item">5 Cold Drinks</li>
</ul>
</div>
</div>


  )
}